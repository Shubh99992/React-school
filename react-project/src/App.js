import React from 'react'
import Menubar from './component/Menubar'
import Home from './component/test'
import Weather from './component/weather'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h2>Welcome to React</h2>
      <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App