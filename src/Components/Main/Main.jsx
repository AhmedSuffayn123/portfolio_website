// import profileImg from "../../assets/(4).jpg";
import HTML from "../../assets/htmlIMG.webp";
import CSS from "../../assets/cssImg.webp";
import JavaScript from "../../assets/javaScriptImg.png";
import reactIMG from "../../assets/reactImage.jpg";
import next from "../../assets/nextImg.png";
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
        <div className="  w-full flex gap-6 flex-wrap justify-center items-center  my-10 px-4">
          <div class="flip-card card-one">
            <div className="flip-card-inner flip-card-inner-one">
              <div className="flip-card-front">
                <img src={HTML} className="img" alt="" />
              </div>
              <div className="flip-card-back back-one flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#1E1E1E] html-text">
                    HTML
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card card-two">
            <div className="flip-card-inner flip-card-inner-two">
              <div className="flip-card-front">
                <img src={CSS} className="img" alt="" />
              </div>
              <div className="flip-card-back back-two flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#FFFFFF] css-text">
                    CSS
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flio-card card-three">
            <div className="flip-card-inner flip-card-inner-three">
              <div className="flip-card-front">
                <img src={JavaScript} className="img" alt="" />
              </div>
              <div className="flip-card-back back-three flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#2C2C2C] javascript-text">
                    Java Script
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card card-four">
            <div className="flip-card-inner flip-card-inner-four">
              <div className="flip-card-front">
                <img src={reactIMG} className="img" alt="" />
              </div>
              <div className="flip-card-back back-four flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#0A3D62] react-text">
                    React
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card card-five">
            <div className="flip-card-inner flip-card-inner-five">
              <div className="flip-card-front">
                <img src={next} className="img" alt="" />
              </div>
              <div className="flip-card-back back-five  flex items-center justify-center">
                <div className="flex justify-center items-center">
                 <h1 className="text-6xl font-[900] text-[#222222] next-text">
                    Next
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-six">
            <div className="flip-card-inner flip-card-inner-six">
              <div className="flip-card-front">
                <img src={Express} className="img" alt="" />
              </div>
              <div className="flip-card-back back-six flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#222222] next-text">
                    Expres
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-seven">
            <div className="flip-card-inner flip-card-inner-seven">
              <div className="flip-card-front">
                <img src={Nest} className="img" alt="" />
              </div>
              <div className="flip-card-back back-seven flex justify-center items-center">
                <div className="flex justify-center items-center">
                   <h1 className="text-6xl font-[900] text-[#FFFFFF] nest-text">
                    Nest
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-eight">
            <div className="flip-card-inner flip-card-inner-eight">
              <div className="flip-card-front">
                <img src={MonogDB} className="img" alt="" />
              </div>
              <div className="flip-card-back back-eight flex justify-center items-center">
                <div className="flex justify-center items-center">
                   <h1 className="text-6xl font-[900] text-[#FFFFFF] mongo-text">
                    Mongo DB
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-nine">
            <div className="flip-card-inner flip-card-inner-nine">
              <div className="flip-card-front">
                <img src={MySQL} className="img" alt="" />
              </div>
              <div className="flip-card-back back-nine flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#FFFFFF] my-text">
                    My SQL
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-ten">
            <div className="flip-card-inner flip-card-inner-ten ">
              <div className="flip-card-front">
                <img src={PostGres} className="img" alt="" />
              </div>
              <div className="flip-card-back back-ten flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#FFFFFF] my-text">
                    Post Gres
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-eleven">
            <div className="flip-card-inner flip-card-inner-eleven">
              <div className="flip-card-front">
                <img src={GitHub} className="img" alt="" />
              </div>
              <div className="flip-card-back back-eleven flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl font-[900] text-[#222222] next-text">GitHub</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flip card-twelve">
            <div className="flip-card-inner flip-card-inner-twelve">
              <div className="flip-card-front">
                <img src={GitLab} className="img" alt="" />
              </div>
              <div className="flip-card-back back-twelve flex justify-center items-center">
                <div className="flex justify-center items-center">
                   <h1 className="text-6xl font-[900] text-[#FFFFFF] lab-text">GitLab</h1>
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
