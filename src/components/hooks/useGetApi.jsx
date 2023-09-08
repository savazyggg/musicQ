import { useEffect, useState } from "react";

const useGetApi = ({ func, api, isLogin }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const onApiCall = async () => {
      const result = await func(isLogin, api);
      setList(result);
    };

    if (isLogin) {
      onApiCall();
    }
  }, [isLogin, api, func]);

  return { list };
};

export default useGetApi;
