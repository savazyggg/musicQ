import { Image, Text } from "@chakra-ui/react";
import { onSearchDetail } from "../../api/onSearchDetail";
import { theme } from "../../common/core";
import useGetApi from "../../hooks/useGetApi";

//https://api.spotify.com/v1/artists/0NIIxcxNHmOoyBx03SfTCD/albums?include_groups=single%2Calbum%2Cappears_on&market=KR&limit=10&offset=5
const URL = "https://api.spotify.com/v1/artists/0NIIxcxNHmOoyBx03SfTCD";
const Artist = ({ isLogin }) => {
  const { list } = useGetApi({ func: onSearchDetail, api: URL, isLogin });

  return (
    <div>
      <Image
        minWidth="500px"
        height="400px"
        objectFit="cover"
        src={list?.images[0].url}
        margin="-80px -20px 0 -20px"
      ></Image>
      <Text
        margin="-100px 0 0 0"
        fontSize="60px"
        zIndex="3"
        color={theme.hoverColor}
        textShadow="2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black;"
      >
        {list?.name}
      </Text>
    </div>
  );
};

export default Artist;
