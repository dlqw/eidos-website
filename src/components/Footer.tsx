import type { SiteContent } from "../content";
import { BrandAsset } from "./BrandAsset";
import { ExternalIcon } from "./Icons";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const homeHref = content.locale === "zh-CN"
    ? `${import.meta.env.BASE_URL}zh-CN/`
    : import.meta.env.BASE_URL;
  const groups = [
    { title: content.footer.explore, links: content.footer.links.slice(0, 3) },
    { title: content.footer.project, links: content.footer.links.slice(3, 5) },
    { title: content.footer.legal, links: content.footer.links.slice(5) }
  ];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand" href={homeHref} aria-label="Eidos home">
            <BrandAsset kind="lockup" width={132} height={48} />
          </a>
          <p>{content.footer.description}</p>
        </div>
        {groups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                {link.label}<ExternalIcon size={13} />
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <span>{content.footer.copyright}</span>
        <span className="footer-form">{content.footer.closingLine}</span>
      </div>
    </footer>
  );
}
