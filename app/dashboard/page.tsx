import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
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
              Dashboard
            </h1>

            <p
              className="
              mt-3
              text-slate-600
              "
            >
              Track investigation progress and
              reasoning performance.
            </p>

          </div>

          <div
            className="
            grid
            gap-6
            md:grid-cols-3
            "
          >
            <div
              className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                Cases Solved
              </p>

              <h2
                className="
                mt-2
                text-4xl
                font-bold
                "
              >
                12
              </h2>
            </div>

            <div
              className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                Average Score
              </p>

              <h2
                className="
                mt-2
                text-4xl
                font-bold
                "
              >
                84
              </h2>
            </div>

            <div
              className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                Active Streak
              </p>

              <h2
                className="
                mt-2
                text-4xl
                font-bold
                "
              >
                7 Days
              </h2>
            </div>
          </div>

          <div
            className="
            mt-8
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            "
          >
            <h2
              className="
              mb-6
              text-xl
              font-bold
              "
            >
              Recent Investigations
            </h2>

            <div className="space-y-4">

              <div
                className="
                rounded-2xl
                bg-slate-50
                p-4
                "
              >
                Drone Failure Investigation
              </div>

              <div
                className="
                rounded-2xl
                bg-slate-50
                p-4
                "
              >
                Robot Arm Malfunction
              </div>

              <div
                className="
                rounded-2xl
                bg-slate-50
                p-4
                "
              >
                Chemical Reaction Failure
              </div>

            </div>
          </div>

        </div>
      </div>

    </main>
  );
}