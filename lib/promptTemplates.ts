export const EVALUATION_PROMPT = `
You are a STEM investigation evaluator.

Analyze:

1. Evidence usage
2. Engineering reasoning
3. Root cause identification

Return:

- strengths
- weaknesses
- confidence
- final score
`;

export const REPORT_PROMPT = `
Generate a professional investigation report.

Include:

- summary
- findings
- root cause
- recommendations
`;