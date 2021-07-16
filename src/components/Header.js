import React from 'react'
import './Header.css';

function Header() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementsByClassName("header")[0].style.height = "75px";
    } else {
      document.getElementsByClassName("header")[0].style.height = "120px";
    }
  }


  return (

    <div className="header">
      {/* <p id="home">HOMEZ</p> */}
      <div className="header-left">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/18/22/33/camera-1265913_960_720.png"
          alt="" />
          <h1>Your Name</h1>            
      </div>

      <div className="header-right">
          <a href="#home">Home</a>
          <a href="#second-page-jump">Second Page</a>
      </div>     

      

    </div>
    
  )

}

export default Header
