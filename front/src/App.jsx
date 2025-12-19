import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutProvider from './Layout'
import HomePage from './Pages/Home'
import AboutUsPage from './Pages/AboutUs'
import CarriersPage from './Pages/Carriers'
import TechnologiesPage from './Pages/Technologies'
import React from 'react'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<LayoutProvider />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/carriers" element={<CarriersPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
