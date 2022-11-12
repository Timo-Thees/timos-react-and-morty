import { CardStyle } from "./Card";

export default function CharacterDetails({ characterData }) {
  console.log(characterData);
  return (
    <CardStyle>
      <p>Gender: {characterData.gender}</p>
      <p>Species: {characterData.species}</p>
      <p>Status: {characterData.status}</p>
      <p>
        Origin:{" "}
        <a href={characterData.origin.url}>{characterData.origin.name}</a>
      </p>
      <p>
        Location:{" "}
        <a href={characterData.location.url}>{characterData.location.name}</a>
      </p>
      <p>created: {characterData.created}</p>
    </CardStyle>
  );
}
