import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [ data, setData ] = useState({});
  const [ meals, setMeals ] = useState([]);
  const [ ingredients, setIngredients ] = useState([]);

  async function signIn({ email, password }) {
      try { 
        // Get user data
        const response = await api.post("/sessions", { email, password })
        const { user, token } = response.data;
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodexplorer:token", token)
        api.defaults.headers.common['Authorization']  = `Bearer ${token}`

        setData({ 
          user,
          token
        })

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

  async function fetchMeals(){
    try {
      // Fetch meals
      const mealsResponse = await api.get("/meals")
      const ingredientsResponse = await api.get("/ingredients")
      localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
      localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));
      // Save meals in the localStorage and update the state
      const mealsData = localStorage.getItem("@foodexplorer:meals");
      const ingredientsData = localStorage.getItem("@foodexplorer:ingredients");
      setMeals(JSON.parse(mealsData))
      setIngredients(JSON.parse(ingredientsData))
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    const mealsData = localStorage.getItem("@foodexplorer:meals");
    const ingredientsData = localStorage.getItem("@foodexplorer:ingredients");

    setMeals(JSON.parse(mealsData))
    setIngredients(JSON.parse(ingredientsData))
    
    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ 
        user: JSON.parse(user),
        token
      })
    }
  }, [])
  
  return(
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, fetchMeals, meals, ingredients }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth } ;
