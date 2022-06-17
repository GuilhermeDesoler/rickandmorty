import { ButtonContainer, StyledButton } from "./styled.button";

const ComponentButton = ({ next, onclick }) => {
  return (
    <ButtonContainer>
      <StyledButton onClick={onclick}>
        {next ? "Next Page" : "Preview Page"}
      </StyledButton>
    </ButtonContainer>
  );
};

export default ComponentButton;
