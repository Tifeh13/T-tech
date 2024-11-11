import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
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

<a href="https://property2.vercel.app/" target="_blank" rel="noopener noreferrer">
  <ProjectsCard
    title="Property Pro"
    des="A platform dedicated to simplifying the process of buying and selling houses. Property Pro connects potential homeowners with property listings, offering a seamless experience to find their ideal homes."
    src={projectFour}
  />
</a>

<a href="https://scissors-ngvm.vercel.app/" target="_blank" rel="noopener noreferrer">
  <ProjectsCard
    title="Scissor"
    des="Scissor is a URL optimization platform that shortens long URLs, making them more manageable and shareable. It offers features like tracking, custom links, and easy integration with your existing workflows."
    src={projectFive}
  />
</a>

<a href="https://kg-consultancy.vercel.app/" target="_blank" rel="noopener noreferrer">
<ProjectsCard
  title="KG Consultancy"
  des="KG Consultancy specializes in the buying, selling, and renting of residential and commercial properties. Whether you're looking for your dream home, a profitable investment, or a rental property, we provide expert guidance, a wide selection of properties, and personalized service to help you make the right choice."
  src={projectSix}
/>
</a>

      </div>
    </section>
  );
}

export default Projects