import React from 'react'
import './Resume.css'
import myCertificate from './assets/certificate.pdf';

function Resume() {
  return (
    <div>
      <div className='MyResume'>
       <div className='name'>
        <img src="https://images.unsplash.com/photo-1763890498949-efd5d4acb8ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbW90ZSUyMHdvcmtpbmclMjBvbiUyMGElMjBwYXJrJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" id='profile-img' />
         <h1 id='Name'>
          Suriya Prakash G N
        </h1>
        <h2 id='field'>
          Frontend Developer
        </h2>
        </div>
        <div className='summary'>
          <div className="profession box">
            <h2>Professional Summary :</h2>
            <p>Aspiring Full Stack Developer with hands-on training in HTML, CSS, and JavaScript. Eager to secure a web development internship to apply core front-end skills in a real-world environment, gain practical experience, and grow into a confident, industry-ready developer. Motivated and committed to continuously building technical expertise through structured coursework and self-driven practice.</p>
        
          </div>
          <div className="education box">
            
              <h2>Internship :</h2>
            <h3>Full Stack Developer</h3>
            <h4>Marcello Tech</h4>
             <p>Contributed to the development of a real-world e-commerce website during the internship, applying advanced HTML/CSS and JavaScript for front-end development, building UI components with React.js, and gaining hands-on backend experience with MongoDB — all within a virtual, remote work setting.</p>
             <h6 className='date'>April 2026 - May 2026</h6>
           
          </div>
          <div className="internship box">
            <h2>Certificate :</h2>
            <h3>HTML Essential Training - Linkedin Learning </h3>
            <h4>Instructor: Christiana Truong</h4>

            <p>Completed a foundational course covering HTML terminology, syntax, and proper document structure. Gained proficiency in semantic markup, embedding media (images, video, audio), and building basic HTML forms — establishing core skills for accessible, standards-compliant web development.</p>
            <button className='certificate-button'>
              View Certificate
            </button>
            <p id='ccc'>Jun - Jul 2026</p>
          </div>
          <div className="certificate box">
            <h2>Achievments :</h2>
            <h3>PRO member</h3>
            <h4>Enterpreneurship Development Cell -Bishop Heber College</h4>
            <p>Recognized as a PRO member of the Entrepreneurship Development Cell, contributing to initiatives that foster innovation and entrepreneurial skills among students. Actively participated in organizing events, workshops, and mentorship programs to support aspiring entrepreneurs.</p>
            <h6 id ='date'>2025 - 2026</h6>
          </div>
          </div>




          <div className="achievments ">
            <h2>Projects :</h2>
          </div>
          

        
        <div className="additional">
            <div className="skill box1">
            <h2 id='skills'>Skills </h2>
            <div className="soft">
              <section> Soft Skills :
                <ul>
                 <li>Communication</li>
                </ul>
              </section>
            </div>
          </div>
          <div className="edu box2">
           < h2 id='education'>Education </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume