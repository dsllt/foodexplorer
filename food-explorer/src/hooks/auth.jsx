import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [ data, setData ] = useState({});
  const [ mealsData, setMealsData ] = useState({});
  

  async function signIn({ email, password }) {
      try { 
        const response = await api.post("/sessions", { email, password })
        const { user, token } = response.data;

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodexplorer:token", token)
      
        api.defaults.headers.common['Authorization']  = `Bearer ${token}`
        setData({ user, token });

      } catch (error) {
        if(error.message){
          alert(error.response.data.message)
        } else{
          alert('Não foi possível realizar o signIn')
        }
      }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({});
  }

  async function updateMeal({ meal }){
    
    if (!mealName || !image || !ingredients || !price || !description || !category){
      return alert("Preencha todos os campos");
    }
  
    api.put('/meals', { id: mealId, name: mealName, description, category, price, image, ingredients })
    .then(() => {
        alert("Prato atualizado com sucesso!");
      } 
    )
    .catch(error => {
      console.log(error);
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert('Não foi possível cadastrar o prato.')
      }
    })
    
    const mealsResponse = await api.get("/meals")
    const ingredientsResponse = await api.get("/ingredients")
    
    localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
    localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));
  }

  async function loadMeals(){
    try {
      const mealsResponse = await api.get("/meals")
      const ingredientsResponse = await api.get("/ingredients")
      
      localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
      localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));

      const mealsData = localStorage.getItem("@foodexplorer:meals");

      setMealsData({
        meals: JSON.parse(mealsData),
        ingredients: JSON.parse(localStorage.getItem("@foodexplorer:ingredients"))
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function updateMealsOnLocalStorage(){
    const mealsResponse = await api.get("/meals")
    const ingredientsResponse = await api.get("/ingredients")
    
    localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
    localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));

    
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    const meals = localStorage.getItem("@foodexplorer:meals");
    
    setData({ 
      user: JSON.parse(user),
      token,
      meals: JSON.parse(meals)
    })

  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    const meals = localStorage.getItem("@foodexplorer:meals");
    const ingredients = localStorage.getItem("@foodexplorer:ingredients");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ 
        user: JSON.parse(user),
        token,
        meals: JSON.parse(meals),
        ingredients: JSON.parse(ingredients)
      })
    }

  }, [])

  return(
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateMeal, loadMeals, meals: mealsData.meals ?? data.meals, ingredients: mealsData.ingredients ?? data.ingredients }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth } ;
