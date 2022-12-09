import React, { useState } from "react";
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import useChangePsw from "./useChangePsw"
import { Link } from "react-router-dom";

function ChangePsw(props){

    const person = props.person
    const [oldPsw, setOldPsw] = useState('')
    const [newPsw1, setNewPsw1] = useState('')
    const [newPsw2, setNewPsw2] = useState('')

    const {handleSubmit, success} = useChangePsw()

    return (
        

        <div >
        <div >
            <label htmlFor="oldPsw" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="oldPsw" type="password" className="w-full mb-3" value={oldPsw} onChange={(e)=>setOldPsw(e.target.value)} />

            <label htmlFor="newPsw1" className="block text-900 font-medium mb-2">New Password</label>
            <InputText id="newPsw1" type="password" className="w-full mb-3" value={newPsw1} onChange={(e)=>setNewPsw1(e.target.value)} />

            <label htmlFor="newPsw2" className="block text-900 font-medium mb-2">New Password Again</label>
            <InputText id="newPsw2" type="password" className="w-full mb-3" value={newPsw2} onChange={(e)=>setNewPsw2(e.target.value)} />

            {success && <div className="text-600 font-medium line-height-3">{success}</div>}

            <Button label="Submit" icon="pi pi-user" className="w-full" onClick={(e)=>handleSubmit(e,person,oldPsw,newPsw1,newPsw2)} />
            
        </div>
        </div>

    )
}

export default ChangePsw
