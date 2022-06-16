import "./App.css";

import { useQuery } from "@apollo/client";

import { getAllCharacters } from "./queries";

function App() {
  const { loading, error, data } = useQuery(getAllCharacters);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error {error.message}</p>;
  console.log(data);

  return (
    <div className="App">
      {data?.characters?.results.map((character) => (
        <p key={character.id}>card here</p>
      ))}
    </div>
  );
}

export default App;
