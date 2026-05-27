import React, { useState } from "react";
import { MoveRight } from "lucide-react";

const FAQItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="faq-item border-b border-gray-200 py-5" data-aos="fade-center" data-aos-delay="300">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full cursor-pointer"
            >
                <h3 className="uppercase! text-2xl font-semibold tracking-wide text-left">
                    {title}
                </h3>

                <div
                    className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                >
                    <MoveRight />
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
            >
                <p className="text-desc">{content}</p>
            </div>
        </div>
    );
};

export default FAQItem  