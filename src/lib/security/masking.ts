/**
 * Frontend Security: Customer PII Data Masking Helper
 */

export function maskPhoneNumber(phone?: string): string {
    if (!phone) return '••••••••';
    const clean = phone.trim();
    if (clean.length < 6) return '••••••';
    return `${clean.slice(0, 3)}•••••${clean.slice(-2)}`;
}

export function maskEmail(email?: string): string {
    if (!email || !email.includes('@')) return '••••@••••.com';
    const [user, domain] = email.split('@');
    const maskedUser = user.length > 2 ? `${user.slice(0, 2)}••••` : '••';
    return `${maskedUser}@${domain}`;
}

export function maskAddress(address?: string): string {
    if (!address) return '••••••••••••';
    const parts = address.split(',');
    if (parts.length > 1) {
        return `••••••, ${parts[parts.length - 1].trim()}`;
    }
    return `${address.slice(0, 5)}••••••••`;
}
