import { Link, useParams } from 'react-router-dom';
import PageBanner from '../../../shared/ui/PageBanner'

import { blogs } from '../data/blogs';
import { Quote } from 'lucide-react';

import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import linkedin from "../../../assets/images/linkedin.png"
import CommentForm from '../../../shared/ui/CommentForm';

const BlogDetails = () => {
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === Number(id));

    if (!blog) return <p>blog not found</p>;

    return (
        <>
            <PageBanner
                title="Blog Details"
                currentPage="Blog Details"
            />

            <div className="blog section section-container py-[8%] gap-10 relative flex-col">
                <div className="blog-image h-200 w-full rounded-sm overflow-hidden" data-aos="fade-center" data-aos-delay="300">
                    <img src={blog.image} alt={blog.title} className='section-image object-cover hover:scale-110 transition-all duration-300' />
                </div>
                <div className="blog-content space-y-8">
                    <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="400">{blog.title}</h3>
                    <p className='text-desc' data-aos="fade-right" data-aos-delay="500">
                        Renting a car can be an essential part of travel, offering flexibility and convenience for exploring new destinations or navigating daily life when your own vehicle isn’t available. Whether you’re planning a vacation, business trip, or just need a temporary ride.
                    </p>

                    <p className='text-desc' data-aos="fade-right" data-aos-delay="600">
                        The first step in the car rental process is selecting a reputable company. Major rental agencies like Hertz, Enterprise, Avis, and Budget are known for their extensive networks and reliability. However, don’t overlook local rental companies, which can sometimes offer better rates or more personalized service. Always check reviews and compare prices online to find the best option for your needs.
                    </p>

                    <div className="bg-white shadow-lg centered-row items-start! flex-wrap lg:flex-nowrap gap-5 p-5 max-w-7xl mx-auto rounded-sm mb-10" data-aos="fade-center" data-aos-delay="700">
                        <div className="quote">
                            <Quote size={50} />
                        </div>
                        <p className='text-desc lg:text-xl'>
                            Renting a car opens up a world of possibilities, turning a simple journey into an adventure. It’s not just about getting from point A to point B it’s about the freedom to explore, the comfort of choice, and the ease of travel. Whether you’re discovering new cities.
                        </p>
                    </div>

                    <p className='text-desc' data-aos="fade-right" data-aos-delay="800">
                        Before booking, ensure you meet the rental company’s requirements. Most agencies require drivers to be at least 21 years old, though some may have a minimum age of 25. Young drivers often face additional fees. A valid driver’s license and a credit card in the driver’s name are also essential. International travelers might need an International Driving Permit (IDP) in addition to their home country’s license.
                    </p>

                    <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="900">Understanding Rental Requirements</h3>

                    <p className="text-desc text-gray-600" data-aos="fade-right" data-aos-delay="800">
                        Car rental agencies offer a range of vehicles, from compact cars to luxury SUVs. Consider your needs and budget when choosing. For city travel, a compact car is economical and easy to park. If you’re traveling with family or a group, an SUV or minivan may be more appropriate. Don’t forget to check for special deals or discounts, such as weekend specials or packages that include GPS or child seats.
                    </p>

                    <ul className='space-y-5 list-disc ms-5'>
                        <li>
                            <span className='text-lg font-medium' data-aos="fade-right" data-aos-delay="600">
                                Opt for well-known rental agencies like Hertz, Enterprise, Avis, or local firms.
                            </span>
                        </li>
                        <li>
                            <span className='text-lg font-medium' data-aos="fade-right" data-aos-delay="700">
                                Most rental companies require drivers to be at least 21, with some having a minimum age of 25.
                            </span>
                        </li>
                        <li>
                            <span className='text-lg font-medium' data-aos="fade-right" data-aos-delay="800">
                                Read the agreement carefully, noting the rental period, mileage limits, fuel policy.
                            </span>
                        </li>
                        <li>
                            <span className='text-lg font-medium' data-aos="fade-right" data-aos-delay="800">
                                Choose a vehicle that suits your needs and budget. Compact cars are while larger vehicles.
                            </span>
                        </li>
                        <li>
                            <span className='text-lg font-medium' data-aos="fade-right" data-aos-delay="900">
                                Ensure your rental comes with unlimited mileage if you plan on long-distance travel.
                            </span>
                        </li>
                    </ul>

                    <p className='text-desc border-b border-gray-200 pb-8' data-aos="fade-right" data-aos-delay="800">
                        Insurance is a crucial aspect of car rental. Rental companies usually offer several coverage options, including Collision Damage Waiver (CDW), Theft Protection, and Third-Party Liability. Your personal car insurance or credit card may already cover rental cars, so check with your provider before purchasing additional coverage. It’s important to understand what is covered and any potential deductibles or exclusions.
                    </p>

                    <div className="section-container gap-3">
                        <div className="tags centered-row flex-wrap gap-2">
                            <h4 className='uppercase! text-2xl font-semibold tracking-wide' data-aos="fade-center" data-aos-delay="600">Tages: </h4>
                            <ul className='centered-row flex-wrap gap-3'>
                                <li className='bg-primary text-white py-3 px-5 text-lg rounded-full capitalize' data-aos="fade-center" data-aos-delay="700">
                                    <span>businesstravel</span>
                                </li>
                                <li className='bg-primary text-white py-3 px-5 text-lg rounded-full capitalize' data-aos="fade-center" data-aos-delay="800">
                                    <span>carrental</span>
                                </li>
                                <li className='bg-primary text-white py-3 px-5 text-lg rounded-full capitalize' data-aos="fade-center" data-aos-delay="900">
                                    <span>travel</span>
                                </li>
                                <li className='bg-primary text-white py-3 px-5 text-lg rounded-full capitalize' data-aos="fade-center" data-aos-delay="1000">
                                    <span>travelplanning</span>
                                </li>
                            </ul>
                        </div>

                        <div className='centered-row flex-wrap gap-3'>
                            <Link to="https://www.facebook.com/" className='bg-primary w-10 h-10 centered-row justify-center rounded-full cursor-pointer' data-aos="fade-center" data-aos-delay="700">
                                <img src={facebook} alt="facebook-image" />
                            </Link>
                            <Link to="https://www.instagram.com/" className='bg-primary w-10 h-10 centered-row justify-center rounded-full' data-aos="fade-center" data-aos-delay="800">
                                <img src={instagram} alt="instagram-image" />
                            </Link>
                            <Link to="https://www.linkedin.com/" className='bg-primary w-10 h-10 centered-row justify-center rounded-full' data-aos="fade-center" data-aos-delay="900">
                                <img src={linkedin} alt="linkedin-image" />
                            </Link>
                        </div>
                    </div>

                </div>

                <CommentForm />
            </div>
        </>
    )
}

export default BlogDetails