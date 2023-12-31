import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
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
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined")
      Aos.init({
        offset: 120,
        duration: 400,
        once: true,
      });
  }, []);
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
            <Route element={<RequireAuth allowedRoles={["admin"]} />}></Route>
            <Route element={<RequireAuth allowedRoles={["any"]} />}></Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
