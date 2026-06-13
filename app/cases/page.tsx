import CaseCard from "@/components/CaseCard";
import { allCases } from "@/data/caseLibrary";

export default function CasesPage() {
  return (
    <main className="page-container py-16">
      <div className="mb-16">
        <div
          className="
          inline-flex
          rounded-full
          bg-blue-50
          px-4
          py-2
          text-sm
          font-medium
          text-blue-700
          "
        >
          Investigation Catalog
        </div>

        <h1
          className="
          mt-6
          text-5xl
          font-bold
          tracking-tight
          md:text-6xl
          "
        >
          Investigation Cases
        </h1>

        <p
          className="
          mt-4
          max-w-3xl
          text-lg
          text-slate-600
          "
        >
          Explore engineering failures,
          scientific anomalies and robotics
          incidents. Analyze evidence,
          construct hypotheses and discover
          the root cause.
        </p>

        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-3
          "
        >
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            {allCases.length} Total Cases
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Electronics
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Physics
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Chemistry
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Robotics
          </div>
        </div>
      </div>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
        "
      >
        {allCases.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            title={caseItem.title}
            description={caseItem.description}
            difficulty={caseItem.difficulty}
            slug={caseItem.id}
            category={caseItem.category}
            estimatedTime={
              caseItem.estimatedTime
            }
          />
        ))}
      </div>
    </main>
  );
}