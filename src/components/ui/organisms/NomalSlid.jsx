import { useEffect, useState } from "react";
import { onRecommand } from "../../api/onRecommand";
import { theme } from "../../common/core";
import { SContainerX, SText, STitle } from "../../common/style";
import OneRowGrid from "../atoms/OneRowGrid";
const NomalSlid = ({ isLogin, genre, title, substring, width }) => {
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
      <div
        style={{
          margin: "0 -20px",
        }}
      >
        <SContainerX style={{ margin: "0 -4px" }}>
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
        </SContainerX>
      </div>
    </>
  );
};

export default NomalSlid;
