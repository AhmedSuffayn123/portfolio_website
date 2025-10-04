import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [isOpen,setIsOpen]  =  useState(false)
  const mystyle = {
    fontSize: "24px",
  };
  return (
    <div className="min-h-full bg-gray-800 px-4 py-4 gap-20 flex justify-center items-center main-header">
      <div class="name-section">
        <h3 className="text-2xl fw-bold font-[400]  p-0 m-0">Suffyan Abbasi</h3>
      </div>
      <div className="info-section hidden lg:flex">
        <ul className="main-list flex items-center justify-center gap-4">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
      <div className="burger flex lg:hidden" onClick={()=>setIsOpen(prevState => !prevState)}>
        <FaListUl className="x-icon" style={mystyle} />
      </div>
      <div className={`mobile-menu lg:hidden ${isOpen ? "flex" : "hidden"} flex-col bg-gray-800 text-white p-4`}>
       <div class="cross-icon" onClick={()=>setIsOpen(prevState => !prevState)}>
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
    </div>
  );
};
export default Header;
