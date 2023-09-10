import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { onRecommand } from "../../api/onRecommand";
import { opacity, theme } from "../../common/core";
import { SContainerX, STitle } from "../../common/style";
import useGetApi from "../../hooks/useGetApi";
import LoadingBox from "../molecules/LoadingBox";

const WideListSlid = ({ isLogin, genre, title, substring }) => {
  const { list, isLoading } = useGetApi({
    func: onRecommand,
    api: genre,
    isLogin,
  });

  if (isLoading) {
    return <LoadingBox />; // 로딩 중일 때 표시할 내용
  }

  return (
    <>
      <STitle style={{ margin: "5px" }}>{title}</STitle>
      <div style={{ margin: "0 -20px" }}>
        <SContainerX
          style={{
            flexDirection: "row", // 행으로 나열되도록 설정
            flexWrap: "wrap", // 넘치면 다음 열로 넘어가도록 설정
          }}
        >
          <Grid templateColumns={`repeat(${Math.ceil(list?.length / 5)}, 1fr)`}>
            {list &&
              list.map((el, i) => (
                <GridItem
                  borderTop={`1px solid rgba(176, 168, 185, ${opacity.heavy})`}
                  borderBottom={
                    (i + 1) % 5 === 0 &&
                    `1px solid rgba(176, 168, 185, ${opacity.heavy})`
                  }
                  width="calc(100vw - 50px);"
                  key={el.album.id}
                  marginRight={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <Image
                        borderRadius="5px"
                        src={el.album.images[1].url}
                        width="58px"
                        marginRight="8px"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Text margin={0}>
                          {el.name.length > substring
                            ? el.name.substring(0, substring) + " ..."
                            : el.name}
                        </Text>
                        <Text margin={0} color={theme.subFontColor}>
                          {el.artists[0].name}
                        </Text>
                      </div>
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
                </GridItem>
              ))}
          </Grid>
        </SContainerX>
      </div>
    </>
  );
};

export default WideListSlid;
