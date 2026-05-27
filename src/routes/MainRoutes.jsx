import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import Index from "../features/home/pages/Index";
import ServiceDetails from "../features/home/pages/ServiceDetails";
import BlogDetails from "../features/home/pages/BlogDetails";
import About from "../features/home/pages/About";
import TeamDetails from "../features/home/pages/TeamDetails";
import Service from "../features/home/pages/Service";
import Blog from "../features/home/pages/Blog";
import Pricing from "../features/home/pages/Pricing";
import ImageGallery from "../features/home/pages/ImageGallery";
import Testimonials from "../features/home/pages/Testimonials";
import Faqs from "../features/home/pages/Faqs";
import Cars from "../features/home/pages/Cars";
import CarType from "../features/home/pages/CarType";
import Contact from "../features/home/pages/Contact";
import CarDetails from "../features/home/pages/CarDetails";

const MainRoutes = () => {

    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });

        setTimeout(() => {
            AOS.refreshHard();
        }, 300);

    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/team/:id" element={<TeamDetails />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/imagegallery" element={<ImageGallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/carstype" element={<CarType />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default MainRoutes;