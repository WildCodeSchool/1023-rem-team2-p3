import React, { useRef } from "react";
import { videoDescriptions, videoSources, videoTitles, videoDifficulties } from "./videoDescriptions";

const Popup = ({
  onClose,
}) => {
  const videoRef = useRef(null);

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Facile":
        return "text-green-500";
      case "Moyen":
        return "text-yellow-500";
      case "Difficile":
        return "text-orange-500";
      case "Expert":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const handlePlay = () => {
    videoRef.current.play();
    videoRef.current.muted = true;
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-[#281f31] p-8 rounded-lg shadow-lg relative w-full md:w-1/2">
        <button
          className="absolute top-0 right-0 m-4 text-purple-200 hover:text-white font-semibold text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <video
          ref={videoRef}
          className="w-full mb-4"
          src={videoSources}
          controls
          autoPlay
          onCanPlay={handlePlay}
        />
        <h2 className="text-xl font-bold text-center mb-2">{videoTitles}</h2>
        <p className="text-center">{videoDescriptions}</p>
        <p
          className={`text-center mt-2 font-bold ${getDifficultyClass(videoDifficulties)}`}
        >
          {videoDifficulties}
        </p>
      </div>
    </div>
  );
};

export default Popup;
