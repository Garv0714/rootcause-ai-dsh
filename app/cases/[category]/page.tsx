import { notFound } from "next/navigation";

import CaseCard from "@/components/CaseCard";
import { caseLibrary } from "@/data/caseLibrary";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props) {
  const { category } =
    await params;

  const cases =
    caseLibrary[
      category as keyof typeof caseLibrary
    ];

  if (!cases) {
    notFound();
  }

  const formattedTitle =
    category.charAt(0).toUpperCase() +
    category.slice(1);

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
          Category
        </div>

        <h1
          className="
          mt-6
          text-5xl
          font-bold
          tracking-tight
          "
        >
          {formattedTitle}
        </h1>

        <p
          className="
          mt-4
          max-w-2xl
          text-slate-600
          "
        >
          Explore investigation cases
          focused on {formattedTitle.toLowerCase()}{" "}
          systems and failures.
        </p>

        <div
          className="
          mt-6
          inline-flex
          rounded-full
          bg-slate-100
          px-4
          py-2
          text-sm
          "
        >
          {cases.length} Cases Available
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
        {cases.map((item) => (
          <CaseCard
            key={item.id}
            title={item.title}
            description={item.description}
            difficulty={item.difficulty}
            slug={item.id}
            category={item.category}
            estimatedTime={
              item.estimatedTime
            }
          />
        ))}
      </div>
    </main>
  );
}