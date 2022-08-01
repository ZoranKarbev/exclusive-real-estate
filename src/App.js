import { Routes, Route } from "react-router-dom";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import OffersPage from "./Pages/OffersPage/OffersPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <h1>Esclusive Real Estate</h1>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/profile" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;