import { CalendarDays, MoveRight } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const BlogCard = ({ image, title, date, id }) => {
    return (
        <>
            <div key={id} className="blog-item bg-white shadow-lg p-3 lg:p-5 space-y-6 rounded-xl group">
                <div className="blog-image rounded-xl overflow-hidden h-80">
                    <img
                        src={image}
                        alt={title}
                        className="section-image object-cover group-hover:scale-110 transition-all duration-300"
                    />
                </div>
                <div className="blog-content py-5">
                    <ul>
                        <li className="centered-row text-md text-pera">
                            <CalendarDays size={20} className="me-2" />
                            <span>{date}</span>
                        </li>
                    </ul>

                    <Link to={`/blog/${id}`}>
                        <span className="text-xl font-semibold block capitalize pt-3">{title}</span>
                    </Link>

                    <Link to={`/blog/${id}`} className="centered-row gap-2 mt-5">
                        <Button
                            className="p-0! w-fit! text-xl font-medium tracking-wide"
                            text={"Read More"}
                        />
                        <MoveRight size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard