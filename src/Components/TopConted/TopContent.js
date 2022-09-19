import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css";
const TopContent=()=> {
  return (
    <div className='topcontent'>
        <div className="topcontent__container">
            <h1>GLIVE GIJINESS C </h1>
            <p>I Am Fresher To Web Developer</p>
            <a href="www.google.com">
                <button className='topcontent__downloadButton'>Download CV</button>
            </a>
            <Link to="project" smooth={true} duration={500}>
                <button className='topcontent__workButton'>My works</button>
            </Link>
        </div>
    </div>
  )
}
export default TopContent
