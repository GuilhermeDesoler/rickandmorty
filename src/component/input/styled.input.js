import styled from "styled-components";

export const InputContainer = styled.div`
  height: 75px;
  width: 50%;
  position: relative;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    user-select: none;
  }

  input {
    font-size: 16px;
    border: 2px solid black;
    border-radius: 0.8rem;
    padding: 0.7em;
    width: 100%;
    box-sizing: border-box;
    color: green;
    &:disabled {
      color: red;
    }

    &:not(:placeholder-shown),
    &:focus {
      border-color: theme.colors.primary.normal;
      outline: none;
    }
  }

  span {
    cursor: text;
    position: absolute;
    left: 1em;
    padding: 0 5px;
    transition: font-size 100ms linear, transform 100ms linear;
  }

  input:not(:placeholder-shown) + span,
  input:focus + span {
    color: black;
    font-size: 0.9em;
    transform: translateY(-2.6em);
    z-index: 1;
    cursor: default;
  }
`;
