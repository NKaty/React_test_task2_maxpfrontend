import React from 'react'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'

import './style.css'

export default function Menu () {
  return (
    <div className='main-menu'>
      <MenuItem to="/login">Login</MenuItem>
      <MenuItem to="/news">News</MenuItem>
      <MenuItem to="/profile">Profile</MenuItem>
      <MenuButton/>
    </div>
  )
}
