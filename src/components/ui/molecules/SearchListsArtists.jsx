import SearchList from "../atoms/SearchList";
import { useNavigate } from "react-router-dom";

const SearchListsArtists = ({ searchData, onClick }) => {
  const artists = searchData.artists.items;
  const navigate = useNavigate();
  return (
    <div>
      {artists.map((el) => {
        if (el.images[1]) {
          return (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
              onClick={() => {
                onClick(el.href);
                navigate("/artist");
              }}
            >
              <SearchList
                imgSrc={el.images[1].url}
                albumName={el.name}
                albumType={el.album_type}
                type={el.type}
                artist={el.name}
              />
            </div>
          );
        }
        return null; // 이미지가 없는 경우에는 null을 반환하여 렌더링하지 않음
      })}
    </div>
  );
};

export default SearchListsArtists;
