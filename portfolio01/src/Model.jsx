import React from 'react'
import { Link } from "react-router-dom";
import "./Model.css"
const Model = ({openfunc}) => {
  return (
    <div className='model' style={{right:"0"}}>
      <section className="close">
        <button className="close-btn"  onClick={openfunc}><ion-icon name="close-outline" width="200"className="m-icon"></ion-icon></button>
    </section>
    <section className="model-links">
          <ul className='ul'>
            <li className="lst">
             <button className='model-btn' onClick={openfunc}><Link to="/">HOME</Link></button> 
            </li>
            <li className="lst">
            <button className='model-btn' onClick={openfunc}><Link to="/about">ABOUT</Link></button>
            </li>
            <li className="lst">
            <button className='model-btn' onClick={openfunc}><Link to="/projects">PROJECTS</Link></button>
            </li>
            
            <li className="lst">
            <button className='model-btn' onClick={openfunc}><Link to="/contact">CONTACT-ME</Link></button>
            </li>
          </ul>
        </section>
    </div>
  )
}

export default Model
