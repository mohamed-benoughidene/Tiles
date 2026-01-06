---
description: Setup Supabase integration
---

Trigger: "Setup Supabase integration for [Feature]"

Prerequisites: Phase 1 complete (all UI working)

Steps:

    Create Database Schema

        Define tables for Link-in-Bio (users, tiles, links)

        Add indexes and foreign keys

        Set RLS policies

    Create TypeScript Types from Schema

        Use Supabase TypeScript client

        Generate types: npx supabase gen types typescript

    Create API Routes

        app/api/tiles/route.ts (GET, POST)

        app/api/tiles/[id]/route.ts (PUT, DELETE)

    Replace Console.log with Supabase Calls

        Remove Phase 1 mock handlers

        Wire events to API routes

        Handle loading and error states

    Test End-to-End

        Create tile → saves to DB

        Update tile → updates in DB

        Delete tile → removes from DB
