import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onRecommand } from "./api/onRecommand";
import { Image, Text } from "@chakra-ui/react";
import { onRecommandDetail } from "./api/onRecommandDetail";
import { SContainer } from "./common/style";

const IntroPage = ({ isLogin }) => {
  const [list, setList] = useState([]);
  const { access_token } = isLogin || {};
  useEffect(() => {
    const onRecommandCall = async () => {
      const result = await onRecommand(access_token);
      setList(result);
    };
    onRecommandCall();
  }, [isLogin]);
  console.log(list);

  return (
    <SContainer>
      <h1>둘러보기</h1>
      {list &&
        list.map((el) => (
          <div
            key={el.id}
            onClick={() => onRecommandDetail(access_token, el.href)}
          >
            <Image src={el.icons[0].url} marginRight={1} height={100} />
            <Text>{el.name}</Text>
          </div>
        ))}
    </SContainer>
  );
};

export default IntroPage;
