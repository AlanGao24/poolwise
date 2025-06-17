'use client';

import Image from "next/image";
import Link from "next/link";
import {Menu, X} from 'lucide-react'
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="flex items-center justify-between px-6 py-2 mx-auto max-w-7xl">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/Poolwise-Living-logo.png"
                        alt="Poolwise Logo"
                        width={140}
                        height={15}
                        priority
                    />
                </Link>

                {/* On computer */}
                <div className="hidden space-x-10 text-lg font-medium text-gray-700 md:flex">
                    <Link href="/product">Product</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/why-us">Why Us</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                </div>

                {/* On mobile phone */}
                <button
                    className="text-gray-700 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

            </div>

            {/* Menu content */}
            {isOpen && (
            <div className="flex flex-col px-6 pb-4 space-y-2 font-medium text-gray-700 md:hidden">
                <Link href="/product" className="block" onClick={() => setIsOpen(false)}>Product</Link>
                <Link href="/services" className="block" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/why-us" className="block" onClick={() => setIsOpen(false)}>Why Us</Link>
                <Link href="/contact" className="block" onClick={() => setIsOpen(false)}>Contact</Link>
                <Link href="/about" className="block" onClick={() => setIsOpen(false)}>About</Link>
            </div>
            )}
        </nav>
        
    )
}