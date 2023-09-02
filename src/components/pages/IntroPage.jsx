import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onRecommand } from "../api/onRecommand";
import { Grid, Text } from "@chakra-ui/react";
import { onRecommandDetail } from "../api/onRecommandDetail";
import { SContainer, STitle } from "../common/style";
import { TwoColGrid } from "../ui/atoms/TwoColGird";
import { theme } from "../common/core";

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
      <div style={{ marginBottom: "60px" }}>
        <STitle style={{ marginTop: "15px", fontSize: "30px" }}>
          둘러보기
        </STitle>
        {/* <Grid marginBottom="90px" templateColumns="repeat(2, 1fr)" gap={5}> */}

        <SContainerX
          style={{
            display: "flex",
            overflow: "auto",
            margin: "0 -20px",
          }}
        >
          {list &&
            list.map((el, i) => (
              <TwoColGrid
                width="335"
                height="200"
                releaseDate={el.album.release_date}
                key={el.album.id}
                onClick={() => onRecommandDetail(access_token, el.href)}
                src={el.album.images[1].url}
              >
                <SText marginTop={1} fontSize="24px" fontWeight={600}>
                  {el.name.length > 23
                    ? el.name.substring(0, 23) + " ..."
                    : el.name}
                </SText>
                <SText marginTop={0} color={theme.subFontColor}>
                  {el.artists[0].name > 40
                    ? el.artists[0].name.substring(0, 40) + " ..."
                    : el.artists[0].name}
                </SText>
              </TwoColGrid>
            ))}
        </SContainerX>

        <STitle style={{ margin: "5px" }}>What's New</STitle>
        {/* <Grid marginBottom="90px" templateColumns="repeat(2, 1fr)" gap={5}> */}

        <SContainerX
          style={{
            display: "flex",
            overflow: "auto",

            padding: "5px",
            borderRadius: "7px",
          }}
        >
          {list &&
            list.map((el) => (
              <TwoColGrid
                width="160px"
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
        </SContainerX>
        <STitle style={{ margin: "5px" }}>Here's pick</STitle>
        {/* <Grid marginBottom="90px" templateColumns="repeat(2, 1fr)" gap={5}> */}

        <SContainerX
          style={{
            display: "flex",
            overflow: "auto",
          }}
        >
          {list &&
            list.map((el) => (
              <TwoColGrid
                width="160px"
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
        </SContainerX>
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

const SContainerX = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(176, 168, 185, 0);
  }
`;
