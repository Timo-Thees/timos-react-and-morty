import styled from "styled-components";
import CharacterDetails from "./CharacterDetail";
import { useState } from "react";

export function Card({ characterData }) {
  const [showDetails, setShowDetails] = useState(false);
  function onShowMore() {
    setShowDetails(!showDetails);
  }
  return (
    <CardStyle>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${characterData.id}.jpeg`}
        alt={characterData.name}
      />
      <h2>{characterData.name}</h2>
      {showDetails ? <CharacterDetails characterData={characterData} /> : ""}
      <button
        onClick={() => {
          onShowMore();
        }}
      >
        Show more
      </button>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  background-color: grey;
  border-radius: 20px;
  padding: 30px;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  text-align: center;
`;

export { CardStyle };
