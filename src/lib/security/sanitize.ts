/**
 * Frontend Security: Input Sanitization & XSS Prevention
 */

export function sanitizeHtml(input: string): string {
    if (!input) return '';
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

export function sanitizeSearchQuery(query: string): string {
    if (!query) return '';
    return query
        .trim()
        .replace(/[^\w\s\-#@.]/gi, '')
        .slice(0, 100);
}

export function sanitizeUrl(url: string): string {
    if (!url) return '';
    const trimmed = url.trim();
    if (trimmed.startsWith('https://') || trimmed.startsWith('http://') || trimmed.startsWith('/')) {
        return encodeURI(trimmed);
    }
    return '';
}
