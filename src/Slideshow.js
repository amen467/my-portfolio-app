import React from 'react'
import './Slideshow.css';
import emma from "./images/scale_2400.jpg";
import watson from "./images/watson.jpg";
import anya from "./images/anya-camera.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const auto_slide = () => {
  return (
    <div>
      <Slide easing = "ease">

        <div className="slide-img">
          <div style={{'backgroundImage': `url(${emma})`}}>
          </div>
        </div>

        <div className="slide-img">
          <div style={{'backgroundImage': `url(${watson})`}}>
          </div>
        </div>

        <div className="slide-img">
          <div style={{'backgroundImage': `url(${anya})`}}>
          </div>
        </div>

      </Slide>
    </div>
  )
}

function slideshow() {
  return (
    <div className="slideshow">
      {/* <auto_slide /> */}
      {auto_slide()}
      {/* <img src={emma} alt="Emma Roberts with Money"></img> */}
      {/* <img src={watson} alt="Emma Watson"></img> */}
      {/* <img src={anya} alt="Anya with a camera"></img> */}
    </div>
  )
}

export default slideshow
