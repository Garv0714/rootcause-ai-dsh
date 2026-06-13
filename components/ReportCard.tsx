"use client";

import {
  Award,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

interface ReportCardProps {
  score: number;
  strengths: string[];
  weaknesses: string[];
}

export default function ReportCard({
  score,
  strengths,
  weaknesses,
}: ReportCardProps) {
  const grade =
    score >= 90
      ? "Expert"
      : score >= 75
      ? "Advanced"
      : score >= 60
      ? "Intermediate"
      : "Beginner";

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-sm
      "
    >
      <div
        className="
        bg-gradient-to-r
        from-blue-600
        via-violet-600
        to-indigo-600
        p-8
        text-white
        "
      >
        <div className="flex items-center gap-3">
          <Award size={24} />

          <div>
            <h2
              className="
              text-2xl
              font-bold
              "
            >
              Investigation Report
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-white/80
              "
            >
              AI Generated Performance Summary
            </p>
          </div>
        </div>

        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          "
        >
          <div>
            <p className="text-sm text-white/70">
              Final Score
            </p>

            <h3
              className="
              text-6xl
              font-black
              "
            >
              {score}
            </h3>
          </div>

          <div
            className="
            rounded-2xl
            bg-white/15
            px-5
            py-3
            backdrop-blur
            "
          >
            <p className="text-xs uppercase">
              Rating
            </p>

            <p
              className="
              text-xl
              font-bold
              "
            >
              {grade}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">

        <div
          className="
          mb-6
          grid
          gap-4
          md:grid-cols-3
          "
        >
          <div
            className="
            rounded-2xl
            bg-blue-50
            p-4
            "
          >
            <TrendingUp
              className="mb-2 text-blue-600"
              size={22}
            />

            <p
              className="
              text-xs
              uppercase
              text-slate-500
              "
            >
              Reasoning
            </p>

            <p
              className="
              text-lg
              font-bold
              "
            >
              Strong
            </p>
          </div>

          <div
            className="
            rounded-2xl
            bg-emerald-50
            p-4
            "
          >
            <CheckCircle2
              className="mb-2 text-emerald-600"
              size={22}
            />

            <p
              className="
              text-xs
              uppercase
              text-slate-500
              "
            >
              Evidence
            </p>

            <p
              className="
              text-lg
              font-bold
              "
            >
              Well Used
            </p>
          </div>

          <div
            className="
            rounded-2xl
            bg-amber-50
            p-4
            "
          >
            <AlertTriangle
              className="mb-2 text-amber-600"
              size={22}
            />

            <p
              className="
              text-xs
              uppercase
              text-slate-500
              "
            >
              Focus Area
            </p>

            <p
              className="
              text-lg
              font-bold
              "
            >
              Precision
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3
            className="
            mb-4
            text-lg
            font-bold
            "
          >
            Strengths
          </h3>

          <div className="space-y-3">
            {strengths.map(
              (item, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-emerald-50
                  p-4
                  text-emerald-700
                  "
                >
                  <CheckCircle2
                    size={18}
                  />

                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h3
            className="
            mb-4
            text-lg
            font-bold
            "
          >
            Recommended Improvements
          </h3>

          <div className="space-y-3">
            {weaknesses.map(
              (item, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-red-50
                  p-4
                  text-red-700
                  "
                >
                  <AlertTriangle
                    size={18}
                  />

                  {item}
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
}