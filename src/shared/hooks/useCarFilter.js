import { useState } from "react";

const useCarFilter = (cars) => {

    // 🔤 Live search
    const [search, setSearch] = useState("");

    // 🟡 Checkbox (temporary)
    const [selectedTypes, setSelectedTypes] = useState([]);

    // 🟢 Applied checkbox filter
    const [appliedTypes, setAppliedTypes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 6;

    const handleCheckbox = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    // 🔥 Apply checkbox filter only on button click
    const handleSearch = () => {
        setAppliedTypes(selectedTypes);
        setCurrentPage(1);
    };

    // ✅ FILTER LOGIC
    const filteredCars = cars.filter((car) => {

        // ✅ LIVE SEARCH
        const matchesSearch = car.name
            .toLowerCase()
            .includes(search.toLowerCase());

        // ✅ CHECKBOX (only after search click)
        const matchesType =
            appliedTypes.length === 0 ||
            appliedTypes.includes(car.category);

        return matchesSearch && matchesType;
    });

    // Pagination
    const indexOfLast = currentPage * carsPerPage;
    const indexOfFirst = indexOfLast - carsPerPage;

    const currentCars = filteredCars.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredCars.length / carsPerPage);

    return {
        search,
        setSearch,
        selectedTypes,
        handleCheckbox,
        handleSearch,
        currentCars,
        totalPages,
        currentPage,
        setCurrentPage,
    };
};

export default useCarFilter;