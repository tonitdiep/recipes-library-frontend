import React from 'react'
import {NavLink} from 'react-router-dom'
const Navigation = () => {

    const link = {
        width: '400px',
        padding: '12px',
        background: 'pink',
        textDecoration: 'none',
        color: 'white'
        
    }
    return (
        <div>
          <NavLink to='/' exact style={link} activeStyle={{background: 'teal'}}>Home</NavLink> 
        </div>
    )
}

export default Navigation
