import React from 'react'
import './navBAr.css'
export default function Nav_BAr() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (<>
    <div className='nav'>
      <h1><a href="#">TEXT MODIFIER</a></h1>
      <a href="#">HOME</a>
      <a href="#About">ABOUT</a>
      <a href="#much">MUCH</a>
     <div id='icon'>
      
     </div>
    </div>
    <div id='divvv'></div>
     </>
  )
}

