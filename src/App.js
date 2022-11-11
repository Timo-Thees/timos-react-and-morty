import Header from "./Components/Header";
import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <Body>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Body>
      <Navbar />
    </div>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 120px;
  padding-bottom: 140px;
`;

export default App;
