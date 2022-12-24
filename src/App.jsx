import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/breakfast'></Route>
          <Route path='/lunch'></Route>
          <Route path='/dinner'></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
