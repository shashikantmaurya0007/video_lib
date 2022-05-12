import "./App.css";
import MockmanEs from "mockman-js";
import { useDispatch } from "react-redux";
import Header from "./component/LayoutComponent/header/Header";
import {
  SidebarLayoutPage,
  VideoListingPage,
  LandingPage,
  PageNotFound,
} from "./pages/index";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { fetchVideos } from "./store/videolisting/videolisting-actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchVideos());
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
          <Route path="/mockman" element={<MockmanEs />}></Route>
        </Routes>

        {/* <LandingPage /> */}
      </Router>
    </div>
  );
}

export default App;
