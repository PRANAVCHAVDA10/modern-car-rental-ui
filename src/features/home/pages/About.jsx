import PageBanner from "../../../shared/ui/PageBanner"
import AboutComponent from "../components/About/About"
import PartnersComponent from "../../../shared/components/Partners/Partners"
import VisionComponent from "../../../shared/components/Vision/Vision"
import WhyChooseUsComponent from "../components/WhyChooseUs/WhyChooseUs"
import TeamComponent from "../../../shared/components/Team/Team"
import TestimonialsComponent from "../../../shared/components/Testimonials/Testimonials"    


const About = () => {
    return (
        <>
            <PageBanner
                title="About Us"
                currentPage="About"
            />

            <AboutComponent />
            <PartnersComponent />
            <VisionComponent />
            <WhyChooseUsComponent />
            <TeamComponent />
            <TestimonialsComponent /> 
        </>
    )
}

export default About