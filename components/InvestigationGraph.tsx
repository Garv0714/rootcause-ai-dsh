"use client";

import {
  Battery,
  Cpu,
  Zap,
  AlertTriangle,
} from "lucide-react";

interface InvestigationGraphProps {
  nodes: string[];
}

export default function InvestigationGraph({
  nodes,
}: InvestigationGraphProps) {
  function getNodeConfig(
    node: string
  ) {
    const lower =
      node.toLowerCase();

    if (
      lower.includes("battery")
    ) {
      return {
        icon: Battery,
        gradient:
          "from-orange-500 to-red-500",
      };
    }

    if (
      lower.includes("motor")
    ) {
      return {
        icon: Cpu,
        gradient:
          "from-violet-500 to-indigo-500",
      };
    }

    if (
      lower.includes("voltage")
    ) {
      return {
        icon: Zap,
        gradient:
          "from-blue-500 to-cyan-500",
      };
    }

    return {
      icon: AlertTriangle,
      gradient:
        "from-slate-700 to-slate-900",
    };
  }

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <h2
        className="
        mb-2
        text-xl
        font-bold
        text-slate-900
        "
      >
        Root Cause Chain
      </h2>

      <p
        className="
        mb-6
        text-slate-500
        "
      >
        Visual representation of the
        engineering failure path.
      </p>

      {nodes.length === 0 ? (
        <div
          className="
          rounded-2xl
          bg-slate-50
          p-8
          text-center
          text-slate-500
          "
        >
          No root cause chain available.
        </div>
      ) : (
        <div
          className="
          flex
          flex-col
          items-center
          "
        >
          {nodes.map(
            (
              node,
              index
            ) => {
              const config =
                getNodeConfig(node);

              const Icon =
                config.icon;

              return (
                <div
                  key={index}
                  className="
                  flex
                  flex-col
                  items-center
                  "
                >
                  <div
                    className="
                    flex
                    w-full
                    max-w-md
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    "
                  >
                    <div
                      className={`
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${config.gradient}
                      text-white
                      `}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3
                        className="
                        font-semibold
                        text-slate-900
                        "
                      >
                        {node}
                      </h3>

                      <p
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        Failure Node
                      </p>
                    </div>
                  </div>

                  {index !==
                    nodes.length - 1 && (
                    <div
                      className="
                      h-10
                      w-[3px]
                      bg-gradient-to-b
                      from-blue-400
                      via-violet-400
                      to-pink-400
                      "
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      )}

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-blue-100
        bg-gradient-to-r
        from-blue-50
        to-violet-50
        p-4
        "
      >
        <p
          className="
          text-sm
          text-slate-600
          "
        >
          AI traces relationships across
          thermal, electrical and
          mechanical failure events to
          identify the most probable
          root cause pathway.
        </p>
      </div>
    </div>
  );
}