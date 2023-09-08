import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../common/core";

const Button = ({ children, onClick, value, active }) => {
  return (
    <SButton onClick={onClick} value={value} active={active}>
      {children}
    </SButton>
  );
};

export default Button;

const SButton = styled.button`
  font-weight: 500;
  width: 49%;
  margin: 10px 0;
  padding: 2px;
  border: 1px solid ${theme.subFontColor};
  border-radius: 7px;
  background-color: ${(props) =>
    props.active ? `${theme.subFontColor}` : "transparent"};
  &:active {
    background-color: ${theme.subFontColor};
  }
`;
