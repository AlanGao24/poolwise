'use client';

import Link from "next/link";

export default function HeroSection(){
    return(
        <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('/Hero.webp')" }}>
            <div className="text-left px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Poolwise
                </h1>
                <p className="mt-4 text-lg md:text-2xl drop-shadow-sm">
                    Professional swimming pool maintenance solutions
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                    href="/contact"
                    className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
                        Booking Now
                    </Link>
                </div>
            </div>
        </section>
    );
}