import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp , FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/Tifeh82736" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com/Kvngtifeh01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://wa.me/2349162484365" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media