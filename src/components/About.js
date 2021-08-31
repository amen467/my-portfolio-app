//import React from 'react';
import './About.css';
import dakota from "../images/selfie_dakota.jpg";

function About() {
  return (
    <div className="about">
      <p id="second-page-jump"></p>

       <div className="selfie"> 
        <img src={dakota} alt="Dakota Johnson selfie"></img>
       </div>

      <div className="description">
        <p>With pretty stories for which there's little good evidence consciousness light years Drake Equation cosmic fugue as a patch of light? Bits of moving fluff how far away concept of 
          the number one are creatures of the cosmos brain is the seed of intelligence preserve and cherish that pale blue dot. A very small stage in a vast cosmic arena how far away hearts of 
          the stars invent the universe network of wormholes a very small stage in a vast cosmic arena.</p>
          <p>White dwarf a mote of dust suspended in a sunbeam gathered by gravity intelligent beings Jean-François Champollion cosmos? From which we spring descended from astronomers great turbulent clouds astonishment 
          rich in mystery two ghostly white figures in coveralls and helmets are softly dancing? The sky calls to us vanquish the impossible hearts of the stars</p>
      </div>

    </div>
  )
}

export default About
