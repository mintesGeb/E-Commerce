import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;
const Successful = styled.div``;
const Desc = styled.span``;

const Success = () => {
  return (
    <Container>
      <Image src="" />
      <Successful>Successful</Successful>
      <Desc>Success</Desc>
    </Container>
  );
};

export default Success;
