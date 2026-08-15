/**
 * Frontend Security: Anti-CSRF Protection Helper
 */

let memoryCsrfToken: string | null = null;

export function getCsrfToken(): string {
    if (!memoryCsrfToken) {
        const array = new Uint8Array(24);
        if (typeof window !== 'undefined' && window.crypto) {
            window.crypto.getRandomValues(array);
            memoryCsrfToken = Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
        } else {
            memoryCsrfToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
        }
    }
    return memoryCsrfToken;
}

export function buildSecureHeaders(customHeaders: Record<string, string> = {}): Record<string, string> {
    return {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCsrfToken(),
        'X-Requested-With': 'XMLHttpRequest',
        ...customHeaders,
    };
}
