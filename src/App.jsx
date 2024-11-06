import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CourseGuide from "./Components/CourseGuide";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import StudyMaterialAccessPanel from "./Components/StudyMaterialAccessPanel";
import Avatar from "./assets/Avatar.png";
import { useState } from "react";

const App = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseModal = () => {
    setIsSignInModalOpen(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar
                item1={"Explore"}
                item2={"Community"}
                item3={"Log in"}
                onLogInClick={handleSignInClick}
              />
              <LandingPage />
              <Footer />
              {isSignInModalOpen && (
                <div className="modal">
                  <SignIn onClose={handleCloseModal} />
                </div>
              )}
            </>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/Home"
          element={
            <>
              <NavBar
                item1={"Dashboard"}
                item2={"Community"}
                item3={"My Learning"}
                item4={Avatar}
              >
                <SearchBar />
              </NavBar>
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/courseguide"
          element={
            <>
              <NavBar
                item1={"Dashboard"}
                item2={"Community"}
                item3={"My Learning"}
                item4={Avatar}
              >
                <SearchBar />
              </NavBar>
              <CourseGuide />
              <Footer />
            </>
          }
        />
        <Route
          path="/course"
          element={
            <>
              <NavBar
                item1={"Dashboard"}
                item2={"Community"}
                item3={"My Learning"}
                item4={Avatar}
              >
                <SearchBar />
              </NavBar>
              <StudyMaterialAccessPanel />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
