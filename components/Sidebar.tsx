"use client";

import Link from "next/link";
import {
  Home,
  FolderOpen,
  BarChart3,
  FileText,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Cases",
      href: "/cases",
      icon: FolderOpen,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: BarChart3,
    },
    {
      title: "Reports",
      href: "/report",
      icon: FileText,
    },
  ];

  return (
    <aside
      className="
      hidden
      xl:flex
      w-72
      flex-col
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-5
      shadow-sm
      "
    >
      <div className="mb-8">
        <h2
          className="
          text-lg
          font-bold
          "
        >
          Navigation
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-slate-500
          "
        >
          STEM Investigation Hub
        </p>
      </div>

      <div className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              px-4
              py-3
              text-slate-700
              transition-all
              hover:bg-blue-50
              hover:text-blue-600
              "
            >
              <Icon size={18} />

              <span>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      <div
        className="
        mt-auto
        rounded-2xl
        bg-gradient-to-br
        from-blue-600
        to-violet-600
        p-5
        text-white
        "
      >
        <h3
          className="
          text-sm
          font-semibold
          "
        >
          Active Investigation
        </h3>

        <p
          className="
          mt-2
          text-sm
          opacity-90
          "
        >
          Drone Failure Analysis
        </p>
      </div>
    </aside>
  );
}