import styled from "styled-components";

export function Card() {
  return (
    <CardStyle>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty Smith"
      />
      <h2>Morty Smith</h2>
      <button>Show more</button>
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
