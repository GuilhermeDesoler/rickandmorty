import { InputContainer } from "./styled.input";

const ComponentInput = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <label>
        <input autoComplete="off" placeholder="" {...rest} />
        <span>{label}</span>
      </label>
    </InputContainer>
  );
};

export default ComponentInput;
