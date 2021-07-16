import React from 'react'
import './Slideshow.css';
import emma from "./images/scale_2400.jpg";
import watson from "./images/watson.jpg";
import anya from "./images/anya-camera.jpg";


function slideshow() {
  return (
    <div className="slideshow">
      <img src={emma} alt="Emma Roberts with Money"></img>
      {/* <img src={watson} alt="Emma Watson"></img> */}
      {/* <img src={anya} alt="Anya with a camera"></img> */}
    </div>
  )
}

export default slideshow
