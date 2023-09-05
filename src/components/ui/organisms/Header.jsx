import styled from "@emotion/styled";
import { STitle } from "../../common/style";

const Header = ({ whereNow, headerActive }) => {
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
  align-items: center;
  top: 0;
  justify-content: space-between;
  background-color: rgba(176, 168, 185, 0.1);
  height: 40px;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(10px);
`;
