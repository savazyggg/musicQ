import React from "react";
import SectionLayout from "../ui/molecules/SectionLayout";
import { Image, Text } from "@chakra-ui/react";

const ArtistPage = ({ isLogin, onHeaderActive }) => {
  return (
    <SectionLayout onHeaderActive={onHeaderActive}>
      <div>
        <Image></Image>
      </div>
    </SectionLayout>
  );
};

export default ArtistPage;
