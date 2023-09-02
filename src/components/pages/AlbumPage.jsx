import { Image } from "@chakra-ui/react";

const imgUrl =
  "https://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1508240107/trefgdskgntu7j1vezjq.jpg";

const AlbumPage = () => {
  return (
    <div>
      <Image src={imgUrl} marginRight={1} height="150px" borderRadius="5px" />
      <p>list</p>
    </div>
  );
};

export default AlbumPage;
