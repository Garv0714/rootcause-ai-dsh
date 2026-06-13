"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Search,
  Bell,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Cases",
      href: "/cases",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Reports",
      href: "/report",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-200/60
      bg-white/80
      backdrop-blur-xl
      "
    >
      <div
        className="
        page-container
        flex
        h-20
        items-center
        justify-between
        "
      >
        <Link
          href="/"
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-violet-600
            text-lg
            font-bold
            text-white
            "
          >
            R
          </div>

          <div>
            <h1
              className="
              text-lg
              font-bold
              "
            >
              RootCause AI
            </h1>

            <p
              className="
              text-xs
              text-slate-500
              "
            >
              STEM Investigation Platform
            </p>
          </div>
        </Link>

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-3
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
              rounded-xl
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-100"
              }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <button
            className="
            hidden
            md:flex
            rounded-xl
            border
            border-slate-200
            p-2
            transition
            hover:bg-slate-50
            "
          >
            <Search size={18} />
          </button>

          <button
            className="
            hidden
            md:flex
            rounded-xl
            border
            border-slate-200
            p-2
            transition
            hover:bg-slate-50
            "
          >
            <Bell size={18} />
          </button>

          <button
            className="
            flex
            md:hidden
            rounded-xl
            border
            border-slate-200
            p-2
            "
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}