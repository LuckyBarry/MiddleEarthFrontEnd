import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AllPokerEventsPage from "./pages/AllPokerEventsPage";
import CreatePokerEventPage from "./pages/CreatePokerEventPage";
import LoginPage from "./pages/LoginPage";
import PokerEventsDetailsPage from "./pages/PokerEventsDetailsPage";
import PokerEventsReviewPage from "./pages/PokerEventsReviewPage";
import SignUpPage from "./pages/SignUpPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AllPokerEventsPage" element={<AllPokerEventsPage />} />
        <Route path="/CreatePokerEventPage" element={<CreatePokerEventPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PokerEventsDetailsPage" element={<PokerEventsDetailsPage />} />
        <Route path="/PokerEventsReviewPage" element={<PokerEventsReviewPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/CreateReviewPage" element={<CreateReviewPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App