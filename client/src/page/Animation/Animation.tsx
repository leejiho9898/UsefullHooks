import useScrollFadeIn from "../../hooks/useFadeIn";
import "./asd.css";

import styled from "styled-components";

const Animation = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0),
    2: useScrollFadeIn("lefe", 1, 0.3),
    3: useScrollFadeIn("right", 1, 0.7),
  };
  return (
    <Wrapper>
      <div {...animatedItem[0]}>스크롤을 아래로 내려보세요</div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Label {...animatedItem[1]}>안녕하세요</Label>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Title {...animatedItem[2]}>
        반갑습니다.
        <br />
        하하
      </Title>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div {...animatedItem[3]}>신기합니다</div>
    </Wrapper>
  );
};
export default Animation;

const Wrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Label = styled.p`
  display: inline-block;
  margin-bottom: 1rem;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;
