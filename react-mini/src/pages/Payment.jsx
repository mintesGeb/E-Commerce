import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100px;
  &:hover{
      background-color:grey;
  }
`;

const Payment = () => {
  return (
    <Container>
      <Button>Pay Now</Button>
    </Container>
  );
};

export default Payment;
