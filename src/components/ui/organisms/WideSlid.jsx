import { useEffect, useState } from "react";
import { theme } from "@chakra-ui/react";
import { TwoColGrid } from "../atoms/TwoColGird";
import { onRecommand } from "../../api/onRecommand";
import { SContainerX, SText, STitle } from "../../common/style";
import useGetApi from "../../hooks/useGetApi";

const WideSlid = ({
  isLogin,
  genre,
  title,
  substring1,
  substring2 = substring1,
  height,
}) => {
  const { list } = useGetApi({ func: onRecommand, api: genre, isLogin });

  return (
    <>
      <STitle style={{ margin: "5px" }}>{title}</STitle>
      <div
        style={{
          margin: "0 -20px",
        }}
      >
        <SContainerX style={{ margin: "0 -4px" }}>
          {list &&
            list.map((el) => (
              <TwoColGrid
                width="335"
                height={height}
                releaseDate={el.album.release_date}
                key={el.album.id}
                src={el.album.images[1].url}
              >
                <SText marginTop={1} fontSize="24px" fontWeight={600}>
                  {el.name.length > substring1
                    ? el.name.substring(0, substring1) + " ..."
                    : el.name}
                </SText>
                <SText marginTop={0} color={theme.subFontColor}>
                  {el.artists[0].name > substring2
                    ? el.artists[0].name.substring(0, substring2) + " ..."
                    : el.artists[0].name}
                </SText>
              </TwoColGrid>
            ))}
        </SContainerX>
      </div>
    </>
  );
};

export default WideSlid;
