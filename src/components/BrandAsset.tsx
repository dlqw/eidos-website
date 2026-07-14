interface BrandAssetProps {
  alt?: string;
  className?: string;
  height: number;
  kind?: "lockup" | "mark";
  surface?: "auto" | "dark" | "light";
  width: number;
}

export function BrandAsset({
  alt = "",
  className = "",
  height,
  kind = "mark",
  surface = "auto",
  width
}: BrandAssetProps) {
  const base = import.meta.env.BASE_URL;
  const asset = kind === "lockup" ? "eidos-lockup" : "eidos-mark";
  const classes = ["brand-asset", `brand-asset--${surface}`, className].filter(Boolean).join(" ");

  return (
    <span
      className={classes}
      style={{ width, height }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : "true"}
    >
      <img className="brand-asset__light" src={`${base}brand/${asset}.svg`} alt="" width={width} height={height} />
      <img className="brand-asset__dark" src={`${base}brand/${asset}-dark.svg`} alt="" width={width} height={height} />
    </span>
  );
}
