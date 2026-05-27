import { MoveRight } from "lucide-react"
import { useState } from "react";
import FAQItem from "../../../../shared/ui/FAQItem";

import work from "./assest/work-img-1.jpg";
import workBg from "./assest/work-image-bg.svg";
import Image from "../../../../shared/ui/Image";

export const works = [
    {
        title: "1. Browse And Select",
        content:
            "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
    {
        title: "2. Book And Confirm",
        content:
            "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
    {
        title: "3. Book And Enjoy",
        content:
            "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <section className="work section section-container py-[8%] gap-10 lg:gap-14 relative">
                <div className="content-col text-black w-full lg:w-1/2 relative gap-8" data-aos="fade-right">

                    <div className="main-title flex flex-col gap-3">
                        <span className="sub-title" data-aos="fade-right"
                            data-aos-delay="100">
                            How It Work
                        </span>

                        <h2 className="heading-1 max-w-140" data-aos="fade-right"
                            data-aos-delay="200">
                            Streamlined processes for a hassle-free experience
                        </h2>
                    </div>

                    <div className="content-desc flex flex-col">
                        <p className="text-desc text-pera mb-8" data-aos="fade-right"
                            data-aos-delay="300">
                            Our streamlined process ensures a seamless car rental experience from start to finish. With easy online booking, flexible pick-up and drop-off options.
                        </p>

                        {works.map((work, index) => (
                            <div
                                key={index}
                                data-aos="fade-right"
                                data-aos-delay={400 + index * 100} // 🔥 stagger
                            >
                                <FAQItem
                                    title={work.title}
                                    content={work.content}
                                    isOpen={activeIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden" data-aos="fade-left"
                    data-aos-delay="200">
                    <img src={work} alt="work-img" className="max-w-full md:max-w-120 w-full rounded-full z-1" />

                    <img src={workBg} alt="work-bg-image" className="w-full h-full absolute top-0  right-0 lg:-right-20 z-0" data-aos="zoom-in"
                        data-aos-delay="400" />
                </div>
            </section>
        </>
    )
}

export default Work