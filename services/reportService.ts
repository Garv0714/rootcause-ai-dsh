import {
  generateReport,
} from "@/lib/reportGenerator";

export async function createReport(
  score: number,
  strengths: string[],
  weaknesses: string[]
) {
  return generateReport(
    score,
    strengths,
    weaknesses
  );
}