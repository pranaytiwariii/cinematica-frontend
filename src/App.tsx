import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import CategoryPage from "./pages/CategoryPage";
import LocationDetail from "./pages/LocationDetail";
import HostPage from "./pages/HostPage";
import OnboardingPage from "./components/Hosting/onbording.tsx"; // Import the new onboarding page
// import DemoProfile from "./components/demoProfile.tsx"; // Import the new demoProfile page
import TestPage from "./pages/testpage";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/location/:locationId" element={<LocationDetail />} />
            <Route path="/host" element={<HostPage />} />
            <Route
              path="/host/onboarding"
              element={
                // <ProtectedRoute>
                  <OnboardingPage />
                // {/* </ProtectedRoute> */}
              }
            />
            {/* <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <TestPage />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/demo" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
