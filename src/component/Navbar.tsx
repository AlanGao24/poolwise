'use client';

import Image from "next/image";
import Link from "next/link";
import {Menu, X} from 'lucide-react'
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
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
                <div className="space-x-10 text-gray-700 font-medium text-lg hidden md:flex">
                    <Link href="/product">Product</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/why-us">Why Us</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                </div>

                {/* On mobile phone */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

            </div>

            {/* Menu content */}
            {isOpen && (
            <div className="md:hidden px-6 pb-4 space-y-2 text-gray-700 font-medium flex flex-col">
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