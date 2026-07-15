import { Clock, Users, CheckCircle2 } from "lucide-react";

interface BQueueMockupProps {
  variant?: "full" | "compact";
  className?: string;
}

const queueList = [
  { name: "Aisha O.", status: "Now serving" },
  { name: "Daniel K.", status: "Next" },
  { name: "Priya M.", status: "~12 min" },
  { name: "Sam T.", status: "~18 min" },
];

const BQueueMockup = ({ variant = "full", className = "" }: BQueueMockupProps) => {
  if (variant === "compact") {
    return (
      <div
        className={`w-64 rounded-2xl bg-white shadow-xl shadow-black/10 border border-black/5 p-5 ${className}`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-black/50 uppercase tracking-wide">
            Now serving
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
        <p className="text-4xl font-bold text-black">#12</p>
        <div className="flex items-center gap-1.5 mt-3 text-sm text-black/60">
          <Clock className="w-4 h-4" />
          <span>Est. wait 8 min</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-sm rounded-3xl bg-white shadow-2xl shadow-black/10 border border-black/5 p-6 ${className}`}
    >
      <div className="flex items-center justify-between pb-5 border-b border-black/5">
        <div>
          <p className="font-semibold text-black">Fade &amp; Co. Barbershop</p>
          <p className="text-xs text-black/50">London, UK</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="flex items-center justify-between py-5">
        <div>
          <p className="text-xs font-semibold text-black/50 uppercase tracking-wide mb-1">
            Now serving
          </p>
          <p className="text-4xl font-bold text-black">#12</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-black/50 uppercase tracking-wide mb-1">
            Est. wait
          </p>
          <p className="text-2xl font-bold text-bolts-blue">8 min</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {queueList.map((person, i) => (
          <div
            key={person.name}
            className="flex items-center justify-between rounded-xl bg-[#F5F7FF] px-3.5 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-bolts-blue/10 text-bolts-blue text-xs font-semibold flex items-center justify-center">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="text-sm font-medium text-black">{person.name}</span>
            </div>
            {i === 0 ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            ) : (
              <span className="text-xs text-black/50">{person.status}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-black/5 text-xs text-black/50">
        <Users className="w-3.5 h-3.5" />
        <span>4 people in queue · updated live</span>
      </div>
    </div>
  );
};

export default BQueueMockup;
