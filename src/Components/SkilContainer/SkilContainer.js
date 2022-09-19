import React from 'react'
import {Element} from "react-scroll"
import Skilling from "./../Assets/skills.jpeg"
import  './SkilContainer.css';
import LinerProgress from "@mui/material/LinearProgress";

const SkilContainer = () => {
  return (
    <div>
    <Element className='skilContainer' id='Skils'>
        <div className='skilContainer__image'>
            <img src={Skilling}  alt="" />
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                    <LinerProgress variant ="determinate" value={90}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>css</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                    <LinerProgress variant ="determinate" value={60}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JavaScript</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                    <LinerProgress variant ="determinate" value={50}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>React JS</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                    <LinerProgress variant ="determinate" value={40}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Node JS</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                    <LinerProgress variant ="determinate" value={45}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>SQL</h5>
                <div className='skillContainer__slider skillContainer__slider6'>
                    <LinerProgress variant ="determinate" value={50}/>
                </div>
            </div>
        </div>
    </Element>
      

    </div>
  )
}

export default SkilContainer

