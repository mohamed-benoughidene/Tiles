---
description: Generate UI system for ShadcN components
---

Trigger: "Generate UI system for ShadcN components"

Steps:

    Install ShadcN Components

bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add select

    Create Tailwind Config

    Extract exact component specs from design (e.g. Button height: 48px, Radius: 8px, Font-weight: Bold) - DO NOT rely on defaults

    Extend with Stitch design system colors using HSL channels (e.g. `240 10% 90%`) to support opacity modifiers

    Add custom spacing, border radius based on extracted specs

Create Global Styles

    app/globals.css with Tailwind directives

    Dark mode configuration

Test Components

    Create test page with all UI components

    Verify colors, spacing, responsiveness

