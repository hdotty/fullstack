import {  Fragment, useState } from "react";
import { Button } from 'primereact/button';
import UsePerson from "./usePerson";
import { InputText } from "primereact/inputtext";
import convertDate from "../../convertDate";


const PersonPage = (props) => {
    const id = props.currentId
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [changePsw, setChangePsw] = useState(false)
    const [bool, setBool] = useState(true)

    const {person, getPerson, handleEdit, edit, handleSave, getBorrows, borrows, handleAdmin} = UsePerson()
    const {convertDatee} = convertDate()

    const displayPerson = (id) => {
        if(bool){
            getPerson(id)
            setBool(false)
        }
        
    }

    displayPerson(id, true)
    //getBorrows(id)


    return (
        
        <div>

            
            <div className="text-center mb-5">
            
                <div>
                <div className="text-900 text-3xl font-medium mb-3">Personal Data</div>
                <div className="text-600 font-medium line-height-3">You can change your personal data if you want.</div>
                <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">

                
                    {edit ? 
                        <div><Button type="button" className="w-full" label="Save" 
                                onClick={(e)=>{
                                    handleSave(e, id, person, firstName,lastName,email)
                                    displayPerson(id, true)
                                }}/><br/></div> :

                        <div><Button className="w-full" label="Edit" type="button" 
                                onClick={(e)=>{
                                    handleEdit(e, person, firstName, lastName, email)
                                    
                                }}
                            /><br/><br/></div>
                    }
                    
                </div>
                
                <ul className="list-none p-0 m-0">
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                        {edit ? 
                            <InputText onChange={(e)=>setLastName(e.target.value)} id="firstName" value={lastName} type="text" placeholder={person.lastName}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.lastName}</div>}
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                        {edit ? 
                            <InputText onChange={(e)=>setFirstName(e.target.value)} id="firstName" value={firstName} type="text" placeholder={person.firstName}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.firstName}</div>}
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                        {edit ? 
                            <InputText onChange={(e)=>setEmail(e.target.value)} id="firstName" value={email} type="text" placeholder={person.email}/> :
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{person.email}</div>}
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Admin</div>

                            {person.admin ? 
                            <div className="text-500 w-6 md:w-2 font-medium">Yes</div> :
                            <div className="text-500 w-6 md:w-2 font-medium">No</div>
                            }

                        <div className="text-500 w-6 md:w-2 font-medium">{}</div>
                        <Button type="button" className="p-button-text" label="Set as Admin" onClick={(e)=>handleAdmin(e, person)} />
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Books</div>
                    </li>

                    </ul></div>
                    <div className="">
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
                </div>
        </div>
    )
}

export default PersonPage;