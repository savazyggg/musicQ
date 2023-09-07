import { Image, Text } from "@chakra-ui/react";
import { theme } from "../../common/core";

const SearchList = ({ imgSrc, albumName, artist, albumType, type }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Image
          src={imgSrc}
          width="80px"
          height="80px"
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
          {albumType ? (
            <>
              <Text>{albumName}</Text>
              <Text color={theme.subFontColor}>
                {artist} ✦ {albumType}
              </Text>
            </>
          ) : (
            <>
              <Text>{albumName}</Text>
              <Text color={theme.subFontColor}>{type}</Text>
            </>
          )}
        </div>
      </div>
      <Text fontWeight="bold" margin="auto 0">
        〉
      </Text>
    </>
  );
};

export default SearchList;
