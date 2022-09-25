import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
const ProjectContainer=()=>{
    const Project_Client =[
        {
        img:"https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"brithday wishes",
        desc: "wish me on my brithday",
        link:"www.google",
        },
    ];
    return(
        <Element className="projectContainer" id="projects">
            <h1>
                projects
            </h1>
            <p>Here are some project which i done for making lives of people easy</p>
            <div className="projectContainer__title">
            {
                Project.map((Project,index)=>{
                    return(
                        <Project 
                        key={index}
                        img={Project.img}
                        title={Project.title}
                        desc={Project.desc}
                        link={Project.link}
                        />

            
                    );
                })}
        </div>
        </Element>
    );
};
export default ProjectContainer
