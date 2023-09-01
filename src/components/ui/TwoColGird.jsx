import { Image, GridItem, Text } from "@chakra-ui/react";
import { theme } from "../common/core";

export const TwoColGrid = ({
  src,
  onClick,
  children,
  width,
  height = width,
  releaseDate,
}) => {
  return (
    <div>
      {releaseDate ? (
        <>
          <GridItem
            backgroundColor="rgba(1,1,1,0.3)"
            borderRadius="7px"
            padding="5px 20px"
            colSpan={1}
            onClick={onClick}
            margin="0 5px"
          >
            {children}
            <Image
              src={src}
              minWidth={width}
              height={height}
              borderRadius="7px"
              objectFit="cover"
              border="1px solid white"
            />
            <Text
              fontSize="9px"
              textAlign="right"
              color={theme.subFontColor}
              marginRight="10px"
            >
              {releaseDate}
            </Text>
          </GridItem>
        </>
      ) : (
        <GridItem colSpan={1} onClick={onClick} margin="0 5px">
          <Image
            src={src}
            minWidth={width}
            height={height}
            borderRadius="7px"
          />
          {children}
        </GridItem>
      )}
    </div>
  );
};
