---
description: Component Extraction from Stitch Design
---

Trigger: "Generate component from Stitch design: [Component Name]"

Steps:

    Identify Component in Stitch

        Locate the visual component in the design file

        Screenshot or reference its structure

        Note: HTML/JSX structure, classes, interactive elements

    Extract HTML Structure

        Copy the HTML/Tailwind markup from Stitch

        Preserve class names and nesting

        Remove Stitch-specific elements (canvas, design tools)

    Determine Component Props

        What data does this component display?

        What interactions does it have?

        Define TypeScript interface for props

    Create TypeScript Component

        File: components/[Feature]/[ComponentName].tsx

        Add 'use client' if interactive

        Type all props with interface

        Implement click/change handlers (with console.log for Phase 1)

    Validate Against Rules

        ✅ Single responsibility?

        ✅ All colors from design system?

        ✅ Responsive with Tailwind?

        ✅ Dark mode support?

        ✅ < 150 lines?

    Test

        Verify in light and dark mode

        Check responsive breakpoints (mobile, tablet, desktop)

        Click/type interactions work