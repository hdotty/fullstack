 import React, { useState } from "react";
import BorrowControllerApi from "../../api/src/api/BorrowControllerApi";

const useDisplayBorrows = () => {
    const BorrowController = new BorrowControllerApi()
    
    const [runAll, setRunAll] = useState(true)
    const [all, setAll] = useState()

    const [runNotReturned, setRunNotReturned] = useState(true)
    const [notReturned, setNotReturned] = useState()

    const [runReturned, setRunReturned] = useState(true)
    const [returned, setReturned] = useState()

    const [editBorrowId, setEditBorrowId] = useState()    

    const findAll = () => {
        if(runAll){
            BorrowController.findAllUsingGET(function(error, data){
                if(error!==null){
                    console.log(error)
                }else{
                    setAll(data)
                }
            })
            setRunAll(false)
        }
    }

    const findNotReturned = () => {
        if(runNotReturned){
            BorrowController.findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET(function(error,data){
                if(error!==null){
                    console.log(error)
                }else{
                    setNotReturned(data)
                }
            })
            setRunNotReturned(false)
        }
    }

    const findReturned = () => {
        if(runReturned){
            BorrowController.findBorrowByStartTimeAndEndTimeIsNotNullUsingGET(
                function(error, data){
                    if(error!==null){
                        console.log(error)
                    }else{
                        setReturned(data)
                    }
                }
            )
            setRunReturned(false)
        }

    }

    const handleEdit = (e, id) => {
        e.preventDefault()
        setEditBorrowId(id)
        console.log(id)
    }

    const handleSave = (e, borrow) => {
        e.preventDefault()
        console.log(borrow.endTime)
        BorrowController.returnBookUsingPUT(borrow, function(error){
            if(error!==null){
                console.log(error)
            }else{
                setEditBorrowId(null)
            }
        })
    }

    return {findAll, all,
        findNotReturned, notReturned, 
        findReturned, returned, 
        handleEdit, editBorrowId,
        handleSave}
}

export default useDisplayBorrows