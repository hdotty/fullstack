import { useNavigate } from "react-router-dom"
import LoginControllerApi from "../api/src/api/LoginControllerApi"
import useGetLoggedInUser from "./getLoggedInUser"

const useLogOut = () => {
    const LoginController = new LoginControllerApi()
    const {getLoggedInUser, user} = useGetLoggedInUser()
    const navigate = useNavigate()
    const handleLogOut = (e) => {
        e.preventDefault()
        LoginController.logoutUsingPOST(function(error){
            if(error!==null){
                console.log(error)
                console.log("valami")
            } else {
                getLoggedInUser()
                console.log("itt vagyunk")
                navigate('/', {replace: true})
            }
        })

    }
    return {handleLogOut, user}
}
export default useLogOut