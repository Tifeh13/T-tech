import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
   
      <a href="https://main--fancy-cassata-6c234d.netlify.app/" target="_blank" rel="noopener noreferrer">
  <ProjectsCard
    title="FIGMA LAND"
    des="Figma Land is a fast, lightning-quick prototyping platform, designed to help designers and developers bring their ideas to life efficiently. With an intuitive interface and rapid workflow, it’s the perfect solution for testing concepts and building interactive designs in record time."
    src={projectOne}
  />
</a>

      <a href="https://blogr-first.netlify.app/" target="_blank" rel="noopener noreferrer">
  <ProjectsCard
    title="E-commerce Website"
    des="An engaging e-commerce platform designed for seamless shopping experiences, featuring a user-friendly interface and secure payment integration."
    src={projectTwo}
  />
</a>

     <a href="https://thatboy.vercel.app/" target="_blank" rel="noopener noreferrer">
  <ProjectsCard
    title="Thatboy Portfolio"
    des="A visual journey through unique perspectives, capturing authentic moments with creativity and depth. Explore a world where every shot tells its own story!"
    src={projectThree}
  />
</a>

        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects