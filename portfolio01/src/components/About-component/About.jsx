import React from "react";
import "./about.css";
import Home from "../Home-component/Home.jsx";
import { Typewriter, Cursor } from "react-simple-typewriter";
import bhargav from "./Nallagutla_Bhargav_Sai.pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Data,activities,achieve} from "./Data.js"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";



const web=["Html","Css","Boostrap","Java-Script","React-js","React-Material UI","git & GitHub"]
const program=["Python","Java-Script"]
const About = () => {
  const notify = () => {
    toast(" Downloaded sucessfully", {
      position: "top-right",
      theme: "light",
      autoClose: 500,
      color: "black",
    });
  };
  return (
    <>
    <div className="formargin">
      <div className="about">
        <div className="information">
          <h2 className="text-heading">Hey hi,👋</h2>
          {/* <h2 style={{display:"inline"}}>I'm</h2> */}
          <h2 className="typewriter-text">
            I'm&nbsp;
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
            <Cursor />
          </h2>
          <p>
            Hi, I'm Bhargav Sai.Recently,I had completed my Graduation.Currently
            taking coaching On <b> Full Stack</b> in Gocinq Training Institute.
          </p>
          {/* <div className="download">

        </div> */}
          <a
            href={bhargav}
            download="bhargav resume"
            className="DOWNLOAD-BTN"
            onClick={notify}
          >
            Resume
            <ion-icon
            size="small"
              className="download-icon"
              name="cloud-download"
            ></ion-icon>
          </a>
        </div>
        <div>
          <img src="/images/profile2.jpg" alt="baggu" className="image" />
        </div>
        <div></div>
      </div>
      <div className="Technical-skills">
        <h2 className="tech-heading">Technical Skills</h2>
        <div className="web-prog">
        <div className="web">
        <div className="web-items">
          <h3>Web-Development Skills</h3>
        </div>
         {web.map((item,index)=>{
          return <p className="web-item">{item}</p>
         })}
        </div>
        <div className="programming">
        <h3>Programming SKills</h3>
        {program.map((item,index)=>{
          return <p className="web-item">{item}</p>
         })}
        </div>
        </div>
      </div>
      <div className="education">
      <h2 className="education-heading">Educational Details</h2>
      <div className="educational-details">
        
        {Data.map((item,index)=>
        // <div key={index}>
          <div className="details" key={index} >
          <div >
          <h3>{item.course}</h3>
          <p className="description">{item.college}</p>
          
          </div>
          <div className="start-location">
          <p className="description1">{item.start}</p>
          <p className="description1">{item.location}</p>
          </div>
        </div>
        // </div>
        )}
       </div> 
      </div>
      <div className="extracurricular">
      <h2 className="education-heading">Achievements Certifications</h2>
      
       {achieve.map((item,i)=>
       <div className="activities">
        <li className="item" key={i}>{item}</li>
        </div>
       )}
      </div>
      
      <div className="extracurricular">
      <h2 className="education-heading">Extra curricular Activities</h2>
      
       {activities.map((item,i)=>
       <div className="activities">
        <li className="item" key={i}>{item}</li>
        </div>
       )}
      </div>
      
      <ToastContainer />
 
    </div>
    <Footer/>
    </>
  );
};

export default About;
