import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Rocket,
  Users,
  Sparkles,
  BookOpen,
  Code2,
  Layers,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Early-stage impact",
    text: "We're a small, early-stage team, so the work you do here directly shapes the product.",
  },
  {
    icon: Users,
    title: "A close-knit team",
    text: "No layers of process. You'll work closely with the people building the product.",
  },
  {
    icon: Sparkles,
    title: "Ownership from day one",
    text: "As much responsibility as you're ready to take, with the trust to run with it.",
  },
  {
    icon: BookOpen,
    title: "Always learning",
    text: "An environment where figuring things out is part of the job, not a distraction from it.",
  },
  {
    icon: Code2,
    title: "A modern stack",
    text: "We build with current tools and frameworks, not legacy systems held together by habit.",
  },
  {
    icon: Layers,
    title: "Product, not projects",
    text: "You're building one product for the long term, not shipping one-off client work.",
  },
];

const BuisnessModel = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="px-24 max-xl:px-10 max-md:px-5 py-20 max-md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">
          Why work at Boltnex
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
      >
        {benefits.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            className="rounded-2xl bg-white border border-black/5 shadow-sm p-7 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-bolts-blue/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-bolts-blue" />
            </div>
            <p className="text-black font-semibold text-lg">{title}</p>
            <p className="mt-2 text-black/60 text-sm leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BuisnessModel;
