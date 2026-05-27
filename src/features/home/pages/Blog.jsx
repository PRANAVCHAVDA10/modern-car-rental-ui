import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import BlogCard from '../../../shared/ui/BlogCard'
import { blogs } from '../data/blogs'

const Blog = () => {
    return (
        <>
            <PageBanner
                title="Blog"
                currentPage="Blog"
            />
            <div className="blog-grid grid-col lg:grid-cols-2 xl:grid-cols-3 gap-10 section py-[8%] relative">
                {blogs.map((blog, i) => (
                    <div
                        key={blog.id}
                        data-aos="fade-up"
                        data-aos-delay={i * 120}
                    >
                        <BlogCard
                            id={blog.id}
                            title={blog.title}
                            date={blog.date}
                            image={blog.image}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Blog