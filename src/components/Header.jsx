import styled from "@emotion/styled";

const Header = ({ onLoginClick, onLogin, isLogin }) => {
  const onLoginClickBtn = async () => {
    const token = await onLogin();
    onLoginClick(token);
  };

  const onLogoutClickBtn = () => {
    onLoginClick(null);
    localStorage.removeItem("token");
  };

  console.log(isLogin);
  return (
    <SHeader>
      {isLogin ? (
        <button onClick={onLogoutClickBtn}>log-out</button>
      ) : (
        <button onClick={onLoginClickBtn}>log-in</button>
      )}
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  background-color: yellow;
  height: 40px;
  width: 375px;

  button {
    margin-right: 20px;
  }
`;
