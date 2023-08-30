import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onRecommand } from "./api/onRecommand";
import { Image } from "@chakra-ui/react";

const IntroPage = ({ isLogin }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const onRecommandCall = async () => {
      const { access_token } = isLogin || {};

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
          <div key={el.id}>
            <Image src={el.icons[0].url} marginRight={1} height={100} />
          </div>
        ))}
    </SContainer>
  );
};

export default IntroPage;

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
