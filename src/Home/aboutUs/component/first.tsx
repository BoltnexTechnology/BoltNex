import { motion } from "framer-motion";
import { Target, Compass, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    desc: "To eliminate operational friction by building intelligent software that simplifies how service businesses operate and how customers access those services.",
  },
  {
    icon: Compass,
    title: "Vision",
    desc: "To become the technology company behind the everyday operations of millions of service businesses worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Philosophy",
    desc: "Technology should not create more work. It should remove it. If a feature doesn't save time, reduce complexity or improve customer experience, it doesn't belong in our products.",
  },
];

const FirstPart = () => {
  return (
    <div className="px-12 max-lg:px-8 max-md:px-6 py-16 max-md:py-10">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold text-bolts-blue uppercase tracking-wide mb-3">
          About Boltnex Technology
        </p>
        <h1 className="text-4xl max-md:text-3xl font-semibold text-black leading-tight">
          Building the operational layer for service businesses.
        </h1>
        <p className="mt-6 text-lg max-md:text-base text-black/60 leading-relaxed">
          Boltnex Technology is a UK technology company building software
          that removes operational friction from service businesses. We're
          not an IT consultancy and we're not a software agency. We build
          scalable software products, starting with BQueue.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-14 max-w-4xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
      >
        {pillars.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-white border border-black/5 shadow-sm p-7 text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-bolts-blue/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-bolts-blue" />
            </div>
            <p className="text-black font-semibold text-lg">{title}</p>
            <p className="mt-2 text-black/60 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FirstPart;
