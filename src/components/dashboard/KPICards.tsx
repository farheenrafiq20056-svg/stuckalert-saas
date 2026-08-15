'use client';

import React from 'react';
import { Package, AlertTriangle, ShieldAlert, DollarSign, CheckCircle } from 'lucide-react';
import { SparkLine } from './SparkLine';

export const KPICards: React.FC = () => {
    const kpis = [
        {
            title: 'Active Shipments',
            value: '12,842',
            trend: '+8.4%',
            trendUp: true,
            subtext: 'Across 4 carriers',
            icon: Package,
            color: '#00d4ff',
            sparkData: [10, 12, 11, 14, 13, 16, 18],
        },
        {
            title: 'At Risk',
            value: '286',
            trend: '2.2% of active',
            trendUp: false,
            subtext: 'Requires monitoring',
            icon: AlertTriangle,
            color: '#f59e0b',
            sparkData: [8, 9, 12, 10, 14, 15, 12],
        },
        {
            title: 'Delivery Exceptions',
            value: '74',
            trend: '↓ 18% this week',
            trendUp: true,
            subtext: 'Critical bottlenecks',
            icon: ShieldAlert,
            color: '#ef4444',
            sparkData: [20, 18, 15, 14, 12, 10, 8],
        },
        {
            title: 'RTO Risk Exposure',
            value: '$8,420',
            trend: '41 parcels at risk',
            trendUp: false,
            subtext: 'Est. return costs',
            icon: DollarSign,
            color: '#7c5af6',
            sparkData: [5000, 6200, 7800, 7100, 8420],
        },
        {
            title: 'WISMO Avoided',
            value: '1,284',
            trend: 'This month',
            trendUp: true,
            subtext: 'Automated retention',
            icon: CheckCircle,
            color: '#10b981',
            sparkData: [800, 950, 1100, 1200, 1284],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {kpis.map((kpi, idx) => {
                const Icon = kpi.icon;
                return (
                    <div
                        key={idx}
                        className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[var(--text-dim)] font-medium">{kpi.title}</span>
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: `${kpi.color}15`, color: kpi.color }}
                            >
                                <Icon size={16} />
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="text-2xl font-bold font-display text-white tracking-tight">{kpi.value}</div>
                            <div className="text-[11px] text-[var(--text-dim)] flex items-center gap-1 mt-1">
                                <span className={kpi.trendUp ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                                    {kpi.trend}
                                </span>
                                <span>• {kpi.subtext}</span>
                            </div>
                        </div>
                        <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between">
                            <SparkLine data={kpi.sparkData} color={kpi.color} width={90} height={24} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
