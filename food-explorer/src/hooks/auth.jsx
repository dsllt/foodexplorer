import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [ userData, setUserData ] = useState({});
  const [ mealsData, setMealData ] = useState({});

  async function signIn({ email, password }) {
      try { 
        const response = await api.post("/sessions", { email, password })
        const { user, token } = response.data;

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodexplorer:token", token)
      
        api.defaults.headers.common['Authorization']  = `Bearer ${token}`
        setUserData({ user, token });

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


  async function loadMeals(){
    try {
      const mealsResponse = await api.get("/meals")
      const ingredientsResponse = await api.get("/ingredients")
      
      localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
      localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));
      
      const meals = localStorage.getItem("@foodexplorer:meals");
      setMealData({ 
        meals: JSON.parse(meals)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    const meals = localStorage.getItem("@foodexplorer:meals");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUserData({ 
        meals: JSON.parse(meals)
      })
      setMealData({ 
        meals: JSON.parse(meals)
      })
    }

  }, [])

  return(
    <AuthContext.Provider value={{ signIn, user: userData.user, signOut, loadMeals, meals: mealsData.meals }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth } ;
