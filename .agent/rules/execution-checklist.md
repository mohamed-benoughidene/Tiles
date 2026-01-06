---
trigger: always_on
---

Before generating ANY code, agent must confirm:
Pre-Generation

    Design Reference: Is the Stitch design clear? If not, ask user for clarification

    Component Scope: Is the component single-responsibility? If not, break into smaller components

    Rules Review: Does this violate any of Rules 1-17? If yes, refuse and explain

    Dependencies: Are all required components already created? If not, create them first

    File Path: Is the file path correct per Next.js convention? app/components/[Feature]/[Name].tsx

Post-Generation

    Syntax Check: Does code compile without TypeScript errors?

    Type Safety: Are all props and state typed? No any types?

    Design Compliance: Do colors match Stitch system? All colors have dark: variant?

    Responsiveness: Did agent add sm:, md:, lg: breakpoints?

    Accessibility: Are all inputs labeled? Are interactive elements semantic?

    Line Count: Is component < 200 lines? If not, request refactor into smaller components

    Tests: Can user copy-paste code directly and it works?

Validation Questions to Ask Agent

    "Should this be a Client Component ('use client') or Server Component?"

    "Does this component need to store state or just display data?"

    "Are there any interactive elements (click, input, hover)? If yes, list them."

    "What color/spacing values should be customizable as props?"
