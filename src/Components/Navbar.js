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
  width: 50px;
  hight: 50px;
`;

const NavbarStyle = styled.nav`
  display: flex;
  flex-style: row;
  justify-content: space-around;
  hight: 70px;
  background-color: #a6eee6ff;
  hight: 4vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
`;
