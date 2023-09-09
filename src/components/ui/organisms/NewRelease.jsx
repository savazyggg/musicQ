import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { onTracks } from "../../api/onTracks";
import { borderRadius, theme } from "../../common/core";
import { SContainerX, SText, STitle } from "../../common/style";
import useGetApi from "../../hooks/useGetApi";
import OneRowGrid from "../atoms/OneRowGrid";

const NewRelease = ({
  isLogin,
  title,
  substring,
  width,
  genre,
  height = width,
}) => {
  const { list, isLoading } = useGetApi({
    func: onTracks,
    api: genre,
    isLogin,
  });
  console.log(list);
  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
    <div>
      <STitle style={{ margin: "5px" }}>{title}</STitle>
      <div
        style={{
          margin: "0 -20px",
        }}
      >
        <SContainerX style={{ margin: "0 -4px" }}>
          {list &&
            list.map((el) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundImage: `url(${el.images[1].url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginLeft: "8px",
                  borderRadius: "8px",
                  padding: "5px",
                }}
                key={el.id}
              >
                <Text
                  marginLeft="5px"
                  fontSize="10px"
                  color={theme.subFontColor}
                >
                  {el.release_date}
                </Text>
                <OneRowGrid
                  width={width}
                  src={el.images[1].url}
                  height={height}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(1, 1, 1, 0.3)",
                      padding: "2px 4px",
                      borderRadius: "7px",
                    }}
                  >
                    <SText marginTop={1} fontSize="20px">
                      {el.name.length > substring
                        ? el.name.substring(0, substring) + " ..."
                        : el.name}
                    </SText>
                    <SText color={theme.hoverColor}>
                      {el.artists[0].name > substring
                        ? el.artists[0].name.substring(0, substring) + " ..."
                        : el.artists[0].name}
                    </SText>
                  </div>
                </OneRowGrid>
              </div>
            ))}
        </SContainerX>
      </div>
    </div>
  );
};

export default NewRelease;
