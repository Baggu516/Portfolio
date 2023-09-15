import React from 'react'
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
  return (
    <div className='Container'>
    <div className="text-container">
      <h2 className="text-heading">Hey hi,👋</h2>
      {/* <h2 style={{display:"inline"}}>I'm</h2> */}
      <h2 className='typewriter-text'>  I'm&nbsp;
      <Typewriter
                    words={[
                      "Engineer Graduate",
                      "Front-end Developer",
                      "React Js Developer",
                    ]}
                    loop={100000}
                    typeSpeed={70}
                    deleteSpeed={50}
                    // Color='red'
        />
        <Cursor/>
      </h2>
      <p>Hi, I'm Bhargav Sai.Recently,I had completed my Graduation.Currently taking coaching On <b> Full Stack</b> in Gocinq Training Institute.</p>
      <div className="icons">
      <Link to="https://github.com/Baggu516"><img className="icon" src="/images/git.png" alt="git" /> </Link>
      <Link to="https://leetcode.com/Baggu/"><img className="icon" src="./images/leet.png" alt="leetcode" /></Link>
      <Link to="https://www.linkedin.com/in/bhargav-sai-nallagutla-a249b2227/"><img className="icon" src="/images/link.png" alt="linkedin" /></Link>
      <Link to="https://app.netlify.com/teams/baggu516/overview"><img className="icon" src="/images/netlify.png" alt="netlify" /></Link>
      </div>
    </div>
    <div>
     <img src="/images/profile2.jpg" alt="baggu" className="image" />
    </div>
    </div>
  )
}

export default Home
