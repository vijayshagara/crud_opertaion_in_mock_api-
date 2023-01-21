import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../src/pages/Home"
import AddEdit from './pages/AddEdit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-edit' element={<AddEdit/>}/>
        <Route path='/add-edit/:id' element={<AddEdit/>}/>
      </Routes>
    </div>
  )
}

export default App