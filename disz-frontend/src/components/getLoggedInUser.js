import React from "react";
import { useState } from "react";
import PersonControllerApi from "../api/src/api/PersonControllerApi";


const useGetLoggedInUser = () => {

    const [user, setUser] = useState()
    const [run, setRun] = useState(true)
    const PersonController = new PersonControllerApi()

    const getLoggedInUser = () => {
        if(run){
            PersonController.getLoggedInPersonUsingGET(function(error,data){
                if(error!==null){
                    console.log(error)
                    setRun(false)
                }else{
                    setUser(data)
                    setRun(false)
                }
            })
        }
    }
    return {getLoggedInUser, user}
}

export default useGetLoggedInUser