import { Box, Image, Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { opacity, theme } from "./common/core";

const imgUrl =
  "https://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1508240107/trefgdskgntu7j1vezjq.jpg";

const Footer = () => {
  const [isListen, setIsListen] = useState(false);
  const onListenToggle = () => setIsListen(!isListen);
  console.log(isListen);
  return (
    <SFooter>
      <div style={{ marginRight: 0 }}>
        <Image src={imgUrl} marginRight={1} height="58px" />
        <SText fontWeight={600} marginLeft="8px">
          The mystery
        </SText>
      </div>

      <div style={{ marginLeft: 0 }}>
        {isListen ? (
          <SText>
            <div onClick={onListenToggle}>
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
          </SText>
        ) : (
          <SText>
            <div onClick={onListenToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 22v-20l18 10-18 10z" fill={theme.fontColor} />
              </svg>
            </div>
          </SText>
        )}

        <SText2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 19v-14l12 7-12 7zm12 0v-14l12 7-12 7z"
                fill={theme.fontColor}
              />
            </svg>
          </div>
        </SText2>
      </div>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.div`
  position: fixed;
  max-width: 500px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgba(176, 168, 185, ${opacity.heavy});
  height: 60px;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(10px);
  div {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
`;

const SText = styled(Text)`
  div {
    width: 38px;
    height: 38px;
    margin: 0;
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
