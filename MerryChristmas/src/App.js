import React from "react";
import "./App.css"
import styled from "styled-components";
import Header from "./components/Header.jsx"
import UploadButton from './components/UploadButton.jsx';
import { createGlobalStyle } from "styled-components";


function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <UploadButton></UploadButton>
      </Container>
    </div>
  );
}

const Container = styled.div`

`;

export default App;
