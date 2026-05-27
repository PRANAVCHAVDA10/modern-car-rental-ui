import PageBanner from "../../../shared/ui/PageBanner"
import pricing1 from "../../../assets/images/pricing/pricing-box-img-1.png"
import pricing2 from "../../../assets/images/pricing/pricing-box-img-2.png"
import pricing3 from "../../../assets/images/pricing/pricing-box-img-3.png"
import PricingCard from "../../../shared/ui/PricingCard"
import BannerComponent from "../components/Banner/Banner"
import TestimonialsComponent from "../../../shared/components/Testimonials/Testimonials"
const Pricing = () => {
    return (
        <>
            <PageBanner
                title="Pricing"
                currentPage="Pricing" 
            /> 

            <div className="section py-[8%] relative grid-col lg:grid-cols-3 gap-10">
                <div data-aos="fade-up" data-aos-delay="100">
                    <PricingCard
                        image={pricing1}
                        title={"Luxury Car"}
                        pera={"Specifies the type or model of the car available for rent."}
                        price={"29"}
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="220">
                    <PricingCard
                        image={pricing2}
                        title={"Convertible Car"}
                        pera={"Specifies the type or model of the car available for rent."}
                        price={"49"}
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="340">
                    <PricingCard
                        image={pricing3}
                        title={"Sport Car"}
                        pera={"Specifies the type or model of the car available for rent."}
                        price={"79"}
                    />
                </div>
            </div>

            <BannerComponent />
            <TestimonialsComponent />

        </>
    )
}

export default Pricing