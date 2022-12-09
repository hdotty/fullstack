import { useState, useEffect } from "react"
import PersonControllerApi from "../../api/src/api/PersonControllerApi.js"
import PersonDto from "../../api/src/model/PersonDto.js"

const UseSignUp = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [registered, setRegistered] = useState(false)

    const PersonController = new PersonControllerApi()

    const addUser = (firstName, lastName, email, psw, psw2) => {
        var person = new PersonDto()
        person.firstName = firstName
        person.lastName = lastName
        person.email = email
        setIsPending(true)

        try{
            if (psw === psw2){
                person.password = psw
                PersonController.addPersonUsingPOST(person, function(err) {
                    if (err !== null) {
                        setIsPending(false);
                        setError("Something went wrong! \nMaybe your email adress has been already registrated.")
                        throw new Error (error)
                        
                    } else {
                        setRegistered(true)
                        setIsPending(false);
                        setIsCanceled(true);
                        setError("")
                    }
                })
            }else{
                setRegistered(false)
                throw new Error ("Passwords dont't match!")
            }

        }catch(err){
            setError(err.message)
            setIsPending(false)
            console.log(error)
            
        }
    }

    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return {error, isPending, addUser, registered}
}

export {UseSignUp}


