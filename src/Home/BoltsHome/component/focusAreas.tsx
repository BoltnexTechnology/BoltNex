import { motion } from "framer-motion";
import { Clock, EyeOff, ClipboardList, UserX } from "lucide-react";

const frictionPoints = [
  {
    icon: Clock,
    title: "Long queues and no-shows",
    desc: "Customers wait without knowing how long for, and walk away before they're seen.",
  },
  {
    icon: EyeOff,
    title: "No visibility into wait times",
    desc: "Neither the business nor the customer has a clear, real-time picture of service flow.",
  },
  {
    icon: ClipboardList,
    title: "Manual booking admin",
    desc: "Staff spend hours a week juggling calls, paper lists and spreadsheets instead of customers.",
  },
  {
    icon: UserX,
    title: "Walkaways during busy periods",
    desc: "Peak-time congestion quietly costs revenue that never gets tracked or recovered.",
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

const FocusAreas = () => {
  return (
    <section className="bg-bolts-blue py-24 max-lg:py-20 px-24 max-xl:px-10 max-md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl max-md:text-3xl font-semibold text-white"
        >
          What problems we solve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 text-white/70 text-lg max-md:text-base"
        >
          Service businesses lose time and customers to the same operational
          friction, every day.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-14"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {frictionPoints.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-white/10 border border-white/10 p-6 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-white font-semibold text-lg">{title}</p>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FocusAreas;
