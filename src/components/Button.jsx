import styled from "styled-components";

const Button = ({ toggle }) => {
  return (
    <ButtonContainer>
      <button onClick={toggle}>Click to switch</button>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  button {
    background-color: black;
    color: white;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
  }
`;
