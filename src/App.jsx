import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Navigation from './components/Navigation'
import Cartpage from './pages/Cart/Cartpage'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import MealDetails from './pages/MealDetails/MealDetails'
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:mealTime/:mealName' element={<MealDetails/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cartpage/>}></Route>
      </Routes>
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default App
