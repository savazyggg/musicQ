import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { theme } from "../../common/core";

//Todo: album이랑 아티스트 나누기, 버튼 토글로 컴포넌트 렌더링 제어
const SearchList = ({ imgSrc, albumName, artist, albumType, type }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Image
          src={imgSrc}
          width="80px"
          marginRight={2}
          borderRadius={type === "album" ? 7 : 50}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text margin={0}>
            {albumName} - {albumType}
          </Text>
          <Text margin={0} color={theme.subFontColor}>
            {type} ✦ {artist}
          </Text>
        </div>
      </div>
      <Text fontWeight="bold" margin="auto 0">
        〉
      </Text>
    </>
  );
};

export default SearchList;
