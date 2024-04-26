import React, { useState, useRef, useEffect } from "react";
import Popup from "./Popup";
import { videoDescriptions, videoSources, videoTitles, videoDifficulties } from "./videoDescriptions";


export default function CopilotTrainComponent() {
  const [hoverStates, setHoverStates] = useState([]);
  const videoRefs = useRef([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

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
    <>
      <div className="flex flex-wrap gap-4 justify-center items-center lg:h-auto rounded-[20px]  mt-6 md:justify-items-center md:mb-6 mb-6">
        {videoSources.map(({ id, source }) => (
          <div
            key={id}
            className="grid grid-cols-1 gap-4"
            onMouseOver={() => handleMouseOver(id)}
            onMouseOut={() => handleMouseOut(id)}
            onClick={() => handleClick(id)}
          >
            <div className="w-64 h-36 relative">
              <video
                className="w-full h-full rounded-[20px]"
                src={source}
                muted
                loop
                ref={(ref) => (videoRefs.current[id] = ref)}
              />
              {hoverStates[id] && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
                  <p>{videoTitles[id]}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedVideo !== null && (
        <Popup
          videoSource={videoSources[selectedVideo]}
          videoTitle={videoTitles[selectedVideo]}
          videoDescription={videoDescriptions[selectedVideo]}
          videoDifficulty={videoDifficulties[selectedVideo]}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
