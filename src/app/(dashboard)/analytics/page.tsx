'use client';

import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { SparkLine } from '../../../components/dashboard/SparkLine';

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                    <BarChart3 className="text-cyan-400" /> Delivery & RTO Analytics
                </h1>
                <p className="text-xs text-[var(--text-dim)]">PRD 7: WISMO Ticket Reduction & RTO Prevention Rate metrics.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                    <span className="text-xs text-[var(--text-dim)]">WISMO Ticket Reduction</span>
                    <div className="text-3xl font-bold font-mono text-emerald-400 mt-2">38.4%</div>
                    <p className="text-[11px] text-[var(--text-dim)] mt-1">Target: 35% - 45% (PRD Achieved)</p>
                    <div className="mt-3">
                        <SparkLine data={[20, 25, 29, 34, 38]} color="#10b981" width={140} height={28} />
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                    <span className="text-xs text-[var(--text-dim)]">RTO Prevention Conversion</span>
                    <div className="text-3xl font-bold font-mono text-cyan-400 mt-2">29.1%</div>
                    <p className="text-[11px] text-[var(--text-dim)] mt-1">Via automated WhatsApp 1-click link</p>
                    <div className="mt-3">
                        <SparkLine data={[12, 18, 22, 26, 29]} color="#00d4ff" width={140} height={28} />
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                    <span className="text-xs text-[var(--text-dim)]">Total RTO Cost Saved</span>
                    <div className="text-3xl font-bold font-mono text-purple-400 mt-2">$14,280</div>
                    <p className="text-[11px] text-[var(--text-dim)] mt-1">142 failed delivery parcels recovered</p>
                    <div className="mt-3">
                        <SparkLine data={[4000, 7200, 9500, 12000, 14280]} color="#7c5af6" width={140} height={28} />
                    </div>
                </div>
            </div>
        </div>
    );
}
