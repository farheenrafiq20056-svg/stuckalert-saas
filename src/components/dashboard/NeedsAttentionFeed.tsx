'use client';

import React from 'react';
import Link from 'next/link';
import { AlertOctagon, PhoneCall, TrendingDown, ArrowRight } from 'lucide-react';

export const NeedsAttentionFeed: React.FC = () => {
    const items = [
        {
            id: 'att-1',
            title: '18 shipments have had no scan for 48+ hours',
            severity: 'CRITICAL',
            impact: 'Est. 14 WISMO complaints',
            action: 'Trigger Carrier SLA Alert',
            link: '/shipments?filter=stuck',
            icon: AlertOctagon,
            color: 'red',
        },
        {
            id: 'att-2',
            title: '7 failed delivery attempts require address verification',
            severity: 'HIGH',
            impact: '$1,260 potential RTO loss',
            action: 'Send WhatsApp Verification',
            link: '/ndr',
            icon: PhoneCall,
            color: 'amber',
        },
        {
            id: 'att-3',
            title: 'DHL performance dropped 12% today in Lahore hub',
            severity: 'MEDIUM',
            impact: 'Transit delay +1.8 days',
            action: 'View Carrier SLA Scorecard',
            link: '/carriers',
            icon: TrendingDown,
            color: 'violet',
        },
    ];

    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-sm font-bold text-white font-display">Needs Attention</h3>
                    <p className="text-xs text-[var(--text-dim)]">Intelligent real-time priority feed</p>
                </div>
                <span className="text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">
                    3 PRIORITY ALERTS
                </span>
            </div>

            <div className="space-y-3 flex-1">
                {items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className="p-3.5 rounded-xl bg-[var(--elevated)] border border-[var(--border-bright)] hover:border-cyan-500/40 transition flex items-start gap-3"
                        >
                            <div
                                className={`p-2 rounded-lg ${item.color === 'red'
                                        ? 'bg-red-500/10 text-red-400'
                                        : item.color === 'amber'
                                            ? 'bg-amber-500/10 text-amber-400'
                                            : 'bg-purple-500/10 text-purple-400'
                                    }`}
                            >
                                <Icon size={18} />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-white leading-snug">{item.title}</div>
                                <div className="text-[11px] text-[var(--text-dim)] mt-1 flex items-center gap-2">
                                    <span className="font-mono">{item.impact}</span>
                                </div>
                                <Link
                                    href={item.link}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--cyan)] hover:underline mt-2"
                                >
                                    <span>{item.action}</span>
                                    <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
