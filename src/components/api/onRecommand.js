export const onRecommand = async (accessToken, genre) => {
  const URL = `https://api.spotify.com/v1/recommendations?limit=30&market=KR&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=${genre}&seed_tracks=0c6xIDDpzE81m2q797ordA`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  const fetchApi = await fetch(URL, params);
  const res = await fetchApi.json();
  return res.tracks;
};
