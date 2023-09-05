import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { theme } from "../../common/core";
import SearchList from "../atoms/SearchList";

const SearchLists = ({ searchData }) => {
  const albums = searchData.albums.items;
  const artists = searchData.artists.items;

  return (
    <div>
      {albums.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <SearchList
              imgSrc={el.images[1].url}
              albumName={el.name}
              albumType={el.album_type}
              type={el.type}
              artist={el.artists[0].name}
            />
          </div>
        );
      })}
      {artists.map((el) => {
        if (el.images[1]) {
          return (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
            >
              <SearchList
                imgSrc={el.images[1].url}
                albumName={el.name}
                albumType={el.album_type}
                type={el.type}
                artist={el.name}
              />
            </div>
          );
        }
        return null; // 이미지가 없는 경우에는 null을 반환하여 렌더링하지 않음
      })}
    </div>
  );
};

export default SearchLists;
