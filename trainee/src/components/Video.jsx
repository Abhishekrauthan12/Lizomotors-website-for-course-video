import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { IoChevronBack } from "react-icons/io5";

import introVideo from '../assets/Computer-Training-Institute-Intro-Video-_1.mp4';
import objectiveVideo from '../assets/Computer-Training-Institute-explainer-Mo_2.mp4';
import learningVideo from '../assets/Types-of-Software-Boot-Up-Animation-Comp_4.mp4';
import Training from '../assets/online-Education-motion-Graphic_3.mp4';
import Revision from '../assets/How exactly does binary code work_ - José Américo N L F de Freitas.mp4';
import Ques from '../assets/What is Coding_ _ Coding & Computer Science Song.mp4';
import Complete from '../assets/Break it Down! _ Coding & Computer Science Song.mp4';

function Video() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(introVideo);
  const [videoTimestamps, setVideoTimestamps] = useState({});

  const handleVideoChange = (video) => {
    // Save the current time of the video before switching
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setVideoTimestamps((prev) => ({
        ...prev,
        [currentVideo]: currentTime,
      }));
    }

    // Switch to the selected video
    setCurrentVideo(video);
  };

  const handleLoadedMetadata = () => {
    // Set the video to the saved timestamp or start from the beginning
    if (videoRef.current) {
      videoRef.current.currentTime = videoTimestamps[currentVideo] || 0;
      videoRef.current.play(); // Automatically start playing the video
    }
  };

  return (
    <div>
      <div className="flex border-2 ">
        <div className="sidebar p-5 text-center">
          <button
            className="text-center flex font-bold tracking-widest text-xl mt-5 text-white rounded-lg p-3 bg-purple-950"
            onClick={() => navigate('/')}
          >
            <IoChevronBack
              style={{ color: 'white', fontSize: '1.5rem', margin: 'auto' }}
            />{' '}
            Back
          </button>
          <h2 className="text-center font-bold tracking-wide text-xl mt-5 text-purple-950 rounded-lg p-2 border-2 border-purple-950 ">
            Course
          </h2>
          <ul className="text-lg font-semibold mt-5">
            <li onClick={() => handleVideoChange(introVideo)}>Introduction</li>
            <li onClick={() => handleVideoChange(objectiveVideo)}>Objective</li>
            <li onClick={() => handleVideoChange(learningVideo)}>Learning</li>
            <li onClick={() => handleVideoChange(Training)}>Training</li>
            <li onClick={() => handleVideoChange(Revision)}>Revision</li>
            <li onClick={() => handleVideoChange(Ques)}>Q&A</li>
            <li onClick={() => handleVideoChange(Complete)}>Completion</li>
          </ul>
        </div>
        <div className="content p-5 flex ">
          <video
            ref={videoRef}
            key={currentVideo}
            width="100%"
            controls
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
