import "./App.css";

import { useQuery } from "@apollo/client";

import { getAllCharacters } from "./queries";

import Card from "./component/card";

function App() {
  const { loading, error, data } = useQuery(getAllCharacters);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div className="App">
      {data?.characters?.results.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
