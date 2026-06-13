import { evaluateHypothesis } from "@/lib/evaluationEngine";

export async function POST(
  request: Request
) {
  const body = await request.json();

  console.log("BODY:", body);

  const result = evaluateHypothesis(
    body.hypothesis || ""
  );

  console.log("RESULT:", result);

  return Response.json(result);
}