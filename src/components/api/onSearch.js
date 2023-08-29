export const onSearch = async (accessToken, searchInput) => {
  const artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
    artistParams
  );
  let artistIDRes = await artistID.json();
  return artistIDRes.items;
};
