import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import useGetLoggedInUser from "./getLoggedInUser"
import { Button } from "primereact/button"
import useLogOut from "./useLogOut"


const Header = (props) => {

    const user = props.user
    const {handleLogOut} = useLogOut()
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">

                <li>space</li>
                <li> 
                <Button label="DISz - Library"  />
                </li>
                <li>space</li>
                
                <li className="nav-item"> 
                <Link to='/' className="nav-link"> Home </Link>
                </li>

                <li className="nav-item"> 
                <Link to='/components/books' className="nav-link"> Books </Link>
                </li>


                {!user && 
                <li className="nav-item"> 
                <Link to='/components/signup/signup' className="nav-link" > Sign Up </Link> 
                </li>}

                {!user && 
                <li className="nav-item"> 
                <Link to='/components/login/login' className="nav-link"> Log In </Link>
                </li>}
                

                {user && 
                <li className="nav-item">
                    <Link to='/components/personPage/myPage' className='nav-link'>My Page</Link> 
                </li>}
                

                {(user !== undefined && user.admin) && 
                <li className="nav-item"> 
                <Link to='/components/addBook/addBook' className="nav-link"> Add Book </Link> 
                </li>}

                {(user !== undefined && user.admin) && 
                <li className="nav-item"> 
                <Link to='/components/displayPersons/displayPersons' className="nav-link"> Users </Link> 
                </li>}

                <li className="nav-item"> 
                <Link to='/components/contact' className="nav-link"> Contact </Link>
                </li>

                {(user !== undefined && user.admin) && 
                <li className="nav-item"> 
                <Link to='/components/displayBorrows/displayBorrows' className="nav-link"> Borrows </Link> 
                </li>}
                <li>space</li>
                {user && <li>
                    <Button
                    label="Sign Out"
                    onClick={(e)=>{handleLogOut(e);navigate('/', {replace: true}); window.location.reload();}}
                    />
                </li>}
                 
            </ul>
        </nav>
    )
}

export default Header
