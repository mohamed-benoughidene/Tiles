---
trigger: always_on
---

These rules apply to EVERY agent interaction. Non-negotiable.
Rule 1: Component Isolation

ALWAYS extract components as autonomous, single-responsibility units.

    One component = one visual element or interaction pattern

    Each component gets its own file: components/ComponentName.tsx

    Props are explicit and typed with TypeScript interfaces

    No component should exceed 150 lines of code

NEVER:

    Merge multiple UI patterns into one component

    Hardcode values that should be props

    Create component files > 200 lines

Example:

tsx
// ✅ CORRECT - Isolated button component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant, onClick, children }: ButtonProps) {
  // implementation
}

// ❌ WRONG - Too much responsibility
export function HeaderWithNavigation() {
  // Contains header + nav + buttons + auth logic
}

Rule 2: Type Safety First

ALWAYS use TypeScript interfaces for props, state, and data models.

    Define types at the top of files

    Use interface for props, type for unions

    No any types - use unknown if necessary and validate

    Props must be explicitly typed

NEVER:

    Leave props untyped

    Use any as a shortcut

    Skip typing data returned from APIs

Example:

tsx
interface LinkTileProps {
  id: string;
  title: string;
  url: string;
  icon?: React.ReactNode;
  onClick?: (id: string) => void;
}

export function LinkTile({ id, title, url, icon, onClick }: LinkTileProps) {
  // implementation
}

Rule 3: Design System Compliance

ALWAYS use Stitch design system colors, spacing, and typography.

Color Tokens (from Stitch):

    Primary: #4f46e5 (Indigo 600)

    Backgrounds: Light #ffffff, Dark #09090b

    Borders: Light #e4e4e7, Dark #27272a

    Text: Dark text: #09090b, Light text: #71717a

Spacing Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px (multiples of 4)

Typography:

    Font: Inter (already in Stitch)

    Weights: 300, 400, 500, 600, 700

    No custom fonts or overrides

Implementation:

tsx
// ✅ Use Tailwind with design system
<button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white font-medium transition-colors">
  Click
</button>

// ❌ NEVER use random colors or spacing
<button style={{ background: '#ff00ff', padding: '15px' }}>
  Click
</button>

Rule 4: Stitch-to-Next.js Component Mapping

ALWAYS follow this extraction pattern from Stitch design to Next.js code:

    Identify visual component in Stitch (e.g., "Link Tile Card")

    Extract base structure (HTML hierarchy, classes, layout)

    Extract state requirements (Is it interactive? What changes?)

    Convert Tailwind → Tailwind (Stitch already uses Tailwind, preserve class names)

    Add TypeScript props (What data does this component need?)

    Test dark mode (All components must respect dark theme)

NEVER:

    Add extra features not in Stitch design

    Change layout structure from Stitch

    Remove interactive elements

    Skip dark mode support

Rule 5: Next.js & ShadcN Conventions

ALWAYS follow Next.js 15+ and ShadcN/UI best practices:

    Use App Router (not Pages Router)

    Place components in app/components/

    Use Server Components by default, Client Components only when needed ('use client')

    Imports: ShadcN components from @/components/ui/

    No CSS files - use Tailwind only

    Organize by feature domain, not file type

File Structure:

text
app/
├── components/
│   ├── editor/
│   │   ├── EditorHeader.tsx
│   │   ├── TileCard.tsx
│   │   └── ToolbarButton.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── common/
│       ├── Button.tsx
│       └── Modal.tsx
├── page.tsx
└── layout.tsx

