import styled from "styled-components";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Placeholder>.</Placeholder>
        </li>
        <li>
          <Placeholder>.</Placeholder>
        </li>
        <li>
          <Placeholder>.</Placeholder>
        </li>
        <li>
          <Placeholder>.</Placeholder>
        </li>
      </ul>
    </nav>
  );
}

const Placeholder = styled.div`
  background-color: orange;
  border-radius: 50%;
  width: 50px;
  hight: 50px;
`;
