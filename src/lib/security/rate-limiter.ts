/**
 * Frontend Security: Client-Side Rate Limiter & Action Throttler
 */

const actionTimestamps: Record<string, number[]> = {};

export function checkRateLimit(actionKey: string, maxAttempts = 5, windowMs = 60000): { allowed: boolean; waitTimeSec: number } {
    const now = Date.now();
    if (!actionTimestamps[actionKey]) {
        actionTimestamps[actionKey] = [];
    }

    // Filter timestamps within the current window
    actionTimestamps[actionKey] = actionTimestamps[actionKey].filter((ts) => now - ts < windowMs);

    if (actionTimestamps[actionKey].length >= maxAttempts) {
        const oldestTs = actionTimestamps[actionKey][0];
        const waitTimeSec = Math.ceil((windowMs - (now - oldestTs)) / 1000);
        return { allowed: false, waitTimeSec: Math.max(1, waitTimeSec) };
    }

    actionTimestamps[actionKey].push(now);
    return { allowed: true, waitTimeSec: 0 };
}
