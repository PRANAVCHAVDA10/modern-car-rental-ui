import { useEffect } from "react";
import "./App.css"
import Navbar from "./layouts/Navbar/Navbar"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./layouts/Footer/Footer"
import ScrollToTop from "./shared/components/ScrollToTop"

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App  