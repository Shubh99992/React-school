import React from 'react'
import {Link }from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/Weather">Weather</Link>
            </div>
        </nav>
    </div>
  )
}

export default Menubar