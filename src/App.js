import "./App.css";
import Header from "./component/LayoutComponent/header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
// import { Example } from "./pages/LandingPage/Carousel1";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
