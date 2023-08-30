export const onRecommand = async (accessToken) => {
  console.log("api ", accessToken);
  const categoryParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let RecommandID = await fetch(
    "https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_SE&limit=10&offset=5",
    categoryParams
  );
  let RecommandIDRes = await RecommandID.json();
  return RecommandIDRes.categories.items;
};
