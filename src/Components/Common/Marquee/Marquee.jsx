import { IoLogoHtml5 } from "react-icons/io5";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import   "./Marquee.css"
const Marquee = () => {
  return (
    <>
      <marquee
        direction="left"
        className="mt-2 text-2xl marquee text-shadow-violet-200"
      >
        <div class="marquee-icons flex gap-6">
          <IoLogoHtml5 className="html-logo icons-style " />
          <ImCss3 className=" icons-style css-logo " />
          <IoLogoJavascript className="java-script icons-style" />
          <FaReact className="icons-style react-logo" />
          <RiNextjsFill className="icons-style next-log"/>
          <IoLogoNodejs className="icons-style node-jS-log" />
          <SiExpress className="icons-style express-logo"/>
          <SiNestjs className="icons-style nest-logo"/>
          <SiMongodb className="icons-style mongo-logo"/>
          <TbBrandMysql className="icons-style my-sql-logo"/>
          <BiLogoPostgresql className="icons-style postgres-logo"/>
        </div>
      </marquee>
    </>
  );
};
export default Marquee;
