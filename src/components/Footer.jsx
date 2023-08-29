import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box position="fixed" bottom={0} width="375px;" backgroundColor="yellow">
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
