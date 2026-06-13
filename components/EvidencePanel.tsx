"use client";

import {
  Battery,
  Zap,
  Cpu,
  TrendingDown,
  FileSearch,
} from "lucide-react";

interface EvidencePanelProps {
  evidence: string[];
}

export default function EvidencePanel({
  evidence,
}: EvidencePanelProps) {
  function getEvidenceMeta(
    item: string
  ) {
    const lower =
      item.toLowerCase();

    if (
      lower.includes("battery") ||
      lower.includes("temperature")
    ) {
      return {
        icon: Battery,
        label: "Thermal",
        color:
          "bg-orange-100 text-orange-700",
      };
    }

    if (
      lower.includes("voltage")
    ) {
      return {
        icon: Zap,
        label: "Electrical",
        color:
          "bg-blue-100 text-blue-700",
      };
    }

    if (
      lower.includes("motor")
    ) {
      return {
        icon: Cpu,
        label: "Mechanical",
        color:
          "bg-violet-100 text-violet-700",
      };
    }

    if (
      lower.includes("altitude")
    ) {
      return {
        icon: TrendingDown,
        label: "Flight Data",
        color:
          "bg-red-100 text-red-700",
      };
    }

    return {
      icon: FileSearch,
      label: "Evidence",
      color:
        "bg-slate-100 text-slate-700",
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
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2
            className="
            text-xl
            font-bold
            text-slate-900
            "
          >
            Evidence Board
          </h2>

          <p
            className="
            mt-1
            text-sm
            text-slate-500
            "
          >
            Analyze clues before forming
            a hypothesis
          </p>
        </div>

        <div
          className="
          rounded-full
          bg-blue-50
          px-4
          py-2
          text-sm
          font-medium
          text-blue-600
          "
        >
          {evidence.length} Evidence
        </div>
      </div>

      <div className="space-y-4">
        {evidence.map(
          (
            item,
            index
          ) => {
            const meta =
              getEvidenceMeta(
                item
              );

            const Icon =
              meta.icon;

            return (
              <div
                key={index}
                className="
                group
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:bg-white
                hover:shadow-md
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    text-white
                    "
                  >
                    <Icon
                      size={18}
                    />
                  </div>

                  <div className="flex-1">
                    <div
                      className="
                      mb-2
                      flex
                      items-center
                      justify-between
                      "
                    >
                      <span
                        className="
                        text-sm
                        font-semibold
                        text-slate-500
                        "
                      >
                        Evidence #
                        {index + 1}
                      </span>

                      <span
                        className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-medium
                        ${meta.color}
                        `}
                      >
                        {
                          meta.label
                        }
                      </span>
                    </div>

                    <p
                      className="
                      leading-relaxed
                      text-slate-700
                      "
                    >
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div
        className="
        mt-6
        rounded-2xl
        border
        border-blue-100
        bg-blue-50
        p-4
        "
      >
        <p
          className="
          text-sm
          text-slate-700
          "
        >
          💡 Strong investigations connect
          multiple evidence sources before
          identifying the root cause.
        </p>
      </div>
    </div>
  );
}