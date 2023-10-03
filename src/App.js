import React from 'react'
import './styles.css'

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Plan from './pages/Plan'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  )
}
