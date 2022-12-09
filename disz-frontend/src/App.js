//import "primereact/resources/themes/tailwind-light/theme.css"
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "primereact/resources/themes/saga-orange/theme.css"
import "primeflex/primeflex.css"
import "swagger-ui-react/swagger-ui.css"
import './App.css'
import Login from './components/login/login'
import Signup from "./components/signUp/signup";
import PersonPage from "./components/personPage/personPage";
import Header from "./components/header"
import Home from "./components/home"
import ChangePsw from "./components/changePsw/changePsw"
import AddBook from "./components/addBook/addBook"
import BookPage from "./components/bookPage/bookPage"
import DisplayPersons from "./components/displayPersons/displayPersons"
import DisplayBorrows from "./components/displayBorrows/displayBorrows"
import AddBorrow from "./components/addBorrow/addBorrow"
import Book from "./components/displayBooks/displayBook"
import MyPage from "./components/personPage/myPage"

import {
  BrowserRouter as Router,
  Route,
  Routes,
}from 'react-router-dom'  
import useGetLoggedInUser from "./components/getLoggedInUser"


const App = () => {

  const {getLoggedInUser, user} = useGetLoggedInUser()
  getLoggedInUser()

  return (
    <div>
      <h1></h1>
      <Router>
        
        <Routes>
          <Route exact path='/' element={ <Home /> }/>
          <Route exact path='/components/books' element={ <Book /> }/>

          { <Route exact path='/components/signup/signup' element={ <Signup  /> }/>}
          { <Route exact path='/components/login/login' element={ <Login /> }/>}

          { <Route exact path='/components/personPage/myPage' element={ <MyPage /> }/>}
          { <Route exact path='/components/bookPage/bookPage' element={ <BookPage  /> }/>}
          { <Route exact path='/components/changePsw' element={ <ChangePsw /> }/>}

          { <Route exact path='/components/personPage' element={ <PersonPage /> }/>}
          { <Route exact path='components/addBook/addBook' element={ <AddBook /> }/>}
          { <Route exact path='components/displayPersons/displayPersons' element={ <DisplayPersons /> }/>} 
          { <Route exact path='components/addBorrow' element={ <AddBorrow /> }/>}
          { <Route exact path='components/displayBorrows/displayBorrows' element={ <DisplayBorrows /> }/>}
        </Routes>
      </Router>
        
        
    </div>
  )
  
}

export default App