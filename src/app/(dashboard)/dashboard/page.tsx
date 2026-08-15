'use client';

import React, { useState } from 'react';
import { KPICards } from '../../../components/dashboard/KPICards';
import { NetworkCanvas } from '../../../components/dashboard/NetworkCanvas';
import { ExceptionRadar } from '../../../components/dashboard/ExceptionRadar';
import { NeedsAttentionFeed } from '../../../components/dashboard/NeedsAttentionFeed';
import { ShipmentTable } from '../../../components/shipments/ShipmentTable';
import { ShipmentDrawer } from '../../../components/shipments/ShipmentDrawer';
import { NDRWorkflowModal } from '../../../components/ndr/NDRWorkflowModal';
import { MOCK_SHIPMENTS } from '../../../lib/mock-data/shipments';
import { Shipment } from '../../../lib/types/shipment';
import { RefreshCw, Download, Calendar } from 'lucide-react';

export default function DashboardPage() {
    const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
    const [ndrShipment, setNdrShipment] = useState<Shipment | null>(null);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-display text-white">Delivery Control Center</h1>
                    <p className="text-xs text-[var(--text-dim)]">Real-time visibility across your entire fulfillment network.</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-2 bg-[var(--elevated)] border border-[var(--border)] px-3 py-1.5 rounded-lg text-[var(--text-dim)] font-mono">
                        <Calendar size={14} /> Last 7 Days
                    </div>
                    <button className="btn-ghost py-1.5 px-3">
                        <RefreshCw size={14} /> Refresh
                    </button>
                    <button className="btn-primary py-1.5 px-3">
                        <Download size={14} /> Export Report
                    </button>
                </div>
            </div>

            {/* KPI Section */}
            <KPICards />

            {/* Live Network & Exception Radar Centerpiece */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 relative overflow-hidden flex flex-col min-h-[340px]">
                    <div className="flex items-center justify-between mb-3 z-10">
                        <div>
                            <h3 className="text-sm font-bold text-white font-display">Live Shipment Network</h3>
                            <p className="text-xs text-[var(--text-dim)]">Spatial 3D carrier route map</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="pill pill-cyan">12.8K ACTIVE</span>
                            <span className="pill pill-amber">286 AT RISK</span>
                        </div>
                    </div>
                    <div className="flex-1 relative rounded-lg overflow-hidden border border-[var(--border)]">
                        <NetworkCanvas nodeCount={50} />
                    </div>
                </div>

                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center relative">
                    <div className="w-full flex items-center justify-between mb-2">
                        <h3 className="text-sm font-bold text-white font-display">Exception Radar</h3>
                        <span className="text-[10px] font-mono text-cyan-400">PRIORITY MAP</span>
                    </div>
                    <ExceptionRadar />
                </div>
            </div>

            {/* Needs Attention & Recent Shipments */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <NeedsAttentionFeed />
                </div>
                <div className="lg:col-span-2">
                    <ShipmentTable shipments={MOCK_SHIPMENTS} onSelectShipment={(s) => setSelectedShipment(s)} />
                </div>
            </div>

            {/* Drawers and Modals */}
            <ShipmentDrawer
                shipment={selectedShipment}
                onClose={() => setSelectedShipment(null)}
                onTriggerNDR={(s) => {
                    setSelectedShipment(null);
                    setNdrShipment(s);
                }}
            />

            <NDRWorkflowModal shipment={ndrShipment} onClose={() => setNdrShipment(null)} />
        </div>
    );
}
