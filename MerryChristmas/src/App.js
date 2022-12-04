import React from "react";
import "./App.css"
import styled from "styled-components";
import Header from "./components/Header.jsx"
import Body from './components/Body.jsx';
import { createGlobalStyle } from "styled-components";


function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    </div>
  );
}

const Container = styled.div`

`;

export default App;
