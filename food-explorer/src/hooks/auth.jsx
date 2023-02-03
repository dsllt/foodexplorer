import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [ data, setData ] = useState({});
  const [ meal, setMeal ] = useState({});

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
    try {
      const response = await api.post("/meals", meal)
      const { user, token } = response.data;
      await api.get('/meals', meal)
    } catch (error) {
      if (error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualziar o prato')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ 
        user: JSON.parse(user),
        token
      })
    }

  }, [])

  return(
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateMeal }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth } ;
