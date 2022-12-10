import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import LoginControllerApi from '../api/src/api/LoginControllerApi'
import useGetLoggedInUser from './getLoggedInUser'
import Header from './header'

function Contact(){

    const {getLoggedInUser, user} = useGetLoggedInUser()
    getLoggedInUser()

    return(
        <div>
            <Header user={user} /><br/> 
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/disz_logo.jpg" alt="hyper" height={300} className="mb-3" />
                </div>

            <div>
                <ul className="list-none p-0 m-0">
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Phone</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">+381 62 9784525</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">diszdor@gmail.com</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Facebook</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">https://www.facebook.com/doroszloiifjusagiszervezet</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Phone</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Doroslovo <br></br> Serbia <br></br> 25243 </div>
                    </li>
                </ul>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact