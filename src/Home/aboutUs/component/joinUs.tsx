import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../utils/route";
import { Button } from "../../../components/ui/button";

const JoinUs = () => {
  return (
    <div className="flex flex-col justify-center py-24 max-lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-bolts-blue to-[#1f3fc7] px-16 py-20 max-lg:px-10 max-lg:py-16 max-md:px-6 max-md:py-12 text-center"
      >
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-xl mx-auto">
          <h2 className="text-4xl max-md:text-3xl font-semibold text-white">
            Want to help build it?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-md:text-base leading-relaxed">
            We're a small, product-led team building software that removes
            friction for service businesses everywhere.
          </p>
          <Link to={AppRoutes.careers}>
            <Button variant="white" className="mt-8">
              See Careers
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinUs;
