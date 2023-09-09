import { Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { SLayOut } from "../../Layout";
import { opacity, theme } from "../common/core";
import MusicBar from "../ui/organisms/MusicBar";
const ListeningPage = ({ onClick, src }) => {
  const { songImg, songTitle, songArtist } = src;

  return (
    <SLayOut
      style={{
        position: "fixed",
        minWidth: "100vw",
        zIndex: "3",
        padding: "0 20px",
        borderRadius: "10px",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={onClick}
            backgroundColor={`rgba(225, 225, 225, ${opacity.wavy})`}
            width="80px"
            height="10px"
            margin="0 auto"
          />
        </div>
        <Image
          src={songImg}
          width="75%"
          borderRadius="10px"
          margin="60px auto"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            margin: "0 auto",
          }}
        >
          <div>
            <Text fontSize="24px">{songTitle}</Text>
            <Text>{songArtist}</Text>
          </div>
          <div
            style={{
              margin: "auto 0",
              marginRight: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M26.582 13.324C26.846 12.551 27 11.784 27 11.04c0-4.006-1.929-6.849-5.289-7.809-2.738-.778-5.38.667-6.603 1.501C18.671 7.161 24.078 11.069 26.582 13.324zM3.075 9.817C3.034 10.214 3 10.616 3 11.04c0 6.397 10.994 14.409 11.455 14.751L15 26.178l.545-.388c.166-.123 1.699-1.243 3.591-2.921C13.539 17.645 5.458 11.58 3.075 9.817zM20.724 21.398c1.756-1.7 3.577-3.737 4.803-5.825C22.182 12.31 13.717 5.128 11.013 3.049c-.799-.083-1.688-.056-2.677.163C5.7 3.802 3.921 5.761 3.28 8.595 4.982 9.698 14.471 15.711 20.724 21.398z"
                fill={theme.fontColor}
              ></path>
            </svg>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          {/* <ReactAudioPlayer
            src="/path/to/audio.mp3"
            controls
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          /> */}
          <MusicBar />
        </div>
      </div>
    </SLayOut>
  );
};

export default ListeningPage;
