import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { opacity, theme } from "../../common/core";
import { onSearch } from "../../api/onSearch";
import { STitle } from "../../common/style";

const Header = ({ isLogin, whereNow, headerActive }) => {
  return (
    headerActive || (
      <SHeader>
        <div style={{ margin: "0 auto" }}>
          <STitle style={{ fontSize: "20px" }}>{whereNow}</STitle>
        </div>
      </SHeader>
    )
  );
};

export default Header;

const SHeader = styled.div`
  position: absolute;
  max-width: 500px;
  display: flex;
  top: 0;
  justify-content: space-between;
  background-color: rgba(176, 168, 185, ${opacity.heavy});
  height: 40px;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(10px);

  div {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  :active {
    background-color: ${(prop) =>
      prop.active && `rgba(176, 168, 185, ${opacity.wavy})`};
  }
`;

const SSHeader = styled.div`
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

// const [findText, setFindText] = useState("");
// const [album, setAlbum] = useState([]);
// const { access_token } = isLogin || {};
// const onSearchInput = (e) => setFindText(e.target.value);

// const onSearchBtn = async (access_token, findText) => {
//   console.log("onSearch" + access_token, findText);
//   const result = await onSearch(access_token, findText);
//   console.log("result" + result);
//   setAlbum(result);
// };

// useEffect(() => {
//   console.log(album);
// }, [album]);
