'use client';

import React from 'react';
import { Settings, Shield, Lock, Bell, Database } from 'lucide-react';
import { useAuth } from '../../../components/security/AuthGuard';

export default function SettingsPage() {
    const { userRole, tenantName } = useAuth();

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                    <Settings className="text-cyan-400" /> Tenant Settings & Security Controls
                </h1>
                <p className="text-xs text-[var(--text-dim)]">PRD 6: Multi-Tenant isolation & AES-256-GCM encryption configurations.</p>
            </div>

            <div className="space-y-4">
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Shield size={16} className="text-emerald-400" /> Tenant Identity & Role Control
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <span className="text-[var(--text-dim)]">Organization Name</span>
                            <div className="font-bold text-white mt-1">{tenantName}</div>
                        </div>
                        <div>
                            <span className="text-[var(--text-dim)]">Active Role</span>
                            <div className="font-bold text-cyan-400 font-mono capitalize mt-1">{userRole.replace('_', ' ')}</div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Lock size={16} className="text-cyan-400" /> Security Standards Enforced
                    </h3>
                    <ul className="text-xs text-[var(--text-dim)] space-y-2 list-disc pl-5">
                        <li>Strict Content-Security-Policy (CSP) with nonce-based script restrictions</li>
                        <li>X-Frame-Options: DENY (Anti-Clickjacking protection)</li>
                        <li>HTTP Strict Transport Security (HSTS 63072000s max-age)</li>
                        <li>Client Storage Encrypted AES-256 Base64 Payload Wrapper</li>
                        <li>Zod Schema Input Validation & HTML Sanitization</li>
                        <li>Client Action Rate Limiter (5 requests / 60 seconds)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
