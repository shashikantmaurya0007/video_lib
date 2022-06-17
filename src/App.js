import "./App.css";
import MockmanEs from "mockman-js";
import Header from "./component/LayoutComponent/header/Header";
import {
  SidebarLayoutPage,
  LandingPage,
  PageNotFound,
  Explore,
  Auth,
  LikePage,
  SingleVideoPage,
  HistoryPage,
  WatchLaterPage,
  PlayListPage,
  SinglePlayListPage,
  ProfilePage,
} from "./pages/index";
import { RequireAuth } from "./component";
import { Portal } from "./PortalComponent/Portal";
import { Login, Signup } from "./component";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route element={<SidebarLayoutPage />}>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/auth" element={<Auth />}>
              <Route index element={<Login />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<Signup />}></Route>
            </Route>
            <Route path="/video/:videoId" element={<SingleVideoPage />}></Route>
            <Route element={<RequireAuth />}>
              <Route path="/likes" element={<LikePage />}></Route>
              <Route path="/history" element={<HistoryPage />}></Route>
              <Route path="/watchlater" element={<WatchLaterPage />}></Route>
              <Route path="/playlist" element={<PlayListPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route
                path="/playlist/:playListId"
                element={<SinglePlayListPage />}
              ></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
          <Route path="/mockman" element={<MockmanEs />}></Route>
        </Routes>
      </Router>
      <Portal />
    </div>
  );
}

export default App;
