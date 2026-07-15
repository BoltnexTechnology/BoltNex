import { motion } from "framer-motion";

const MissionStrip = () => {
  return (
    <section className="py-16 max-md:py-12 px-24 max-xl:px-10 max-md:px-6 border-y border-black/5">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-3xl mx-auto text-center text-2xl max-md:text-xl font-medium text-black/70 leading-snug"
      >
        To eliminate operational friction by building intelligent software
        that simplifies how service businesses operate.
      </motion.p>
    </section>
  );
};

export default MissionStrip;
