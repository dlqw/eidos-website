import type { ReactNode } from "react";
import { CodeShowcase } from "./components/CodeShowcase";
import { CopyButton } from "./components/CopyButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ArrowIcon, ExternalIcon } from "./components/Icons";
import { siteContent, siteLinks, type Locale } from "./content";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  titleId?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

function SectionIntro({ eyebrow, title, description, titleId, children, align = "left" }: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p className="section-intro__description">{description}</p>
      {children}
    </div>
  );
}

function ExternalAction({
  href,
  children,
  className = "button button--secondary",
  icon = "external"
}: {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: "external" | "arrow";
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}{icon === "arrow" ? <ArrowIcon /> : <ExternalIcon />}
    </a>
  );
}

function getLocale(): Locale {
  return window.location.pathname.split("/").includes("zh-CN") ? "zh-CN" : "en";
}

export default function App() {
  const locale = getLocale();
  const content = siteContent[locale];
  const tutorial = locale === "zh-CN" ? siteLinks.tutorialZh : siteLinks.tutorialEn;

  return (
    <>
      <Header content={content} locale={locale} />
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__eyebrow"><span className="status-dot" />{content.hero.eyebrow}</p>
            <h1 id="hero-title">
              {content.hero.titleStart}<br />
              <span>{content.hero.titleAccent}</span>
            </h1>
            <p className="hero__description">{content.hero.description}</p>
            <div className="hero__actions">
              <ExternalAction href={tutorial} className="button button--primary" icon="arrow">{content.hero.primaryAction}</ExternalAction>
              <ExternalAction href={siteLinks.source}>{content.hero.secondaryAction}</ExternalAction>
            </div>
            <ul className="hero__proof" aria-label="Eidos highlights">
              {content.hero.proof.map((item) => <li key={item}><span aria-hidden="true">✦</span>{item}</li>)}
            </ul>
          </div>

          <div className="hero-visual" role="img" aria-label="Eidos compilation model">
            <div className="hero-visual__halo" aria-hidden="true" />
            <div className="form-card form-card--source">
              <span>01 / source</span>
              <code>User :: type</code>
            </div>
            <div className="form-card form-card--type">
              <span>02 / typed form</span>
              <code>Meta::typeInfo</code>
            </div>
            <div className="hero-mark">
              <img src={`${import.meta.env.BASE_URL}brand/eidos-mark.svg`} alt="Folded Eidos mark" width="188" height="188" />
              <span>one semantic pipeline</span>
            </div>
            <div className="form-card form-card--native">
              <span>03 / native</span>
              <code>LLVM · target</code>
            </div>
            <div className="hero-visual__axis" aria-hidden="true"><span>compile time</span><i /><span>runtime</span></div>
          </div>
        </section>

        <section className="section code-section" id="language" aria-labelledby="language-title">
          <div className="shell code-section__grid">
            <SectionIntro
              eyebrow={content.code.sectionEyebrow}
              title={content.code.sectionTitle}
              description={content.code.sectionDescription}
              titleId="language-title"
            >
              <div className="semantic-note">
                <span className="semantic-note__index">E / 01</span>
                <span>{locale === "zh-CN" ? "类型系统贯穿运行时与编译期边界" : "One type system across the runtime and compile-time boundary"}</span>
              </div>
            </SectionIntro>
            <CodeShowcase content={content.code} />
          </div>
        </section>

        <section className="section shell" id="why" aria-labelledby="why-title">
          <SectionIntro
            eyebrow={content.features.eyebrow}
            title={content.features.title}
            description={content.features.description}
            titleId="why-title"
          />
          <div className="feature-grid">
            {content.features.items.map((feature) => (
              <article className="feature-card" key={feature.index}>
                <div className="feature-card__meta"><span>{feature.index}</span><span>{feature.detail}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-card__line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section pipeline-section" aria-labelledby="pipeline-title">
          <div className="shell">
            <SectionIntro
              eyebrow={content.pipeline.eyebrow}
              title={content.pipeline.title}
              description={content.pipeline.description}
              titleId="pipeline-title"
              align="center"
            />
            <ol className="pipeline">
              {content.pipeline.stages.map((stage, index) => (
                <li key={stage}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage}</strong>
                  {index < content.pipeline.stages.length - 1 ? <i aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
            <p className="pipeline-note"><span>i</span>{content.pipeline.footnote}</p>
          </div>
        </section>

        <section className="section shell" id="toolchain" aria-labelledby="toolchain-title">
          <SectionIntro
            eyebrow={content.tools.eyebrow}
            title={content.tools.title}
            description={content.tools.description}
            titleId="toolchain-title"
          />
          <div className="tool-grid">
            {content.tools.items.map((tool, index) => (
              <a className={`tool-card tool-card--${index + 1}`} href={tool.href} target="_blank" rel="noreferrer" key={tool.name}>
                <div className="tool-card__head">
                  <span className="tool-card__glyph" aria-hidden="true">{tool.name.slice(0, 2)}</span>
                  <span>{tool.role}</span>
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span className="tool-card__link">{content.tools.visit}<ArrowIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section start-section" aria-labelledby="start-title">
          <div className="shell start-grid">
            <div>
              <SectionIntro
                eyebrow={content.start.eyebrow}
                title={content.start.title}
                description={content.start.description}
                titleId="start-title"
              />
              <div className="requirements">
                <h3>{content.start.requirements}</h3>
                <ul>{content.start.requirementItems.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
              </div>
              <ExternalAction href={siteLinks.eidosup}>{content.start.eidosup}</ExternalAction>
            </div>
            <div className="terminal-card">
              <div className="terminal-card__bar">
                <span>{content.start.commandLabel}</span>
                <CopyButton
                  value={content.start.command}
                  idleLabel={content.code.copy}
                  successLabel={content.code.copied}
                  failureLabel={content.code.copyFailed}
                />
              </div>
              <pre><code>{content.start.command}</code></pre>
              <p><span aria-hidden="true">→</span>{content.start.note}</p>
            </div>
          </div>
        </section>

        <section className="section shell" id="learn" aria-labelledby="learn-title">
          <SectionIntro
            eyebrow={content.learn.eyebrow}
            title={content.learn.title}
            description={content.learn.description}
            titleId="learn-title"
          />
          <div className="resource-grid">
            {content.learn.items.map((resource) => (
              <a className="resource-card" href={resource.href} target="_blank" rel="noreferrer" key={`${resource.kind}-${resource.title}`}>
                <span className="resource-card__kind">{resource.kind}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="resource-card__open">{content.learn.open}<ExternalIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section status-section" id="status" aria-labelledby="status-title">
          <div className="shell status-grid">
            <div>
              <SectionIntro
                eyebrow={content.status.eyebrow}
                title={content.status.title}
                description={content.status.description}
                titleId="status-title"
              />
              <dl className="status-facts">
                {content.status.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            </div>
            <aside className="status-notice">
              <span className="status-notice__icon" aria-hidden="true">α</span>
              <div><h3>{content.status.noticeTitle}</h3><p>{content.status.notice}</p></div>
            </aside>
          </div>
        </section>

        <section className="closing shell" aria-labelledby="closing-title">
          <div className="closing__mark" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}brand/eidos-mark-mono.svg`} alt="" width="260" height="260" />
          </div>
          <div className="closing__content">
            <p className="eyebrow"><span aria-hidden="true" />Eidos / contribute</p>
            <h2 id="closing-title">{content.closing.title}</h2>
            <p>{content.closing.description}</p>
            <div className="closing__actions">
              <ExternalAction href={siteLinks.contributing} className="button button--light" icon="arrow">{content.closing.primaryAction}</ExternalAction>
              <ExternalAction href={siteLinks.issues} className="button button--ghost">{content.closing.secondaryAction}</ExternalAction>
            </div>
          </div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
