import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { SText } from "../../common/style";
import { theme } from "../../common/core";

const URL =
  "https://p.scdn.co/mp3-preview/72d6b312e4cbd1fd8219427fe1e6d1f5dfd4c85f?cid=250e7b29512a4700bfd8125578a501d5";

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const downloadSong = async () => {
      try {
        const response = await fetch(URL);
        const blob = await response.blob();
        const songUrl = window.URL.createObjectURL(blob);
        const newAudioElement = new Audio(songUrl);
        setAudioElement(newAudioElement);
      } catch (error) {
        console.error("노래 다운로드 실패:", error);
      }
    };
    downloadSong();
  }, []);

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

  const playSong = () => {
    setIsPlaying(true);
    audioElement.play();
  };

  const handlePlayPause = () => {
    if (audioElement && isPlaying) {
      audioElement.pause();
    }
    setIsPlaying(false);
  };

  const updateCurrentTime = () => {
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            transform="scale(-1, 1)"
          >
            <path
              d="M0 19v-14l12 7-12 7zm12 0v-14l12 7-12 7z"
              fill={theme.fontColor}
            />
          </svg>
        </div>
        {isPlaying ? (
          <div onClick={handlePlayPause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"
                fill={theme.fontColor}
              />
            </svg>
          </div>
        ) : (
          <div onClick={playSong}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M3 22v-20l18 10-18 10z" fill={theme.fontColor} />
            </svg>
          </div>
        )}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 19v-14l12 7-12 7zm12 0v-14l12 7-12 7z"
              fill={theme.fontColor}
            />
          </svg>
        </div>
      </div>
      <div>
        <ProgressBarContainer>
          <ProgressBarFill value={currentTime} max={duration} />
        </ProgressBarContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>0:{Math.floor(currentTime)}</Text>
          <Text>0:{Math.floor(duration)}</Text>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;

const ProgressBarFill = styled.div`
  width: ${(props) => (props.value / props.max) * 100}%;
  height: 100%;
  background-color: ${theme.hoverColor};
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.bg};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 30px;
`;

const Text = styled.p`
  color: ${theme.subFontColor};
  font-size: 13px;
`;
