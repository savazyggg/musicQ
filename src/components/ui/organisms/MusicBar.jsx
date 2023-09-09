import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const downloadSong = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const songUrl = URL.createObjectURL(blob);
      const newAudioElement = new Audio(songUrl);
      setAudioElement(newAudioElement);
      setIsPlaying(true);
    } catch (error) {
      console.error("노래 다운로드 실패:", error);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioElement.currentTime);
  };

  useEffect(() => {
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateCurrentTime);
      audioElement.addEventListener("loadedmetadata", () => {
        setDuration(audioElement.duration);
      });
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, [audioElement]);

  return (
    <div>
      <button
        onClick={() =>
          downloadSong(
            "https://p.scdn.co/mp3-preview/72d6b312e4cbd1fd8219427fe1e6d1f5dfd4c85f?cid=250e7b29512a4700bfd8125578a501d5"
          )
        }
      >
        노래 다운로드 및 재생
      </button>
      <button onClick={handlePlayPause}>
        {isPlaying ? "일시정지" : "재생"}
      </button>
      <div>
        <ProgressBarContainer>
          <ProgressBarFill value={currentTime} max={duration} />
        </ProgressBarContainer>
        <p>0:{Math.floor(currentTime)}</p>
        <p>0:{Math.ceil(duration)}</p>
      </div>
    </div>
  );
};

export default MusicBar;

const ProgressBarFill = styled.div`
  width: ${(props) => (props.value / props.max) * 100}%;
  height: 100%;
  background-color: blue;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
`;
