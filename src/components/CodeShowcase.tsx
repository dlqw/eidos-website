import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { SiteContent } from "../content";
import { CopyButton } from "./CopyButton";

interface CodeShowcaseProps {
  content: SiteContent["code"];
}

function tokenClass(token: string) {
  if (token.startsWith('"') || token.startsWith("//")) {
    return token.startsWith("//") ? "syntax-comment" : "syntax-string";
  }
  if (/^(?:type|comptime|match|when|where|need|effect|trait|instance|import|export|mut|ref|mref|true|false)$/.test(token)) {
    return "syntax-keyword";
  }
  if (/^\d+$/.test(token)) {
    return "syntax-number";
  }
  if (/^[A-Z]/.test(token)) {
    return "syntax-type";
  }
  return "syntax-operator";
}

function HighlightedCode({ code }: { code: string }) {
  const tokenPattern = /("(?:\\.|[^"\\])*")|(\/\/[^\n]*)|(\b(?:type|comptime|match|when|where|need|effect|trait|instance|import|export|mut|ref|mref|true|false)\b)|(\b\d+\b)|(\b[A-Z][A-Za-z0-9_]*\b)|(::|=>|->|\|)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(code)) !== null) {
    if (match.index > cursor) {
      nodes.push(code.slice(cursor, match.index));
    }
    nodes.push(
      <span className={tokenClass(match[0])} key={`${match.index}-${match[0]}`}>
        {match[0]}
      </span>
    );
    cursor = tokenPattern.lastIndex;
  }

  if (cursor < code.length) {
    nodes.push(code.slice(cursor));
  }

  return <>{nodes}</>;
}

export function CodeShowcase({ content }: CodeShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const example = content.examples[activeIndex];

  function selectTab(index: number) {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = content.examples.length - 1;
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(nextIndex);
    }
  }

  return (
    <div className="code-showcase">
      <div className="code-showcase__tabs" role="tablist" aria-label={content.sectionTitle}>
        {content.examples.map((item, index) => (
          <button
            className="code-tab"
            id={`code-tab-${index}`}
            key={item.label}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`code-panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
            ref={(node) => { tabRefs.current[index] = node; }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div
        className="code-showcase__panel"
        id={`code-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`code-tab-${activeIndex}`}
        tabIndex={0}
      >
        <div className="code-window__bar">
          <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
          <span className="code-window__file">{example.file}</span>
          <CopyButton
            value={example.code}
            idleLabel={content.copy}
            successLabel={content.copied}
            failureLabel={content.copyFailed}
          />
        </div>
        <pre className="code-window__source"><code><HighlightedCode code={example.code} /></code></pre>
        <p className="code-window__caption">{example.caption}</p>
      </div>
    </div>
  );
}
