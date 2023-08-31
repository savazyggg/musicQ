import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onRecommand } from "./api/onRecommand";
import { Grid, Text } from "@chakra-ui/react";
import { onRecommandDetail } from "./api/onRecommandDetail";
import { SContainer, STitle } from "./common/style";
import { TwoColGrid } from "./ui/TwoColGird";
import { theme } from "./common/core";

const IntroPage = ({ isLogin }) => {
  const [list, setList] = useState([]);
  const { access_token } = isLogin || {};
  useEffect(() => {
    const onRecommandCall = async () => {
      const result = await onRecommand(access_token);
      setList(result);
    };
    onRecommandCall();
  }, [isLogin]);
  console.log(list);

  return (
    <SContainer>
      <STitle style={{ margin: "15px" }}>둘러보기</STitle>
      {/* <Grid marginBottom="90px" templateColumns="repeat(2, 1fr)" gap={5}> */}
      <div style={{ display: "flex", overflow: "auto" }}>
        {list &&
          list.map((el) => (
            <TwoColGrid
              key={el.album.id}
              onClick={() => onRecommandDetail(access_token, el.href)}
              src={el.album.images[1].url}
            >
              <SText marginTop={1}>
                {el.name.length > 16
                  ? el.name.substring(0, 16) + " ..."
                  : el.name}
              </SText>
              <SText marginTop={0} color={theme.subFontColor}>
                {el.artists[0].name > 16
                  ? el.artists[0].name.substring(0, 16) + " ..."
                  : el.artists[0].name}
              </SText>
            </TwoColGrid>
          ))}
      </div>
    </SContainer>
  );
};

export default IntroPage;

const SText = styled(Text)`
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis",
`;
