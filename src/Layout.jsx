import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import { theme } from "./components/common/core";
import Header from "./components/ui/organisms/Header";
import Footer from "./components/ui/organisms/Footer";

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
    font-family: "Roboto", sans-serif;
  }
`;
