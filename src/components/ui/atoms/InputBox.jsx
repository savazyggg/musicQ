import styled from "@emotion/styled";
import { useEffect } from "react";
import { onSearch } from "../../api/onSearch";

import { opacity, theme } from "../../common/core";

const InputBox = ({ onChange, searchInput, isLogin, onSearchDataUpadate }) => {
  const onSearchClick = async () => {
    if (searchInput == "") return;
    const data = await onSearch(isLogin, searchInput);
    onSearchDataUpadate({
      albums: data.albums,
      artists: data.artists,
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <SInput onChange={onChange} value={searchInput}></SInput>
        <SButton onClick={onSearchClick}>검색</SButton>
      </div>
    </>
  );
};

export default InputBox;

const SInput = styled.input`
  background-color: rgba(176, 168, 185, ${opacity.wavy});
  border-radius: 7px;
  width: 90%;
  padding: 5px;
  height: 30px;
  &:focus {
    outline: none;
    border: none;
  }
`;
const SButton = styled.button`
  margin: 0 auto;
`;
