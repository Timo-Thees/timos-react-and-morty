export default function CharacterDetails({ characterData }) {
  const id = characterData.id;
  return (
    <article>
      <h2>
        <a href={characterData.url}>{characterData.name}</a>
      </h2>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
        alt={characterData.name}
      />
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
    </article>
  );
}
