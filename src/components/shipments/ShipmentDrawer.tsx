'use client';

import React from 'react';
import { X, ShieldAlert, MapPin, Truck, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { Shipment } from '../../lib/types/shipment';
import { ShipmentStatusPill } from './ShipmentStatusPill';
import { maskPhoneNumber, maskEmail } from '../../lib/security/masking';

interface ShipmentDrawerProps {
    shipment: Shipment | null;
    onClose: () => void;
    onTriggerNDR?: (shipment: Shipment) => void;
}

export const ShipmentDrawer: React.FC<ShipmentDrawerProps> = ({
    shipment,
    onClose,
    onTriggerNDR,
}) => {
    if (!shipment) return null;

    const journeySteps = [
        { label: 'Order Created', completed: true },
        { label: 'Picked Up', completed: true },
        { label: 'Sorting Facility', completed: true },
        { label: 'In Transit', completed: shipment.currentStatus !== 'LABEL_CREATED' },
        { label: 'Local Hub', completed: shipment.currentStatus === 'OUT_FOR_DELIVERY' || shipment.currentStatus === 'DELIVERED' },
        { label: 'Delivered', completed: shipment.currentStatus === 'DELIVERED' },
    ];

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-full max-w-2xl bg-[var(--surface)] border-l border-[var(--border-bright)] h-full overflow-y-auto p-6 flex flex-col gap-6 animate-slide-right">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold font-display text-white">{shipment.orderNumber}</h2>
                            <ShipmentStatusPill status={shipment.currentStatus} />
                        </div>
                        <p className="text-xs text-[var(--text-dim)] mt-1">
                            Tracking: <span className="font-mono text-cyan-400">{shipment.trackingNumber}</span> • Carrier: <span className="uppercase font-semibold text-white">{shipment.carrier}</span>
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:text-white">
                        <X size={18} />
                    </button>
                </div>

                {/* 3D Journey Visualizer */}
                <div className="p-4 rounded-xl bg-[var(--elevated)] border border-[var(--border-bright)]">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                        <Truck size={14} className="text-cyan-400" /> 3D Shipment Journey
                    </h4>
                    <div className="grid grid-cols-6 gap-2 text-center">
                        {journeySteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono mb-1 transition-all ${step.completed
                                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_12px_rgba(0,212,255,0.3)]'
                                            : 'bg-white/5 text-[var(--text-dimmer)] border border-white/10'
                                        }`}
                                >
                                    {step.completed ? <CheckCircle2 size={14} /> : idx + 1}
                                </div>
                                <span className="text-[10px] text-[var(--text-dim)] leading-tight">{step.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Risk Intelligence */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 via-amber-500/5 to-transparent border border-red-500/20 flex items-center justify-between">
                    <div>
                        <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                            <ShieldAlert size={16} /> RISK INTELLIGENCE: {shipment.riskLevel}
                        </div>
                        <p className="text-xs text-[var(--text-dim)] mt-1">
                            {shipment.exceptionReason || 'Normal transit SLA window.'}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold font-mono text-red-400">{shipment.riskScore}</div>
                        <div className="text-[9px] font-mono text-[var(--text-dimmer)]">/100 RISK</div>
                    </div>
                </div>

                {/* Customer Details & Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-[var(--elevated)] border border-[var(--border)]">
                        <span className="text-[11px] font-mono text-[var(--text-dimer)]">RECIPIENT</span>
                        <div className="text-sm font-bold text-white mt-1">{shipment.customerName}</div>
                        <div className="text-xs text-[var(--text-dim)] mt-1">{maskPhoneNumber(shipment.customerPhone)}</div>
                        <div className="text-xs text-[var(--text-dim)]">{maskEmail(shipment.customerEmail)}</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--elevated)] border border-[var(--border)] flex flex-col justify-between">
                        <span className="text-[11px] font-mono text-[var(--text-dimer)]">RECOMMENDED ACTION</span>
                        {shipment.currentStatus === 'FAILED_ATTEMPT' || shipment.currentStatus === 'DELIVERY_EXCEPTION' ? (
                            <button
                                onClick={() => onTriggerNDR && onTriggerNDR(shipment)}
                                className="btn-primary py-2 text-xs w-full justify-center mt-2"
                            >
                                <MessageSquare size={14} /> Send WhatsApp Verification
                            </button>
                        ) : (
                            <div className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1">
                                <CheckCircle2 size={14} /> Monitoring active SLA
                            </div>
                        )}
                    </div>
                </div>

                {/* Vertical Tracking Timeline */}
                <div className="flex-1">
                    <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                        <Clock size={14} className="text-cyan-400" /> Tracking Audit Log
                    </h4>
                    <div className="space-y-4 border-l-2 border-[var(--border-bright)] pl-4">
                        {shipment.trackingLogs.map((log) => (
                            <div key={log.id} className="relative">
                                <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-[var(--surface)]" />
                                <div className="text-xs font-bold text-white flex items-center gap-2">
                                    <MapPin size={12} className="text-[var(--text-dim)]" /> {log.location}
                                </div>
                                <p className="text-xs text-[var(--text-dim)] mt-0.5">&quot;{log.rawStatus}&quot;</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] font-mono text-[var(--text-dimmer)]">{log.timestamp}</span>
                                    <ShipmentStatusPill status={log.normalizedStatus} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
