import React, { useState } from "react";
import { onSearchDetail } from "../api/onSearchDetail";
import { substring } from "../common/core";
import Button from "../ui/atoms/Button";
import InputBox from "../ui/atoms/InputBox";
import SearchListsArtists from "../ui/molecules/SearchLists";
import SearchListsAlbums from "../ui/molecules/SearchListsAlbums";
import SectionLayout from "../ui/molecules/SectionLayout";
import TwoColGridLists from "../ui/organisms/TwoColGridLists";

const SearchPage = ({ isLogin, onHeaderActive }) => {
  const { access_token } = isLogin || {};
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchType, setSearchType] = useState("album");
  const [activeButton, setActiveButton] = useState("album");
  const onSearchInputChange = (e) => setSearchInput(e.target.value);
  const onSearchDataUpadate = (value) => setSearchData(value);
  const onSearchTypeChange = (e) => {
    setSearchType(e.target.value);
    setActiveButton(e.target.value);
  };

  //onSearchDetailClick으로 상태관리 라이브러리에 요청할 url저장 할것.
  const onSearchArtistsClick = async (api) => {
    const result = await onSearchDetail(access_token, api);
    console.log(result);
  };

  console.log(searchData);
  return (
    <SectionLayout
      title="Search! what you curious"
      onHeaderActive={onHeaderActive}
    >
      <InputBox
        onChange={onSearchInputChange}
        searchInput={searchInput}
        isLogin={access_token}
        onSearchDataUpadate={onSearchDataUpadate}
      />
      {searchData ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={onSearchTypeChange}
              value="album"
              active={activeButton === "album"}
            >
              앨범
            </Button>
            <Button
              onClick={onSearchTypeChange}
              value="artist"
              active={activeButton === "artist"}
            >
              아티스트
            </Button>
          </div>
          {searchType === "album" && (
            <SearchListsAlbums
              searchData={searchData}
              searchType={searchType}
            />
          )}
          {searchType === "artist" && (
            <SearchListsArtists
              searchData={searchData}
              searchType={searchType}
              onClick={onSearchArtistsClick}
            />
          )}
        </>
      ) : (
        <TwoColGridLists
          title="category"
          isLogin={isLogin}
          genre="hiphop"
          width="200px"
          substring={substring.s16}
        ></TwoColGridLists>
      )}
    </SectionLayout>
  );
};

export default SearchPage;
