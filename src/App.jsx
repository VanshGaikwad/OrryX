import Chatbot from "./Chatbot";

function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Chatbot
        logo="/orryxlogo.png"
        primaryColor="#FF6A00"
        variant="shadow"
        position="top-right"
        titleText="Orry-X"
      />
    </div>
  );
}

export default App;