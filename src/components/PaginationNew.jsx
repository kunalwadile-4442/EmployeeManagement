import React from 'react';

export default function Pagination({ links }) {
    function getClassName(active) {
        return active
            ? "page-item active bg-logo-text-color text-white rounded-lg transform transition duration-300 ease-in-out"
            : "page-item transform transition duration-300 ease-in-out";
    }

    function getLabel(link_label) {
        if (link_label === "&laquo; Previous") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            );
        } else if (link_label === "Next &raquo;") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            );
        } else {
            return link_label;
        }
    }

    return (
        links?.length > 3 && (
            <nav className="" aria-label="...">
                <ul className="pagination flex justify-end gap-2">
                    {links.map((link, key) => (
                        link.url === null ? (
                            <li
                                className="page-item disabled"
                                key={key}
                            >
                                <span
                                    className="page-link text-logo-text-color inline-block w-8 text-center rounded-lg"
                                >
                                    {getLabel(link.label)}
                                </span>
                            </li>
                        ) : (
                            <li className={getClassName(link.active)} key={key}>
                                <a
                                    className="page-link btn-ring-purple inline-block w-8 text-center rounded-lg pt-1 transform transition duration-300 ease-in-out"
                                    href={link.url}
                                >
                                    {getLabel(link.label)}
                                </a>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        )
    );
}
