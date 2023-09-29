import React from 'react'
import Form from './Form'
import "../About-component/about.css"
const Contact = () => {
  return (
    <div>
      <Form/>
      <footer >
      <div className="iconss">
        <ion-icon size="small"  name="logo-instagram" className="icon"></ion-icon>
        <ion-icon size="small" name="logo-facebook"></ion-icon>
        <ion-icon size="small" name="logo-twitter"></ion-icon>
      </div>
      <p>&copy;2019 - 2023 N Bhargav Sai,All rights reserved.</p>
      {/* <center> */}
      </footer>
      {/* </center> */}
    
    </div>
  )
}

export default Contact
