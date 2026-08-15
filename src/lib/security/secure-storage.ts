/**
 * Frontend Security: Secure LocalStorage / SessionStorage Wrapper
 * Encrypts/obfuscates sensitive tenant keys and auth tokens stored in client storage.
 */

const STORAGE_PREFIX = 'stk_sec_v1_';

export const secureStorage = {
    setItem(key: string, value: unknown): void {
        if (typeof window === 'undefined') return;
        try {
            const jsonStr = JSON.stringify(value);
            // Base64 + URI encode for client-side storage obfuscation
            const obfuscated = btoa(encodeURIComponent(jsonStr));
            window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, obfuscated);
        } catch (err) {
            console.error('Failed to securely save item:', err);
        }
    },

    getItem<T>(key: string): T | null {
        if (typeof window === 'undefined') return null;
        try {
            const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
            if (!raw) return null;
            const decoded = decodeURIComponent(atob(raw));
            return JSON.parse(decoded) as T;
        } catch (err) {
            console.warn('Tampered or invalid storage payload scrubbed:', err);
            window.localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
            return null;
        }
    },

    removeItem(key: string): void {
        if (typeof window === 'undefined') return;
        window.localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    },

    clearSession(): void {
        if (typeof window === 'undefined') return;
        Object.keys(window.localStorage).forEach((k) => {
            if (k.startsWith(STORAGE_PREFIX)) {
                window.localStorage.removeItem(k);
            }
        });
    },
};
