import React from "react";
import{Swiper,SwiperSlide}from'swiper/react'
import Skil from "../Assets/skills.jpeg"
import "./ProjectContainer.css"
function ProjctContainer() {
return(

<div className="project__Container" id='project'>
<span className="project__Containerspan">My Projects</span>

<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}>
<SwiperSlide>
    <a href="https://wish-me-glivestyles.vercel.app/" target=''><img src={Skil} alt=""/></a>
</SwiperSlide>
<SwiperSlide>
    <a href="https://wish-me-glivestyles.vercel.app/" target=''><img src={Skil} alt=""/></a>
</SwiperSlide>
<SwiperSlide>
    <a href="https://wish-me-glivestyles.vercel.app/" target=''><img src={Skil} alt=""/></a>
</SwiperSlide>
</Swiper>
</div>
)
}
export default ProjctContainer


