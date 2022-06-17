import "./App.css";

import { useState } from "react";

import { useQuery } from "@apollo/client";

import { getAllCharacters } from "./queries";

import Card from "./component/card";
import PagesButton from "./component/button";
import ComponentInput from "./component/input";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameSearch, setNameSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const { loading, error, data } = useQuery(getAllCharacters, {
    variables: {
      page: currentPage,
      filter: { name: nameSearch, status: statusSearch },
    },
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div className="App">
      <ComponentInput
        label="Search by Name"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
      />
      <ComponentInput
        label="Status "
        value={statusSearch}
        onChange={(e) => setStatusSearch(e.target.value)}
      />

      {currentPage > 1 && (
        <PagesButton
          next={false}
          onclick={() => setCurrentPage(currentPage - 1)}
        />
      )}
      {currentPage < 4 && (
        <PagesButton
          next={true}
          onclick={() => setCurrentPage(currentPage + 1)}
        />
      )}
      {data?.characters?.results.map((character) => (
        <Card key={character.id} character={character} />
      ))}
      {currentPage > 1 && (
        <PagesButton
          next={false}
          onclick={() => setCurrentPage(currentPage - 1)}
        />
      )}
      {currentPage < 4 && (
        <PagesButton
          next={true}
          onclick={() => setCurrentPage(currentPage + 1)}
        />
      )}
    </div>
  );
}

export default App;
