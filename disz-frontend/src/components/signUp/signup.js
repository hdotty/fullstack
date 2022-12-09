import React from "react";
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import { Link } from "react-router-dom";
import { UseSignUp } from "./useSignUp";
import { useState } from "react";
import Header from "../header";


function Singup(){

    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState('')  
    const [email, setEmail] = useState('')  
    const [password1, setPassword1] = useState('')  
    const [password2, setPassword2] = useState('')  
    const {error, isPending, addUser, registered} = UseSignUp()

    const handleSubmit = (e) => {
        addUser(firstName, lastName, email, password1, password2)
        e.preventDefault()
        clear()
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        clear()
    }

    const clear = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword1('')
        setPassword2('')
    }

    return(
    <div>
        <Header /><br/>
        <div className="flex align-items-center justify-content-center">
            <form onSubmit={(e=>handleSubmit(e))} className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/disz_logo.jpg" alt="hyper" height={300} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
                    <span className="text-600 font-medium line-height-3">Do you already have an account?</span>
                    <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"><Link to='/components/login/login'>  Log In! </Link> </div>
                </div>

                {!registered && <div>
                    <label htmlFor="firsName" className="block text-900 font-medium mb-2">First Name</label>
                    <InputText onChange={(e)=>setFirstName(e.target.value)} id="firsName" value={firstName} type="text" className="w-full mb-3" />

                    <label htmlFor="lastName" className="block text-900 font-medium mb-2">Last Name</label>
                    <InputText onChange={(e)=>setLastName(e.target.value)} id="lastName" value={lastName} type="text" className="w-full mb-3" />

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText onChange={(e)=>setEmail(e.target.value)} id="email" value={email} type="email" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText onChange={(e)=>setPassword1(e.target.value)} id="password" value={password1} type="password" className="w-full mb-3" />

                    <label htmlFor="password2" className="block text-900 font-medium mb-2">Password Again </label>
                    <InputText onChange={(e)=>setPassword2(e.target.value)} id="password2" value={password2} type="password" className="w-full mb-3" />
                
                    {error!==null && <p>{error}</p>}
                    {registered && <p>Your registration was successful!</p>}
                
                    {!isPending && <Button type="submit" label="Sign Up" icon="pi pi-user" className="w-full" />}
                    {isPending && <Button label="loading..." icon="pi pi-user" className="w-full" />}
                    <br></br> <br></br>
                    <Button onClick={(e)=>handleOnClick(e)} icon="pi pi-user" className="w-full"> Clear </Button>
                    <br></br> <br></br>
                    <Button icon="pi pi-user" className="w-full"> <Link className='nav-link' to="/"> Back to Home </Link> </Button>
                </div>}
                    
                {registered && <div>
                    <Link className='nav-link' to="/components/login/login"><Button icon="pi pi-user" className="w-full" label="Log In" /> </Link> <br/>
                    <Link className='nav-link' to="/"> <Button icon="pi pi-user" className="w-full" label="Back to Home" /> </Link>
                </div>}
            </form>
        </div>
        </div>
    
    )
}

export default Singup