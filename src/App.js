import "./App.css";
import MockmanEs from "mockman-js";
import { useDispatch } from "react-redux";
import Header from "./component/LayoutComponent/header/Header";
import {
  SidebarLayoutPage,
  LandingPage,
  PageNotFound,
  Explore,
} from "./pages/index";
import { fetchVideos } from "./store/Explore/videolisting-actions";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route element={<SidebarLayoutPage />}>
            <Route path="/explore" element={<Explore />}></Route>
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
