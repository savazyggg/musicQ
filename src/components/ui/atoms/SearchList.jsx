import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { theme } from "../../common/core";

const SearchList = ({ imgSrc, albumName, artist, albumType, type }) => {
  return (
    <>
      <Image
        src={imgSrc}
        width="80px"
        borderRadius={type === "album" ? 50 : 7}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text margin={0}>
          {albumName} - {albumType}
        </Text>
        <Text margin={0} color={theme.subFontColor}>
          {type} ✦ {artist}
        </Text>
      </div>
      <Text>〉</Text>
    </>
  );
};

export default SearchList;
