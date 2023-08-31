import { Image, GridItem } from "@chakra-ui/react";

export const TwoColGrid = ({ src, onClick, children }) => {
  return (
    <GridItem colSpan={1} onClick={onClick} margin="0 5px">
      <Image src={src} minWidth="155px" borderRadius="5px" />
      {children}
    </GridItem>
  );
};
