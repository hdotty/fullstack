import React, { useState } from "react";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";

const useDisplayPersons = () => {
    const PersonController = new PersonControllerApi()
    const BorrowController = new BorrowControllerApi()
    const [persons, setPersons] = useState([])
    const [isRunning, setRunning] = useState(true)
    const [currentId, setCurrentId] = useState(125)
    const [view, setView] = useState(false)    


    const displayPerson = () => {
        if(isRunning){
            PersonController.getPersonsUsingGET(function(error, data){
                if(error===null){
                    setPersons(data)
                }else{
                    console.log(error)
                }
                setRunning(false)
            })
        }
    }

    const handleView = (e,id) => {
        e.preventDefault()
        setCurrentId(id)
        setView(true)
        
    }

    const handleDelete = (e, person) => {
        e.preventDefault()
        if(person.borrow !== null){
            BorrowController.deleteAllByPersonUsingDELETE(person.personId, function(error){
                if(error!==null){
                    console.log(error)
                }else{
                    PersonController.deletePersonUsingDELETE(person.personId , function(error){
                        if(error===null){
                            setRunning(true)
                            displayPerson()
                        }else{
                            console.log(error)
                        }
                    })
                }
            })
        }else{
            PersonController.deletePersonUsingDELETE(person.personId , function(error){
                if(error===null){
                    setRunning(true)
                    displayPerson()
                }else{
                    console.log(error)
                }
            })
        }
                
    }
    return {displayPerson, persons, handleView, currentId, view, handleDelete}
}
export default useDisplayPersons