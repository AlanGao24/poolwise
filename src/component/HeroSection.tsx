'use client';

import Link from "next/link";

export default function HeroSection(){
    return(
        <section
        className="top-0 flex items-center justify-center h-screen text-white bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/waterBackground.png')" }}>
            <div className="flex flex-col px-4 text-center -mt-15 gap-y-5">
                <h1 className="text-6xl font-bold md:text-9xl drop-shadow-lg/60">
                    Poolwise
                </h1>
                <p className="text-2xl mt-15 md:text-3xl drop-shadow-sm/30">
                    Professional swimming pool maintenance solutions
                </p>
                <p className="text-2xl md:px-28 md:text-3xl drop-shadow-sm/30">
                    We are a team of pool maintenance experts dedicated to keeping your pool clean, safe, and enjoyable all year round.
                </p>
                <div className="flex justify-center gap-4 mt-8 md:flex-row">
                    <Link
                    href="/contact"
                    className="
                        px-10 py-4 text-sm            // 手机端：内边距小，文字小
                        md:px-25 md:py-5 md:text-2xl // 中屏及以上：内边距变大，字体变正常
                        font-semibold text-black transition bg-yellow-400 rounded-full shadow hover:bg-yellow-300
                        hover:shadow-lg hover:scale-115
                        ">
                        Booking Now
                    </Link>
                </div>
            </div>
        </section>
    );
}