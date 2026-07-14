import type { ReactNode } from "react";
import { BrandAsset } from "./components/BrandAsset";
import { CodeShowcase } from "./components/CodeShowcase";
import { CopyButton } from "./components/CopyButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ArrowIcon, ExternalIcon } from "./components/Icons";
import { siteContent, siteLinks, type Locale } from "./content";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
}

function SectionHeading({ eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

function ActionLink({
  href,
  children,
  primary = false
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  const external = !href.startsWith("#");
  return (
    <a
      className={primary ? "action-link action-link--primary" : "action-link"}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}{external ? <ExternalIcon /> : <ArrowIcon />}
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
          <div className="hero__copy">
            <p className="hero__kicker">{content.hero.kicker}</p>
            <h1 id="hero-title">{content.hero.title}</h1>
            <p className="hero__description">{content.hero.description}</p>
            <div className="hero__actions">
              <ActionLink href={tutorial} primary>{content.hero.primaryAction}</ActionLink>
              <ActionLink href="#install">{content.hero.secondaryAction}</ActionLink>
            </div>
          </div>
          <div className="hero__code" aria-label={content.hero.codeLabel}>
            <div className="code-header">
              <span>Workflow.eidos</span>
              <span>{content.hero.codeLabel}</span>
            </div>
            <pre><code>{content.code.examples[0].code}</code></pre>
          </div>
        </section>

        <section className="release-bar" aria-label={locale === "zh-CN" ? "当前发布信息" : "Current release information"}>
          <div className="shell release-bar__inner">
            <dl>
              <div><dt>{content.release.versionLabel}</dt><dd>{content.release.version}</dd></div>
              <div><dt>{content.release.statusLabel}</dt><dd>{content.release.status}</dd></div>
              <div><dt>{content.release.targetLabel}</dt><dd>{content.release.target}</dd></div>
            </dl>
            <a href={siteLinks.changelogs} target="_blank" rel="noreferrer">{content.release.details}<ArrowIcon /></a>
          </div>
        </section>

        <nav className="quick-links shell" aria-label={locale === "zh-CN" ? "常用入口" : "Quick links"}>
          {content.quickLinks.map((item, index) => {
            const external = !item.href.startsWith("#");
            return (
              <a href={item.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
                {external ? <ExternalIcon /> : <ArrowIcon />}
              </a>
            );
          })}
        </nav>

        <section className="section shell" id="language" aria-labelledby="language-title">
          <SectionHeading
            eyebrow={content.code.sectionEyebrow}
            title={content.code.sectionTitle}
            description={content.code.sectionDescription}
            titleId="language-title"
          />
          <CodeShowcase content={content.code} />
        </section>

        <section className="section ruled-section" id="why" aria-labelledby="why-title">
          <div className="shell">
            <SectionHeading
              eyebrow={content.principles.eyebrow}
              title={content.principles.title}
              description={content.principles.description}
              titleId="why-title"
            />
            <ol className="principle-list">
              {content.principles.items.map((item) => (
                <li key={item.index}>
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section shell" aria-labelledby="diagnostics-title">
          <SectionHeading
            eyebrow={content.diagnostics.eyebrow}
            title={content.diagnostics.title}
            description={content.diagnostics.description}
            titleId="diagnostics-title"
          />
          <div className="diagnostic-demo">
            <div>
              <div className="code-header"><span>{content.diagnostics.sourceLabel}</span><span>Incomplete.eidos</span></div>
              <pre><code>{content.diagnostics.source}</code></pre>
            </div>
            <div className="diagnostic-output">
              <div className="code-header"><span>{content.diagnostics.outputLabel}</span><span>Types</span></div>
              <pre><code>{content.diagnostics.output}</code></pre>
              <p>{content.diagnostics.note}</p>
            </div>
          </div>
        </section>

        <section className="section ruled-section" id="toolchain" aria-labelledby="toolchain-title">
          <div className="shell">
            <SectionHeading
              eyebrow={content.toolchain.eyebrow}
              title={content.toolchain.title}
              description={content.toolchain.description}
              titleId="toolchain-title"
            />
            <div className="pipeline" aria-label={content.toolchain.stagesLabel}>
              <strong>{content.toolchain.stagesLabel}</strong>
              <ol>{content.toolchain.stages.map((stage) => <li key={stage}>{stage}</li>)}</ol>
            </div>
            <div className="tool-list">
              {content.toolchain.items.map((tool) => (
                <a href={tool.href} target="_blank" rel="noreferrer" key={tool.name}>
                  <div><span>{tool.kind}</span><h3>{tool.name}</h3></div>
                  <p>{tool.description}</p>
                  <div className="tool-list__meta"><span>{tool.version}</span><strong>{content.toolchain.visit}<ArrowIcon /></strong></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="install" aria-labelledby="install-title">
          <div className="install-layout">
            <div>
              <SectionHeading
                eyebrow={content.install.eyebrow}
                title={content.install.title}
                description={content.install.description}
                titleId="install-title"
              />
              <div className="requirements">
                <h3>{content.install.requirements}</h3>
                <ul>{content.install.requirementItems.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <ActionLink href={siteLinks.eidosup}>{content.install.eidosup}</ActionLink>
            </div>
            <div className="terminal">
              <div className="code-header">
                <span>{content.install.commandLabel}</span>
                <CopyButton
                  value={content.install.command}
                  idleLabel={content.code.copy}
                  successLabel={content.code.copied}
                  failureLabel={content.code.copyFailed}
                />
              </div>
              <pre><code>{content.install.command}</code></pre>
              <p>{content.install.note}</p>
            </div>
          </div>
        </section>

        <section className="section package-section" id="packages" aria-labelledby="packages-title">
          <div className="shell">
            <SectionHeading
              eyebrow={content.packages.eyebrow}
              title={content.packages.title}
              description={content.packages.description}
              titleId="packages-title"
            />
            <div className="package-layout">
              <div className="manifest-block">
                <div className="code-header"><span>{content.packages.manifestLabel}</span><span>schema 3</span></div>
                <pre><code>{content.packages.manifest}</code></pre>
              </div>
              <div className="package-notes">
                <article><h3>{content.packages.stdTitle}</h3><p>{content.packages.stdDescription}</p></article>
                <article><h3>{content.packages.registryTitle}</h3><p>{content.packages.registryDescription}</p></article>
                <div>{content.packages.links.map((link) => <ActionLink href={link.href} key={link.label}>{link.label}</ActionLink>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="learn" aria-labelledby="learn-title">
          <SectionHeading
            eyebrow={content.learn.eyebrow}
            title={content.learn.title}
            description={content.learn.description}
            titleId="learn-title"
          />
          <div className="resource-list">
            {content.learn.items.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={`${item.kind}-${item.label}`}>
                <span>{item.kind}</span>
                <div><h3>{item.label}</h3><p>{item.description}</p></div>
                <strong>{content.learn.open}<ExternalIcon /></strong>
              </a>
            ))}
          </div>
        </section>

        <section className="section status-section" id="status" aria-labelledby="status-title">
          <div className="shell status-layout">
            <div>
              <SectionHeading
                eyebrow={content.status.eyebrow}
                title={content.status.title}
                description={content.status.description}
                titleId="status-title"
              />
              <dl className="status-facts">
                {content.status.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            </div>
            <aside className="alpha-note">
              <span aria-hidden="true">α</span>
              <h3>{content.status.noticeTitle}</h3>
              <p>{content.status.notice}</p>
            </aside>
          </div>
        </section>

        <section className="section shell" id="community" aria-labelledby="community-title">
          <div className="community-layout">
            <div className="community-heading">
              <BrandAsset width={112} height={112} />
              <SectionHeading
                eyebrow={content.community.eyebrow}
                title={content.community.title}
                description={content.community.description}
                titleId="community-title"
              />
            </div>
            <div className="community-links">
              {content.community.items.map((item) => (
                <a href={item.href} target="_blank" rel="noreferrer" key={item.label}>
                  <h3>{item.label}<ArrowIcon /></h3>
                  <p>{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer content={content} />
    </>
  );
}
