import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

const Team = () => {
  return (
    <div className="py-20 max-md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-bolts-blue to-[#1f3fc7] px-16 py-20 max-lg:px-10 max-lg:py-16 max-md:px-6 max-md:py-12"
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative flex justify-between items-center max-xl:flex-col max-xl:gap-y-8 max-xl:text-center">
          <h2 className="text-5xl max-xl:text-4xl max-md:text-3xl font-semibold text-white max-w-xl leading-tight">
            Ready to remove the friction?
          </h2>

          <div className="max-w-sm max-xl:max-w-lg">
            <p className="text-white/80 text-lg max-md:text-base leading-relaxed">
              See how BQueue can simplify customer flow for your business,
              with no commitment required.
            </p>
            <Button variant="white" className="mt-7">
              Request a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
