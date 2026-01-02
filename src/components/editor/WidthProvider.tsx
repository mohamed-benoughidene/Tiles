'use client';

import React, { useEffect, useRef, useState } from "react";

/**
 * A simple HOC that provides width to the wrapped component.
 * Replaces react-grid-layout's WidthProvider which has export issues in some builds.
 */
export function withWidth(WrappedComponent: React.ComponentType<any>) {
    return function WidthProvider(props: any) {
        const [width, setWidth] = useState(1200); // Default width
        const [mounted, setMounted] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            setMounted(true);
            const element = containerRef.current;
            if (!element) return;

            // Initial width
            setWidth(element.offsetWidth);

            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    // console.log("Resize observed", entry.contentRect.width);
                    setWidth(entry.contentRect.width);
                }
            });

            resizeObserver.observe(element);

            return () => {
                resizeObserver.disconnect();
            };
        }, []);

        return (
            <div ref={containerRef} className="w-full" style={{ width: '100%' }}>
                {mounted && width > 0 && <WrappedComponent {...props} width={width} />}
            </div>
        );
    };
}
