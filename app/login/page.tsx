import Link from "next/link";

export default function LoginPage() {
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
            Welcome Back
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Continue your investigations.
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
            Login
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
          Don't have an account?{" "}

          <Link
            href="/signup"
            className="
            font-medium
            text-blue-600
            "
          >
            Sign Up
          </Link>
        </div>

      </div>
    </main>
  );
}