import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { OrderPage } from './pages/OrderPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<OrderPage/>}></Route>

      
     </Routes>
    </div>
  )
}

export default App
