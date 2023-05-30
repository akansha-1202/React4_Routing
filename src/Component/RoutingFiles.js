import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';

export const RoutingFiles = () => {
  return (
       <> 
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
       </BrowserRouter>
       </>
    )
}
