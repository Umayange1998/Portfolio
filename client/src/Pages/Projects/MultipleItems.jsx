import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import axios from "axios";

function MultipleItems() {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        try{
 axios.get("http://localhost:3001/projects").then(res=>{
                    setProjects(res.data);
        })
        }catch(error){
            console.error(error)
        }
       
    },[]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  >
      <Slider {...settings}>
        {projects.map((project)=>(<div
        key={project._id}>
          <ProjectCard title={project.title}
              description={project.description}
              image={project.image_url}
              url={project.url}
              githubLink={project.githubLink}/>
        </div>))}
        
        
      </Slider>
    </div>
  );
}

export default MultipleItems;
