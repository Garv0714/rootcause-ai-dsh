"use client";

import {
  CheckCircle2,
  AlertTriangle,
  Brain,
} from "lucide-react";

interface Props {
  strengths: string[];
  weaknesses: string[];
}

export default function AIFeedback({
  strengths,
  weaknesses,
}: Props) {
  const hasFeedback =
    strengths.length > 0 ||
    weaknesses.length > 0;

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
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-500
          to-blue-500
          text-white
          "
        >
          <Brain size={22} />
        </div>

        <div>
          <h2
            className="
            text-xl
            font-bold
            text-slate-900
            "
          >
            AI Evaluation Report
          </h2>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            Scientific reasoning assessment
          </p>
        </div>
      </div>

      {!hasFeedback && (
        <div
          className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-8
          text-center
          "
        >
          <div
            className="
            mx-auto
            mb-4
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white
            "
          >
            <Brain
              size={26}
              className="text-slate-400"
            />
          </div>

          <h3
            className="
            mb-2
            font-semibold
            text-slate-800
            "
          >
            Awaiting Investigation
          </h3>

          <p className="text-slate-500">
            Submit a hypothesis to
            receive engineering feedback,
            reasoning analysis and
            improvement recommendations.
          </p>
        </div>
      )}

      {hasFeedback && (
        <div className="space-y-6">
          {strengths.length > 0 && (
            <div>
              <h3
                className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-emerald-700
                "
              >
                Strengths Identified
              </h3>

              <div className="space-y-3">
                {strengths.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-emerald-50
                      p-4
                      "
                    >
                      <CheckCircle2
                        size={20}
                        className="
                        mt-0.5
                        shrink-0
                        text-emerald-600
                        "
                      />

                      <p
                        className="
                        text-sm
                        text-emerald-800
                        "
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {weaknesses.length > 0 && (
            <div>
              <h3
                className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-amber-700
                "
              >
                Improvement Areas
              </h3>

              <div className="space-y-3">
                {weaknesses.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-amber-100
                      bg-amber-50
                      p-4
                      "
                    >
                      <AlertTriangle
                        size={20}
                        className="
                        mt-0.5
                        shrink-0
                        text-amber-600
                        "
                      />

                      <p
                        className="
                        text-sm
                        text-amber-800
                        "
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <div
            className="
            rounded-2xl
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            to-violet-50
            p-4
            "
          >
            <h4
              className="
              mb-2
              font-semibold
              text-slate-900
              "
            >
              AI Recommendation
            </h4>

            <p
              className="
              text-sm
              text-slate-600
              "
            >
              Support conclusions with
              multiple evidence points and
              clearly connect observed
              symptoms to the final root
              cause. Strong investigations
              rely on evidence, logic and
              engineering reasoning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}