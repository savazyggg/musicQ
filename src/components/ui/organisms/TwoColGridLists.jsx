import { Grid, theme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { onRecommand } from "../../api/onRecommand";
import { SText, STitle } from "../../common/style";
import OneRowGrid from "../atoms/OneRowGrid";

const TwoColGridLists = ({ isLogin, genre, title, substring, width }) => {
  const [list, setList] = useState(null);

  const { access_token } = isLogin || {};
  useEffect(() => {
    const onRecommandCall = async () => {
      const result = await onRecommand(access_token, genre);

      setList(result);
    };
    onRecommandCall();
  }, [isLogin]);

  return (
    <>
      <STitle style={{ margin: "5px" }}>{title}</STitle>
      <div>
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          {list &&
            list.map((el) => (
              <OneRowGrid
                width={width}
                key={el.album.id}
                src={el.album.images[1].url}
              >
                <SText marginTop={1}>
                  {el.name.length > substring
                    ? el.name.substring(0, substring + " ...")
                    : el.name}
                </SText>
                <SText marginTop={0} color={theme.subFontColor}>
                  {el.artists[0].name > substring
                    ? el.artists[0].name.substring(0, substring) + " ..."
                    : el.artists[0].name}
                </SText>
              </OneRowGrid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default TwoColGridLists;
