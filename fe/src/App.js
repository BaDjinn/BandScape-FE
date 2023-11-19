import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Auth/contex/AuthProvider";
import Register from "./Components/Register/Register";
import AlbumPage from "./Components/AlbumPage/AlbumPage";
import PostPage from "./Components/PostPage/PostPage";
import Profile from "./Components/Profile/Profile";
import BackOffice from "./Components/BackOffice/BackOffice";
import RequireAuth from "./Auth/RequiredAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          {/* <LoginModal /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<AlbumPage />} />
            <Route path="/posts" element={<PostPage />} />

            <Route path="/backoffice" element={<BackOffice />} />
            <Route
              element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}
            ></Route>
            <Route
              element={
                <RequireAuth allowedRoles={["ROLE_ADMIN", "ROLE_USER"]} />
              }
            ></Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
