import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home/Home'
import MealDetails from './pages/MealDetails/MealDetails'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:mealTime/:mealName' element={<MealDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
