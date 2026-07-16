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
          <div className='links'>
            <div className='L1'>
              <div className='LS5'><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="img" /></div>
              <h3>Surya Prakash Prakash</h3>
            </div>
            <div className='L2'>
              <div className='LS6'><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" alt="" /></div>
              <h3>s95393961-web</h3>
            </div>
            <div className='L3'>
              <div className='LS7'><img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="" /></div>
              <h3>s95393961@gmail.com</h3>  
            </div>
            <div className='L4'>
              <div className='LS8'><img src="https://illustoon.com/photo/7817.png" alt="" /></div>
              <h3>+91 8248166686</h3>
            </div>   

          </div>
          <div className='picture'>

          </div>
          
         </div>
        < div className='bottom'>
        </div>

    </div>
  )
}

export default Portfolio