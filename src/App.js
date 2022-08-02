import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import OffersPage from "./Pages/OffersPage/OffersPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
};

export default App;