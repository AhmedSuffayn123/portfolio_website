// import profileImg from "../../assets/(4).jpg";
import reactIMG from "../../assets/reactImage.jpg";
import HTML from "../../assets/htmlIMG.webp";
import CSS from "../../assets/cssImg.webp";
import JavaScript from "../../assets/javaScriptImg.png";
import Express from "../../assets/expressIMG.png";
import Nest from "../../assets/nestImg.png";
import MonogDB from "../../assets/monogDB.png";
import MySQL from "../../assets/mySQL.jpg";
import PostGres from "../../assets/postGres.png";
import GitHub from "../../assets/gitHub.png";
import GitLab from "../../assets/gitLab.png";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main w-full py-2 bg-danger  ">
        <h2 className="skills  text-6xl font-[600]">My Technology Stack</h2>
        <div className="  w-full flex gap-6 flex-wrap justify-center items-center  my-5 px-4">
          <div class="flip-card card-one">
            <div className="flip-card-inner flip-card-inner-one">
              <div className="flip-card-front">
                <img src={HTML} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card card-two">
            <div className="flip-card-inner flip-card-inner-two">
              <div className="flip-card-front">
                <img src={CSS} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flio-card card-four">
            <div className="flip-card-inner flip-card-inner-four">
              <div className="flip-card-front">
                <img src={JavaScript} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card card-five">
            <div className="flip-card-inner flip-card-inner-five">
              <div className="flip-card-front">
                <img src={reactIMG} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-six">
            <div className="flip-card-inner flip-card-inner-six">
              <div className="flip-card-front">
                <img src={Express} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-seven">
            <div className="flip-card-inner flip-card-inner-seven">
              <div className="flip-card-front">
                <img src={Nest} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-eight">
            <div className="flip-card-inner flip-card-inner-eight">
              <div className="flip-card-front">
                <img src={MonogDB} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-nine">
            <div className="flip-card-inner flip-card-inner-nine">
              <div className="flip-card-front">
                <img src={MySQL} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-ten">
            <div className="flip-card-inner flip-card-inner-ten">
              <div className="flip-card-front">
                <img src={PostGres} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-eleven">
            <div className="flip-card-inner flip-card-inner-eleven">
              <div className="flip-card-front">
                <img src={GitHub} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-twelve">
            <div className="flip-card-inner flip-card-inner-twelve">
              <div className="flip-card-front">
                <img src={GitLab} className="img" alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text-dark">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
