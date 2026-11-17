# Website redesign QA report

## Summary

The static investment website was redesigned as a separate GitHub feature branch. Production `main` and its Pages deployment configuration were left unchanged.

## Audit findings

- The existing app is a single-page static HTML/CSS/JavaScript site. No backend service, API, authentication flow or database integration is present in this repository.
- The previous design used a dark green editorial theme and had a reveal animation that could leave content hidden until intersection; this could produce blank-looking regions in a captured or partially rendered page.
- Portfolio relationships were mostly decorative/orbital and did not make flow or maturity easy to read.
- Existing portfolio source labels and capital estimates needed stronger qualification and hierarchy.

## Implemented

- Replaced the page hierarchy with an executive story: opportunity, investment thesis, four-project portfolio, conceptual capability flow, proposal-stage capital pathway, diligence and contact.
- Introduced responsive enterprise-blue tokens, type styles, spacing, buttons, tabs, status labels, footer and contrast-aware surfaces.
- Added accessible project tabs with keyboard arrow/Home/End navigation and project-specific process steps.
- Rebuilt the capability map with SVG nodes, directional arrowheads and dashed conceptual connectors. Added an ordered mobile representation with visible connecting lines.
- Retained the supplied IPCC/UN non-endorsement language, project maturity qualifications, proposal-only capital estimates, contact email and investment disclaimer.
- Explicitly describes the capability map as conceptual; it does not assert live integrations or deployed components.
- Removed the old reveal observer and its hidden-until-visible behavior.

## Browser verification

Automated checks used local Chromium through Playwright on the static preview.

| Check | Result |
|---|---|
| Viewport widths: 1920, 1440, 1280, 1024, 768, 390, 360 px | Pass; document/body width matched viewport at all tested sizes |
| Climate AI, PRISM, GST Easy and Lunchbox selection | Pass |
| Project-tab keyboard arrow navigation | Pass |
| Internal anchor targets | Pass; all resolve |
| Desktop SVG architecture edges with arrow markers | 4 present |
| Mobile architecture sequence | 5 nodes and visible connectors |
| Mobile navigation open/close | Pass |
| Browser JavaScript errors | None observed |
| Page load/asset requests | No local missing assets observed |

## Screenshots

- Previous local baseline: `../work/naturelabs-redesign/baseline-desktop.png`, `../work/naturelabs-redesign/baseline-mobile.png`.
- Redesigned page: `../work/naturelabs-redesign/redesign-desktop.png`, `../work/naturelabs-redesign/redesign-mobile.png`.

Screenshots are local QA artifacts and are not part of the public site repository.

## Not measured / limitations

- Lighthouse scores, Core Web Vitals and formal WCAG contrast calculations were not measured; no performance or AA conformance score is claimed.
- No backend, authentication or API regression tests apply to this static site.
- Product maturity and estimates remain source-reported and require independent diligence.
- The Google Font request is optional; system fallbacks are provided.
- No public preview deployment was created. GitHub Pages deployment remains tied to `main` to protect the current live site.

