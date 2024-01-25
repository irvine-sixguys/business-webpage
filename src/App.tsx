import Header from "./components/header/header";
import Start from "./components/start/start";
import "./App.css";
import First from "./components/first/first";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Header />
      <Start />
      <First />
    </div>
  );
}

export default App;
