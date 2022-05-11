import "./App.css";
import Header from "./component/LayoutComponent/header/Header";
import {
  SidebarLayoutPage,
  VideoListingPage,
  LandingPage,
  PageNotFound,
} from "./pages/index";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route element={<SidebarLayoutPage />}>
            <Route path="/explore" element={<VideoListingPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>

        {/* <LandingPage /> */}
      </Router>
    </div>
  );
}

export default App;
