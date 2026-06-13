export interface InvestigationReport {
  score: number;

  summary: string;

  strengths: string[];

  weaknesses: string[];

  recommendation: string;
}

export function generateReport(
  score: number,
  strengths: string[],
  weaknesses: string[]
): InvestigationReport {

  let summary = "";

  if (score >= 80) {
    summary =
      "Excellent reasoning. Most critical evidence was correctly analyzed.";
  } else if (score >= 60) {
    summary =
      "Good reasoning. Some important evidence was considered, but gaps remain.";
  } else {
    summary =
      "Limited reasoning quality. Several key evidence points were missed.";
  }

  let recommendation = "";

  if (weaknesses.length === 0) {
    recommendation =
      "Continue improving by exploring alternative hypotheses.";
  } else {
    recommendation =
      "Review missed evidence and connect all observations to the root cause.";
  }

  return {
    score,
    summary,
    strengths,
    weaknesses,
    recommendation,
  };
}