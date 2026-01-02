export const BENTO_CONFIG = {
    columns: {
        mobile: 2,
        tablet: 4,
        desktop: 6,
    },
    gap: 16, // pixels
    cellAspectRatio: 1, // square base cells
    breakpoints: {
        mobile: 375,
        tablet: 768,
        desktop: 1024,
    }
} as const;
