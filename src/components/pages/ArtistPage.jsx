import { Image, Text } from "@chakra-ui/react";
import { substring, theme } from "../common/core";
import { onTracks } from "../api/onTracks";
import useGetApi from "../hooks/useGetApi";
import Artist from "../ui/molecules/Artist";
import SectionLayout from "../ui/molecules/SectionLayout";
import NomalSlid from "../ui/organisms/NomalSlid";
import NomalAlbumsSlid from "../ui/organisms/NomalAlbumsSlide";

const URL =
  "https://api.spotify.com/v1/artists/0NIIxcxNHmOoyBx03SfTCD/albums?include_groups=single%2Calbum%2Cappears_on&market=KR&limit=10&offset=5";
const ArtistPage = ({ isLogin, onHeaderActive }) => {
  const { list, isLoading } = useGetApi({ func: onTracks, api: URL, isLogin });
  console.log(list);
  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }
  return (
    <SectionLayout onHeaderActive={onHeaderActive}>
      <Artist isLogin={isLogin} />
      {list[0] && (
        <div style={{ display: "flex" }}>
          <Image
            minWidth="220px"
            height="220px"
            objectFit="cover"
            src={list[0].images[1].url}
            borderRadius="8px"
            border={`2px solid ${theme.subFontColor}`}
          ></Image>
          <div
            style={{
              paddingLeft: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginTop: "8px",
              }}
            >
              <Text color={theme.subFontColor} fontSize="11px">
                {list[0].release_date}
              </Text>
              <Text fontSize="24px">{list[0].name}</Text>
              <Text>{list[0].total_tracks} tracks</Text>
            </div>
            <button
              style={{
                backgroundColor: theme.hoverColor,
                borderRadius: "8px",
                color: theme.bg,
                fontWeight: 600,
                padding: "2px",
                marginBottom: "3px",
              }}
            >
              listen
            </button>
          </div>
        </div>
      )}

      <NomalAlbumsSlid
        isLogin={isLogin}
        title="albums"
        width="150px"
        genre={URL}
      />
    </SectionLayout>
  );
};

export default ArtistPage;
