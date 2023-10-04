import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="iconss">
        <ion-icon size="small"name="logo-instagram" className="icon"></ion-icon>
        <ion-icon size="small"name="logo-facebook"></ion-icon>
        <ion-icon size="small"name="logo-twitter"></ion-icon>
      </div>
      <p>&copy;2019 - 2023 N Bhargav Sai,All rights reserved.</p>
    </div>
  )
}

export default Footer
