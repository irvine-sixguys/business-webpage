import Header from "./components/header/header";
import Start from "./components/start/start";
import "./App.css";
import First from "./components/first/first";
import Second from "./components/second/second";
import AppLink from "./components/app_link/app_link";
import Center from "./components/center/center";
import Footer from "./components/footer/footer";
import Kiosk from "./components/kiosk/kiosk";
import Developer from "./components/developer/developer";

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
      <Kiosk />
      <First />
      <Second />
      <Developer />
      <AppLink />
      <Center />
      <Footer />
    </div>
  );
}

export default App;
