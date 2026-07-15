import { motion } from "framer-motion";
import { CalendarCheck, Workflow, Users, BarChart3 } from "lucide-react";

const helps = [
  {
    icon: CalendarCheck,
    title: "Simplify bookings",
    desc: "Turn appointments and walk-ins into one predictable, manageable flow.",
  },
  {
    icon: Workflow,
    title: "Automate daily operations",
    desc: "Remove the repetitive admin that eats into time better spent on customers.",
  },
  {
    icon: Users,
    title: "Improve customer engagement",
    desc: "Give customers visibility and confidence before they even walk in.",
  },
  {
    icon: BarChart3,
    title: "Better business insights",
    desc: "Understand demand and performance instead of guessing at it.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutBoltNet = () => {
  return (
    <section className="py-24 max-lg:py-20 max-md:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl max-md:text-3xl font-semibold text-black"
        >
          How Boltnex Technology helps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 text-black/60 text-lg max-md:text-base"
        >
          Every product we build is judged by one question: does it remove
          friction for the businesses that use it?
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-14"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {helps.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-bolts-blue/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-bolts-blue" />
            </div>
            <p className="text-black font-semibold text-lg">{title}</p>
            <p className="mt-2 text-black/60 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutBoltNet;
