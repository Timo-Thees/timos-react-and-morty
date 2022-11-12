import styled from "styled-components";
import CharacterDetails from "./CharacterDetail";
import { useState } from "react";

export function Card({ characterData, setCharacterData }) {
  const [showDetails, setShowDetails] = useState(false);
  function onShowMore() {
    setShowDetails(!showDetails);
  }
  function onSaveFavorite() {
    characterData.favorite = !characterData.favorite;
    console.log(characterData.favorite);
  }
  /*  const FavButton = styled.button`
    background-color: ${() => {
      if (characterData.favorite === false) {
        return "red";
      } else {
        return "green";
      }
    }};
  `;*/
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
      {() => {
        if (characterData.favorite === true) {
          return (
            <FavButton
              onClick={() => {
                onSaveFavorite();
              }}
            >
              Save as favorite
            </FavButton>
          );
        } else {
          return (
            <UnFavButton
              onClick={() => {
                onSaveFavorite();
              }}
            >
              No longer favorite
            </UnFavButton>
          );
        }
      }}
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

const FavButton = styled.button`
  background-color: green;
`;

const UnFavButton = styled.button`
  background-color: red;
`;

export { CardStyle };
