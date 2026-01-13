'use client';

import { Layout, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { Tile } from '@/types/tiles';
import { BentoTile } from './BentoTile';
import { BENTO_CONFIG } from '@/lib/bentoConfig';
import { TileSize } from '@/types/tiles';
import { withWidth } from './WidthProvider';

// @ts-ignore
const ResponsiveGridLayout = withWidth(Responsive);

interface BentoGridProps {
    tiles: Tile[];
    layouts: { lg: Layout[], md: Layout[], sm: Layout[] };
    onLayoutChange: (currentLayout: Layout[], allLayouts: { lg: Layout[], md: Layout[], sm: Layout[] }) => void;
    selectedTileId: string | null;
    onSelectTile: (id: string) => void;
    onResize: (id: string, size: TileSize) => void;
    onDelete: (id: string) => void;
    // Compatibility props
    onReorder: (oldIndex: number, newIndex: number) => void;
    readOnly?: boolean;
}

export function BentoGrid({
    tiles,
    layouts,
    onLayoutChange,
    selectedTileId,
    onSelectTile,
    onResize,
    onDelete,
    readOnly
}: BentoGridProps) {
    const visibleTiles = readOnly ? tiles.filter(tile => tile.type !== 'placeholder') : tiles;

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <style jsx global>{`
                .react-grid-item.react-grid-placeholder {
                    background: rgba(79, 70, 229, 0.1) !important; /* Indigo tint for placeholder */
                    border-radius: 2rem !important;
                    opacity: 0.5 !important;
                    z-index: 1 !important;
                }
                .react-grid-item.react-draggable-dragging {
                    transition: none !important;
                    z-index: 100 !important;
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
                    cursor: grabbing !important;
                }
                /* Remove border from content while dragging to give "lifted" look */
                .react-grid-item.react-draggable-dragging .bento-tile-content {
                    border-color: transparent !important;
                }
                /* Target the child content to scale if parent transform is locked by drag */
                .react-grid-item.react-draggable-dragging > div { 
                    transform: scale(1.05); /* Increased to 1.05 to match desired effect on child instead */
                }
                /* Hide action menu when dragging */
                .react-grid-item.react-draggable-dragging .bento-tile-content > div:last-child {
                    display: none;
                }
                .react-resizable-handle {
                    display: none;
                }
            `}</style>

            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 6, md: 6, sm: 6, xs: 4, xxs: 2 }} // Attempt 6 cols on larger mobile, fallback to 4/2 on tiny
                rowHeight={100} // Base row height
                margin={[BENTO_CONFIG.gap, BENTO_CONFIG.gap]}
                containerPadding={[0, 0]}
                isDraggable={!readOnly}
                isResizable={false} // We handle resize via our custom menu for now conform to "Bento" sizes
                onLayoutChange={(layout: any[], allLayouts: any) => onLayoutChange(layout, allLayouts)}

                draggableCancel=".no-drag" // Allow dragging everywhere except elements with .no-drag class
            >
                {visibleTiles.map((tile) => (
                    <div key={tile.id} className={readOnly ? "pointer-events-auto" : "hover:!z-[60]"}>
                        <BentoTile
                            tile={tile}
                            isSelected={selectedTileId === tile.id}
                            onSelect={onSelectTile}
                            onResize={onResize}
                            onDelete={onDelete}
                            readOnly={readOnly}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
}
