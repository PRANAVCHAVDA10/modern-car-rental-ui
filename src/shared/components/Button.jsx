import React from "react";
import { Link } from "react-router-dom";

const Button = ({
    text,
    className = "",
    type = "button", // "button" | "link"
    to = "/",
    onClick,
    ...rest
}) => {

    const baseClass =
        "px-5 md:px-8 py-3 w-45 md:w-50 uppercase font-barlow font-medium tracking-wide cursor-pointer inline-block text-center";

    // 🔹 Link Button
    if (type === "link") {
        return (
            <Link to={to} className={`${baseClass} ${className}`} {...rest}>
                {text}
            </Link>
        );
    }

    // 🔹 Normal Button
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${baseClass} ${className}`}
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;