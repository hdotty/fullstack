import React, { useState } from "react";
import PersonControllerApi from "../../api/src/api/PersonControllerApi";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";
import BookControllerApi from "../../api/src/api/BookControllerApi";
import BorrowDto from "../../api/src/model/BorrowDto";


const useAddBorrow = () => {
    const PersonController = new PersonControllerApi();
    const BorrowController = new BorrowControllerApi()
    const BookController = new BookControllerApi()

    const [persons, setPersons] = useState()
    
    const [run1, setRun1] = useState(true)
    const [run2, setRun2] = useState(true)
    const [run3, setRun3] = useState(true)
    const [run4, setRun4] = useState(true)
    const [book, setBook] = useState()
    const [error, setError] = useState(null)

    const [success, setSuccess] = useState(false)

    const getAllPersons = () => {
        if(run1){
            PersonController.getPersonsUsingGET(function(error, data){
                if(error!==null){
                    console.log(error)
                }else{
                    setPersons(data)
                }
                setRun1(false)
            })   
        }
    }


    const getBook = (id) => {
        if(run2){
            BookController.getBookUsingGET(id, function(error, data){
                if(error !== null){
                    console.log(error)
                }else{
                    setBook(data)
                }
                setRun2(false)
            })
        }
    }

    

    const handleSubmit = (e, person, book, date) => {
        e.preventDefault()
        if(run3){
            const borrow = new BorrowDto()
            borrow.person = person
            borrow.book = book
            borrow.startTime = date
            
            try{
                BorrowController.addBorrowUsingPOST(borrow, function(error){
                    if(error!==null){
                        setSuccess(false)
                        throw Error(error)
                    }else{
                        setRun3(false)
                        setSuccess(true)
                    }
                })
            }catch(err){
                setError(err)
                setRun3(false)
            }
        }
    }

    const findAll = () => {
        if(run4){
            BorrowController.findAllUsingGET(function(error, data, response){
                console.log("response: ", response)
                if(error!==null){
                    console.log(error)
                }else{
                    console.log(data)
                }
                setRun4(false)
            })
        }
    }

    return{getAllPersons, persons, handleSubmit, findAll, success}
}

export default useAddBorrow