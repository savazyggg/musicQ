import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { onSearch } from "./api/onSearch";

const Header = ({ isLogin }) => {
  const [findText, setFindText] = useState("");
  const [album, setAlbum] = useState([]);
  const { access_token } = isLogin || {};
  const onSearchInput = (e) => setFindText(e.target.value);

  const onSearchBtn = async (access_token, findText) => {
    console.log("onSearch" + access_token, findText);
    const result = await onSearch(access_token, findText);
    console.log("result" + result);
    setAlbum(result);
  };

  useEffect(() => {
    console.log(album);
  }, [album]);

  return (
    <SHeader>
      <SSearchbar>
        <Input
          bg="blue.400"
          color="white"
          padding={4}
          marginTop={6}
          onChange={onSearchInput}
          value={findText}
        />
        <Button
          bg="blue.500"
          color="white"
          marginTop={6}
          width="30%"
          _hover={{ bg: "blue.700" }}
          onClick={() => onSearchBtn(access_token, findText)}
        >
          Search
        </Button>
      </SSearchbar>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  background-color: yellow;
  height: 40px;
  width: 375px;
`;

const SSearchbar = styled.div`
  display: flex;
`;
