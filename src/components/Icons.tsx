interface IconProps {
  size?: number;
  className?: string;
}

const common = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true
});

export function ArrowIcon({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function ExternalIcon({ size = 16, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" /></svg>;
}

export function CopyIcon({ size = 16, className }: IconProps) {
  return <svg {...common(size, className)}><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>;
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return <svg {...common(size, className)}><path d="m5 12 4 4L19 6" /></svg>;
}

export function SunIcon({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>;
}

export function MoonIcon({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>;
}

export function MenuIcon({ size = 22, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon({ size = 22, className }: IconProps) {
  return <svg {...common(size, className)}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function GitHubIcon({ size = 19, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.24.7-3.92-1.37-3.92-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.58-.3-5.3-1.3-5.3-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.09c.98 0 1.95.13 2.86.39 2.19-1.49 3.16-1.18 3.16-1.18.64 1.58.24 2.76.12 3.05.75.81 1.2 1.83 1.2 3.09 0 4.4-2.73 5.39-5.32 5.68.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}
