import PageBanner from "../../../shared/ui/PageBanner"
import ServiceCard from "../../../shared/ui/ServiceCard";
import { services } from "../data/services";
import PartnersComponent from "../../../shared/components/Partners/Partners";
import TestimonialsComponent from "../../../shared/components/Testimonials/Testimonials";

const Service = () => {
    return (
        <>
            <PageBanner
                title="Services"
                currentPage="Services"
            />

            <div className="section py-[8%] relative">
                <div className="grid-col lg:grid-cols-4 gap-10">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 120} // 🔥 1 by 1
                        >
                            <ServiceCard
                                id={service.id}
                                {...service}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-light">
                <PartnersComponent />
            </div>

            <TestimonialsComponent />
        </>
    )
}

export default Service