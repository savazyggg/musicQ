import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./components/common/core";

const Layout = ({ isLogin }) => {
  return (
    <SLayOut>
      <Header isLogin={isLogin} />
      <Outlet />
      <Footer />
    </SLayOut>
  );
};

export default Layout;

const SLayOut = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.bg};
  color: ${theme.fontColor};
  font-weight: 500;
  max-width: 500px;
  min-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
