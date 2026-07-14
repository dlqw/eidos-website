import { useEffect, useId, useRef, useState } from "react";
import type { Locale, SiteContent } from "../content";
import { BrandAsset } from "./BrandAsset";
import { CloseIcon, GitHubIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

interface HeaderProps {
  content: SiteContent;
  locale: Locale;
}

type Theme = "dark" | "light";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function Header({ content, locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const base = import.meta.env.BASE_URL;
  const homeHref = locale === "zh-CN" ? `${base}zh-CN/` : base;
  const localeHref = locale === "en" ? `${base}zh-CN/` : base;
  const localeLabel = locale === "en" ? "简体中文" : "English";

  useEffect(() => {
    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "dark" ? "#20211f" : "#f4f0e8"
    );
    try {
      localStorage.setItem("eidos-theme-v1", nextTheme);
    } catch {
      // The selected theme still applies for the current page.
    }
    setTheme(nextTheme);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="brand" href={homeHref} aria-label="Eidos home">
          <BrandAsset kind="lockup" width={110} height={40} />
          <span className="brand__status">alpha</span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id={menuId} aria-label="Primary navigation">
          {content.nav.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="locale-link" href={localeHref} lang={locale === "en" ? "zh-CN" : "en"}>{localeLabel}</a>
          <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={content.themeLabel} title={content.themeLabel}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="icon-button github-link" href="https://github.com/dlqw/Eidosc" target="_blank" rel="noreferrer" aria-label={content.githubLabel} title={content.githubLabel}>
            <GitHubIcon />
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            ref={menuButton}
            aria-label={content.menuLabel}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
