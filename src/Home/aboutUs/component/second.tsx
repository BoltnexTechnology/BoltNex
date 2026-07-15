import { motion } from "framer-motion";
import BQueueMockup from "../../BoltsHome/component/BQueueMockup";

const roadmap = [
  "Customer flow optimisation",
  "Smart scheduling",
  "Operational automation",
  "Customer relationship management",
  "Business intelligence",
  "Workflow integrations",
];

const SecondPart = () => {
  return (
    <div className="px-12 max-lg:px-8 max-md:px-6 py-16 max-md:py-10">
      <section className="flex justify-between gap-x-16 max-xl:flex-col max-xl:gap-10">
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
            About BQueue
          </h2>

          <div className="mt-6 space-y-4 text-black/60 leading-relaxed max-w-xl">
            <p>
              BQueue is a customer flow management platform designed
              specifically for service businesses. It helps businesses manage
              appointments, walk-ins and customer flow, while giving customers
              better visibility into service availability and waiting times.
            </p>
            <p>
              For businesses, BQueue improves operational control and helps
              reduce customer walkaways during busy periods. For customers, it
              provides greater confidence by showing queue status, estimated
              waiting time and availability before they even arrive.
            </p>
            <p>
              BQueue is not simply a booking app. It's the first step toward
              a broader operational platform for service businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-7">
            {roadmap.map((label) => (
              <span
                key={label}
                className="text-xs font-medium text-black/50 border border-black/10 rounded-full px-3.5 py-1.5"
              >
                {label}
              </span>
            ))}
          </div>
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
    </div>
  );
};

export default SecondPart;
