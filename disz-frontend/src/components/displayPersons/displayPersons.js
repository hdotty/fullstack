import {React, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import useDisplayPersons from "./useDisplayPersons"
import { Button } from "primereact/button";
import { useState } from "react";
import PersonPage from "../personPage/personPage";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";


const DisplayPerson = () => {
    const {displayPerson, persons, handleView, currentId, view, handleDelete} = useDisplayPersons()
    const {getLoggedInUser, user} = useGetLoggedInUser()

    getLoggedInUser()
    displayPerson()

    return (
        <div>
            <Header user={user} />
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
            {view ? 
            <PersonPage currentId={currentId} /> :
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person, id)=>(
                        <Fragment key={id}>
                            <tr>
                                <td>{person.lastName}</td>
                                <td>{person.firstName}</td>
                                <td>{person.email}</td>
                                <td> 
                                    <Button
                                        type="button" 
                                        label="View"
                                        onClick={(e)=>{
                                        handleView(e, person.personId);
                                        }}
                                    />
                                </td>
                                <td>
                                    <Button
                                        type="button" 
                                        label="Delete"
                                        onClick={(e)=>{
                                        handleDelete(e, person)
                                        }}

                                    />
                                </td>

                            </tr>
                            
                        </Fragment>
                    ))}

                </tbody>
                </table>
            }
            
        </div>
        </div>
        </div>
    )
}
export default DisplayPerson