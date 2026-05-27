import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Service from '../components/Service/Service'
import ServiceCategories from '../components/ServiceCategories/ServiceCategories'
import Counter from '../components/Counter/Counter'
import Marquee from '../components/Marquee/Marquee'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Gallery from '../components/Gallery/Gallery'
import Faqs from '../components/Faqs/Faqs'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import Blog from '../components/Blog/Blog'
import Work from '../components/Work/Work'
import Banner from '../components/Banner/Banner'

const Index = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });

        // 👇 refresh after full load
        window.addEventListener("load", () => {
            AOS.refreshHard();
        });

    }, []);
    return (
        <>
            <Hero />
            <About />
            <Service />
            <ServiceCategories />
            <Counter />
            <Marquee />
            <WhyChooseUs />
            <Work />
            <Gallery />
            <Faqs />
            <Banner />
            <Experience />
            <Contact />
            <Blog />
        </>
    )
}

export default Index