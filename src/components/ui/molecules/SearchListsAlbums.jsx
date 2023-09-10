import SearchList from "../atoms/SearchList";
import { useNavigate } from "react-router-dom";

const SearchListsAlbums = ({ searchData, onClick }) => {
  const albums = searchData.albums.items;
  const navigate = useNavigate();

  return (
    <div>
      {albums.map((el) => {
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
              navigate("/album");
            }}
          >
            <SearchList
              imgSrc={el.images[1].url}
              albumName={el.name}
              albumType={el.album_type}
              type={el.type}
              artist={el.artists[0].name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchListsAlbums;
