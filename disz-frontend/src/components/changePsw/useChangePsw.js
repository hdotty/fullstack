
import { useState } from "react"
import PersonControllerApi from "../../api/src/api/PersonControllerApi"

const useChangePsw = () => {

    const PersonController = new PersonControllerApi()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState()

    const handleSubmit = (e, person, oldPsw, newPsw1, newPsw2) => {
        e.preventDefault()
        try{
            if(newPsw1 !== newPsw2){
                throw Error("New passwords not match")
            }else{

                PersonController.pswChangeUsingPUT(newPsw1, oldPsw, person, function(error){
                    if(error===null){
                        setSuccess("Your password has changed.")
                    }else{
                        throw Error(error)
                    }
                })

            }
        }catch(err){
            setError(err)
            console.log(error)
        }        
    }
    return {handleSubmit, error, success}
}
export default useChangePsw


