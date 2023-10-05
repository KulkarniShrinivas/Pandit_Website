import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import PhotoGallery from "./pages/photo-gallery/index";
import ContactUs from "./pages/contact-us/contactUs";
import Astrologer from "./pages/astrologer/index";
import AllPujaServices from "./pages/all-pujas/all-services";
import PujaPage from "./pages/puja-page/pujaPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import { useMediaQuery } from "@mui/material";
import FixedIcons from "./components/fixed-icons/fixedIcons";
import AboutUsPage from "./pages/about-us-page/aboutUsPage";
import Terms from "./pages/terms-condition/termsCondition";
import Policy from "./pages/privacy-policy/Policy";

function App() {
  const isDesktopScreen = useMediaQuery("(min-width: 800px)");

  return (
    <div className="app">
      <BrowserRouter>
        {!isDesktopScreen && <FixedIcons />}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpujas/:id" element={<AllPujaServices />} />
          <Route path="/puja/:id" element={<PujaPage />} />
          <Route path="/photos/:id" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/astrology" element={<Astrologer />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
