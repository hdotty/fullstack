import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import LoginControllerApi from '../api/src/api/LoginControllerApi'
import useGetLoggedInUser from './getLoggedInUser'
import Header from './header'

function Home(){

    const {getLoggedInUser, user} = useGetLoggedInUser()
    getLoggedInUser()

    const LoginController = new LoginControllerApi()
    const handleLogOut = (e) => {
        e.preventDefault()
        LoginController.logoutUsingPOST(function(error){
            if(error!==null){
                console.log(error)
            }
        })
        
        window.location.reload()
    }

    return(
        <div>
            <Header user={user} /><br/> 
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/disz_logo.jpg" alt="hyper" height={300} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
                </div>

                <div>
                    <Link className='nav-link' to="/components/books">
                        <Button 
                        icon="pi pi-user" 
                        className="w-full" 
                        label='Books'/>
                    </Link>  <br/>
                    
                    {!user && <div><Link className='nav-link' to="/components/login/login">
                        <Button 
                        icon="pi pi-user" 
                        className="w-full" 
                        label='Log In'/>
                    </Link> <br/></div>}

                    {!user && <div><Link className='nav-link' to="/components/signup/signup">
                        <Button 
                        icon="pi pi-user" 
                        className="w-full" 
                        label='Sign Up'/>
                        </Link><br/></div>}
                    
                    {user && <Link className='nav-link' to="/">
                        <Button 
                        icon="pi pi-user"
                        className="w-full" 
                        label='Log Out'
                        onClick={(e)=>handleLogOut(e)}/>
                    </Link>}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home