'use client';

import Link from "next/link";

export default function HeroSection(){
    return(
        <section
        // className="flex items-center justify-center h-screen text-white bg-center bg-cover" 
        // className="fixed inset-0 flex items-center justify-center h-screen text-white bg-center bg-cover"
        className="top-0 flex items-center justify-center h-screen text-white bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/waterBackground.png')" }}>
            <div className="px-4 text-center">
                <h1 className="text-4xl font-bold md:text-8xl drop-shadow-lg">
                    Poolwise
                </h1>
                <p className="mt-4 text-lg md:text-3xl drop-shadow-sm">
                    Professional swimming pool maintenance solutions
                </p>
                <div className="flex flex-col justify-center gap-4 mt-6 md:flex-row">
                    <Link
                    href="/contact"
                    className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-full shadow hover:bg-yellow-300">
                        Booking Now
                    </Link>
                </div>
            </div>
        </section>
    );
}