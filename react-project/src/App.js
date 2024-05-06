import React from 'react'
import Menubar from './component/Menubar'
import Home from './component/test'
import Weather from './component/Weather'
import {browserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h2>Welcome to React</h2>
      <browserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Weather />} />
      </Routes>

      </browserRouter>
    </div>
  )
}

export default App