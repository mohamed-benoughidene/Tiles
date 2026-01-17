export function ensureAbsoluteUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // Handle local paths or other protocols if needed, but for now force https://
    return `https://${url}`;
}
