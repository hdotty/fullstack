import React, { useState } from "react";
import {Button} from "primereact/button";
import useDisplayBorrows from "./useDisplayBorrows";
import { Fragment } from "react";
import convertDate from "../../convertDate";
import { Calendar } from "primereact/calendar";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";

const DisplayBorrows = () => {

    const {findAll, all, 
        findNotReturned, notReturned,
        findReturned, returned,
        handleEdit, editBorrowId, 
        handleSave} = useDisplayBorrows()


    const {convertDatee} = convertDate()
    const [display, setDisplay] = useState(false)
    const [borrows, setBorrows] = useState(all)

    const {getLoggedInUser, user} =useGetLoggedInUser()
    getLoggedInUser()

    findAll()
    findNotReturned()
    findReturned()

return (
    <div>
        <Header user={user} />
    <div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">


        <table className="flex align-items-center justify-content-center">
            <tbody>
            <tr>
                <td>
                    <Button label="All" type="button" 
                        onClick={(e)=>{
                            setBorrows(all)
                            setDisplay(true)
                        }} />
                </td>
                <td>
                    <Button label="Not Returned" type="button"
                        onClick={(e)=>{
                            setBorrows(notReturned)
                            setDisplay(true)
                        }}/>
                </td>
                <td><Button label="Returned" type="button" 
                        onClick={(e)=>{
                            setBorrows(returned)
                            setDisplay(true)
                        }}/>
                </td>
            </tr>
            </tbody>
        </table><br/>

        <div className="flex align-items-center justify-content-center">
        <table className="table" >
            <thead>
                {display && (
                <tr>
                    <th>User</th>
                    <th>Book</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Edit</th>
                </tr>)}
                
            </thead>
            <tbody> 
                {borrows?.map((borrow, index) =>(
                <Fragment key={index}>
                    {editBorrowId === borrow.id ?
                    (<tr>
                        <td>{borrow.person.email}</td>
                        <td>{borrow.book.title}</td>
                        <td><Calendar value={borrow.startTime} onChange={(e) => borrow.startTime = e.value}></Calendar></td>
                        <td><Calendar value={borrow.endTime} onChange={(e) => borrow.endTime = e.value}></Calendar></td>
                        <td><Button type="button" label="Save" onClick={(e)=>handleSave(e, borrow)} /></td>
                    </tr>) :
                    (<tr>
                        {}
                        <td>{borrow.person.email}</td>
                        <td>{borrow.book.title}</td>
                        <td>{borrow.startTime && convertDatee(borrow.startTime)}</td>
                        <td>{borrow.endTime && convertDatee(borrow.endTime)}</td>
                        <td><Button type="button" label="Edit" onClick={(e)=>handleEdit(e, borrow.id)}/></td>
                    </tr>)
                }
                </Fragment>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    </div>
    </div>
)


}
export default DisplayBorrows


