---
trigger: model_decision
description:  this rules apply to editor specifically
---

Rule 6: Editor Component Hierarchy

ALWAYS structure the editor with clear component hierarchy:

text
EditorPage
├── Header (navigation, save status, preview/publish buttons)
├── Main Layout (2-column or responsive)
│   ├── Left Panel: Profile Preview
│   │   ├── AvatarUpload
│   │   ├── BioText
│   │   └── StatusIndicators
│   ├── Center/Right: Tile Grid
│   │   ├── TileCard[] (Links, Notes, Media)
│   │   ├── AddBlockToolbar
│   │   └── LayoutToggle
│   └── Floating Toolbar (Share, Add Link, Add Social, etc.)
└── Modal (Settings, Tile Editor)

NEVER:

    Flatten the hierarchy - use proper nesting

    Mix editor logic with presentation components

    Place global state in deeply nested components

Rule 7: Tile Card Pattern

ALWAYS generate Tile Cards (Link, Note, Media, etc.) with this structure:

Props:

    id: string - Unique identifier

    type: 'link' | 'note' | 'image' | 'video' | 'music' | 'map' - Tile type

    title: string - Display title

    content: any - Type-specific content (URL, text, image path)

    isEditing?: boolean - Edit mode toggle

    onDelete?: (id: string) => void - Delete handler

    onUpdate?: (id: string, data: any) => void - Update handler

Required Interactions:

    Hover state with action menu (more_horiz icon)

    Delete button (with confirmation)

    Edit inline or modal

    Drag handle for reordering

Example:

tsx
interface TileCardProps {
  id: string;
  type: 'link' | 'note' | 'image' | 'video';
  title: string;
  content: Record<string, any>;
  isEditing?: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: any) => void;
}

Rule 8: Modal Dialogs

ALWAYS use ShadcN Dialog component for modals (settings, tile editor).

    Modal should have clear title, description, and action buttons

    Use form elements from ShadcN (Input, Select, Textarea)

    Include cancel and save buttons

    Trap focus inside modal

    Escape key closes modal

    Max width: 600px (standard), 800px (large forms)

NEVER:

    Create custom modal divs

    Allow body scroll while modal open

    Use inline confirmation (must be modal)

Rule 9: Form Inputs & Validation

ALWAYS use ShadcN form components with React Hook Form:

    Textinput: <input type="text" className="w-full rounded-md border..." />

    Textarea: For longer content

    Select: For dropdown options (layout, type, etc.)

    Toggle: For boolean settings (publish status, notifications)

    Color Picker: For brand colors (Phase 2)

Validation:

    Email fields: must validate with regex

    URL fields: must validate URL format

    Required fields: mark with asterisk

    Show error messages below field

NEVER:

    Accept unvalidated user input

    Skip required field indicators

    Use HTML native validation only (no client-side JS validation)

Rule 10: Responsive Design

ALWAYS make components responsive using Tailwind breakpoints:

    Mobile-first approach: Base styles for mobile, then md:, lg:, xl:

    Hide elements on mobile if needed: hidden md:block

    Stack layouts vertically on mobile: flex flex-col md:flex-row

    Tile grid: 1 column mobile, 2-3 columns desktop

Breakpoints:

    sm: 640px (tablet)

    md: 768px (small desktop)

    lg: 1024px (desktop)

    xl: 1280px (large desktop)

NEVER:

    Use fixed widths (except containers)

    Assume desktop-only layouts

    Hardcode pixel values for spacing

Rule 11: Dark Mode

ALWAYS support dark mode using Tailwind dark: prefix.

    All colors must have dark: variant

    Test on both light and dark backgrounds

    Use Stitch design system dark colors

    Toggle button or system preference auto-detect

Pattern:

tsx
<div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
  Content
</div>

NEVER:

    Use light-only colors without dark variants

    Skip dark mode testing

    Use inline style for colors (must be Tailwind classes)

Rule 12: State Management

ALWAYS use React hooks for component state (useState, useContext).

    Local component state: useState

    Shared state between components: useContext with Provider

    No Redux/Zustand for Phase 1 (UI only)

    State shape must match TypeScript interfaces

For editor state, create context:

tsx
interface EditorContextType {
  tiles: TileCard[];
  selectedTileId?: string;
  isEditing: boolean;
  addTile: (tile: TileCard) => void;
  updateTile: (id: string, data: Partial<TileCard>) => void;
  deleteTile: (id: string) => void;
}

Rule 13: Icons & Symbols

ALWAYS use Material Symbols Outlined from Stitch (already imported).

    Icon name: <span className="material-symbols-outlined">icon_name</span>

    Size control: text-[14px], text-[18px], text-[20px]

    Color: Inherit from parent or use explicit Tailwind class

Common icons:

    grid_view, add, delete, edit, more_horiz, drag_indicator

    link, grid_on, image, play_circle, map, music_note

    tune, palette, analytics, settings, close, check

NEVER:

    Import external icon libraries

    Use emoji or custom SVG (use Material Symbols only)

Rule 14: Layout Patterns

ALWAYS use Tailwind Grid and Flexbox for layouts.

Grid for tile layout:

tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
  {tiles.map(tile => <TileCard key={tile.id} {...tile} />)}
</div>

Flexbox for header/nav:

tsx
<div className="flex items-center justify-between gap-4">
  {/* content */}
</div>

NEVER:

    Use floats or inline-block

    Mix Grid and Flexbox in same container

    Use fixed heights for content areas

Rule 15: Animations & Transitions

ALWAYS use Tailwind transitions for interactivity (not CSS animations).

    Hover states: hover:bg-indigo-700 transition-colors

    Smooth transitions: transition-all duration-200

    Opacity/scale for modals: opacity-0 scale-95 data-[open]:opacity-100 data-[open]:scale-100 transition-all

NEVER:

    Use CSS animations (keyframes)

    Add animations > 300ms

    Animate layout changes (causes jank)

Rule 16: Accessibility

ALWAYS include accessibility features:

    Semantic HTML: <button>, <input>, <label>

    Labels for all inputs: <label htmlFor="email">Email</label>

    ARIA labels for icons: aria-label="Delete tile"

    Keyboard navigation: Tab order, Enter/Escape support

    Focus visible: :focus-visible styling

NEVER:

    Use <div> for buttons

    Skip labels on inputs

    Ignore keyboard navigation

    Remove focus indicators

Rule 17: Performance

ALWAYS optimize for fast render and small bundle:

    Split large components (> 150 lines)

    Use React.memo for expensive renders

    Lazy load modals and settings panels

    No inline function definitions in props

NEVER:

    Create components > 200 lines

    Inline SVG or large images (use URLs)

    Define functions inside render methods
