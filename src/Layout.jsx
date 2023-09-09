import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import { theme } from "./components/common/core";
import Header from "./components/ui/organisms/Header";
import Footer from "./components/ui/organisms/Footer";
import { useState } from "react";
import "./Font.css";

const Layout = ({ headerActive }) => {
  const [whereNow, setWhereNow] = useState("둘러보기");
  const onWhereNowChange = (value) => setWhereNow(value);

  return (
    <SLayOut>
      <Header whereNow={whereNow} headerActive={headerActive} />
      <Outlet />
      <Footer onClick={onWhereNowChange} />
    </SLayOut>
  );
};
//background-color: ${theme.bg};
export default Layout;

const SLayOut = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(
    45deg,
    ${theme.hoverColor},
    ${theme.bg},
    ${theme.subFontColor}
  );
  color: ${theme.fontColor};
  font-weight: 500;
  max-width: 500px;
  min-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  * {
    font-family: "jogan";
  }
`;
