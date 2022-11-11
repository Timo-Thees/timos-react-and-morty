import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>Rick and Morty App</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  background-color: #a6eee6ff;
  hight: 4vh;
  width: 100vw;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  h1 {
    color: #69c8ecff;
  }
`;
