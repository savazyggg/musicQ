import { Box, Image, Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { opacity } from "./common/core";

//        <Image src={logo} marginRight={1} />
const Footer = () => {
  return (
    <SFooter>
      <div>
        <Text>이미지</Text>
        <Text>제목</Text>
      </div>
      <div>
        <Text>재생/스탑</Text>
        <Text>넘기기</Text>
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
  }
`;
