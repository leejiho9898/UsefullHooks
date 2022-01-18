import useScrollFadeIn from "../../hooks/useFadeIn";
import styled from "styled-components";
import "./asd.css";
const S = {
  Wrapper: styled.section`
    width: 100%;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    margin-bottom: 2rem;
    text-align: center;
    color: white;
  `,
};

const Asd = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };
  return (
    <S.Wrapper>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <S.Label {...animatedItem[0]}>Get Started</S.Label>
      <S.Title {...animatedItem[1]}>
        Etiam erat velit
        <br />
        scelerisque in dictum
      </S.Title>
      <div {...animatedItem[2]}></div>
    </S.Wrapper>
  );
};
export default Asd;
