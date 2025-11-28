"use client";

import { useEffect, useRef, useState } from "react";

// ---------------------------
// TAB LIST (strict string types)
// ---------------------------
const TABS = [
    "Blockchain",
    "AI",
    "Game",
    "Consultant",
    "Software",
    "Web3",
    "Mobile",
    "QA testing",
    "Cloud",
] as const;

type TabType = typeof TABS[number];

// ---------------------------
// TAB CONTENT
// ---------------------------
const TAB_CONTENT: Record<TabType, { title: string; desc: string }> = {
    Blockchain: {
        title: "Blockchain Development",
        desc: "We build decentralized applications, smart contracts, and secure blockchain infrastructures for enterprises.",
    },
    AI: {
        title: "AI / ML Solutions",
        desc: "We create intelligent automation, AI-driven analytics, and custom machine learning models.",
    },
    Game: {
        title: "Game Development",
        desc: "We develop immersive gaming experiences using Unity, Unreal Engine, and WebGL technologies.",
    },
    Consultant: {
        title: "IT Consulting",
        desc: "We guide businesses with digital transformation strategies, system architecture, and technology roadmaps.",
    },
    Software: {
        title: "Software Development",
        desc: "We build robust, scalable software tailored to your business workflows and automation needs.",
    },
    Web3: {
        title: "Web3 Development",
        desc: "We deliver next-gen decentralized apps, NFT platforms, and crypto payment integrations.",
    },
    Mobile: {
        title: "Mobile App Development",
        desc: "We craft high-performance Android, iOS, and cross-platform apps using Flutter & React Native.",
    },
    "QA testing": {
        title: "QA & Testing",
        desc: "We ensure bug-free performance through automated testing, manual QA, and performance audits.",
    },
    Cloud: {
        title: "Cloud Solutions",
        desc: "We implement scalable cloud architectures using AWS, Azure, and GCP.",
    },
};

// ---------------------------
// COMPONENT
// ---------------------------
const Transforme = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    // ---------------------------
    // SCROLL-BASED TAB SWITCHING
    // ---------------------------
    useEffect(() => {
        const topNavHeight = 80; // CHANGE if your navbar height differs

        const options = {
            root: null,
            rootMargin: `-${topNavHeight}px 0px 0px 0px`,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            const scrollPos = window.scrollY;

            // Do not switch tab until section touches navbar
            if (scrollPos < topNavHeight) {
                setActiveTab(0);
                return;
            }

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    setActiveTab(index);
                }
            });
        }, options);

        sectionRefs.current.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // ---------------------------
    // CLICK TAB → SCROLL TO SECTION
    // ---------------------------
    const scrollToSection = (index: number) => {
        const topNavHeight = 80;

        window.scrollTo({
            top: index * window.innerHeight - topNavHeight,
            behavior: "smooth",
        });

        setActiveTab(index);
    };

    // ---------------------------
    // UI RENDER
    // ---------------------------
    return (
        <div className="w-full space-y-6 flex flex-col justify-center items-center">

            {/* Header */}
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <h1 className="text-[34px] leading-10 text-black font-bold">
                    Transforming Businesses Digitally
                </h1>
                <p className="text-black text-lg text-center">
                    BeelochChain empowers businesses with solutions that boost operations,<br />
                    enhance customer relationships, and drive growth.
                </p>
            </div>

            {/* Sticky Tab Bar */}
            <div className="flex gap-3 py-4 px-4 w-full justify-center sticky top-20 ">
                {TABS.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        style={
                            activeTab === index
                                ? {
                                    background: "linear-gradient(90deg, #AF7211, #F6E000, #D7B007)",
                                    color: "white",
                                    fontWeight: 700,
                                }
                                : {}
                        }
                        className={`px-4 py-2 rounded-lg transition-all text-black
        ${activeTab !== index ? "bg-gray-100" : ""}
    `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Fullscreen Sections */}
            {TABS.map((tab, index) => {
                const content = TAB_CONTENT[tab];

                return (
                    <div
                        key={index}
                        ref={addToRefs}
                        data-index={index}
                        className="h-screen flex flex-col justify-center px-10"
                    >
                        <h1 className="text-4xl font-bold text-black">{content.title}</h1>

                        <p className="text-lg mt-4 w-[500px] text-black">
                            {content.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Transforme;
