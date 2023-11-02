import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AllPokerEventsPage from "./pages/AllPokerEventsPage";
import CreatePokerEventPage from "./pages/CreatePokerEventPage";
import LoginPage from "./pages/LoginPage";
import PokerEventsDetailsPage from "./pages/PokerEventsDetailsPage";
import SignUpPage from "./pages/SignUpPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AllPokerEventsPage" element={<PrivateRoute>
          <AllPokerEventsPage />
        </PrivateRoute>} />
        <Route path="/CreatePokerEventPage" element={<PrivateRoute>
          <CreatePokerEventPage />
        </PrivateRoute>} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PokerEventsDetailsPage/:id" element={<PrivateRoute>
          <PokerEventsDetailsPage />
        </PrivateRoute>} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/CreateReviewPage" element={<CreateReviewPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App