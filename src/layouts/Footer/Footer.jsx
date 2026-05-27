import { Mail, MoveRight } from "lucide-react";
import Logo from "../Navbar/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black pt-[4%]">
            <div className="container mx-auto px-4">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="mb-5" data-aos="fade-center"
                            data-aos-delay="200">
                            <Logo />
                        </div>
                        <p className="text-desc text-gray-light leading-relaxed" data-aos="fade-center"
                            data-aos-delay="300">
                            Experience the ease and convenience of renting a car with DriveX.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-6" data-aos="fade-center" data-aos-delay="200">Legal Policy</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300">Term & Condition</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400">Privacy Policy</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500">Legal Notice</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600">Accessibility</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-6" data-aos="fade-center" data-aos-delay="200">Quick Links</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300">Home</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400">About Us</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500">Car Type</li>
                            <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600">Service</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-4"
                            data-aos="fade-center" data-aos-delay="200"
                        >
                            Subscribe to the Newsletter
                        </h3>
                        <form data-aos="fade-center" data-aos-delay="300" className="centered-row flex-wrap sm:flex-nowrap sm:h-12 gap-5 sm:gap-1">
                            <input type="text" placeholder="Email" className="bg-gray-50/20 text-white outline-none w-full rounded-4xl ps-4 h-12 sm:h-full" required />
                            <button type="submit" className="text-black bg-white h-full w-13 p-3 rounded-4xl cursor-pointer">
                                <MoveRight />
                            </button>
                        </form>
                    </div>
                </div>

                {/* DIVIDER */}
                <div data-aos="fade-up"
                    data-aos-delay="300" className="border-t border-gray-800 py-8 mt-10 text-gray-300 text-lg text-center">
                    © {new Date().getFullYear()} DriveX. All rights reserved by <Link className="text-white" to="https://uicode.in/">UIcode</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;