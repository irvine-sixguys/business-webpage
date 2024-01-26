import Header from "./components/header/header";
import Start from "./components/start/start";
import "./App.css";
import First from "./components/first/first";
import Second from "./components/second/second";
import AppLink from "./components/app_link/app_link";

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
      <Second />
      <AppLink />
    </div>
  );
}

export default App;
