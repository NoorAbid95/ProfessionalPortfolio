import React from "react";
import resume from "../assets/NoorAbidResume2025.pdf";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;



  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white w-[90%] max-w-4xl h-[90vh] rounded-xl shadow-xl p-4 relative flex flex-col"
      onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">My Resume</h2>

        {/* PDF iframe */}
        <div className="flex-1 overflow-hidden rounded">
          <embed
            src={`${resume}#toolbar=0`}
            type="application/pdf"
            className="w-full h-full"

          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
