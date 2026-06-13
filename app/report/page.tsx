import Sidebar from "@/components/Sidebar";
import ReportCard from "@/components/ReportCard";

export default function ReportPage() {
  return (
    <main className="page-container py-12">

      <div
        className="
        flex
        gap-8
        "
      >
        <Sidebar />

        <div className="flex-1">

          <div className="mb-10">

            <h1
              className="
              text-4xl
              font-bold
              "
            >
              Investigation Report
            </h1>

            <p
              className="
              mt-3
              text-slate-600
              "
            >
              Final reasoning assessment
              and investigation summary.
            </p>

          </div>

          <ReportCard
            score={85}
            strengths={[
              "Correctly identified overheating.",
              "Used battery evidence.",
              "Considered motor failure.",
            ]}
            weaknesses={[
              "Voltage fluctuations require deeper analysis.",
            ]}
          />

        </div>
      </div>

    </main>
  );
}