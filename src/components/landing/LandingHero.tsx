'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Radio, Sparkles } from 'lucide-react';
import { NetworkCanvas } from '../dashboard/NetworkCanvas';

export const LandingHero: React.FC<{ onEnterApp: () => void }> = ({ onEnterApp }) => {
    return (
        <div className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-12">
            {/* Network Canvas Background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <NetworkCanvas nodeCount={60} />
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
                <Sparkles size={14} className="animate-spin-slow" />
                <span>AIR-TRAFFIC CONTROL FOR E-COMMERCE DELIVERIES</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white max-w-4xl tracking-tight leading-[1.1]">
                Turn delivery delays into <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                    proactive retention.
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--text-dim)] max-w-2xl mt-6 leading-relaxed">
                Connect Shopify & WooCommerce with global carriers. Detect stuck packages in real time and trigger automated WhatsApp re-verifications before WISMO support tickets arise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 z-10">
                <Link href="/dashboard" className="btn-primary text-base py-3 px-8 rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                    <span>Launch Operational Dashboard</span>
                    <ArrowRight size={18} />
                </Link>
                <a href="#features" className="btn-ghost text-base py-3 px-6 rounded-xl">
                    Explore Features
                </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 p-6 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)] backdrop-blur-xl max-w-4xl w-full z-10">
                <div>
                    <div className="text-2xl font-bold font-mono text-cyan-400">40%</div>
                    <div className="text-xs text-[var(--text-dim)] mt-1">WISMO Ticket Reduction</div>
                </div>
                <div>
                    <div className="text-2xl font-bold font-mono text-emerald-400">&gt;25%</div>
                    <div className="text-xs text-[var(--text-dim)] mt-1">RTO Prevention Rate</div>
                </div>
                <div>
                    <div className="text-2xl font-bold font-mono text-amber-400">&lt;2 Mins</div>
                    <div className="text-xs text-[var(--text-dim)] mt-1">Store Connect Setup</div>
                </div>
                <div>
                    <div className="text-2xl font-bold font-mono text-purple-400">99.9%</div>
                    <div className="text-xs text-[var(--text-dim)] mt-1">Webhook Uptime SLA</div>
                </div>
            </div>
        </div>
    );
};
