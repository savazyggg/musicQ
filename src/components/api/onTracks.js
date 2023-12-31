export const onTracks = async (accessToken, api) => {
  const artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(api, artistParams);
  let artistIDRes = await artistID.json();

  return artistIDRes.items ? artistIDRes.items : artistIDRes.albums.items;
};
