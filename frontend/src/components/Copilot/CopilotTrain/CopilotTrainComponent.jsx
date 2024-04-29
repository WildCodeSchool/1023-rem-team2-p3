/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import { videoSources, videoTitles } from "./videoDescriptions";

export default function CopilotTrainComponent() {
  const [hoverStates, setHoverStates] = useState([]);
  const videoRefs = useRef([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  console.log(se);

  const handleClick = (index) => {
    setSelectedVideo(index);
  };

  useEffect(() => {
    videoRefs.current = Array(videoSources.length).fill(null);
  }, [videoSources.length]);

  const handleMouseOver = (index) => {
    setHoverStates((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = true;
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
      return newHoverStates;
    });
  };

  const handleMouseOut = (index) => {
    setHoverStates((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = false;
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause();
      }
      return newHoverStates;
    });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center lg:h-auto rounded-[20px]  mt-6 md:justify-items-center md:mb-6 mb-6">
      {videoSources.map(({ id, source, difficulties, title, description }) => (
        <>
          <button
            key={id}
            type="button"
            className="grid grid-cols-1 gap-4"
            onMouseOver={() => handleMouseOver(id)}
            onMouseOut={() => handleMouseOut(id)}
            onClick={() => handleClick(id)}
          >
            <div className="w-64 h-36 relative">
              <video
                className="w-full h-full rounded-[20px]"
                src={`${import.meta.env.VITE_BACKEND_URL}/${source}`}
                muted
                loop
                ref={(ref) => console.log("ref", ref)||(videoRefs.current[id] = ref)}
              />
              {hoverStates[id] && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
                  <p>{videoTitles[id]}</p>
                </div>
              )}
            </div>
          </button>
          {selectedVideo !== null && (
            <Popup
              source={source}
              difficulties={difficulties}
              description={description}
              title={title}
              setSelectedVideo={setSelectedVideo}
            />
          )}
        </>
      ))}
    </div>
  );
}
