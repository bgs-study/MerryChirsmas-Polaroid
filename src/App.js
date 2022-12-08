import React from "react";
import "./App.css"
import styled from "styled-components";
import Polaroid from "./components/Polaroid.jsx"
import Body from './components/Body.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

function App() {
  return (
    <Container>
      <Polaroid/>
    </Container>
  );
}

export default App;
