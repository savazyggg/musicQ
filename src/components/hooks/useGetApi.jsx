import { useEffect, useState } from "react";

const useGetApi = ({ func, api, isLogin }) => {
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onApiCall = async () => {
      setIsLoading(true);

      const result = await func(isLogin, api);
      setList(result);

      setIsLoading(false);
    };

    if (isLogin) {
      onApiCall();
    }
  }, [isLogin, api, func]);

  return { list, isLoading };
};

export default useGetApi;
