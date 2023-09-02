import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { theme } from "../../common/core";
import { onSearch } from "../../api/onSearch";

const Header = ({ isLogin }) => {
  const [findText, setFindText] = useState("");
  const [album, setAlbum] = useState([]);
  const { access_token } = isLogin || {};
  const onSearchInput = (e) => setFindText(e.target.value);

  const onSearchBtn = async (access_token, findText) => {
    console.log("onSearch" + access_token, findText);
    const result = await onSearch(access_token, findText);
    console.log("result" + result);
    setAlbum(result);
  };

  useEffect(() => {
    console.log(album);
  }, [album]);

  return (
    <SHeader>
      <SSearchbar>
        <input onChange={onSearchInput} value={findText} />
        <button onClick={() => onSearchBtn(access_token, findText)}>
          Search
        </button>
      </SSearchbar>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${theme.subFontColor};
  height: 35px;
  width: 100%;
`;

const SSearchbar = styled.div`
  display: flex;
  width: 100%;
  input {
    padding-left: 20px;
    width: 100%;
    background-color: ${theme.subFontColor};
  }
  input:focus {
    outline: none;
  }
  button {
    width: 20%;
    background-color: ${theme.buttonColor};
  }
  button:hover {
    background-color: ${theme.pointFontColor};
  }
`;
