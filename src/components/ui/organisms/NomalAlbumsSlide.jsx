import { onTracks } from "../../api/onTracks";
import { theme } from "../../common/core";
import { SContainerX, SText, STitle } from "../../common/style";
import useGetApi from "../../hooks/useGetApi";
import OneRowGrid from "../atoms/OneRowGrid";
const NomalAlbumsSlid = ({ isLogin, title, substring, width, genre }) => {
  const { list, isLoading } = useGetApi({
    func: onTracks,
    api: genre,
    isLogin,
  });

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
    <div>
      <STitle style={{ margin: "5px" }}>{title}</STitle>
      <div
        style={{
          margin: "0 -20px",
        }}
      >
        <SContainerX style={{ margin: "0 -4px" }}>
          {list &&
            list.map(
              (el, i) =>
                i !== 0 && (
                  <OneRowGrid width={width} key={el.id} src={el.images[1].url}>
                    <SText marginTop={1}>
                      {el.name.length > substring
                        ? el.name.substring(0, substring) + " ..."
                        : el.name}
                    </SText>
                  </OneRowGrid>
                )
            )}
        </SContainerX>
      </div>
    </div>
  );
};

export default NomalAlbumsSlid;
