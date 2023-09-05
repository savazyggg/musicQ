export const onSearch = async (accessToken, searchInput) => {
  const artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" +
      searchInput +
      "&type=album%2Ctrack%2Cartist&market=KR",
    artistParams
  );
  let artistIDRes = await artistID.json();
  return artistIDRes;
};

// https://api.spotify.com/v1/search?q=tinashe&type=album%2Ctrack%2Cartist&market=KR
// https://api.spotify.com/v1/search?q=tinashe&type=album%2Ctrack%2Cartist&market=KR
