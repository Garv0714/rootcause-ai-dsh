"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Brain,
  FileSearch,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />

        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="page-container py-24">
        <div className="mx-auto max-w-6xl">
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex justify-center"
          >
            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2
              text-sm
              font-medium
              text-blue-700
              "
            >
              <ShieldCheck size={16} />
              STEM Investigation Platform
            </div>
          </motion.div>

          {/* Headline */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-center"
          >
            <h1
              className="
              mt-8
              text-5xl
              font-extrabold
              leading-tight
              md:text-7xl
              "
            >
              Think Like
              <span className="gradient-text">
                {" "}An Engineer.
              </span>

              <br />

              Investigate Like
              <span className="gradient-text">
                {" "}A Scientist.
              </span>
            </h1>

            <p
              className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              text-slate-600
              md:text-xl
              "
            >
              RootCause AI transforms STEM
              education into real-world
              investigations. Students analyze
              evidence, build hypotheses,
              discover root causes and learn
              engineering reasoning through
              AI-powered case studies.
            </p>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
            "
          >
            <Link
              href="/cases"
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              "
            >
              Investigate A Failure
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard"
              className="
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-8
              py-4
              font-semibold
              transition
              hover:bg-slate-50
              "
            >
              View Dashboard
            </Link>
          </motion.div>

          {/* Stats */}

          <div
            className="
            mt-20
            grid
            gap-6
            md:grid-cols-4
            "
          >
            <StatCard
              value="4"
              label="Failure Domains"
              color="text-blue-600"
            />

            <StatCard
              value="15+"
              label="Evidence Types"
              color="text-violet-600"
            />

            <StatCard
              value="AI"
              label="Reasoning Engine"
              color="text-emerald-600"
            />

            <StatCard
              value="100%"
              label="Investigation Based"
              color="text-orange-600"
            />
          </div>

          {/* Demo Preview */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            mx-auto
            mt-20
            max-w-4xl
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-xl
            "
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  CASE #001
                </p>

                <h3 className="text-2xl font-bold">
                  Drone Failure Investigation
                </h3>
              </div>

              <span
                className="
                rounded-full
                bg-red-100
                px-4
                py-2
                text-sm
                font-medium
                text-red-700
                "
              >
                Critical Incident
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">
                  Evidence
                </h4>

                <ul className="space-y-3">
                  <li>
                    🔋 Battery Temp 92°C
                  </li>

                  <li>
                    ⚡ Voltage Fluctuations
                  </li>

                  <li>
                    ⚙️ Motor 3 Failure
                  </li>

                  <li>
                    📉 Sudden Altitude Loss
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">
                  AI Conclusion
                </h4>

                <div
                  className="
                  rounded-2xl
                  bg-blue-50
                  p-5
                  "
                >
                  <p className="text-sm text-slate-500">
                    Predicted Root Cause
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Thermal + Electrical
                    Cascade Failure
                  </h3>

                  <p className="mt-3 text-blue-700">
                    Confidence: 88%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}

          <div className="mt-24">
            <h2
              className="
              mb-12
              text-center
              text-4xl
              font-bold
              "
            >
              How RootCause Works
            </h2>

            <div
              className="
              grid
              gap-6
              md:grid-cols-4
              "
            >
              <StepCard
                icon={<Search size={24} />}
                title="Observe Evidence"
                description="Analyze clues and engineering data."
              />

              <StepCard
                icon={<Brain size={24} />}
                title="Build Hypothesis"
                description="Form a logical explanation."
              />

              <StepCard
                icon={<FileSearch size={24} />}
                title="AI Review"
                description="Receive reasoning feedback."
              />

              <StepCard
                icon={<ShieldCheck size={24} />}
                title="Discover Root Cause"
                description="Reveal the true failure path."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      bg-white
      p-8
      shadow-sm
      "
    >
      <h3
        className={`text-4xl font-bold ${color}`}
      >
        {value}
      </h3>

      <p className="mt-2 text-slate-600">
        {label}
      </p>
    </div>
  );
}

function StepCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        mb-4
        text-blue-600
        "
      >
        {icon}
      </div>

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </div>
  );
}