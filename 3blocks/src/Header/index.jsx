import React, { useState, useEffect } from "react";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import trois from '../assets/trois.png'
import { Link } from "react-router-dom";
import './style.css'


const Header = () => {

    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
         <header className={`fixed top-0 w-full transition-all duration-500 flex items-center justify-between h-14 px-32  ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="">
                <Link to="/" className="flex items-center">
                    <img className="w-4" src={trois} alt="Logo 3blocks" />
                    <span className="font-bold text-xl">3blocks</span>
                </Link>

            </div>

            <ul className="flex justify-center space-x-4 backdrop-filter backdrop-blur">
                <li className="font-bold"><Link to="/creation">Creation</Link></li>
                <li className="font-bold"><Link to="/development">Development</Link></li>
                <li className="font-bold"><Link to="/finance">Finance</Link></li>
            </ul>


            <ul className="flex justify-end space-x-5">
                <li>
                    <a href="https://twitter.com/3blocks_agency" target="_blank" className="link link-hover hover:text-blue-500"> <FaTwitter /></a>
                </li>
                <li>
                    <a href="https://discord.gg/64r5JZ7C" target="_blank" className="link link-hover hover:text-indigo-600"> <FaDiscord /> </a>
                </li>
                <li>
                    <a href="mailto:3blocks_dagency@gmail.com" target="_blank" className="link link-hover hover:text-red-600"> <FiMail /> </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
