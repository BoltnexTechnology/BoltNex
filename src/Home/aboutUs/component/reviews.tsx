import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import {
  CalendarCheck,
  Workflow,
  Users,
  BarChart3,
  Puzzle,
  Gauge,
  Bell,
  type LucideIcon,
} from "lucide-react";
import ReadMore from "./readMore";

interface Card {
  id: number;
  icon: LucideIcon;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    id: 1,
    icon: Users,
    title: "Manage customer flow",
    text: "A live, transparent view of appointments, walk-ins and wait times, for the business and the customer.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Simplify bookings",
    text: "Turn appointments and walk-ins into one predictable, manageable flow instead of calls and paper lists.",
  },
  {
    id: 3,
    icon: Bell,
    title: "Improve customer engagement",
    text: "Give customers visibility and confidence before they even walk in, with real-time status updates.",
  },
  {
    id: 4,
    icon: Workflow,
    title: "Automate daily operations",
    text: "Remove the repetitive admin that eats into time better spent serving customers.",
  },
  {
    id: 5,
    icon: Gauge,
    title: "Improve operational efficiency",
    text: "Understand demand and performance instead of guessing at it, and cut down on walkaways.",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Gain better business insights",
    text: "See patterns in customer flow and service time that are impossible to track by memory alone.",
  },
  {
    id: 7,
    icon: Puzzle,
    title: "Integrate existing workflows",
    text: "Bring bookings, walk-ins and operations into one streamlined experience instead of scattered tools.",
  },
];

const Testimony: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const totalCards = cards.length;

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 600); // match transition duration
  };

  const handleBack = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardPosition = (cardIndex: number) => {
    let position = cardIndex - currentIndex;
    if (position < 0) position += totalCards;
    if (position >= totalCards) position -= totalCards;
    return position;
  };

  return (
    <div className="flex items-center flex-col justify-center relative text-black overflow-hidden py-10">
      <div className="relative w-full h-[470px] max-sm:h-[400px] flex items-start justify-start pl-8">
        {cards.map((card, cardIndex) => {
          const position = getCardPosition(cardIndex);
          if (position > 4) return null;

          const isActive = position === 0;
          const xPosition = position * 400;
          const scale = isActive ? 1.1 : 0.95;
          // Reduce overall opacity when animation is active
          const opacity = isAnimating
            ? isActive
              ? 0.8
              : 0.4
            : isActive
            ? 1
            : 0.6;

          const zIndex = isActive ? 20 : 10 - position;
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x: xPosition,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute h-[400px] max-sm:h-[350px] w-[364px] max-md:w-[320px] max-sm:w-[270px] max-sm:p-4 px-8 py-7 rounded-xl shadow-black/30 bg-white shadow-sm"
              style={{
                cursor: isActive ? "default" : "pointer",
              }}
              onClick={() => {
                if (!isActive) setCurrentIndex(cardIndex);
              }}
            >
              <div className="flex flex-col justify-start items-start relative h-full gap-y-5">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-bolts-blue/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-bolts-blue" />
                  </div>
                  <p className="font-semibold text-lg">{card.title}</p>
                </div>
                <div className="text-base max-sm:text-sm">
                  <ReadMore text={card.text} maxChars={200} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex w-full justify-start gap-4 z-10 pl-8">
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className={`border border-white/40 cursor-pointer text-white flex justify-center items-center w-12 h-12 rounded-full transition-all duration-150 hover:scale-110 active:scale-95 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`border border-white/40 cursor-pointer text-white rotate-180 flex justify-center items-center w-12 h-12 rounded-full transition-all duration-150 hover:scale-110 active:scale-95 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
