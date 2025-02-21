"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <header className="bg-white text-black p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src="/logo.jpg" alt="Logo" width={175} height={131} className="w-16 h-16 md:w-32 md:h-32" />
                    <div className="ml-2 md:ml-4">
                        <h1 className="text-lg md:text-xl font-bold">Tejvion Infra</h1>
                        <p className="text-xs md:text-sm">Where Vision Meets Execution</p>
                    </div>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-twitter"></i></Link>
                    <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-facebook"></i></Link>
                    <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-pinterest"></i></Link>
                    <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></Link>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center">
                        <i className="fas fa-phone-alt text-green-500"></i>
                        {/* <span className="ml-2">+98 (000) - 9630</span> */}
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-envelope text-green-500"></i>
                        <span className="ml-2">tejvion@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-green-500"></i>
                        <span className="ml-2">Khagaria, Bihar (851204)</span>
                    </div>
                </div>
            </div>
            <button className="text-black md:hidden mt-4" onClick={() => setShowNav(!showNav)}>
                <p>Menu</p>
            </button>
            <nav className={`w-full mt-4 ${showNav ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
                    <li><Link href="/#hero" className={`hover:text-gray-400 ${activeLink === '/#home' ? 'text-green-500' : ''}`}>Home</Link></li>
                    <li><Link href="/#about" className={`hover:text-gray-400 ${activeLink === '/#about' ? 'text-green-500' : ''}`}>About</Link></li>
                    <li><Link href="/#construction" className={`hover:text-gray-400 ${activeLink === '/#construction' ? 'text-green-500' : ''}`}>Construction</Link></li>
                    <li><Link href="/#agriculture" className={`hover:text-gray-400 ${activeLink === '/#agriculture' ? 'text-green-500' : ''}`}>Agriculture</Link></li>
                    <li><Link href="/#transport" className={`hover:text-gray-400 ${activeLink === '/#transport' ? 'text-green-500' : ''}`}>Transport</Link></li>
                    <li><Link href="/#infrastructure" className={`hover:text-gray-400 ${activeLink === '/#infrastructure' ? 'text-green-500' : ''}`}>Infrastructure</Link></li>
                    <li><Link href="/#contact" className={`hover:text-gray-400 ${activeLink === '/#contact' ? 'text-green-500' : ''}`}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
