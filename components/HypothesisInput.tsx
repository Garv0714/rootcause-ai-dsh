"use client";

import { useState } from "react";
import {
  Brain,
  Send,
  Loader2,
  Lightbulb,
} from "lucide-react";

interface Props {
  onEvaluate: (result: any) => void;
}

export default function HypothesisInput({
  onEvaluate,
}: Props) {
  const [hypothesis, setHypothesis] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleEvaluate() {
    if (!hypothesis.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "/api/evaluate",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            hypothesis,
          }),
        }
      );

      const result =
        await response.json();

      onEvaluate(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const wordCount =
    hypothesis.trim().length === 0
      ? 0
      : hypothesis.trim().split(/\s+/)
          .length;

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
          from-blue-500
          to-violet-600
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
            Investigation Hypothesis
          </h2>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            Explain what caused the failure
            and support it with evidence.
          </p>
        </div>
      </div>

      <div
        className="
        mb-5
        rounded-2xl
        border
        border-blue-100
        bg-blue-50
        p-4
        "
      >
        <div className="flex gap-3">
          <Lightbulb
            size={18}
            className="mt-0.5 text-blue-600"
          />

          <p
            className="
            text-sm
            text-slate-700
            "
          >
            Strong investigations connect
            evidence, engineering logic,
            and root cause analysis.
          </p>
        </div>
      </div>

      <textarea
        value={hypothesis}
        onChange={(e) =>
          setHypothesis(
            e.target.value
          )
        }
        placeholder="Example: The drone likely crashed because excessive battery overheating caused voltage instability, which reduced motor performance and resulted in loss of altitude..."
        className="
        min-h-[240px]
        w-full
        resize-none
        rounded-2xl
        border
        border-slate-300
        p-4
        text-slate-800
        outline-none
        transition-all
        duration-200
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
        "
      />

      <div
        className="
        mt-3
        flex
        items-center
        justify-between
        "
      >
        <p
          className="
          text-sm
          text-slate-500
          "
        >
          {wordCount} words
        </p>

        <p
          className="
          text-sm
          text-slate-500
          "
        >
          Recommended: 40+ words
        </p>
      </div>

      <button
        onClick={handleEvaluate}
        disabled={
          loading ||
          hypothesis.trim().length === 0
        }
        className="
        mt-6
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        px-6
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.01]
        hover:shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-60
        "
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Evaluating Reasoning...
          </>
        ) : (
          <>
            <Send size={18} />
            Analyze Investigation
          </>
        )}
      </button>
    </div>
  );
}