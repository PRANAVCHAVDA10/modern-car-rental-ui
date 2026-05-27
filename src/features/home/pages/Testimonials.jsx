
import { testimonials } from "../../../shared/data/testimonials"
import PageBanner from "../../../shared/ui/PageBanner"
import TestimonialsCard from "../../../shared/ui/TestimonialsCard"

const Testimonials = () => {
    return (
        <>

            <PageBanner
                title="Testimonials"
                currentPage="Testimonials"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 section py-[8%] relative">
                {testimonials.map((tst, index) => (
                    <div
                        key={tst.id}
                        className="py-5"
                        data-aos="fade-up"            // fade-up animation
                        data-aos-delay={index * 150}  // stagger by 150ms
                    >
                        <TestimonialsCard
                            image={tst.image}
                            name={tst.name}
                            position={tst.position}
                            pera={tst.pera}
                        />
                    </div>
                ))}
            </div>

        </>
    )
}

export default Testimonials