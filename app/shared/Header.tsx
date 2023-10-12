'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="h-20 w-full fixed flex justify-center items-center
                           bg-blue-500 md:bg-black text-white px-4 md:px-0">
            <div className="h-full w-full md:w-4/5 flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl font-bold">
                    Luiz Lima
                </Link>
                <nav className={`md:flex gap-4 ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="h-[100svh] md:h-auto w-full md:w-auto absolute top-20 md:static md:top-0
                                   flex flex-col md:flex-row bg-blue-500 md:bg-black gap-4">
                        <li className="mx-4 md:mx-auto mt-4 md:mt-auto">
                            <Link href="/about" className="hover:underline">
                                About me
                            </Link>
                        </li>
                        <li className="mx-4 md:mx-auto mt-1 md:mt-auto">
                            <Link href="/experience" className="hover:underline">
                                Experience
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link
                    href="/contact"
                    className="bg-black md:bg-blue-500 text-white md:text-black
                               px-4 py-2 rounded hover:bg-blue-400">
                    Get in touch
                </Link>
                <button
                    id="menu-button"
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>
        </header>
    );
}
