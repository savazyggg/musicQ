import styled from "@emotion/styled";
import { opacity, theme } from "./core";
import { Text } from "@chakra-ui/react";

export const SContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - 35px);

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(176, 168, 185, ${opacity.heavy});
  }
`;

export const STitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.fontColor};
`;

export const SText = styled(Text)`
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis",
`;

export const SContainerX = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(176, 168, 185, 0);
  }
  padding: 0 20px;
  display: flex;
  overflow: auto;
`;
