import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

interface CopyButtonProps {
  value: string;
  idleLabel: string;
  successLabel: string;
  failureLabel: string;
  className?: string;
}

type CopyState = "idle" | "success" | "failure";

export function CopyButton({
  value,
  idleLabel,
  successLabel,
  failureLabel,
  className
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copy() {
    clearTimeout(resetTimer.current);

    try {
      await navigator.clipboard.writeText(value);
      setState("success");
    } catch {
      setState("failure");
    }

    resetTimer.current = setTimeout(() => setState("idle"), 1800);
  }

  const label = state === "success"
    ? successLabel
    : state === "failure"
      ? failureLabel
      : idleLabel;

  return (
    <>
      <button
        className={className ? `copy-button ${className}` : "copy-button"}
        type="button"
        onClick={() => { void copy(); }}
        aria-label={label}
      >
        {state === "success" ? <CheckIcon /> : <CopyIcon />}
        <span>{label}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {state === "idle" ? "" : label}
      </span>
    </>
  );
}
