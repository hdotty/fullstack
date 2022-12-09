import { useState } from "react";
import LoginControllerApi from "../../api/src/api/LoginControllerApi";
import AuthenticationDto from "../../api/src/model/AuthenticationDto";
import useGetLoggedInUser from "../getLoggedInUser";

const useLogin = () => {
    const LoginController = new LoginControllerApi()

    const {getLoggedInUser, user} = useGetLoggedInUser()
    const [error, setError] = useState()

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        const login = new AuthenticationDto()
        login.email = email
        login.password = password
        LoginController.loginUsingPOST(login, function(e){
            if(e !== null){
                setError("Your authentication was unsuccessful.\
                \n Please check your email address, password, or your network connection.")
            }else{
                getLoggedInUser()
            }
        })
    }
    return {handleSubmit, user, error}
}

export default useLogin