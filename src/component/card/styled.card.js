import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  padding: 10px;
  margin: 10px;
  border: 2px solid green;
  border-radius: 3%;
  @media (min-width: 550px) {
    flex-basis: 50%;
  }
  @media (min-width: 800px) {
    flex-basis: 30%;
  }
  @media (min-width: 1100px) {
    flex-basis: 20%;
  }
`;

export const ImgContainer = styled.img`
  width: 100%;
  border-radius: 3%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Status = styled.span`
  ${(props) =>
    props.alive
      ? `
  color:green;`
      : `
  color:red`};
`;
