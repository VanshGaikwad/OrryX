import Chatbot from "./Chatbot";



function App() {
  return (<>
    <div>
      
      <Chatbot
        logo="/orryxlogo.png"
        primaryColor="#FF6A00"
        variant="shadow"
        position="top-right"
        titleText="Orry-X"
      />
      <h1>Click on this logo to use Chatbot</h1>
    </div>
    </>
  );
}

export default App;