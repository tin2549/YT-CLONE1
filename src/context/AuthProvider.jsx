import { createContext, useState , useContext, useEffect } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext=createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}){
    const[loading,setLoading] = useState(false)
    const [data,setData]=useState([])
    const[value,setValue]=useState("New")

    useEffect(() =>{
        fetchAlldata(value)
    },[value])

    const fetchAlldata=(query)=>{
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setData(contents)
            setLoading(false)
        })
    }
    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>useContext(AuthContext)