import {
  caseLibrary,
} from "@/data/caseLibrary";

export function getAllCases() {
  return caseLibrary;
}

export function getCasesByCategory(
  category: string
) {
  return (
    caseLibrary[
      category as keyof typeof caseLibrary
    ] || []
  );
}