export const onSearchDetail = async (accessToken, api) => {
  const artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(api, artistParams);
  let artistIDRes = await artistID.json();
  return artistIDRes;
};
