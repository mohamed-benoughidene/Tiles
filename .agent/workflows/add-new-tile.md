---
description: Universal workflow for adding ANY new Tile type (e.g., Map, Note, Music, etc.) from Stitch designs, ensuring all interaction and layout fixes are applied.
---

# Add New Tile Type (Universal)

Follow this workflow when the user provides Stitch designs for **ANY** new tile type with various sizes. This guide ensures all interaction fixes (drag propagation, z-index, etc.) are applied standardly.

## 1. Analysis & Type Definitions
1.  **Identify Sizes**: List all sizes present in the design (e.g., 1x1, 2x2, 4x2).
2.  **Update Types**:
    *   Check `src/types/tiles.ts`: Add new size keys to `TileSizeName` if missing.
    *   Check `src/lib/tileConstants.ts`: Define dimensions for any new sizes in `TILE_SIZES`.

## 2. Create Sub-Components
For **each size** in the design, create a specific component in `src/components/tiles/[type]/`.
*   **File Naming**: `[Type]Tile[Width]x[Height].tsx` (e.g., `MapTile2x2.tsx`).
*   **Content**: Copy HTML structure from Stitch.
*   **Styling**: Use Tailwind classes. Ensure `w-full h-full` on container.

## 3. Create Main Tile Wrapper
Create `src/components/tiles/[Type]Tile.tsx`.
*   **Props**: `title`, `size`, `onResize`, `onRemove`, `data` (if needed for specific content).
*   **Structure**:
    ```tsx
    export function [Type]Tile({ title, size, onResize, onRemove }: Props) {
        // Render sub-component based on size prop
        const renderContent = () => { switch(size) { ... } }

        return (
             <div className="group relative h-full w-full cursor-pointer">
                {renderContent()}

                {/* DELETE BUTTON */}
                <button
                    onClick={(e) => { e.stopPropagation(); onRemove(); }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()} {/* CRITICAL FOR RGL */}
                    onTouchStart={(e) => e.stopPropagation()} {/* CRITICAL FOR RGL */}
                    className="..."
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>

                {/* TOOLBAR */}
                <div
                    className="absolute -bottom-5 ..."
                    onPointerDown={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()} {/* CRITICAL FOR RGL */}
                    onTouchStart={(e) => e.stopPropagation()} {/* CRITICAL FOR RGL */}
                >
                    <TileToolbar
                        currentSize={size}
                        onResize={onResize}
                        allowedSizes={[...]} // List ONLY sizes supported by this tile
                    />
                </div>
             </div>
        )
    }
    ```

## 4. Integrate into BentoTile
Modify `src/components/editor/BentoTile.tsx`:
1.  **Import**: Import the new `[Type]Tile`.
2.  **Render Condition**:
    ```tsx
    } : tile.type === '[type]' ? (
        <div className="w-full h-full">
            <[Type]Tile
                title={tile.content?.text}
                size={tile.size.name}
                onResize={(newSizeName) => {
                    // Logic to find size object from TILE_SIZES
                     const newSizeObj = Object.values(TILE_SIZES).find(s => s.name === newSizeName);
                     if (newSizeObj && onResize) onResize(tile.id, newSizeObj);
                }}
                onRemove={() => setIsDeleteDialogOpen(true)} // Open modal, don't delete immediately
            />
        </div>
    ) : (
    ```
3.  **Hide Default Toolbar**:
    Update the condition for the default toolbar (at the bottom of file):
    ```tsx
    {tile.type !== 'link' && tile.type !== '[type]' && (
        // ... default toolbar
    )}
    ```

## 5. Verification Checklist
- [ ] **Styles**: Does the tile look like the Stitch design?
- [ ] **Interactions**:
    - Can you resize the tile without dragging starting? (Verified by `stopPropagation`)
    - Can you click delete without dragging?
    - Does the delete confirmation modal appear?
- [ ] **Z-Index**: Does the toolbar pop out *over* neighboring tiles? (Ensure `BentoTile` has `hover:z-[60]`).