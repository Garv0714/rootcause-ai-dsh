"use client";

import Link from "next/link";
import {
  Cpu,
  Atom,
  FlaskConical,
  Bot,
  ArrowRight,
  Clock3,
} from "lucide-react";

interface CaseCardProps {
  title: string;
  description: string;
  difficulty: string;
  slug: string;
  category?: string;
  estimatedTime?: string;
}

export default function CaseCard({
  title,
  description,
  difficulty,
  slug,
  category = "electronics",
  estimatedTime = "15 min",
}: CaseCardProps) {
  const config =
    getCategoryConfig(category);

  const Icon = config.icon;

  return (
    <Link
      href={`/investigation/${slug}`}
      className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-slate-200
      bg-white
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <div
        className={`
        absolute
        inset-x-0
        top-0
        h-1
        bg-gradient-to-r
        ${config.gradient}
        `}
      />

      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${config.gradient}
            text-white
            `}
          >
            <Icon size={22} />
          </div>

          <div>
            <p
              className="
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-slate-500
              "
            >
              {config.label}
            </p>

            <span
              className="
              text-sm
              text-slate-600
              "
            >
              Investigation
            </span>
          </div>
        </div>

        <span
          className="
          rounded-full
          bg-blue-50
          px-3
          py-1
          text-xs
          font-semibold
          text-blue-600
          "
        >
          {difficulty}
        </span>
      </div>

      <h3
        className="
        mb-3
        text-xl
        font-bold
        text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
        mb-6
        text-sm
        leading-relaxed
        text-slate-600
        "
      >
        {description}
      </p>

      <div
        className="
        mb-6
        flex
        items-center
        gap-2
        text-sm
        text-slate-500
        "
      >
        <Clock3 size={16} />
        {estimatedTime}
      </div>

      <div
        className="
        flex
        items-center
        gap-2
        font-semibold
        text-blue-600
        transition-all
        duration-300
        group-hover:translate-x-1
        "
      >
        Start Investigation

        <ArrowRight
          size={18}
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}

function getCategoryConfig(
  category: string
) {
  switch (
    category.toLowerCase()
  ) {
    case "physics":
      return {
        icon: Atom,
        label: "Physics",
        gradient:
          "from-violet-500 to-purple-600",
      };

    case "chemistry":
      return {
        icon: FlaskConical,
        label: "Chemistry",
        gradient:
          "from-emerald-500 to-green-600",
      };

    case "robotics":
      return {
        icon: Bot,
        label: "Robotics",
        gradient:
          "from-orange-500 to-red-500",
      };

    default:
      return {
        icon: Cpu,
        label: "Electronics",
        gradient:
          "from-blue-500 to-cyan-600",
      };
  }
}