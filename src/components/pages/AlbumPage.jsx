import { Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { onSearchDetail } from "../api/onSearchDetail";
import { theme } from "../common/core";
import SectionLayout from "../ui/molecules/SectionLayout";
import Button from "../ui/atoms/Button";
import { STitle } from "../common/style";

const url = "https://api.spotify.com/v1/albums/6zXUDBGLbrB9Kgkw2Y3F7L";

const AlbumPage = ({ isLogin, onHeaderActive }) => {
  const [list, setList] = useState(null);

  const { access_token } = isLogin || {};

  useEffect(() => {
    const onRecommandCall = async () => {
      const result = await onSearchDetail(access_token, url);
      setList(result);
    };
    onRecommandCall();
  }, [isLogin]);

  console.log(list);
  const downloadSong = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const songUrl = URL.createObjectURL(blob);
      const audioElement = new Audio(songUrl);
      //url, 사진, 제목 풋터에 보낸다음에 풋터에서 플레이 제어
      audioElement.play();
    } catch (error) {
      console.error("노래 다운로드 실패:", error);
    }
  };

  return (
    <SectionLayout title="Detail.." onHeaderActive={onHeaderActive}>
      <Image
        src={list?.images[1].url}
        marginRight={1}
        width="65%"
        margin="0 auto"
        borderRadius="8px"
      />
      <Text color={theme.subFontColor} fontSize="10px" marginLeft="65%">
        {list.release_date}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <STitle>{list.name}</STitle>
        <Text fontSize="18px" fontWeight="600" color={theme.hoverColor}>
          {list.artists[0].name}
        </Text>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button>재생</Button>
        <Button>임의재생</Button>
      </div>

      {list?.tracks.items.map((el) => {
        return (
          <div
            key={el.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                padding: "5px",
              }}
              onClick={() => downloadSong(el.preview_url)}
            >
              <Text marginRight="8px" color={theme.subFontColor}>
                {el.track_number}
              </Text>
              <Text>{el.name}</Text>
            </div>
            <div style={{ margin: "auto 0" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 30 30"
              >
                <path
                  d="M26.582 13.324C26.846 12.551 27 11.784 27 11.04c0-4.006-1.929-6.849-5.289-7.809-2.738-.778-5.38.667-6.603 1.501C18.671 7.161 24.078 11.069 26.582 13.324zM3.075 9.817C3.034 10.214 3 10.616 3 11.04c0 6.397 10.994 14.409 11.455 14.751L15 26.178l.545-.388c.166-.123 1.699-1.243 3.591-2.921C13.539 17.645 5.458 11.58 3.075 9.817zM20.724 21.398c1.756-1.7 3.577-3.737 4.803-5.825C22.182 12.31 13.717 5.128 11.013 3.049c-.799-.083-1.688-.056-2.677.163C5.7 3.802 3.921 5.761 3.28 8.595 4.982 9.698 14.471 15.711 20.724 21.398z"
                  fill={theme.fontColor}
                ></path>
              </svg>
            </div>
          </div>
        );
      })}
    </SectionLayout>
  );
};

export default AlbumPage;
