import { ButtonContainer, StyledButton } from "./styled.button";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const PagesButton = ({ next, onclick }) => {
  return (
    <ButtonContainer>
      <StyledButton onClick={onclick}>
        {next ? BsFillArrowRightCircleFill : BsFillArrowLeftCircleFill}
      </StyledButton>
    </ButtonContainer>
  );
};

export default PagesButton;
