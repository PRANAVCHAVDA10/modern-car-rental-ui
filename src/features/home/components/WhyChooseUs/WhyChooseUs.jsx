
import car from "./assets/car.png"
import appointment from "./assets/appointment.png"

import WhyChooseUsImg from "./assets/video-bg-image.jpg";
import Image from "../../../../shared/ui/Image";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    return (
        <>
            <div className="bg-heading">
                <section className="why-choose-us section section-container py-[8%] relative space-y-10">
                    <div className="content-col text-white w-full lg:w-1/2 relative gap-8" data-aos="fade-right">

                        <div className="main-title flex flex-col gap-3">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
                                Why Choose Us
                            </span>

                            <h2 className="heading-1 max-w-2xl" data-aos="fade-right"
                                data-aos-delay="200">
                                Unmatched quality and service
                                for your needs
                            </h2>
                        </div>

                        <div className="content-desc flex flex-col gap-10">
                            <p className="text-desc text-gray-light max-w-140" data-aos="fade-up"
                                data-aos-delay="300">
                                Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites.
                            </p>

                            <ul className="space-y-5">
                                <li className="centered-row gap-5" data-aos="fade-up"
                                    data-aos-delay="400">
                                    <div className="icon w-18 h-18 centered-row justify-center bg-primary text-black rounded-full">
                                        <img src={car} alt="car-image" className="section-image p-3" />
                                    </div>
                                    <div className="content">
                                        <span className="font-semibold text-2xl font-barlow uppercase tracking-wide pb-2 block">Extensive Fleet Options</span>
                                        <p className="max-w-80 text-gray-light">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </li>

                                <li className="centered-row gap-5" data-aos="fade-up"
                                    data-aos-delay="500">
                                    <div className="icon w-18 h-18 centered-row justify-center bg-primary text-black rounded-full">
                                        <img src={appointment} alt="appointment-image" className="section-image p-4" />
                                    </div>
                                    <div className="content">
                                        <span className="font-semibold text-2xl font-barlow uppercase tracking-wide pb-2 block">Exceptional Customer Service</span>
                                        <p className="max-w-80 text-gray-light">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 h-full lg:h-150">
                        <Image
                            src={WhyChooseUsImg}
                            alt="WhyChooseUsImg"
                            wrapperClass="h-full"
                            data-aos="fade-left" data-aos-delay="400"
                        />
                        <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-center"
                            data-aos-delay="400">
                            <div className="play-btn relative w-20 h-20 lg:w-25 lg:h-25 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                                <Play size={35} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WhyChooseUs