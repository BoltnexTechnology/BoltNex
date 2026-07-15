import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "../../../components/ui/button";

const Join = () => {
  const handleSpeculativeApply = () => {
    const subject = encodeURIComponent("Speculative application: Boltnex Technology");
    const body = encodeURIComponent(
      `Hello Boltnex Team,\n\nI'd like to introduce myself even though I don't see an open role that matches right now.\n\nA bit about me:\n[Your background]\n\nWhat I'd be interested in working on:\n[Your interest]\n\nThank you,\n[Your Name]`
    );
    window.location.href = `mailto:support@boltnex.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-24 max-xl:px-10 max-md:px-5 py-20 max-md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-xl mx-auto text-center rounded-3xl bg-white border border-black/5 shadow-sm p-12 max-md:p-8"
      >
        <div className="w-12 h-12 rounded-full bg-bolts-blue/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-5 h-5 text-bolts-blue" />
        </div>
        <h2 className="text-2xl max-md:text-xl font-semibold text-black">
          No open roles right now
        </h2>
        <p className="mt-4 text-black/60 leading-relaxed">
          We're a small, early-stage team, so we're not actively hiring at
          the moment. When we open a role, it'll be listed here. If you think
          you'd be a great fit for what we're building, we'd still love to
          hear from you.
        </p>
        <Button onClick={handleSpeculativeApply} className="mt-8">
          Send a Speculative Application
        </Button>
      </motion.div>
    </section>
  );
};

export default Join;
