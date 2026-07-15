import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Heart } from "lucide-react";

const values = [
  {
    icon: Clock3,
    accent: "bg-[#E0E6F8] text-bolts-blue",
    title: "Time back for owners",
    desc: "Less time spent managing queues and admin, more time spent serving customers.",
  },
  {
    icon: ShieldCheck,
    accent: "bg-[#DDF6DD] text-[#10BC35]",
    title: "Fewer walkaways",
    desc: "Customers who can see the wait are far more likely to stay for it.",
  },
  {
    icon: Heart,
    accent: "bg-[#F6E5E5] text-[#FF734D]",
    title: "Stronger customer trust",
    desc: "Transparency about wait and availability builds confidence before a customer even arrives.",
  },
];

const MarketOppurtunity = () => {
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
          Why operational efficiency matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 text-black/60 text-lg max-md:text-base"
        >
          Technology should not create more work. It should remove the work
          that gets in the way of serving customers well.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {values.map(({ icon: Icon, accent, title, desc }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 flex flex-col items-center text-center"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${accent}`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-black font-semibold text-lg">{title}</p>
            <p className="mt-2 text-black/60 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarketOppurtunity;
