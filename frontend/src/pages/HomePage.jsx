import smileImg from "../assets/Smile.png";
import RotatingText from "../components/RotatingText";
import ChapterRewindDemo from "../assets/ChapterRewindDemo.mp4";
import GithubImg from "../assets/Github.png";
import ResumeModal from "../components/ResumeModal";
import { useState } from "react";
import { FileText } from "lucide-react";
import ContactForm from "../components/ContactForm";
import LinkedInIcon from "../assets/linkedin_icon.png";
import XIcon from "../assets/x_icon.png";
import GithubIcon from "../assets/github_icon.png";

const HomePage = () => {
  const [showResume, setShowResume] = useState(false);
  return (
    <>
      <header className="absolute top-8 left-8 z-10">
        <img src={smileImg} style={{ height: "50px" }} />
      </header>

      {/* Hero Section 1 */}
      <section className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-screen px-6">
        {/* Text Section */}
        <div className="text-left z-10">
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl">Hi, my</h1>
            <h1 className="text-5xl md:text-7xl">
              name is <span className="font-bold">Noor Abid</span>.
            </h1>
          </div>
          <div className="text-2xl">
            <RotatingText />
          </div>

          <ul
            className="flex lg:flex-col justify-between lg:justify-center items-center space-y-0 lg:space-y-12 space-x-6 
              lg:space-x-0 text-base lg:text-lg mt-10 lg:mt-0 lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2"
          >
            <li className="hover:scale-102 cursor-pointer hover:underline">
              <a href="#projects">01. Projects</a>
            </li>
            <li className="hover:scale-102 cursor-pointer hover:underline">
              <a href="#work">02. Work</a>
            </li>
            <li className="hover:scale-102 cursor-pointer hover:underline">
              <a href="#contact">03. Contact</a>
            </li>
          </ul>
        </div>
      </section>

      {/* {Divider} */}

      <div className="flex items-center w-full">
        <hr className="flex-grow border-t border-1 border-gray-400/30" />
        <span className="mx-8 text-gray-600/70 whitespace-nowrap">
          01. Projects
        </span>
      </div>

      {/* {Hero Section 2} */}
      <section
        id="projects"
        className="w-full min-h-screen flex justify-center items-center px-6"
      >
        <div className="flex flex-col w-full max-w-6xl justify-center">
          <p className="text-gray-400 text-sm mt-17">01.0 -</p>
          <p id="heading1" className="font-bold text-5xl mb-6 text-left">
            Projects{" "}
            <span className="font-normal">
              - checkout my personal web development projects
            </span>
          </p>
          <p className="text-gray-400 mb-1">
            01.1 ChapterRewind - generate book recaps before starting the next
          </p>

          <div className="flex flex-col  gap-10  mt-4 w-full lg:w-full lg:justify-center ">
            {/* Video + Links container */}
            <div className="flex flex-col w-full">
              {/* Video */}
              <div
                id="video"
                className="flex aspect-video relative overflow-hidden shadow-sm shadow-black mb-6"
              >
                <video
                  src={ChapterRewindDemo}
                  controls
                  className="absolute top-[-88px] h-[calc(100%+100px)] w-full object-cover"
                />
              </div>

              {/* Links: "THE CODE" and "THE PAGE" */}
              <div className="flex space-x-6 text-gray-500">
                <a
                  href="https://github.com/NoorAbid95/ChapterRewind"
                  className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the code
                </a>
                <div className="group relative">
                  <a
                    href="https://chapterrewind.onrender.com/"
                    className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the page
                  </a>
                  <p className="text-xs mt-1 transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                    Allow 15-30 seconds for page to spin up
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Container */}
            <div className="w-full h-full flex flex-col gap-2 text-left   mt-[-3vh] ">
              {/* Stack */}
              <div className="group relative cursor-pointer">
                <h3 className="font-semibold text-lg mb-2">STACK</h3>
                <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              {/* Frameworks */}
              <div className="group relative cursor-pointer">
                <h3 className="font-semibold text-lg mb-2">FRAMEWORKS</h3>
                <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <li>Express.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              {/* Libs */}
              <div className="group relative cursor-pointer">
                <h3 className="font-semibold text-lg mb-2">LIBS</h3>
                <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <li>Zustand</li>
                  <li>Axios</li>
                  <li>OpenAI API</li>
                  <li>YouTube API</li>
                  <li>GoogleBooks API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {Divider} */}
      <div className="flex flex-row-reverse items-center w-full">
        <hr className="flex-grow border-t border-1 border-gray-400/30" />
        <span className="mx-8 text-gray-600/70 whitespace-nowrap">
          02. Work
        </span>
      </div>
      {/* {Hero Section 3} */}
      <section
        id="work"
        className="w-full min-h-screen flex justify-center items-center px-6"
      >
        <div className="flex flex-col w-full max-w-6xl justify-center">
          <p className="text-gray-400 text-sm mt-17">02.0 -</p>
          <p id="heading2" className="font-bold text-5xl mb-6 text-left">
            Work{" "}
            <span className="font-normal">
              - explore my code, projects and development journey
            </span>
          </p>
          <p className="text-gray-400 mb-1">02.1 - The GitHub</p>
          {/* Github Container */}
          <div className="mt-4 flex justify-center items-center w-full">
            <a
              href="https://github.com/NoorAbid95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubImg}
                alt="Github Profile Screenshot"
                className=" h-auto rounded-lg shadow-lg object-cover"
              />
            </a>
          </div>

          <div className="mt-10 flex-col">
            <p className="text-gray-400">02.2 - The Resume</p>
            <button
              onClick={() => setShowResume(true)}
              className="mt-4 mb-2 inline-flex items-center gap-2 px-6 py-4 bg-black text-white rounded-sm  shadow hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            >
              <FileText size={18} />
              Check Out My Professional Experience
            </button>
          </div>
          <ResumeModal
            isOpen={showResume}
            onClose={() => setShowResume(false)}
          />
        </div>
      </section>
      {/* {Divider} */}
      <div className="flex items-center w-full">
        <hr className="flex-grow border-t border-1 border-gray-400/30" />
        <span className="mx-8 text-gray-600/70 whitespace-nowrap">
          03. Contact
        </span>
      </div>
      {/* {Hero Section 4} */}
      <section
        id="contact"
        className="w-full min-h-screen flex justify-center items-center px-6"
      >
        <div className="flex flex-col w-full max-w-6xl">
          <div className="flex flex-col items-start">
            <p className="text-gray-400 text-sm">03.0 -</p>
            <p id="heading2" className="font-bold text-5xl mb-6 text-left">
              Contact{" "}
              <span className="font-normal">
                - send me a message or explore my socials if you want to get in
                touch
              </span>
            </p>
            <p className="text-gray-400 mb-1">03.1 - The E-mail</p>
            <ContactForm />
          </div>
          <div>
            <p className="text-gray-400 mb-1 mt-24">03.2 - The Socials</p>
            <div className="flex justify-evenly items-center ">
              <a href="https://www.linkedin.com/in/noorabid/" target="_blank">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  className="h-12 w-12 hover:scale-103"
                />
              </a>
              <a href="https://x.com/NoorAbid" target="_blank">
                <img
                  src={XIcon}
                  alt="X Icon"
                  className="h-12 w-12 hover:scale-103"
                />
              </a>
              <a href="https://github.com/NoorAbid95" target="_blank">
                <img
                  src={GithubIcon}
                  alt="Github Icon"
                  className="h-12 w-12 hover:scale-103"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
