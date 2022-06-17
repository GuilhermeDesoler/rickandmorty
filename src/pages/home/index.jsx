import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAllCharacters } from "../../queries";

import ComponentCard from "../../component/card";
import ComponentButton from "../../component/button";
import ComponentInput from "../../component/input";

import {
  PageContainer,
  HeaderContainer,
  SearchContainer,
  ButtonsContainer,
  CardsContainer,
  ErrorContainer,
} from "./styled.home";

import LoadingImage from "../../assets/img/loading.png";
import ErrorImage from "../../assets/img/error.png";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameSearch, setNameSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const { loading, error, data } = useQuery(getAllCharacters, {
    variables: {
      page: currentPage,
      filter: { name: nameSearch, status: statusSearch },
    },
  });

  return (
    <PageContainer>
      <HeaderContainer>
        Welcome to Rick & Morty App using GraphQL
      </HeaderContainer>
      <SearchContainer>
        <ComponentInput
          label="Name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <ComponentInput
          label="Status"
          value={statusSearch}
          onChange={(e) => setStatusSearch(e.target.value)}
        />
      </SearchContainer>
      {!loading && (
        <ButtonsContainer>
          {currentPage > 1 && (
            <ComponentButton
              next={false}
              onclick={() => setCurrentPage(currentPage - 1)}
            />
          )}
          {currentPage < 32 && (
            <ComponentButton
              next={true}
              onclick={() => setCurrentPage(currentPage + 1)}
            />
          )}
        </ButtonsContainer>
      )}
      <CardsContainer>
        {loading && <img src={LoadingImage} alt="Loading" />}
        {data?.characters?.results.map((character) => (
          <ComponentCard key={character.id} character={character} />
        ))}
        {error && (
          <ErrorContainer>
            <img src={ErrorImage} alt="Sorry " />
            {error.message}
          </ErrorContainer>
        )}
      </CardsContainer>
      {!loading && (
        <ButtonsContainer>
          {currentPage > 1 && (
            <ComponentButton
              next={false}
              onclick={() => setCurrentPage(currentPage - 1)}
            />
          )}
          {currentPage < 32 && (
            <ComponentButton
              next={true}
              onclick={() => setCurrentPage(currentPage + 1)}
            />
          )}
        </ButtonsContainer>
      )}
    </PageContainer>
  );
};

export default HomePage;
