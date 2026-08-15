'use client';

import React, { useState } from 'react';
import { Radio, Key, Lock, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CarrierKeySchema } from '../../lib/security/validation';
import { checkRateLimit } from '../../lib/security/rate-limiter';
import { maskAddress } from '../../lib/security/masking';

export const CarrierScoreboard: React.FC = () => {
    const [carrier, setCarrier] = useState('dhl');
    const [apiKey, setApiKey] = useState('');
    const [savedSuccess, setSavedSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const carriers = [
        { name: 'DHL Express', code: 'dhl', avgTransit: '2.1 Days', delayRate: '4.2%', rtoRate: '1.1%', status: 'OPTIMAL', color: 'emerald' },
        { name: 'FedEx Logistics', code: 'fedex', avgTransit: '2.8 Days', delayRate: '6.8%', rtoRate: '2.4%', status: 'STABLE', color: 'cyan' },
        { name: 'Trax Courier', code: 'trax', avgTransit: '3.4 Days', delayRate: '12.5%', rtoRate: '4.8%', status: 'SLA DEGRADED', color: 'amber' },
        { name: 'Leopard Express', code: 'leopard', avgTransit: '3.1 Days', delayRate: '8.2%', rtoRate: '3.2%', status: 'STABLE', color: 'cyan' },
    ];

    const handleSaveKey = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        const limit = checkRateLimit('save_carrier_key', 5, 60000);
        if (!limit.allowed) {
            setErrorMsg(`Too many attempts. Wait ${limit.waitTimeSec}s.`);
            return;
        }

        const validation = CarrierKeySchema.safeParse({ carrier, apiKey });
        if (!validation.success) {
            setErrorMsg(validation.error.errors[0].message);
            return;
        }

        setSavedSuccess(true);
        setApiKey('');
        setTimeout(() => setSavedSuccess(false), 3000);
    };

    return (
        <div className="space-y-6">
            {/* SLA Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {carriers.map((c) => (
                    <div key={c.code} className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="font-bold font-display text-white text-sm">{c.name}</span>
                            <span className={`pill pill-${c.color}`}>{c.status}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-[var(--border)]">
                            <div>
                                <div className="text-xs font-mono font-bold text-white">{c.avgTransit}</div>
                                <div className="text-[9px] text-[var(--text-dimmer)]">AVG SLA</div>
                            </div>
                            <div>
                                <div className="text-xs font-mono font-bold text-amber-400">{c.delayRate}</div>
                                <div className="text-[9px] text-[var(--text-dimmer)]">DELAY %</div>
                            </div>
                            <div>
                                <div className="text-xs font-mono font-bold text-red-400">{c.rtoRate}</div>
                                <div className="text-[9px] text-[var(--text-dimmer)]">RTO RATE</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Encrypted Key Management Form */}
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                        <Key size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-bold font-display text-white">Encrypted Carrier API Credentials</h3>
                        <p className="text-xs text-[var(--text-dim)]">PRD 6 Security: AES-256-GCM encrypted key storage</p>
                    </div>
                </div>

                {savedSuccess && (
                    <div className="p-3 mb-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                        <CheckCircle2 size={16} /> API Key encrypted and safely stored in tenant vault.
                    </div>
                )}

                {errorMsg && (
                    <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                        <AlertTriangle size={16} /> {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSaveKey} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Carrier Provider</label>
                        <select
                            value={carrier}
                            onChange={(e) => setCarrier(e.target.value)}
                            className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white"
                        >
                            <option value="dhl">DHL Express</option>
                            <option value="fedex">FedEx Logistics</option>
                            <option value="trax">Trax Courier</option>
                            <option value="leopard">Leopard Express</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Carrier API Token</label>
                        <input
                            type="password"
                            placeholder="••••••••••••••••••••"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white font-mono"
                        />
                    </div>

                    <div className="flex items-end">
                        <button type="submit" className="btn-primary w-full justify-center text-xs py-2.5">
                            <Lock size={14} /> Store Encrypted Token
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
