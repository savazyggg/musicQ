import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  align-items: center;
  background-color: grey;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
