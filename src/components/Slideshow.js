import React from 'react'
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import emma from "../images/scale_2400.jpg";
import watson from "../images/watson.jpg";
import anya from "../images/anya-camera.jpg"
import dollars from "../images/dollars-emma.jpg";
import karen from "../images/karen.jpg";
import taylor from "../images/taylor.jpg";



const slideImages=[
  emma,
  watson,
  anya,
  dollars,
  karen,
  taylor
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

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default slideshow
