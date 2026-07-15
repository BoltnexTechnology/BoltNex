import { motion } from "framer-motion";

const roadmap = [
  "Smart scheduling",
  "Operational automation",
  "Customer relationship management",
  "Business intelligence",
];

const FutureVision = () => {
  return (
    <section className="py-16 max-md:py-12 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-black/50 text-sm max-w-md mx-auto"
      >
        BQueue is the first step. We're building toward a broader operational
        platform for service businesses.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        className="flex flex-wrap justify-center gap-2.5 mt-5"
      >
        {roadmap.map((label) => (
          <motion.span
            key={label}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xs font-medium text-black/50 border border-black/10 rounded-full px-3.5 py-1.5"
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default FutureVision;
