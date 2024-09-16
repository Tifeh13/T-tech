import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Afolabi Boluwatife</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: 
              <a 
                href="https://wa.me/2349162484365" 
                className="text-lightText" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                +234 9162484365
              </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
            Email: 
            <a 
              href="mailto:afolabibolu15@gmail.com" 
              className="text-lightText"
            >
              afolabibolu15@gmail.com
            </a>
        
        </p>

      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft