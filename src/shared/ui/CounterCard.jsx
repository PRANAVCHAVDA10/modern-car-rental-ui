import { useEffect, useState } from "react";

const CounterCard = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2 sec
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [end]);

    return (
        <div className="count-item relative text-center w-full">
            <span className="font-barlow text-[12rem] font-semibold tracking-wide text-gray-light">
                {count}
            </span>
            <span className="absolute top-2 left-0 h-full w-full flex justify-center items-center uppercase font-semibold font-barlow text-2xl">
                {label}
            </span>
        </div>
    );
};

export default CounterCard;