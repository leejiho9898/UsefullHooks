import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {

  return (
    <>
      <Layout>
        <Link to="/regester">회원가입 폼</Link>
        <Link to="/animation">애니메이션</Link>
        <Link to="/pay">페이먼츠</Link>
      </Layout>
    </>
  );
};

export default Home;

const Layout = styled.div`
  width: 100%;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c2c2c2;
`;
