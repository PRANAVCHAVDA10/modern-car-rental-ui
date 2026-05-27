const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    return (
        <div className="flex gap-3 justify-center mt-10" data-aos="fade-center" data-aos-delay="300">
            {Array.from({ length: totalPages }, (_, i) => ( 
                <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 border rounded cursor-pointer ${currentPage === i + 1
                        ? "bg-black text-white"
                        : ""
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;