import React from 'react'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='ourstore' element={<OurStore/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='blogs' element={<Blogs/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
