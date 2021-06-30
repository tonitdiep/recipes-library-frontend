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
          <NavLink to='/' exact style={link} activeStyle={{background: 'pink'}}>Home</NavLink> {""}
          <NavLink to='recipes/new' exact style={link} activeStyle={{background: 'pink'}}>Add New Recipe</NavLink> {""}
          <NavLink to='recipes' exact style={link} activeStyle={{background: 'pink'}}>View Recipe</NavLink> 
        </div>
    )
}

export default Navigation
