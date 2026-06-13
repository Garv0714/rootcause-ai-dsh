"use client";

import {
  CheckCircle2,
  Clock3,
} from "lucide-react";

interface TimelineProps {
  events: string[];
}

export default function Timeline({
  events,
}: TimelineProps) {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <div className="mb-6">

        <h2
          className="
          text-xl
          font-bold
          "
        >
          Investigation Timeline
        </h2>

        <p
          className="
          mt-2
          text-sm
          text-slate-500
          "
        >
          Sequence of observed events
          leading to the system failure.
        </p>

      </div>

      <div className="relative">

        <div
          className="
          absolute
          left-[18px]
          top-3
          bottom-3
          w-[2px]
          bg-gradient-to-b
          from-blue-500
          via-violet-500
          to-slate-300
          "
        />

        <div className="space-y-5">

          {events.map(
            (event, index) => (
              <div
                key={index}
                className="
                relative
                flex
                gap-4
                "
              >
                <div
                  className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow
                  "
                >
                  {index ===
                  events.length - 1 ? (
                    <Clock3
                      size={16}
                      className="
                      text-orange-500
                      "
                    />
                  ) : (
                    <CheckCircle2
                      size={16}
                      className="
                      text-blue-600
                      "
                    />
                  )}
                </div>

                <div
                  className="
                  flex-1
                  rounded-2xl
                  border
                  border-slate-100
                  bg-slate-50
                  p-4
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:bg-blue-50/40
                  "
                >
                  <div
                    className="
                    mb-1
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-400
                    "
                  >
                    Event {index + 1}
                  </div>

                  <p
                    className="
                    text-sm
                    font-medium
                    text-slate-700
                    "
                  >
                    {event}
                  </p>
                </div>
              </div>
            )
          )}

        </div>
      </div>

      <div
        className="
        mt-8
        rounded-2xl
        bg-gradient-to-r
        from-blue-50
        to-violet-50
        p-4
        text-sm
        text-slate-600
        "
      >
        Timeline reconstruction helps
        identify the exact order of
        failures and isolate the root cause.
      </div>
    </div>
  );
}