import PageBanner from "../../../shared/ui/PageBanner"

import doorIcon from "../../../assets/images/cars/icon-door.svg";
import passengerIcon from "../../../assets/images/cars/icon-passengers.svg";
import transmissionIcon from "../../../assets/images/cars/icon-transmission.svg";
import bagsIcon from "../../../assets/images/cars/icon-bags.svg";
import airconditionIcon from "../../../assets/images/cars/icon-aircondition.svg";
import ageIcon from "../../../assets/images/cars/icon-age.svg";

import slide1 from "../../../assets/images/cars/fleets-slider-img-1.jpg"
import slide2 from "../../../assets/images/cars/fleets-slider-img-2.jpg"
import slide3 from "../../../assets/images/cars/fleets-slider-img-3.jpg"
import slide4 from "../../../assets/images/cars/fleets-slider-img-4.jpg"

import icon1 from "../../../assets/images/cars/speed.png"
import icon2 from "../../../assets/images/cars/lock.png"

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Button from "../../../shared/components/Button";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { useState } from "react";
import FAQItem from "../../../shared/ui/FAQItem";
import { useParams } from "react-router-dom";

import { cars } from "../../../shared/data/cars";

export const faqs = [
    {
        title: "Driver's License Requirements",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
        title: "Insurance and Coverage policy",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
        title: "Available payment Methods",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
        title: "Cancellation and Modification policy",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
        title: "Smoking and Pet Policies",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
        title: "The minimum age Requirements",
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
];

const CarDetails = () => {
    const slides = [slide1, slide2, slide3, slide4];
    const [activeIndex, setActiveIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { id } = useParams();

    const car = cars.find((item) => item.id === Number(id));

    if (!car) return <p>Cars not found</p>;

    return (
        <>

            <PageBanner
                title="Car Details"
                currentPage="Car Details"
            />

            <div className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!">
                <div className="w-full lg:w-[30%] bg-white border border-gray-200/50 p-5 lg:p-8 rounded-xl lg:sticky h-full lg:top-0 lg:right-0 space-y-8">
                    <div className="price flex items-end gap-1 border-b border-gray-200/50 pb-8" data-aos="fade-center" data-aos-delay="400">
                        <span className="text-5xl font-bold">$</span>
                        <span className="text-6xl font-bold font-barlow">{car.price}</span>
                        <span className="text-lg text-gray-500">/{car.rent}</span>
                    </div>
                    <ul className="space-y-5 border-b border-gray-200 pb-5">

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={doorIcon} alt="doors" className="w-6 h-6 brightness-0" />
                                <span>Doors</span>
                            </div>
                            <span>{car.doors}</span>
                        </li>

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="500">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={passengerIcon} alt="passengers" className="w-6 h-6 brightness-0" />
                                <span>Passengers</span>
                            </div>
                            <span>{car.passengers}</span>
                        </li>

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="600">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={transmissionIcon} alt="passengers" className="w-6 h-6 brightness-0" />
                                <span>Transmission</span>
                            </div>
                            <span>{car.transmission}</span>
                        </li>

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="700">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={ageIcon} alt="passengers" className="w-6 h-6 brightness-0" />
                                <span>Age</span>
                            </div>
                            <span>{car.age}</span>
                        </li>

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="800">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={bagsIcon} alt="passengers" className="w-6 h-6 brightness-0" />
                                <span>Luggage</span>
                            </div>
                            <span>{car.luggage}</span>
                        </li>

                        <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="900">
                            <div className="centered-row gap-2 text-[16px]">
                                <img src={airconditionIcon} alt="passengers" className="w-6 h-6 brightness-0" />
                                <span>Air Condition</span>
                            </div>
                            <span>{car.aircondition}</span>
                        </li>
                    </ul>
                    <Button text={"Book Now"} type="button" className="btn-black mt-0 w-full!" onClick={() => setShowModal(true)} data-aos="fade-center" data-aos-delay="1000" />
                </div>

                <div className="w-full lg:w-[70%] flex flex-col gap-10">
                    <div className="relative">
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 1,
                                arrows: false,
                                pagination: true,
                            }}
                        >
                            {slides.map((img, index) => (
                                <SplideSlide key={index} data-aos="fade-center" data-aos-delay={index * 100}>
                                    <img
                                        src={img}
                                        alt={`slide-${index}`}
                                        className="w-full h-140 object-cover object-bottom rounded-xl"
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>

                        <ul className="flex justify-start items-center flex-wrap gap-10 xl:gap-20 py-8 border-b border-gray-200/50">
                            <li className="centered-row flex-wrap gap-5" data-aos="fade-center" data-aos-delay="300">
                                <div className="icon w-14 h-14">
                                    <img src={icon1} alt="icon-img" className="section-image" />
                                </div>
                                <div className="info">
                                    <h6 className="text-xl font-semibold">Unlimited KMs</h6>
                                    <span className="text-desc">Endless Km with no extra charge</span>
                                </div>
                            </li>
                            <li className="centered-row flex-wrap gap-5" data-aos="fade-center"
                                data-aos-delay="400">
                                <div className="icon w-14 h-14">
                                    <img src={icon2} alt="icon-img" className="section-image" />
                                </div>
                                <div className="info">
                                    <h6 className="text-xl font-semibold">Unlimited KMs</h6>
                                    <span className="text-desc">Endless Km with no extra charge</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="content">
                        <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
                            General Information
                        </span>
                        <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
                            Know about our car service
                        </h2>
                        <p className='text-desc mb-8' data-aos="fade-right" data-aos-delay="500">
                            Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.
                        </p>
                        <ul className="flex flex-col gap-5 pb-12">
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">24/7 Roadside Assistance</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="700">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Free Cancellation & Return</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="800">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Rent Now Pay When You Arrive</span>
                            </li>
                        </ul>
                        <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
                            amenities
                        </span>
                        <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
                            Premium amenities and features
                        </h2>
                        <ul className="grid-col lg:grid-cols-2 xl:grid-cols-4 gap-5 pb-12">
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="500">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Music System</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Toolkit</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="700">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Abs System</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="800">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Bluetooth</span>
                            </li>

                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="900">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Full Boot Space</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="1000">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Usb Charger</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="1100">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Aux Input</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="1200">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Spare Tyre</span>
                            </li>

                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="1300">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Power Steering</span>
                            </li>
                            <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="1400">
                                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                                <span className="text-lg font-medium">Power Windows</span>
                            </li>
                        </ul>

                        <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
                            Rental Conditions
                        </span>
                        <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
                            Policies and agreement
                        </h2>

                        <div className="faq-content">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    title={faq.title}
                                    content={faq.content}
                                    isOpen={activeIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
                    <div className="relative bg-black w-full max-w-3xl p-8 rounded-2xl">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-0"
                        >
                            <X />
                        </button>

                        {/* Title */}
                        <h2 className="heading-1 text-white mb-5">
                            Reserve your vehicle today!
                        </h2>

                        <p className="text-desc text-gray-light mb-10">
                            Fill out the form below to reserve your vehicle.
                        </p>

                        {/* Form */}
                        <form className="grid-col lg:space-y-12 space-y-5">

                            <div className="grid-col lg:grid-cols-3 gap-5">
                                <input type="text" placeholder="Enter Full Name" className="border-b outline-none border-white text-white pb-2 focus:border-primary" required />
                                <input type="email" placeholder="Enter Your Email" className="border-b outline-none border-white text-white pb-2 focus:border-primary" required />
                                <input type="text" placeholder="Enter Phone Number" className="border-b outline-none border-white text-white pb-2 focus:border-primary" required />
                            </div>

                            <div className="grid-col lg:grid-cols-2 gap-5">
                                <select className="border-b outline-none border-white bg-black capitalize text-white pb-2 focus:border-primary">
                                    <option selected>Pick Up Location</option>
                                    <option>abu dhabi</option>
                                    <option>alain</option>
                                    <option>sharjah</option>
                                    <option>luxury car</option>
                                    <option>electric car</option>
                                    <option>coupe car</option>
                                </select>

                                <input type="date" className="scheme-white 
                                  [&::-webkit-calendar-picker-indicator]:invert border-b outline-none border-white text-white pb-2 focus:border-primary" />
                            </div>

                            <div className="grid-col lg:grid-cols-2 gap-5">
                                <select className="border-b outline-none border-white bg-black capitalize text-white pb-2 focus:border-primary">
                                    <option selected>Drop Off Location</option>
                                    <option>abu dhabi</option>
                                    <option>alain</option>
                                    <option>sharjah</option>
                                    <option>luxury car</option>
                                    <option>electric car</option>
                                    <option>coupe car</option>
                                </select>

                                <input type="date" className="scheme-white 
                                    [&::-webkit-calendar-picker-indicator]:invert border-b outline-none border-white text-white pb-2 focus:border-primary" />
                            </div>

                            <textarea placeholder="Write Your Message" className="border-b outline-none border-white text-white pb-2 focus:border-primary h-28"></textarea>

                            <Button type="submit" text={"Book Now"} className="btn-white mt-0" />

                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default CarDetails