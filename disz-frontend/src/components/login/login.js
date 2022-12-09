import React from "react";
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import { useState } from "react"
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";

const Login = () => {

    const {handleSubmit, user, error} = useLogin()
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')

    return(
    <div>
        <Header user={user} /><br/>
        <form className="flex align-items-center justify-content-center" onSubmit={(e)=>{handleSubmit(e,email,psw);}}>
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/disz_logo.jpg" alt="hyper" height={300}  />
                    {!user ?
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back!</div> :
                    <div className="text-900 text-3xl font-medium mb-3">Welcome {user.firstName}!</div>}
                    {!user && <span className="text-600 font-medium line-height-3">Don't have an account?</span>}
                    {!user && <div className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"><Link to='/components/signup/signup'>Create today!</Link></div>}

                </div> 

                {user && 
                <div>
                    <Link className='nav-link' to="/components/books">
                        <Button 
                        icon="pi pi-user" 
                        className="w-full" 
                        label='Books'/>
                    </Link>  <br/>
                    <Link className='nav-link' to="/">
                        <Button 
                        icon="pi pi-user" 
                        className="w-full" 
                        label='Home'/>
                    </Link>  <br/>
                </div>}

                {!user && <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" className="w-full mb-3" 
                        onChange={(e)=>setEmail(e.target.value)} value={email}/>

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" type="password" className="w-full mb-3" 
                        onChange={(e)=>setPsw(e.target.value)} value={psw}/>

                    <Button label="Sign In" icon="pi pi-user" className="w-full" type="submit" />
                </div>}
    
                {error && <div className="text-600 font-medium line-height-3">{error}</div>}

            </div>
        </form>
        </div>
    )
}

export default Login