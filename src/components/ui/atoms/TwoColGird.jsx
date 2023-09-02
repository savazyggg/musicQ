import { Image, GridItem, Text } from "@chakra-ui/react";
import { opacity, theme } from "../../common/core";

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
            _hover={{
              backgroundColor: `rgba(176, 168, 185, ${opacity.heavy})`,
            }}
            _active={{
              backgroundColor: `rgba(176, 168, 185, ${opacity.sligth})`,
            }}
          >
            {children}
            <Image
              src={src}
              minWidth={width}
              height={height}
              borderRadius="7px"
              objectFit="cover"
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
