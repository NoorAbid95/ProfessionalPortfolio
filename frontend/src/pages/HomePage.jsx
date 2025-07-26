import smileImg from "../assets/Smile.png";
import RotatingText from "../components/RotatingText";
import ChapterRewindDemo from "../assets/ChapterRewindDemo.mp4";

const HomePage = () => {
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
              lg:space-x-0 underline text-base lg:text-lg mt-10 lg:mt-0 lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2"
          >
            <li className="hover:scale-103 cursor-pointer">01. Work</li>
            <li className="hover:scale-103 cursor-pointer">02. Github</li>
            <li className="hover:scale-103 cursor-pointer">03. Resume</li>
            <li className="hover:scale-103 cursor-pointer">04. E-mail</li>
          </ul>
        </div>
      </section>

      {/* {Divider} */}

      <div className="flex items-center w-3/4">
        <hr className="flex-grow border-t border-gray400" />
        <span className="mx-4 text-gray-600 whitespace-nowrap">01. Work</span>
      </div>

      {/* {Hero Section 2} */}
      <section className="w-full min-h-screen flex justify-center items-center px-6">
        <div className="flex flex-col w-full max-w-6xl">
          <p className="text-gray-400 text-sm" >01.1 -</p>
          <p className="font-bold text-5xl mb-6 text-left">
            ChapterRewind{" "}
            <span className="font-normal">
              - generate book recaps before starting the next
            </span>
          </p>
          <p className="text-gray-400 mb-1">01.1 - A DEMO</p>

          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Video Container */}
            <div className="w-full lg:w-2/3 aspect-video overflow-hidden relative shadow-sm shadow-black">
              <video
                src={ChapterRewindDemo}
                controls
                className="absolute top-[-60px] h-[calc(100%+80px)] w-full object-cover "
              />
            </div>

            {/* Tech Stack */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2">Stack</h3>
                <ul className=" list-inside text-sm space-y-2">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Frameworks</h3>
                <ul className=" list-inside text-sm space-y-2">
                  <li>Express.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Libs</h3>
                <ul className="list-inside text-sm space-y-2">
                  <li>Zustand</li>
                  <li>Axios</li>
                  <li>OpenAI, YouTube & Google Books API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start w-1/2 space-x-6 mt-2  text-gray-500">
            <a
              href="https://github.com/NoorAbid95/ChapterRewind "
              className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
              target="_blank"
            >
              THE CODE
            </a>
            <div className="group relative">
              <a
                href="https://chapterrewind.onrender.com/"
                className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
                target="_blank"
              >
                THE PAGE
              </a>
              <p className="text-xs mt-1  transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                Allow 15-30 seconds for page to spin up
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
