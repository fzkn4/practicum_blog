# practicum.blog

## Mission
Create implementation-ready, token-driven UI guidance for practicum.blog that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: practicum.blog
- URL: http://localhost:5173/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Courier New`, `font.family.stack=Courier New, Monaco, Menlo, monospace`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=25.6px`
- Typography scale: `font.size.xs=14.4px`, `font.size.sm=16px`, `font.size.md=19.2px`, `font.size.lg=20.8px`, `font.size.xl=24px`, `font.size.2xl=64px`
- Color palette: `color.text.primary=#e0e0e0`, `color.text.secondary=#888888`, `color.text.tertiary=#ffffff`, `color.text.inverse=#a3e635`, `color.surface.base=#000000`, `color.surface.muted=#1a1a1a`, `color.surface.raised=#0a0a0a`
- Spacing scale: `space.1=8px`, `space.2=16px`, `space.3=32px`, `space.4=64px`, `space.5=70px`, `space.6=115px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=8px` | `motion.duration.instant=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (6), cards (3), navigation (1).

- Extraction diagnostics: Low sample size: fewer than 30 visible elements were extracted. Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
