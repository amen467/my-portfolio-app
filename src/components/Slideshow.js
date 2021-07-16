import React from 'react'
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import emma from "../images/scale_2400.jpg";
import watson from "../images/watson.jpg";
import anya from "../images/anya-camera.jpg";

const slideImages=[
  emma,
  watson,
  anya
]


function slideshow() {
  return (
    <div className="slideshow">
      <Slide easing="ease" duration="3000">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default slideshow
