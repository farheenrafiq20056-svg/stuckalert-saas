'use client';

import React from 'react';
import { ShieldAlert, MessageSquare, Radio, Cpu, Share2, BarChart3 } from 'lucide-react';

export const LandingFeatures: React.FC = () => {
    const features = [
        {
            title: 'Normalized Status Pipeline',
            desc: 'Translates disparate courier statuses into 6 enum states (LABEL_CREATED, IN_TRANSIT, DELIVERY_EXCEPTION, OUT_FOR_DELIVERY, FAILED_ATTEMPT, DELIVERED).',
            icon: ShieldAlert,
            color: '#00d4ff',
        },
        {
            title: 'Automated NDR WhatsApp Trigger',
            desc: 'Dispatches 1-click address re-confirmation links to customers instantly on failed delivery attempts to reduce RTO costs by 25%.',
            icon: MessageSquare,
            color: '#10b981',
        },
        {
            title: 'Exception Radar & Priority Feed',
            desc: 'Visual radar priority field mapping aging packages (>48h no scan, address issues, weather hazards) by business impact.',
            icon: Radio,
            color: '#f59e0b',
        },
        {
            title: 'Node-Based Automation Studio',
            desc: 'Build triggers, delays, and multi-channel notification dispatches to Slack, WhatsApp, Telegram, or custom webhooks.',
            icon: Cpu,
            color: '#7c5af6',
        },
        {
            title: 'Multi-Carrier & Store API Sync',
            desc: 'Encrypted token storage for FedEx, DHL, Trax, Leopard with 2-minute Shopify and WooCommerce webhook onboarding.',
            icon: Share2,
            color: '#ef4444',
        },
        {
            title: 'Carrier SLA Scoreboard',
            desc: 'Analytical reporting tracking average delivery times, delay percentages, and Return-to-Origin rates per courier partner.',
            icon: BarChart3,
            color: '#00d4ff',
        },
    ];

    return (
        <section id="features" className="py-20 px-4 max-w-6xl mx-auto border-t border-[var(--border)]">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold font-display text-white tracking-tight">
                    Engineered for operational excellence
                </h2>
                <p className="text-sm text-[var(--text-dim)] mt-3">
                    Designed specifically for mid-market and boutique e-commerce operations leads and support teams.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${f.color}15`, color: f.color, border: `1px solid ${f.color}30` }}
                                >
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-base font-bold font-display text-white mb-2">{f.title}</h3>
                                <p className="text-xs text-[var(--text-dim)] leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
