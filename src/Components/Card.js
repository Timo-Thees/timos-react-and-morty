import styled from "styled-components";
import CharacterDetails from "./CharacterDetail";

export function Card({ characterData }) {
  function onShowMore() {
    return console.log({ characterData });
  }
  return (
    <CardStyle>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${characterData.id}.jpeg`}
        alt={characterData.name}
      />
      <h2>{characterData.name}</h2>
      <CharacterDetails characterData={characterData} />;
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
