import {
  evaluateHypothesis,
} from "@/lib/evaluationEngine";

export async function evaluateStudentReasoning(
  hypothesis: string
) {
  return evaluateHypothesis(
    hypothesis
  );
}