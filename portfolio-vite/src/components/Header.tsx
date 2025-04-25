import React from 'react';
import { Link } from 'react-scroll';
import icon from '../images/banana_megane.png';

const Header: React.FC = () => {
    return (
        <header className="bg-transparent text-white py-4 px-4 flex justify-between items-center fixed top-0 w-full z-10">
            <div className="flex items-center space-x-4">
                <Link
                    to="top"
                    smooth={true}
                    duration={500}
                    className="flex items-center cursor-pointer"
                >
                    <img
                        src={icon}
                        alt="Rintaro Seki"
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-2"
                    />
                    <h1 className="hidden md:block font-bold font-serif text-green-900">
                        <span className="block text-sm md:text-base text-gray-500">せき りんたろう's</span>
                        <span className="block text-lg md:text-2xl">Portfolio Site</span>
                    </h1>
                </Link>
            </div>

            {/* ナビゲーション */}
            <nav>
                <ul className="font-serif flex space-x-4 md:space-x-6">
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="hover:underline text-green-900"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="hover:underline text-green-900"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="hover:underline text-green-900"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:underline text-green-900"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
