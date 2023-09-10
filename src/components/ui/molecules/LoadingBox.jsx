import { GridItem, keyframes } from "@chakra-ui/react";
import { theme } from "../../common/core";
import styled from "@emotion/styled";
import { SContainerX } from "../../common/style";

const LoadingBox = () => {
  const loadingAnimation = keyframes`
    0% {
      background-color: ${theme.subFontColor};
    }
    50% {
      background-color: ${theme.bg};
    }
    100% {
      background-color: ${theme.subFontColor};
    }
  `;

  const LoadingGridItem = styled(GridItem)`
    animation: ${loadingAnimation} 1s linear infinite;
  `;

  return (
    <>
      <LoadingGridItem
        colSpan={1}
        margin="10px"
        width="250px"
        height="30px"
        borderRadius="8px"
        backgroundColor={theme.bg}
      />
      <SContainerX>
        <LoadingGridItem
          colSpan={1}
          margin="0 5px"
          width="160px"
          height="160px"
          borderRadius="8px"
          backgroundColor={theme.bg}
        />
        <LoadingGridItem
          colSpan={1}
          margin="0 5px"
          width="160px"
          height="160px"
          borderRadius="8px"
          backgroundColor={theme.bg}
        />
        <LoadingGridItem
          colSpan={1}
          margin="0 5px"
          width="160px"
          height="160px"
          borderRadius="8px"
          backgroundColor={theme.bg}
        />
      </SContainerX>
    </>
  );
};

export default LoadingBox;
