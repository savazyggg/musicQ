import { Input, Button, Checkbox } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onSearch } from "./api/onSearch";

const IntroPage = ({ isLogin }) => {
  const [findText, setFindText] = useState("");
  const [album, setAlbum] = useState([]);
  console.log(isLogin);
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
    <div>
      {access_token ? (
        <>
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
          <Checkbox>artist</Checkbox>
          <Checkbox>song</Checkbox>
        </>
      ) : (
        <div>로그인을 해주세요</div>
      )}
    </div>
  );
};

export default IntroPage;

const SSearchbar = styled.div`
  display: flex;
`;
