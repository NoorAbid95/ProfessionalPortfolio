import React from "react";

const ProjectCard = ({
  reference, 
  title,
  description,
  videoSrc,
  codeLink,
  liveLink,
  stack,
  frameworks,
  libs,
}) => {
  return (
    <div className="flex flex-col gap-10 mt-4 w-full lg:justify-center">
      <p className="text-gray-400 text-xl mb-1">
        <sup className="text-xs font-semibold mr-1">{reference}</sup><span className="font-semibold">{title} </span> - {description}
      </p>

      <div className="flex flex-col w-full">
        {/* Video */}
        <div className="flex aspect-video relative overflow-hidden shadow-sm shadow-black mb-6">
          <video
            src={videoSrc}
            controls
            className="absolute top-[-88px] h-[calc(100%+100px)] w-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-500">
          <a
            href={codeLink}
            className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            the code
          </a>
          <div className="group relative">
            <a
              href={liveLink}
              className="hover:text-gray-600 hover:scale-102 hover:font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              the page
            </a>
            <p className="text-xs mt-1 transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
              Allow 15–30 seconds for page to spin up
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full h-full flex flex-col gap-2 text-left mt-[-3vh]">
        {stack?.length > 0 && (
          <div className="group relative cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">STACK</h3>
            <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              {stack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {frameworks?.length > 0 && (
          <div className="group relative cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">FRAMEWORKS</h3>
            <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              {frameworks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {libs?.length > 0 && (
          <div className="group relative cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">LIBS</h3>
            <ul className="list-inside text-sm space-y-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              {libs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
