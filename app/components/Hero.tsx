"use client";
import { useRef } from "react";
import gsap from "gsap";

const Herosection = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const img = imgRef.current;
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        gsap.to(img, {
            rotateX,
            rotateY,
            scale: 1,
            transformPerspective: 800,
            ease: "power2.out",
            duration: 0.1,
        });
    };

    const handleMouseLeave = () => {
        const img = imgRef.current;
        if (!img) return;

        gsap.to(img, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: "power3.out",
            duration: 0.3,
        });
    };

    return (
            <div className=" h-screen w-full flex justify-center items-center">
                <div className="w-[30%] h-[70%] relative flex justify-start items-start">
                    <div className="relative top-4 left-2">
                        <p className="text-black text-xl ">Your Vision. Our Dedication.</p>
                        <h1 className="text-[34px] leading-10 text-black font-extrabold">Innovation and </h1>
                        <h1 className="text-[34px] leading-10 text-black font-extrabold">Technology Experts</h1>
                    </div>
                </div>
                <div
                    className="w-[38%] h-[70%]"
                >
                    <img
                        ref={imgRef}
                        src="/Frame 4 2.svg"
                        className="w-full"
                        style={{ transformStyle: "preserve-3d" }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <div
                    className="w-[28%] h-[20%] flex justify-center items-start"
                    
                >
                    <div className="h-72 w-full flex flex-col justify-center items-start gap-6 bg-cover bg-center ml-10" style={{ backgroundImage: "url('/Frame 67 1.svg')" }}>
                        <div className="text-black text-xl">
                            <span className="text-black font-bold text-2xl">Beelockchain</span> turns ideas into<br /> scalable digital solutions,<br /> driving growth and lasting<br /> success.
                        </div>
                        <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-medium shadow">
                            Realize your vision
                            <img src="/Background (1).svg" className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>
     
    );
};

export default Herosection;
