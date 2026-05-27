import { MoveRight } from "lucide-react"
import PageBanner from "../../../shared/ui/PageBanner"
import { useRef, useState } from "react";
import FAQItem from "../../../shared/ui/FAQItem";

export const faqs = [
    {
        title: "What types of vehicles are available for rent?",
        content:
            "Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.",
    },
    {
        title: "Where are your rental locations?",
        content:
            "Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.",
    },
    {
        title: "What are your hours of operation?",
        content:
            "Yes, we accept international driver's licenses. An additional government-issued ID, such as a passport, is also required.",
    },
    {
        title: "How do I make a reservation?",
        content:
            "Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.",
    },
    {
        title: "Can I modify or cancel my reservation?",
        content:
            "Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.",
    },
    {
        title: "What is your cancellation policy?",
        content:
            "Yes, you can rent a car for someone else, but the primary driver must be present at the time of rental to provide their driver's license and sign the rental agreement.",
    },
    {
        title: "What forms of payment do you accept?",
        content:
            "Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.",
    },
    {
        title: "Are there any hidden fees?",
        content:
            "Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.",
    },
    {
        title: "Do you require a deposit?",
        content:
            "Reservations can be made online through our website, by calling our customer service hotline, or by visiting one of our rental locations in person.",
    },
    {
        title: "Are your vehicles insured?",
        content:
            "We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.",
    },
    {
        title: "Do you offer vehicles with automatic transmission?",
        content:
            "We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.",
    },
    {
        title: "Can I choose a specific vehicle model?",
        content:
            "We offer a diverse fleet of vehicles, including economy cars, compact cars, SUVs, luxury cars, and more to suit various needs and preferences.",
    },
];

const Faqs = () => {
    const generalRef = useRef(null);
    const bookingRef = useRef(null);
    const pricingRef = useRef(null);
    const vehicleRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <PageBanner
                title="Faq's"
                currentPage="Faq's"
            />

            <div className="section section-container items-start! py-[8%] relative gap-10 lg:gap-14">
                <div className="w-full lg:w-[30%]">
                    <ul className="w-full bg-gray-light rounded-2xl">
                        <li data-aos="fade-center" data-aos-delay="200">
                            <button
                                onClick={() => scrollToSection(generalRef)}
                                className="centered-row justify-between px-5 py-5 w-full border-b border-gray-200 group"
                            >
                                <span className="text-lg">General Information</span>
                                <MoveRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" size={20} />
                            </button>
                        </li>

                        <li data-aos="fade-center" data-aos-delay="300">
                            <button
                                onClick={() => scrollToSection(bookingRef)}
                                className="centered-row justify-between px-5 py-5 w-full border-b border-gray-200 group"
                            >
                                <span className="text-lg">Booking And Reservations</span>
                                <MoveRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" size={20} />
                            </button>
                        </li>

                        <li data-aos="fade-center" data-aos-delay="400">
                            <button
                                onClick={() => scrollToSection(pricingRef)}
                                className="centered-row justify-between px-5 py-5 w-full border-b border-gray-200 group"
                            >
                                <span className="text-lg">Pricing And Payment</span>
                                <MoveRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" size={20} />
                            </button>
                        </li>

                        <li data-aos="fade-center" data-aos-delay="500">
                            <button
                                onClick={() => scrollToSection(vehicleRef)}
                                className="centered-row justify-between px-5 py-5 w-full group"
                            >
                                <span className="text-lg">Vehicle Information</span>
                                <MoveRight className="-rotate-45 group-hover:rotate-0 transition-all duration-300" size={20} />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-[70%] space-y-10">
                    <div ref={generalRef} className="faq-container space-y-8">
                        <div className="info">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="200">FAQs</span>
                            <h2 className="heading-1" data-aos="fade-right" data-aos-delay="300">General information</h2>
                        </div>

                        <div className="faq-content">
                            {faqs.slice(0, 3).map((faq, index) => (
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

                    <div ref={bookingRef} className="faq-container space-y-8">
                        <div className="info">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="200">FAQs</span>
                            <h2 className="heading-1" data-aos="fade-right" data-aos-delay="300">Booking and reservations</h2>
                        </div>

                        <div className="faq-content">
                            {faqs.slice(3, 6).map((faq, index) => {
                                const realIndex = index + 3;
                                return (
                                    <FAQItem
                                        key={realIndex}
                                        title={faq.title}
                                        content={faq.content}
                                        isOpen={activeIndex === realIndex}
                                        onClick={() => handleToggle(realIndex)}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div ref={pricingRef} className="faq-container space-y-8">
                        <div className="info">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="200">FAQs</span>
                            <h2 className="heading-1" data-aos="fade-right" data-aos-delay="300">Pricing and payment</h2>
                        </div>

                        <div className="faq-content">
                            {faqs.slice(6, 9).map((faq, index) => {
                                const realIndex = index + 6;

                                return (
                                    <FAQItem
                                        key={realIndex}
                                        title={faq.title}
                                        content={faq.content}
                                        isOpen={activeIndex === realIndex}
                                        onClick={() => handleToggle(realIndex)}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div ref={vehicleRef} className="faq-container space-y-8">
                        <div className="info">
                            <span className="sub-title" data-aos="fade-right" data-aos-delay="200">FAQs</span>
                            <h2 className="heading-1" data-aos="fade-right" data-aos-delay="300">Vehicle information</h2>
                        </div>

                        <div className="faq-content">
                            {faqs.slice(9, 12).map((faq, index) => {
                                const realIndex = index + 9;

                                return (
                                    <FAQItem
                                        key={realIndex}
                                        title={faq.title}
                                        content={faq.content}
                                        isOpen={activeIndex === realIndex}
                                        onClick={() => handleToggle(realIndex)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs