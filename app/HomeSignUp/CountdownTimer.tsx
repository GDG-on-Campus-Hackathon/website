"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Milestone {
  label: string;
  date: Date;
}

const MILESTONES: Milestone[] = [
  { label: "報名截止", date: new Date("2026-05-31T23:59:59+08:00") },
  { label: "正賽名單公布", date: new Date("2026-06-06T00:00:00+08:00") },
  { label: "遞補名單公布", date: new Date("2026-07-11T00:00:00+08:00") },
  { label: "賽前工作坊", date: new Date("2026-08-01T00:00:00+08:00") },
  { label: "黑客松競賽", date: new Date("2026-08-17T00:00:00+08:00") },
];

interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ZERO_PARTS: TimeParts = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const UNITS: ReadonlyArray<{
  key: keyof TimeParts;
  label: string;
  pad: number;
}> = [
  { key: "days", label: "天", pad: 0 },
  { key: "hours", label: "時", pad: 2 },
  { key: "minutes", label: "分", pad: 2 },
  { key: "seconds", label: "秒", pad: 2 },
];

const FLIP_DURATION_MS = 420;

function getActiveMilestone(now: number): Milestone | null {
  return MILESTONES.find((m) => m.date.getTime() > now) ?? null;
}

function getTimeParts(targetMs: number, now: number): TimeParts {
  const diff = Math.max(0, targetMs - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export interface CountdownState {
  milestone: Milestone;
  parts: TimeParts;
  ready: boolean;
}

export function useCountdown(): CountdownState | null {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const ready = now !== null;
  const milestone = ready ? getActiveMilestone(now) : MILESTONES[0];
  if (!milestone) {
    return null;
  }

  const parts = ready
    ? getTimeParts(milestone.date.getTime(), now)
    : ZERO_PARTS;
  return { milestone, parts, ready };
}

interface CountdownTimerProps {
  state: CountdownState;
  className?: string;
}

export default function CountdownTimer({
  state,
  className,
}: CountdownTimerProps) {
  const { milestone, parts, ready } = state;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="text-center text-[11px] tracking-[0.2em] text-[#4c4c4c]/75 sm:text-xs">
        <span className="relative px-1 font-medium text-[#4c4c4c] before:absolute before:inset-x-0 before:bottom-0 before:-z-10 before:h-1/3 before:bg-[#FFDB72]">
          {milestone.label}
        </span>
      </div>
      <div
        className="flex gap-1.5 sm:gap-2"
        aria-live="polite"
        aria-label={`${milestone.label}`}
      >
        {UNITS.map(({ key, label, pad }) => (
          <TimerCell
            key={key}
            value={parts[key]}
            label={label}
            pad={pad}
            ready={ready}
          />
        ))}
      </div>
    </div>
  );
}

interface TimerCellProps {
  value: number;
  label: string;
  pad: number;
  ready: boolean;
}

const DIGIT_BASE_CLASS =
  "absolute inset-0 flex items-center justify-center text-base font-bold tabular-nums text-[#4c4c4c] sm:text-lg";

function TimerCell({ value, label, pad, ready }: TimerCellProps) {
  const display = ready ? String(value).padStart(pad, "0") : "—";
  const [current, setCurrent] = useState(display);
  const [previous, setPrevious] = useState<string | null>(null);

  useEffect(() => {
    if (display === current) {
      return;
    }
    setPrevious(current);
    setCurrent(display);
    const id = window.setTimeout(() => setPrevious(null), FLIP_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [display, current]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-11 w-11 overflow-hidden rounded-md bg-[#F2F1EF55] shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-1.5px_-1.5px_3px_0px_rgba(0,0,0,0.08)] sm:h-12 sm:w-12">
        {previous !== null && (
          <span
            key={`out-${previous}`}
            className={`${DIGIT_BASE_CLASS} animate-timer-flip-out`}
            aria-hidden
          >
            {previous}
          </span>
        )}
        <span
          key={`in-${current}`}
          className={`${DIGIT_BASE_CLASS} animate-timer-flip-in`}
        >
          {current}
        </span>
      </div>
      <span className="mt-1 text-[10px] tracking-widest text-[#4c4c4c]/60 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
