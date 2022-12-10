import { useState } from "react";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import PersonDto from "../../api/src/model/PersonDto";


const UsePerson = () => {
    const PersonController = new PersonControllerApi()
    const BorrowController = new BorrowControllerApi()
    const [isCanceled, setIsCanceled] = useState(false)
    const [person, setPerson] = useState(new PersonDto())
    const [edit, setEdit] = useState(false)
    const [saving, setSaving] = useState(true)
    const [runBorrow, setRunBorrow] = useState(true)
    const [borrows, setBorrows] = useState([])
    const [admin, setAdmin] = useState("a")

    const getPerson = (id) => {
        try{
            if(!isCanceled){
                PersonController.getPersonUsingGET(id, function(error, data){
                    if(error !== null){
                        setIsCanceled(true)
                        throw Error(error)
                        
                    }else{
                        setPerson(data)
                        setIsCanceled(true)
                    }
                })
            }

        }catch(err){
            console.log(err)
            setIsCanceled(true)
        }

        setIsCanceled(true)


    }    

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(true)
        setSaving(true)
    }

    const handleSave = (e, id, person, firstName, lastName, email) => {
        e.preventDefault()
        if(saving){
            var update = {"firstName": firstName, "lastName": lastName, "email": email}
            PersonController.updatePersonUsingPUT(person, update, function(error){
                if(error!==null){
                    console.log(error)
                    setSaving(false)
                    setIsCanceled(false)
                }else{
                    setEdit(false)
                    setSaving(false)
                    setIsCanceled(false)
                    getPerson(id)
                    
                }
            })
        }
    }

    const handleAdmin = (e, person) => {
        e.preventDefault()
        var a = true
        PersonController.setAsAdminUsingPOST(person, a, function(error) {
            if(error !== null) {
                console.log(error)
            }else{
             console.log(person)   
            }
        })
        console.log(person)
        
    }

    const getBorrows = (id) => {
        if(runBorrow){
            BorrowController.findBorrowByPersonIdUsingGET(id, function(error, data){
                if(error===null){
                    console.log("sikerult")
                    setBorrows(data)
                    setRunBorrow(false)
                }else{
                    console.log(error)
                    setRunBorrow(false)
                }
            })
        }
    }

    return {getPerson, person, handleEdit, edit, handleSave, getBorrows, borrows, handleAdmin, admin}
}

export default UsePerson