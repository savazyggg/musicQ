import { GridItem, Image } from "@chakra-ui/react";
import React from "react";

const OneRowGrid = ({ src, onClick, children, width, height = width }) => {
  return (
    <GridItem colSpan={1} onClick={onClick} margin="0 5px">
      <Image
        src={src}
        minWidth={width}
        height={height}
        borderRadius="7px"
        objectFit="cover"
      />
      {children}
    </GridItem>
  );
};

export default OneRowGrid;
