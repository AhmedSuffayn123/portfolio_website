import { Link } from "react-router-dom";
import './Header.css'
 const Header = () => {
    return ( 
        <div className="min-h-full bg-gray-800 px-4 py-4">
            <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
            <Link to="/">About Me</Link>
            <Link to="/about">Skills</Link>
            <Link to="/about">Portfolio</Link>
            <Link to="/about">Contact Me</Link>
            </div>
        </div>
    );
}

export default Header