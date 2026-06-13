export interface EvaluationResult {
  score: number;

  strengths: string[];

  weaknesses: string[];

  matchedKeywords: string[];

  confidence: number;

  rootCause: string;

  rootCauseNodes: string[];

  timeline: string[];
}

const EVIDENCE_KEYWORDS = [
  "battery",
  "temperature",
  "overheating",
  "motor",
  "voltage",
];

const LOGIC_KEYWORDS = [
  "because",
  "therefore",
  "caused",
  "resulted",
  "led to",
  "due to",
  "thereby",
];

export function evaluateHypothesis(
  hypothesis: string
): EvaluationResult {
  const text =
    hypothesis.toLowerCase();

  const matchedKeywords: string[] = [];

  const strengths: string[] = [];

  const weaknesses: string[] = [];

  let evidenceScore = 0;
  let logicScore = 0;
  let reasoningScore = 0;

  EVIDENCE_KEYWORDS.forEach(
    (keyword) => {
      if (
        text.includes(keyword)
      ) {
        matchedKeywords.push(
          keyword
        );

        evidenceScore += 15;
      }
    }
  );

  LOGIC_KEYWORDS.forEach(
    (keyword) => {
      if (
        text.includes(keyword)
      ) {
        logicScore += 10;
      }
    }
  );

  const wordCount =
    hypothesis
      .trim()
      .split(/\s+/).length;

  if (wordCount >= 40) {
    reasoningScore += 15;
  }

  if (wordCount >= 70) {
    reasoningScore += 10;
  }

  if (
    matchedKeywords.length >= 3
  ) {
    reasoningScore += 15;
  }

  if (
    matchedKeywords.length >= 5
  ) {
    reasoningScore += 10;
  }

  if (
    text.includes("battery") &&
    text.includes("voltage")
  ) {
    strengths.push(
      "Connected battery behavior with voltage instability."
    );
  }

  if (
    text.includes("motor")
  ) {
    strengths.push(
      "Considered motor subsystem failure."
    );
  }

  if (
    text.includes("overheating")
  ) {
    strengths.push(
      "Identified thermal failure indicators."
    );
  }

  if (
    text.includes("because") ||
    text.includes("caused") ||
    text.includes("led to")
  ) {
    strengths.push(
      "Demonstrated causal engineering reasoning."
    );
  }

  if (
    !text.includes("motor")
  ) {
    weaknesses.push(
      "Motor evidence was not addressed."
    );
  }

  if (
    !text.includes("voltage")
  ) {
    weaknesses.push(
      "Voltage instability was not analyzed."
    );
  }

  if (
    !text.includes("battery")
  ) {
    weaknesses.push(
      "Battery evidence was not referenced."
    );
  }

  if (wordCount < 25) {
    weaknesses.push(
      "Investigation lacks sufficient detail."
    );
  }

  let rootCause =
    "Insufficient Analysis";

  if (
    matchedKeywords.length >= 4
  ) {
    rootCause =
      "Thermal + Electrical Cascade Failure";
  } else if (
    text.includes("motor") &&
    text.includes("voltage")
  ) {
    rootCause =
      "Electrical + Motor Failure";
  } else if (
    text.includes("battery") &&
    text.includes("overheating")
  ) {
    rootCause =
      "Battery Overheating";
  } else if (
    text.includes("motor")
  ) {
    rootCause =
      "Motor Failure";
  } else if (
    text.includes("battery")
  ) {
    rootCause =
      "Battery Degradation";
  }

  const totalScore = Math.min(
  100,
  40 +
  evidenceScore +
  logicScore +
  reasoningScore
);

  const confidence = Math.min(
  95,
  60 +
  matchedKeywords.length * 5 +
  Math.floor(logicScore / 2)
);

  return {
  score: totalScore,

  strengths,

  weaknesses,

  matchedKeywords,

  confidence,

  rootCause,

  rootCauseNodes: [
    "Battery Overheating",
    "Voltage Instability",
    "Motor Failure",
    "Drone Crash",
  ],

  timeline: [
    "Takeoff",
    "Battery temperature increased",
    "Voltage fluctuations detected",
    "Motor failure",
    "Altitude loss",
    "Crash",
  ],
 };
}