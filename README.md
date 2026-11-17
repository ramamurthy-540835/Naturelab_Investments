# Nature Labs investment website redesign

Responsive, static HTML/CSS/JavaScript redesign for Nature Labs × NELTURE.ai. It presents the investment thesis, four initiatives, a conceptual capability map, a separate materials-science capital pathway, governance questions and contact information.

## Preview locally

Run `python -m http.server 8000` from this directory, then open `http://localhost:8000`.

## Feature branch

The redesign is isolated on `feature/world-class-website-redesign`. GitHub Pages production remains on `main`; this branch does not change the live URL or deployment workflow. Review the feature branch and merge it only when ready to publish.

## Design and implementation

- Enterprise blue and white design system with reusable CSS variables, editorial type hierarchy, restrained teal accent, consistent controls and responsive spacing.
- Semantic page sections and keyboard-accessible project tabs for Climate AI, PRISM, GST Easy and Lunchbox.
- Project-specific process flows and diligence questions, with source-reported status clearly distinguished from verified fact.
- Responsive, editable SVG portfolio diagram with dashed arrows and explicit labels that relationships are conceptual rather than deployed integrations.
- Mobile architecture sequence preserves node order and connecting lines rather than scaling down the desktop SVG.
- Capital phases preserve proposal-only scope and supplied planning estimates; no ROI, itemized CapEx basis, or committed financing is implied.
- IPCC/UN non-endorsement qualification and investment disclaimer retained.
- No backend or API integrations are used by the existing static site. No backend functionality was changed.

Google Fonts are requested when available; system sans-serif fallbacks keep the page usable when they are not.

