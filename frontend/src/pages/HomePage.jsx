import smileImg from "../assets/Smile.png";
import RotatingText from "../components/RotatingText";

const HomePage = () => {
  return (
    <>
      <header className="absolute top-8 left-8 z-10">
        <img src={smileImg} style={{ height: "50px" }} />
      </header>

      {/* Hero Section 1 */}
      <div className="relative flex flex-col md:flex-row justify-center items-center w-full min-h-screen px-6">
        {/* Text Section */}
        <div className="text-left z-10">
          <div className="mb-4">
            <p className="text-5xl md:text-7xl">Hi, my</p>
            <p className="text-5xl md:text-7xl">
              name is <span className="font-bold">Noor Abid</span>.
            </p>
          </div>
          <div className="text-xl">
            <RotatingText />
          </div>

          <ul
            className="
    flex 
    lg:flex-col 
    justify-between 
    lg:justify-center 
    items-center 
    space-y-0 
    lg:space-y-12 
    space-x-6 
    lg:space-x-0 
    underline 
    text-base 
    lg:text-lg 
    mt-10 
    lg:mt-0 
    lg:absolute 
    lg:right-16 
    lg:top-1/2 
    lg:-translate-y-1/2
  "
          >
            <li className="hover:scale-103 cursor-pointer">01. Work</li>
            <li className="hover:scale-103 cursor-pointer">02. Github</li>
            <li className="hover:scale-103 cursor-pointer">03. Resume</li>
            <li className="hover:scale-103 cursor-pointer">04. E-mail</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
