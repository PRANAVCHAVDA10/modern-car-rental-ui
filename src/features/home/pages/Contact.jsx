import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import { Phone, Mail, MapPin } from "lucide-react";

import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import linkedin from "../../../assets/images/linkedin.png"
import youtube from "../../../assets/images/youtube.png"

import { Link } from 'react-router-dom';
import Button from '../../../shared/components/Button';

const Contact = () => {
    return (
        <>
            <PageBanner
                title="Contact"
                currentPage="Contact"
            />

            <div className="section section-container items-start! my-[8%] px-5 py-10 md:p-10 h-auto lg:h-160 md:rounded-4xl relative gap-10 lg:gap-14 bg-[#191818]">
                <div className="w-full lg:w-1/2 bg-[#010001] rounded-2xl p-12 flex-1 relative overflow-hidden h-full flex flex-col justify-center items-start">
                    <h2 className="text-white uppercase! text-4xl font-bold mb-4 tracking-wide" data-aos="fade-right" data-aos-delay="400">
                        Contact information
                    </h2>
                    <p className="text-gray-400 mb-10" data-aos="fade-right" data-aos-delay="500">
                        Say something to start a live chat!
                    </p>

                    <div className="space-y-6 text-white">
                        <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="600">
                            <Phone size={22} />
                            <span>(+91) 12345 67890</span>
                        </div>

                        <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="700">
                            <Mail size={22} />
                            <span>info@domain.com</span>
                        </div>

                        <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="800">
                            <MapPin size={22} />
                            <span>
                                1234 Elm Street, Suite 567 <br />
                                Springfield, United States
                            </span>
                        </div>
                    </div>

                    <ul className="centered-row gap-5 mt-18">
                        <li data-aos="fade-down" data-aos-delay="800">
                            <Link
                                to="https://www.facebook.com/"
                                className="group bg-white w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300">
                                <img
                                    src={facebook}
                                    alt="facebook-image"
                                    className="brightness-0"
                                />
                            </Link>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="900">
                            <Link
                                to="https://www.instagram.com/"
                                className="group bg-white w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300">
                                <img
                                    src={instagram}
                                    alt="instagram-image"
                                    className="brightness-0"
                                />
                            </Link>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="1000">
                            <Link
                                to="https://www.linkedin.com/"
                                className="group bg-white w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300">
                                <img
                                    src={linkedin}
                                    alt="linkedin-image"
                                    className="brightness-0"
                                />
                            </Link>
                        </li>
                        <li data-aos="fade-down" data-aos-delay="1100">
                            <Link
                                to="https://www.youtube.com/"
                                className="group bg-white w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300">
                                <img
                                    src={youtube}
                                    alt="youtube-image"
                                    className="brightness-0"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                <form className=" w-full lg:w-1/2 text-white h-full flex flex-col justify-center items-start">
                    <div className="grid md:grid-cols-2 gap-6 w-full">
                        <div>
                            <label className="text-sm text-gray-400" data-aos="fade-center" data-aos-delay="400">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                                required
                                data-aos="fade-center" data-aos-delay="500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400" data-aos="fade-center" data-aos-delay="400">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                                required
                                data-aos="fade-center" data-aos-delay="500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400" data-aos="fade-center" data-aos-delay="400">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                                required
                                data-aos="fade-center" data-aos-delay="500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400" data-aos="fade-center" data-aos-delay="400">Phone</label>
                            <input
                                type="text"
                                placeholder="Enter Your Number"
                                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                                required
                                data-aos="fade-center" data-aos-delay="500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 w-full" data-aos="fade-center" data-aos-delay="600">
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea
                            placeholder="Write Your Message"
                            rows="6"
                            className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                        ></textarea>
                    </div>

                    <Button type='submit' data-aos="fade-center" data-aos-delay="700" text={"Message"} className='btn-yellow mt-10' />
                </form>
            </div>

            <div className="bg-gray-light">
                <div className="iframe section py-[8%] relative space-y-10">
                    <div className="text-black w-full relative gap-8">
                        <div className="main-title gap-3 text-center content-col">
                            <span className="sub-title" data-aos="fade-up" data-aos-delay="400">
                                Location
                            </span>

                            <h2 className="heading-1 max-w-140 mx-auto" data-aos="fade-up" data-aos-delay="500">
                                How to reach our location
                            </h2>
                        </div>
                    </div>

                    <div className="frame h-100 lg:h-150 rounded-4xl w-full overflow-hidden" data-aos="fade-center" data-aos-delay="500">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331783483!2d73.09068536311617!3d22.322240635404626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1774867903691!5m2!1sen!2sin" width="100%" height="100%"></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact