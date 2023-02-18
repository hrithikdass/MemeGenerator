import Header from "./components/header";
import "./App.css";
import Meme from "./components/meme";
import data from "./memesData.js";

function App() {
  function random() {}
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
