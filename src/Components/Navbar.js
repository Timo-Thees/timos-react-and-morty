import styled from "styled-components";

export function Navbar() {
  return (
    <NavbarStyle>
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </NavbarStyle>
  );
}

const Placeholder = styled.div`
  background-color: orange;
  border-radius: 50%;
  min-width: 50px;
  min-hight: 50px;
  :hover {
    background-color: green;
  }
`;

const NavbarStyle = styled.nav`
  display: flex;
  flex-style: row;
  justify-content: space-around;
  background-color: #a6eee6ff;
  hight: 4vh;
  width: 100vw;
  bottom: 0;
  height: 80px;
  padding: 1vh;
  position: fixed;
  z-index: 1;
`;
