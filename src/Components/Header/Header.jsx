import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [isOpen,setIsOpen]  =  useState(false)
  return (
    <div className="min-h-full header-bg    gap-20 flex justify-between items-center">
      <div className="name-section">
        <h3 className="text-xl sm:text-3xl fw-bold font-[600]  p-0 m-0 uppercase"><span className="First-name">Suffyan</span><span className="last-name">Abbasi</span> </h3>
      </div>
      <div className="info-section hidden lg:flex">
        <ul className="main-list flex items-center justify-center gap-4">
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link>Education</Link>
          </li>
          <li>
            <Link>Skills</Link>
          </li>
          <li>
            <Link>Hire Me</Link>
          </li>
        </ul>
      </div>
      <div className="burger flex gap-2 sm:gap-6 lg:hidden" onClick={()=>setIsOpen(prevState => !prevState)}>
        <FaListUl className="x-icon icon-style"  />
        <IoLogoLinkedin  className="icon-style" />
        <FaGithub  className="icon-style" />
          <BsChatText className="icon-style" />
      </div>
      <div className={`mobile-menu lg:hidden ${isOpen ? "flex" : "hidden"} flex-col bg-gray-800 text-white p-4`}>
       <div className="cross-icon" onClick={()=>setIsOpen(prevState => !prevState)}>
         <RxCross1 className="x-icon" />
       </div>
        <ul className="flex flex-col justify-center items-center gap-2">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link>Contact Me</Link>
          </li>
          <li>
            <Link>Assing A Project</Link>
          </li>
          <li>
            <Link>About Me</Link>
          </li>
        </ul>
      </div>
      <div className="social hidden lg:flex xl:hidden">
        <ul className="flex gap-6">
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
            <IoLogoLinkedin />
            </Link>
          </li>
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
              <FaGithub />
            
            </Link>
          </li>
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
            <BsChatText />
           </Link>
          </li>
        </ul>
      </div>
        <div className="social hidden xl:flex">
        <ul className="flex gap-6">
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
            <IoLogoLinkedin />
            Linked In
           </Link>
          </li>
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
              <FaGithub />
              Github
            </Link>
          </li>
          <li>
            <Link className="flex items-center lg:gap-2 xl:gap-3">
            <BsChatText />
            Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
