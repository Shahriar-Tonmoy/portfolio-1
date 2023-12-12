import { saveAs } from "file-saver";

const Home = () => {
  const handleDownload = async () => {
    const response = await fetch(
      "https://drive.google.com/file/d/1iVVd71-waX4DHVv1T9wOiZVkYBBDGDCj/view?usp=drive_link"
    );
    const blob = await response.blob();
    saveAs(blob, "Mirza-Shahriar-Tonmoy.pdf");
  };

  return (
    <div className="">
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="text-[#00ADB5] text-right text-xl md:text-9xl font-black grid place-content-center">
            MIRZA <br />
            SHAHRIAR TONMOY
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-[#EEEEEE] text-[#393E46] text-xl md:text-5xl lg:text-6xl font-black grid place-content-center gap-6">
            <p>Hi, I'm a web developer</p>
            <p className="text-xs lg:text-xl w-[90%] place-self-center ">
              Hello! I'm Tonmoy, a skilled web developer proficient in HTML,
              CSS, React, JavaScript, Express, MongoDB, and Tailwind CSS. I
              specialize in building dynamic front-end applications with React,
              ensuring seamless user experiences. On the server side, I use
              Express.js and MongoDB to create robust back-end systems. My
              strong foundation in JavaScript allows me to craft responsive and
              feature-rich applications. Let's connect and bring ideas to life!
            </p>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className="mt-10 flex justify-center items-center gap-2">
        <button
          className="border-2 text-[#00ADB5] px-3 py-2 h-12 text-lg rounded-xl font-semibold border-[#00ADB5]"
          onClick={handleDownload}
        >
          Resume
        </button>
        <div className="lg:tooltip w-14 h-14" data-tip="01927106833">
        <img src="./src/assets/phone.png" alt="" />
        </div>
        <a
          className="w-14 h-14"
          href="https://github.com/Shahriar-Tonmoy"
          target="_blank"
        >
          <img src="./src/assets/github.png" alt="" />
        </a>
        <a
          className="w-16 h-16 mt-3"
          href="https://www.linkedin.com/in/mirza-shahriar-17927327a/"
          target="_blank"
        >
          <img src="./src/assets/linkedin.png" alt="" />
        </a>
        <a
          className="w-14 h-14 "
          href="mailto:shahriartonmoy22@gmail.com"
          target="_blank"
        >
          <img src="./src/assets/gmail.png" alt="" />
        </a>
        
      </div>

      <div className="mt-28">
        <h1 className="text-[#00ADB5] mb-14 text-7xl text-center font-black">
          Education
        </h1>
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start text-[#EEEEEE] font-black">2014</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#00ADB5]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black">
              SSC, St. Gregory's High School and College
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start text-[#EEEEEE] font-black">2016</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#00ADB5]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black">
              HSC, St. Joseph Higher Secondary School
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start text-[#EEEEEE] font-black">2022</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-[#00ADB5]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black">
              Completed B.Sc. in CSE from Ahsanullah University of Science and
              Technology
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div className="mt-28">
        <h1 className="text-[#00ADB5] mb-14 text-7xl text-center font-black ">
          Skills
        </h1>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              <img className="w-10 h-10" src="./src/assets/html.png" alt="" />{" "}
              HTML
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              CSS <img className="w-10 h-10" src="./src/assets/CSS.png" alt="" />
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              <img
                className="w-10 h-10"
                src="./src/assets/tailwind.png"
                alt=""
              />{" "}
              Tailwind
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              JavaScript
              <img
                className="w-10 h-10"
                src="./src/assets/JavaScript.png"
                alt=""
              />
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              <img className="w-10 h-10" src="./src/assets/React.png" alt="" />{" "}
              React
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              Express.Js
              <img className="w-10 h-10" src="./src/assets/express.png" alt="" />
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              <img className="w-10 h-10" src="./src/assets/mongo.png" alt="" />{" "}
              mongoDB
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box text-[#EEEEEE] font-black flex justify-center items-center gap-2">
              Firebase
              <img
                className="w-10 h-10"
                src="./src/assets/Firebase.png"
                alt=""
              />
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div className="mt-28">
        <h1 className="text-[#00ADB5] mb-14 text-7xl text-center font-black ">
          Projects
        </h1>
        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl font-black text-[#00ADB5]"
            aria-label="Hexagon"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-[#00ADB5] rounded-box p-6"
          >
            <h1 className="text-[#00ADB5] mb-14 text-5xl text-center font-black ">
              Hexagon
            </h1>
            <p className="text-base lg:text-xl w-[90%] place-self-center text-[#EEEEEE]">
              Real estate Platform (an online platform where people can add and
              buy real estate properties)
            </p>

            <div className="flex mt-10 gap-3 md:gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl md:block hidden">
                Technologies:
              </h1>
              <img className="w-10 h-10" src="./src/assets/React.png" alt="" />
              <img className="w-10 h-10" src="./src/assets/express.png" alt="" />
              <img className="w-10 h-10" src="./src/assets/mongo.png" alt="" />
              <img
                className="w-10 h-10"
                src="./src/assets/tailwind.png"
                alt=""
              />
              <img
                className="w-10 h-10"
                src="./src/assets/Firebase.png"
                alt=""
              />
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Live Link:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://hexagon-f9ce4.web.app/"
              >
                Hexagon
              </a>
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Client Repo:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://github.com/Shahriar-Tonmoy/Hexagon-client"
              >
                Hexagon Client Repo
              </a>
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Server Repo:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://github.com/Shahriar-Tonmoy/Hexagon-server"
              >
                Hexagon Server Repo
              </a>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl  font-black text-[#00ADB5]"
            aria-label="NEED"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-[#00ADB5]  rounded-box p-6"
          >
            <h1 className="text-[#00ADB5] mb-14 text-5xl text-center font-black ">
              N E E D
            </h1>
            <p className="text-base lg:text-xl w-[90%] place-self-center text-[#EEEEEE]">
              An online job marketplace where people can post a job and also can
              bid for a job
            </p>

            <div className="flex mt-10 gap-3 md:gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl md:block hidden">
                Technologies:
              </h1>
              <img className="w-10 h-10" src="./src/assets/React.png" alt="" />
              <img className="w-10 h-10" src="./src/assets/express.png" alt="" />
              <img className="w-10 h-10" src="./src/assets/mongo.png" alt="" />
              <img
                className="w-10 h-10"
                src="./src/assets/tailwind.png"
                alt=""
              />
              <img
                className="w-10 h-10"
                src="./src/assets/Firebase.png"
                alt=""
              />
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Live Link:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://need-a2861.web.app/"
              >
                N E E D
              </a>
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Client Repo:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://github.com/Shahriar-Tonmoy/NEED-client"
              >
                N E E D Client Repo
              </a>
            </div>
            <div className="flex mt-10 gap-4 justify-center items-center">
              <h1 className="text-[#00ADB5] text-xl">Server Repo:</h1>
              <a
                className="underline text-[#EEEEEE]"
                target="_blank"
                href="https://github.com/Shahriar-Tonmoy/NEED-server"
              >
                N E E D Server Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
