import Header from "./Components/Header";
import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import styled from "styled-components";
//import useFetch from "./Components/FetchData";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  console.log(characters);
  return (
    <div>
      <Header />
      <Body>
        {characters.map((characters) => {
          return <Card key={characters.id} characterData={characters} />;
        })}
      </Body>
      <Navbar />
    </div>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 120px;
  padding-bottom: 140px;
`;

export default App;
