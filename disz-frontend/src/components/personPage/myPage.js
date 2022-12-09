import React from "react";
import { useState } from "react";
import ChangePsw from "../changePsw/changePsw";
import UsePerson from "./usePerson";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";
import convertDate from "../../convertDate";
import { Fragment } from "react";

const MyPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [changePsw, setChangePsw] = useState(false)

    const {getLoggedInUser, user} = useGetLoggedInUser()
    const {handleEdit, edit, handleSave, getBorrows, borrows} = UsePerson()
    const {convertDatee} = convertDate()

    var bool = true
    
    const displayPage = (bool) => {
        if(bool){
            getLoggedInUser()
            console.log(user)
            bool = false
        }
    } 
    displayPage(true)
    user && getBorrows(user.personId)
    
    return(
    <div>
        <Header user={user} />
    {user===undefined && <h3>Something went wrong!</h3>}

    { (user!==undefined) && 
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">

        {changePsw ?
            <ChangePsw user={user}/> :
            <div className="text-center mb-5">
        
            <div>
            <div className="text-900 text-3xl font-medium mb-3">Personal Data</div>
            <div className="text-600 font-medium line-height-3">You can change your personalal data if you want.</div>
            <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">

            
                {edit ? 
                    <div><Button type="button" className="w-full" label="Save" 
                            onClick={(e)=>{
                                handleSave(e, user.id, user, firstName,lastName,email);
                                getLoggedInUser()
                            }}/><br/>
                    </div> :

                    <div><Button className="w-full" label="Edit" type="button" 
                            onClick={(e)=>{
                                handleEdit(e, user, firstName, lastName, email)
                                
                            }}
                        /><br/><br/>
                    </div>
                }
                
            </div>
            
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                    {edit ? 
                        <InputText onChange={(e)=>setLastName(e.target.value)} id="firstName" value={lastName} type="text" placeholder={user.lastName}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.lastName}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                    {edit ? 
                        <InputText onChange={(e)=>setFirstName(e.target.value)} id="firstName" value={firstName} type="text" placeholder={user.firstName}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.firstName}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    {edit ? 
                        <InputText onChange={(e)=>setEmail(e.target.value)} id="firstName" value={email} type="text" placeholder={user.email}/> :
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{user.email}</div>}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Password</div>
                    <Button type="button" className="p-button-text" label="Change password" onClick={(e)=>setChangePsw(true)} />
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Your Books</div>
                </li>
            </ul>
            </div>
            <table className="table lg:w-12 flex align-items-center justify-content-center w-full">
                            
                <tbody>
                    {borrows.length!==0 && 
                        <tr>
                            <th>Title </th>
                            <th>Author </th>
                            <th>Start Date</th>
                            <th>End Time </th>
                        </tr>
                    }
                    {borrows.map((borrow, index) => (
                        <Fragment key={index}>
                            <tr>
                                <td>{borrow.book.title}</td>
                                <td>{borrow.book.author}</td>
                                <td>{convertDatee(borrow.startTime)}</td>
                                <td>{borrow.endTime && convertDatee(borrow.endTime)}</td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>

            </div>
        }
        </div>
        </div>}
        </div>
        
    )
}
export default MyPage