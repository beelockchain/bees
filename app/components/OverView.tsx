"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

const highlightNumbers = (text: string) => {
  return text.split(/(\d+(?:[+x]\d*)?)/).map((part, index) => {
    if (/^\d+(?:[+x]\d*)?$/.test(part)) {
      return (
        <span
          key={index}
          className="bg-gradient-to-r from-[#AF7211] via-[#F6E000] to-[#D7B007] text-transparent bg-clip-text"
        >
          {part}
        </span>
      );
    }
    return <span key={index} className="text-black">{part}</span>;
  });
};

const cardsData = [
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "100+ Tech Maestros",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Enterprise-Grade Security 100",
    hoverSubtitle: "For Your Business",
    image: "/hover-image1.png",
    description:
      "We provide enterprise-level blockchain security, ensuring reliability and protection.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "350+ Successful Projects",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Automation Excellence 7",
    hoverSubtitle: "Process Reliability",
    image: "/hover-image2.png",
    description:
      "We deliver consistent quality and outstanding digital transformation results.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Trusted by 350+ Industries",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Safe & Scalable 24x7",
    hoverSubtitle: "Data Infrastructure",
    image: "/hover-image3.png",
    description:
      "We deliver secure, scalable, high-performance systems for enterprises.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "7+ Years of Quality",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Real-Time Insights 24",
    hoverSubtitle: "Modern Intelligence",
    image: "/hover-image4.png",
    description:
      "We deliver analytics and blockchain-powered insights for modern businesses.",
  },
];

const OverView = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showContentIndex, setShowContentIndex] = useState<number | null>(null);

  /* ======================
      SUPER SMOOTH HOVER
     ====================== */
  const expandCard = (index: number) => {
    setHoverIndex(index);

    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });

    // Animate all cards smoothly
    tl.to(cardsRef.current, {
      flexGrow: (i) => (i === index ? 1.5 : 1),
      scale: (i) => (i === index ? 1.03 : 1),
      stagger: 0.02,
    });

    // Show content AFTER animation finishes (no lag)
    tl.call(() => {
      setShowContentIndex(index);
    });
  };

  const resetCards = () => {
    setHoverIndex(null);
    setShowContentIndex(null);

    gsap.to(cardsRef.current, {
      flexGrow: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-black text-[34px] font-bold text-center">
          Why{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #AF7211, #F6E000, #D7B007)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Beelockchain
          </span>
        </h1>

        <p className="w-[500px] text-center text-black text-lg">
          Entrepreneurs worldwide trust BeelockChain digital solutions
        </p>
      </div>

      {/* Card row */}
      <div className="w-full h-screen flex justify-center items-center gap-4 px-10">
        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                cardsRef.current[i] = el;
              }
            }}

            onMouseEnter={() => expandCard(i)}
            onMouseLeave={resetCards}
            className="flex-1 h-[80%] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Show full content ONLY after animation finishes */}
            {showContentIndex === i ? (
              <div className="flex flex-col w-full h-full p-6 gap-6 opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[26px] font-extrabold leading-tight">
                      {highlightNumbers(card.hoverTitle)}
                    </h2>
                    <p className="text-[18px] text-black">
                      {highlightNumbers(card.hoverSubtitle)}
                    </p>
                  </div>

                  <Image
                    src={card.hoverLogo}
                    alt="hover logo"
                    width={45}
                    height={45}
                    className="opacity-60"
                  />
                </div>

                <div className="w-full h-[220px] bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt="hover image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-6 text-[16px]">
                  {card.description}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 p-6 opacity-90 transition-opacity duration-300">
                <Image src={card.initialLogo} alt="initial logo" width={60} height={60} />

                <h3 className="text-2xl font-bold text-center">
                  {highlightNumbers(card.initialText)}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;
