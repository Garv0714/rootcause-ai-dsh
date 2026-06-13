import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
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
              Profile
            </h1>

            <p
              className="
              mt-3
              text-slate-600
              "
            >
              Track your STEM investigation journey.
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            "
          >
            <div className="flex items-center gap-6">

              <div
                className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-violet-600
                text-3xl
                font-bold
                text-white
                "
              >
                G
              </div>

              <div>
                <h2
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Student Investigator
                </h2>

                <p
                  className="
                  mt-1
                  text-slate-500
                  "
                >
                  STEM Reasoning Explorer
                </p>
              </div>

            </div>

            <div
              className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
              "
            >
              <div
                className="
                rounded-2xl
                bg-slate-50
                p-5
                "
              >
                <p className="text-sm text-slate-500">
                  Cases Solved
                </p>

                <h3
                  className="
                  mt-2
                  text-3xl
                  font-bold
                  "
                >
                  12
                </h3>
              </div>

              <div
                className="
                rounded-2xl
                bg-slate-50
                p-5
                "
              >
                <p className="text-sm text-slate-500">
                  Average Score
                </p>

                <h3
                  className="
                  mt-2
                  text-3xl
                  font-bold
                  "
                >
                  84
                </h3>
              </div>

              <div
                className="
                rounded-2xl
                bg-slate-50
                p-5
                "
              >
                <p className="text-sm text-slate-500">
                  Accuracy
                </p>

                <h3
                  className="
                  mt-2
                  text-3xl
                  font-bold
                  "
                >
                  91%
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}