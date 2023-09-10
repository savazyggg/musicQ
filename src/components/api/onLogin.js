import { useState, useEffect } from "react";

export const useLogin = () => {
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authParam = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
            "grant_type=client_credentials&client_id=" +
            import.meta.env.VITE_SPOTIFY_CLIENT_ID +
            "&client_secret=" +
            import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
        };

        const res = await fetch(
          "https://accounts.spotify.com/api/token",
          authParam
        );
        const response = await res.json();
        localStorage.setItem("token", response.access_token);
        setIsLogin(response.access_token);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return { token, isLogin };
};
