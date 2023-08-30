import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { onRecommand } from "./api/onRecommand";
import { Image, Text, Grid, GridItem } from "@chakra-ui/react";
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
      <h1 style={{ margin: "20px auto" }}>둘러보기</h1>
      <Grid margin="0 auto" templateColumns="repeat(2, 1fr)" gap={5}>
        {list &&
          list.map((el) => (
            <GridItem
              key={el.id}
              colSpan={1}
              onClick={() => onRecommandDetail(access_token, el.href)}
            >
              <Image src={el.icons[0].url} marginRight={1} height={220} />
              <Text>{el.name}</Text>
            </GridItem>
          ))}
      </Grid>
    </SContainer>
  );
};

export default IntroPage;
