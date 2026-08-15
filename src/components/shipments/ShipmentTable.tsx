'use client';

import React, { useState } from 'react';
import { Search, Filter, ExternalLink, ArrowUpDown } from 'lucide-react';
import { Shipment } from '../../lib/types/shipment';
import { ShipmentStatusPill } from './ShipmentStatusPill';
import { sanitizeSearchQuery } from '../../lib/security/sanitize';

interface ShipmentTableProps {
    shipments: Shipment[];
    onSelectShipment: (shipment: Shipment) => void;
}

export const ShipmentTable: React.FC<ShipmentTableProps> = ({ shipments, onSelectShipment }) => {
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('ALL');

    const filtered = shipments.filter((s) => {
        const cleanQuery = sanitizeSearchQuery(query).toLowerCase();
        const matchesSearch =
            !cleanQuery ||
            s.orderNumber.toLowerCase().includes(cleanQuery) ||
            s.trackingNumber.toLowerCase().includes(cleanQuery) ||
            s.customerName.toLowerCase().includes(cleanQuery);

        const matchesStatus = statusFilter === 'ALL' || s.currentStatus === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col">
            {/* Table Toolbar */}
            <div className="p-4 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1 max-w-sm">
                    <div className="relative w-full">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
                        <input
                            type="text"
                            placeholder="Filter shipments..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-1.5 bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg text-xs text-white placeholder:text-[var(--text-dimmer)]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <Filter size={14} className="text-[var(--text-dim)]" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-[var(--elevated)] border border-[var(--border-bright)] text-xs text-white rounded-lg px-2.5 py-1.5"
                        >
                            <option value="ALL">All Statuses</option>
                            <option value="LABEL_CREATED">Label Created</option>
                            <option value="IN_TRANSIT">In Transit</option>
                            <option value="DELIVERY_EXCEPTION">Delivery Exception</option>
                            <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                            <option value="FAILED_ATTEMPT">Failed Attempt</option>
                            <option value="DELIVERED">Delivered</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[var(--text)]">
                    <thead className="bg-[var(--elevated)] border-b border-[var(--border)] font-mono text-[10px] text-[var(--text-dimmer)] uppercase">
                        <tr>
                            <th className="py-3 px-4">Order</th>
                            <th className="py-3 px-4">Customer</th>
                            <th className="py-3 px-4">Carrier</th>
                            <th className="py-3 px-4">Tracking</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Transit</th>
                            <th className="py-3 px-4">Risk Score</th>
                            <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                        {filtered.map((s) => (
                            <tr
                                key={s.id}
                                onClick={() => onSelectShipment(s)}
                                className="hover:bg-white/[0.03] transition cursor-pointer"
                            >
                                <td className="py-3.5 px-4 font-bold text-white font-display">{s.orderNumber}</td>
                                <td className="py-3.5 px-4 text-[var(--text)]">{s.customerName}</td>
                                <td className="py-3.5 px-4 uppercase font-semibold text-[var(--text-dim)]">{s.carrier}</td>
                                <td className="py-3.5 px-4 font-mono text-cyan-400">{s.trackingNumber}</td>
                                <td className="py-3.5 px-4">
                                    <ShipmentStatusPill status={s.currentStatus} />
                                </td>
                                <td className="py-3.5 px-4 text-[var(--text-dim)]">{s.transitDays} days</td>
                                <td className="py-3.5 px-4">
                                    <span
                                        className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${s.riskScore > 75
                                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                : s.riskScore > 40
                                                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                            }`}
                                    >
                                        {s.riskScore}/100
                                    </span>
                                </td>
                                <td className="py-3.5 px-4 text-right">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelectShipment(s);
                                        }}
                                        className="p-1.5 rounded-lg border border-[var(--border)] hover:bg-[var(--elevated)] hover:text-white text-[var(--text-dim)]"
                                    >
                                        <ExternalLink size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
