import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import axios from "axios";

function MultipleItems() {
  const API = process.env.REACT_APP_BACKEND_URL;
  const [projects, setProjects] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
    const [mounted, setMounted] = useState(false);


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure slider initializes AFTER DOM width is correct
  useEffect(() => {
    setMounted(true);

    // Force Slick to recalc width once projects load
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 150);
  }, [projects]);
  
   useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API}/projects`);
        setProjects(res.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (API) fetchProjects();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 1024 ? 3 : width > 600 ? 2 : 1, // 👈 Dynamically controlled by width
    slidesToScroll: 1,
  };

  if (!mounted) return null;
  return (
    <div>
      <Slider key={`${projects.length}-${width}`} {...settings}>
        {projects.map((p) => (
          <div key={p._id}>
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image_url}
              url={p.url}
              githubLink={p.githubLink}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
