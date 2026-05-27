import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Button from "../../../../shared/components/Button";

import experienceImg1 from "./assets/experience-image-01.jpg";
import experienceImg2 from "./assets/experience-image-02.jpg";
import experienceImg3 from "./assets/experience-image-03.jpg";
import experienceImg4 from "./assets/experience-image-04.jpg";
import experienceImg5 from "./assets/experience-image-05.jpg";
import experienceImg6 from "./assets/experience-image-06.jpg";

const Experience = () => {
    const images = [
        experienceImg1,
        experienceImg2,
        experienceImg3,
        experienceImg4,
        experienceImg5,
        experienceImg6,
    ];

    return (
        <div className="bg-heading">
            <section className="experience section py-[8%] space-y-10 relative">
                <div className="experience-content text-white section-container items-start gap-10 lg:gap-14">
                    <div className="main-title flex flex-col gap-3 w-full lg:w-1/2">
                        <span className="sub-title" data-aos="fade-right"
                            data-aos-delay="200"> Welcome to DriveX </span>
                        <h2 className="heading-1 max-w-120" data-aos="fade-right"
                            data-aos-delay="300"> The ultimate driving experience </h2>
                    </div>
                    <div className="content-desc flex flex-col gap-6 w-full lg:w-1/2">
                        <p className="text-desc text-gray-light" data-aos="fade-left"
                            data-aos-delay="500"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi aliquid eius consectetur odit, tempore, eos doloremque nemo saepe maxime nesciunt quisquam sit rem, incidunt in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus. </p>
                        <Button data-aos="fade-up"
                            data-aos-delay="600" type="link" to="/service" text={"Read More"} className="btn-yellow" />
                    </div>
                </div>

                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        gap: "1rem",
                        arrows: false,
                        pagination: false,
                        autoplay: false,
                        breakpoints: {
                            1200: { perPage: 3 },
                            1024: { perPage: 2 },
                            768: { perPage: 1 },
                        },
                    }}
                >
                    {images.map((img, index) => (
                        <SplideSlide key={index}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 100} // 🔥 stagger
                            >
                                <div className="overflow-hidden group rounded-xl">
                                    <img
                                        src={img}
                                        alt="experience"
                                        className="w-full h-120 object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div>
    );
};

export default Experience;