import Chatbot from "./Chatbot";
import React from "react";
import './App.css'

function App() {
  return (<>
    <div>
      
      <Chatbot
        logo="/orryxlogo.png"
        primaryColor="#FF6A00"
        variant="shadow"
        position="top-left"
        titleText="Orry-X"
      />
      <h1>Click on this logo to use Chatbot</h1>
    </div>
    </>
  );
}

export default App;