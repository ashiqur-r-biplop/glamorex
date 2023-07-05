"use client"
import { useEffect } from "react"



const useSetToken = () => {
           useEffect(() => {
                fetch(`http://localhost:5000/jwt?email=goodboy@gmail.com`,
                {
                    method: "POST"
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("access-token", data.token)
                })

           },[])

        //     localStorage.removeItem("access-token")

            console.log("set token")
       
   
}

export default useSetToken