import styled from "@emotion/styled";
import { opacity } from "./core";

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
