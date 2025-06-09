'use client';

import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/Poolwise-Living-logo.png"
                        alt="Poolwise Logo"
                        width={140}
                        height={10}
                        priority
                    />
                </Link>
                <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
                    <Link href="/product">Product</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/why-us">Why Us</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </nav>
        
    )
}