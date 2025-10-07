import "./about.css";
import ProfileTwo from "../../assets/profileTwo.jpg";
const About = () => {
  return (
    <>
      <div class="about-section flex flex-col lg:flex-row  justify-content-between  w-full h-auto py-20">
        <div class="w-full lg:w-1/2 flex flex-col justify-center  m-0 p-0 mb-2 lg:mb-0">
          <h2 className="full-name text-4xl text-left mb-[20px]">
            Muhammad Ahmed Suffyan Abbasi
          </h2>
          <p className=" about-me text-wrap break-all">
            I’m Ahmed Suffyan Abbasi, a passionate Web Developer with over two
            years of hands-on experience in building modern and scalable web
            applications. My expertise spans both frontend and backend
            development, and I’m proficient in
            <span
              class="html"
              title="Crafting clean, semantic, and accessible web structures for modern user interfaces."
            >
              HTML
            </span>{" "}
            ,
            <span
              class="html"
              title="Designing visually appealing, responsive, and fluid layouts with precision styling."
            >
              CSS
            </span>{" "}
            ,
            <span
              class="html"
              title="Bringing interactivity and dynamic functionality to web applications with efficient, modular code."
            >
              JavaScript
            </span>{" "}
            ,
            <span
              class="html"
              title="Building modern, component-driven user interfaces for the web."
            >
              React
            </span>{" "}
            <span
              class="html"
              title="Developing structured, maintainable backend systems with TypeScript and modular"
            >
              Next.js
            </span>
            ,
            <span
              class="html"
              title="Building scalable, high-performance server-side applications using JavaScript."
            >
              Node.js
            </span>
            ,
            <span
              class="html"
              title="Developing structured, maintainable backend systems with TypeScript and modular architecture."
            >
              Nest.js
            </span>{" "}
            , and
            <span
              class="html"
              title="Creating fast, lightweight APIs and web servers with simplicity and flexibility."
            >
              Express.js
            </span>{" "}
            . I have strong experience working with databases such as
            <span
              class="html"
              title="Managing NoSQL data efficiently with flexible, document-oriented storage."
            >
              MongoDB
            </span>{" "}
            ,
            <span
              class="html"
              title="Designing and optimizing reliable relational databases for structured data management."
            >
              MySQL
            </span>{" "} 
            , and
            <span
              class="html"
              title="Leveraging advanced SQL features for robust, secure, and scalable database solutions."
            >
              PostgreSQL
            </span>{" "}
            , and I’m also skilled in API testing using tools like Postman,
            Thunder Client, and Swagger UI. In addition to technical work, I’m
            capable of leading development teams, managing tasks efficiently,
            and ensuring smooth collaboration to deliver high-quality results.
          </p>
        </div>
        <div class="w-full lg:w-1/2 ps-4 flex items-center justify-center lg:justify-start">
          <img src={ProfileTwo} className="w-100 h-100 rounded-full" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
