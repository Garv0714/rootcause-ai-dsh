"use client";

interface ReasoningScoreProps {
  score: number;
}

export default function ReasoningScore({
  score,
}: ReasoningScoreProps) {
  const evidenceUsage =
    Math.min(score + 10, 100);

  const engineeringLogic =
    Math.max(score - 5, 0);

  const rootCauseAccuracy =
    Math.max(score - 12, 0);

  const grade =
    score >= 90
      ? "A+"
      : score >= 80
      ? "A"
      : score >= 70
      ? "B"
      : score >= 60
      ? "C"
      : "Needs Improvement";

  const scoreColor =
    score >= 80
      ? "from-emerald-500 to-green-600"
      : score >= 60
      ? "from-blue-500 to-violet-600"
      : "from-orange-500 to-red-500";

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
            Reasoning Analysis
          </h2>

          <p
            className="
            mt-1
            text-sm
            text-slate-500
            "
          >
            AI evaluation of engineering thinking
          </p>
        </div>

        <div
          className="
          rounded-full
          bg-slate-100
          px-4
          py-2
          text-sm
          font-semibold
          text-slate-700
          "
        >
          Grade: {grade}
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div
          className={`
          flex
          h-32
          w-32
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          ${scoreColor}
          text-white
          shadow-lg
          `}
        >
          <div className="text-center">
            <div className="text-4xl font-bold">
              {score}
            </div>

            <div className="text-xs uppercase tracking-wider">
              Score
            </div>
          </div>
        </div>

        <div className="flex-1">
          <MetricBar
            label="Evidence Usage"
            value={evidenceUsage}
            color="bg-blue-500"
          />

          <MetricBar
            label="Engineering Logic"
            value={engineeringLogic}
            color="bg-violet-500"
          />

          <MetricBar
            label="Root Cause Accuracy"
            value={rootCauseAccuracy}
            color="bg-emerald-500"
          />
        </div>
      </div>

      <div
        className="
        mt-6
        grid
        grid-cols-3
        gap-4
        "
      >
        <StatCard
          value={`${evidenceUsage}%`}
          label="Evidence"
        />

        <StatCard
          value={`${engineeringLogic}%`}
          label="Logic"
        />

        <StatCard
          value={`${rootCauseAccuracy}%`}
          label="Accuracy"
        />
      </div>
    </div>
  );
}

function MetricBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="mb-5">
      <div
        className="
        mb-2
        flex
        justify-between
        text-sm
        "
      >
        <span>{label}</span>

        <span>{value}%</span>
      </div>

      <div
        className="
        h-3
        rounded-full
        bg-slate-100
        "
      >
        <div
          className={`
          h-3
          rounded-full
          transition-all
          duration-700
          ${color}
          `}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-200
      bg-slate-50
      p-4
      text-center
      "
    >
      <div
        className="
        text-lg
        font-bold
        text-slate-900
        "
      >
        {value}
      </div>

      <div
        className="
        text-xs
        text-slate-500
        "
      >
        {label}
      </div>
    </div>
  );
}