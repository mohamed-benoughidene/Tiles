---
description: Generate page from Stitch design
---

Trigger: "Generate page from Stitch design: [Page Name]"

Steps:

    Break Page into Components

        Identify major sections (header, sidebar, content, modal)

        For each section, determine which shadecn components it needs

        List dependencies

    Generate Missing Components (using Workflow 1)

        If component doesn't exist, create it first

        Re-use existing components where possible

    Create Page Component

        File: app/[feature]/page.tsx

        Import all component dependencies

        Assemble with proper hierarchy and spacing

    Add State Management

        Identify what state page needs (tiles, form values, modal open/close)

        Create Context if multiple components need state

        Use useState for single-component state

    Wire Event Handlers

        Connect button clicks to handlers

        Log user actions (Phase 1 only - Phase 2 = Supabase)

        Handle modal open/close

    Test
        
        Full page renders without errors

        Verify Visual Fidelity:
        - Check opacity layers (glows, shadows) match design (requires HSL vars)
        - Check component sizes (buttons, inputs) against design px values
        - Verify font weights and spacing are exact matches

        All interactions trigger handlers

        Responsive on all breakpoints