import { Box, Image, Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

import { opacity, theme } from "../../common/core";
import ListeningPage from "../../pages/ListeningPage";
import { useNavigate } from "react-router-dom";

const songImg =
  "https://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1508240107/trefgdskgntu7j1vezjq.jpg";
const songTitle = "The mystery";
const songArtist = "Ariana Grande";

const Footer = ({ onClick }) => {
  const [listeningSrc, setListeningSrc] = useState({
    songImg,
    songTitle,
    songArtist,
  });
  const [isListen, setIsListen] = useState(false);
  const [listeningModal, setListeningModal] = useState(false);
  const onListenToggle = () => setIsListen(!isListen);
  const onListeningModalToggle = () => setListeningModal(!listeningModal);
  const navigate = useNavigate();
  return (
    <>
      {listeningModal && (
        <ListeningPage onClick={onListeningModalToggle} src={listeningSrc} />
      )}
      <SFooter
        style={{
          marginBottom: "70px",
        }}
        active
      >
        <div
          style={{ marginRight: 0, width: "80%" }}
          onClick={onListeningModalToggle}
        >
          <Image
            src={songImg}
            marginRight={2}
            height="58px"
            borderRadius="5px"
          />

          <SText fontWeight={600}>{listeningSrc.songTitle}</SText>
        </div>

        <div style={{ marginLeft: 0 }}>
          {isListen ? (
            <div style={{ margin: "0" }} onClick={onListenToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"
                  fill={theme.fontColor}
                />
              </svg>
            </div>
          ) : (
            <div style={{ margin: "0" }} onClick={onListenToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path d="M3 22v-20l18 10-18 10z" fill={theme.fontColor} />
              </svg>
            </div>
          )}

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 19v-14l12 7-12 7zm12 0v-14l12 7-12 7z"
                fill={theme.fontColor}
              />
            </svg>
          </div>
        </div>
      </SFooter>
      <SFooter
        style={{ borderTop: `1px solid rgba(176, 168, 185, ${opacity.heavy})` }}
      >
        <ContentContainer
          onClick={() => {
            onClick("지금 듣기");
            navigate("/now");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="55"
            height="55"
            viewBox="0 0 50 50"
          >
            <path
              d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M29.36,32H13l7.64-14H37L29.36,32z"
              fill={theme.fontColor}
            ></path>
          </svg>
          <Text fontSize={13}>지금 듣기</Text>
        </ContentContainer>

        <ContentContainer
          onClick={() => {
            onClick("둘러보기");
            navigate("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="55"
            height="55"
            viewBox="0 0 50 50"
          >
            <path
              d="M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z"
              fill={theme.fontColor}
            ></path>
          </svg>
          <Text fontSize={13}>둘러보기</Text>
        </ContentContainer>

        <ContentContainer
          onClick={() => {
            onClick("검색");
            navigate("/search");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="55"
            height="55"
            viewBox="0 0 64 64"
          >
            <path
              d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"
              fill={theme.fontColor}
            ></path>
          </svg>
          <Text fontSize={13}>검색</Text>
        </ContentContainer>

        <ContentContainer
          onClick={() => {
            onClick("보관함");
            navigate("/mylist");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="55"
            height="55"
            viewBox="0 0 50 50"
          >
            <path
              d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"
              fill={theme.fontColor}
            ></path>
          </svg>
          <Text fontSize={13}>보관함</Text>
        </ContentContainer>
      </SFooter>
    </>
  );
};

export default Footer;

const SFooter = styled.div`
  focus: pointer;
  position: absolute;
  max-width: 500px;
  display: flex;
  bottom: 0;
  justify-content: space-between;
  background-color: rgba(176, 168, 185, 0.1);
  height: 70px;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(10px);
  div {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  :active {
    background-color: ${(prop) =>
      prop.active && `rgba(176, 168, 185, ${opacity.wavy})`};
  }
`;

const SText = styled(Text)`
  margin: 0;
  padding: 0;
  div {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    border-radius: 50px;
  }
  svg {
    margin: auto;
    transition: transform 0.2s;
    transform-origin: center;
  }
  div:active {
    background-color: rgba(176, 168, 185, ${opacity.heavy});
  }
  div:active svg {
    transform: scale(0.5);
  }
`;

const SText2 = styled(SText)`
  div {
    overflow: hidden;
  }
  svg {
    margin: auto;
    transition: transform 0.2s;
    transform-origin: center;
  }
  div:active svg {
    transform: translateX(5rem);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2px;
`;
