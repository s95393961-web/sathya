import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    // this is html tag in the jsx file for create HTML elements
    <div>
         <div className='top'>
            <p>Welcome to my Portfolio</p>
         </div>
         <div className='profile'>
          <h2>Suriya Prakash G N</h2>
          <p>B.com</p>
          <h3>Frontend Developer</h3>
          <div className= 'links'>
            <p>instagram id <br /></p>
            
            <p>github id <br /></p>
       
            <p>linkedin id <br /></p>
            
            <p>gmail id <br /></p>
          </div>
         </div>
        < div className='bottom'>
        </div>

    </div>
  )
}

export default Portfolio