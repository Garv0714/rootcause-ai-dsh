"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";

import EvidencePanel from "@/components/EvidencePanel";
import HypothesisInput from "@/components/HypothesisInput";
import ReasoningScore from "@/components/ReasoningScore";
import AIFeedback from "@/components/AIFeedback";
import InvestigationGraph from "@/components/InvestigationGraph";
import Timeline from "@/components/Timeline";

import { allCases } from "@/data/caseLibrary";

export default function InvestigationPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const selectedCase = allCases.find(
    (item) => item.id === id
  );

  if (!selectedCase) {
    notFound();
  }

  const [score, setScore] = useState(0);

  const [dynamicNodes, setDynamicNodes] =
  useState<string[]>([]);

  const [dynamicTimeline, setDynamicTimeline] =
  useState<string[]>([]);

  const [confidence, setConfidence] =
    useState(0);

  const [rootCause, setRootCause] =
    useState("Not Evaluated");

  const [strengths, setStrengths] =
    useState<string[]>([]);

  const [weaknesses, setWeaknesses] =
    useState<string[]>([]);

  const [matchedKeywords, setMatchedKeywords] =
    useState<string[]>([]);

  function handleEvaluation(result: any) {

    console.log(
    "RECEIVED RESULT:",
  result
); {
  setScore(
    result.score || 0
  );

  setConfidence(
    result.confidence || 0
  );

  setRootCause(
    result.rootCause ||
      "Unknown"
  );

  setStrengths(
    result.strengths || []
  );

  setWeaknesses(
    result.weaknesses || []
  );

  setMatchedKeywords(
    result.matchedKeywords || []
  );

  setDynamicNodes(
    result.rootCauseNodes || []
  );

  setDynamicTimeline(
    result.timeline || []
  );
}

  const investigationResult = {
    caseId: selectedCase.id,
    caseTitle: selectedCase.title,
    score: result.score || 0,
    confidence:
      result.confidence || 0,
    rootCause:
      result.rootCause ||
      "Unknown",
    strengths:
      result.strengths || [],
    weaknesses:
      result.weaknesses || [],
    date:
      new Date().toISOString(),
  };

  localStorage.setItem(
    "latestInvestigation",
    JSON.stringify(
      investigationResult
    )
  );
}

  const canShowGraph =
  dynamicNodes.length > 0;

const canShowTimeline =
  dynamicTimeline.length > 0;

  return (
    <main className="page-container py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {selectedCase.title}
        </h1>

        <p className="mt-3 text-slate-600">
          {selectedCase.description}
        </p>
      </div>

      <div
        className="
        mb-8
        grid
        gap-6
        md:grid-cols-2
        "
      >
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
          <p className="text-sm text-slate-500">
            Predicted Root Cause
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {rootCause}
          </h2>
        </div>

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
          <p className="text-sm text-slate-500">
            AI Confidence
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {confidence}%
          </h2>
        </div>
      </div>

      <div
        className="
        grid
        gap-8
        lg:grid-cols-2
        "
      >
        <EvidencePanel
          evidence={
            selectedCase.evidence
          }
        />

        <HypothesisInput
          onEvaluate={
            handleEvaluation
          }
        />
      </div>

      <div
        className="
        mt-8
        grid
        gap-8
        lg:grid-cols-2
        "
      >
        <ReasoningScore
          score={score}
        />

        <AIFeedback
          strengths={strengths}
          weaknesses={weaknesses}
        />
      </div>

      <div
        className="
        mt-8
        grid
        gap-8
        lg:grid-cols-2
        "
      >
        {canShowGraph ? (
          <InvestigationGraph
            nodes={dynamicNodes}
          />
        ) : (
          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            "
          >
            <h2 className="mb-3 text-xl font-bold">
              Root Cause Chain
            </h2>

            <p className="text-slate-500">
              Submit a detailed hypothesis
              using multiple evidence points
              to generate the root cause chain.
            </p>
          </div>
        )}

        {canShowTimeline ? (
          <Timeline
            events={dynamicTimeline}
          />
        ) : (
          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            "
          >
            <h2 className="mb-3 text-xl font-bold">
              Investigation Timeline
            </h2>

            <p className="text-slate-500">
              Submit a detailed hypothesis
              to generate an investigation
              timeline.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}