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
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/plans" component={Plan} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Routes>
      </Router>
    </div>
  )
}
