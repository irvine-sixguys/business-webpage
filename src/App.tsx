import Header from "./components/header/header";
import Start from "./components/start/start";
import "./App.css";

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
    </div>
  );
}

export default App;
