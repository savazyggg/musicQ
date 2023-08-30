export const onRecommandDetail = async (accessToken, detailApi) => {
  console.log("api ", accessToken);
  const categoryParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let RecommandID = await fetch(detailApi, categoryParams);
  let RecommandIDRes = await RecommandID.json();
  console.log(RecommandIDRes);
};
