import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import BQueueMockup from "./BQueueMockup";

const outcomes = [
  "Fewer walkaways during busy periods",
  "Real-time visibility for customers, before they arrive",
  "One simple view for staff to manage flow",
];

const FlagShipProject = () => {
  return (
    <section
      id="bqueue"
      className="py-24 max-lg:py-20 max-md:py-16 flex items-center justify-between gap-x-16 max-xl:flex-col max-xl:gap-y-14 scroll-mt-24"
    >
      {/* TEXT */}
      <motion.article
        className="basis-1/2 max-xl:basis-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm font-semibold text-bolts-blue uppercase tracking-wide mb-3">
          Flagship product
        </p>
        <h2 className="text-4xl max-md:text-3xl font-semibold text-black">
          Meet BQueue
        </h2>
        <p className="mt-3 text-2xl max-md:text-xl font-semibold text-bolts-blue">
          Stop waiting. Know your time.
        </p>

        <div className="mt-6 space-y-4 text-black/60 leading-relaxed max-w-xl">
          <p>
            Service businesses like barbers, salons and spas share the same
            problem: customers wait without knowing how long for, and staff
            manage that flow from memory and guesswork. That operational
            friction shows up as a worse customer experience and, eventually,
            as walked-away revenue.
          </p>
          <p>
            BQueue turns that guesswork into a live, transparent queue. Instead
            of waiting blind, customers see real-time status and estimated
            wait times before they arrive. Instead of managing chaos, the
            business gets one clear view of its own flow.
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-x-3">
              <CheckCircle2 className="w-5 h-5 text-bolts-blue shrink-0 mt-0.5" />
              <span className="text-black/80">{outcome}</span>
            </li>
          ))}
        </ul>

        <Button className="mt-9">Join Early Access</Button>
      </motion.article>

      {/* MOCKUP */}
      <motion.article
        className="basis-[45%] max-xl:basis-full flex justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <BQueueMockup variant="full" />
      </motion.article>
    </section>
  );
};

export default FlagShipProject;
