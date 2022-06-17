import styled from "styled-components";

export const PageContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.h1`
  font-size: 2em;
  color: #a3edba;
`;

export const SearchContainer = styled.div`
  height: 70px;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const ButtonsContainer = styled.div`
  height: 100px;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
