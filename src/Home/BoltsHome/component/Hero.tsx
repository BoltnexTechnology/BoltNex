import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../utils/route";
import { Button } from "../../../components/ui/button";
import BQueueMockup from "./BQueueMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const scrollToBQueue = () => {
    document.getElementById("bqueue")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-12 max-lg:px-8 max-md:px-6 pt-24 pb-16">
      <motion.div
        className="flex justify-between items-center gap-x-10 max-xl:flex-col max-xl:gap-y-14"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* LEFT — copy */}
        <article className="basis-1/2 max-xl:basis-full max-xl:text-center">
          <div className="max-w-xl max-xl:mx-auto">
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl max-xl:text-5xl max-md:text-4xl font-semibold leading-[1.1] tracking-tight text-black"
            >
              Building software that removes operational friction from service businesses.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 text-lg max-md:text-base text-black/60 leading-relaxed"
            >
              We create intelligent business software that simplifies daily
              operations, automates repetitive work and helps businesses
              deliver better customer experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-x-4 mt-10 max-xl:justify-center max-md:flex-col max-md:w-full max-md:gap-y-3"
            >
              <Button onClick={scrollToBQueue} className="max-md:w-full">
                Explore BQueue
              </Button>
              <Link to={AppRoutes.aboutUs} className="max-md:w-full">
                <Button variant="secondary" className="max-md:w-full">
                  Learn About Boltnex Technology
                </Button>
              </Link>
            </motion.div>
          </div>
        </article>

        {/* RIGHT — visual */}
        <motion.article
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="basis-1/2 max-xl:basis-full flex justify-center items-center relative w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full bg-gradient-to-br from-bolts-blue/25 via-bolts-blue/10 to-transparent blur-2xl"
          />
          <div className="relative rotate-[-4deg]">
            <BQueueMockup variant="compact" />
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Hero;
