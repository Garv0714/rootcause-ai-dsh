import Link from "next/link";

export default function SignupPage() {
  return (
    <main
      className="
      flex
      min-h-[calc(100vh-80px)]
      items-center
      justify-center
      px-6
      "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        "
      >
        <div className="mb-8 text-center">

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Create Account
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Start your STEM investigation journey.
          </p>

        </div>

        <form className="space-y-5">

          <div>
            <label
              className="
              mb-2
              block
              text-sm
              font-medium
              "
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              rounded-2xl
              border
              border-slate-300
              p-3
              outline-none
              focus:border-blue-500
              "
            />
          </div>

          <div>
            <label
              className="
              mb-2
              block
              text-sm
              font-medium
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
              w-full
              rounded-2xl
              border
              border-slate-300
              p-3
              outline-none
              focus:border-blue-500
              "
            />
          </div>

          <div>
            <label
              className="
              mb-2
              block
              text-sm
              font-medium
              "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
              w-full
              rounded-2xl
              border
              border-slate-300
              p-3
              outline-none
              focus:border-blue-500
              "
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            rounded-2xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            "
          >
            Create Account
          </button>

        </form>

        <div
          className="
          mt-6
          text-center
          text-sm
          text-slate-500
          "
        >
          Already have an account?{" "}

          <Link
            href="/login"
            className="
            font-medium
            text-blue-600
            "
          >
            Login
          </Link>
        </div>

      </div>
    </main>
  );
}