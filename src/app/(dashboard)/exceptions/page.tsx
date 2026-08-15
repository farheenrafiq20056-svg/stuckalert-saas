'use client';

import React, { useState } from 'react';
import { ExceptionRadar } from '../../../components/dashboard/ExceptionRadar';
import { ShipmentTable } from '../../../components/shipments/ShipmentTable';
import { ShipmentDrawer } from '../../../components/shipments/ShipmentDrawer';
import { MOCK_SHIPMENTS } from '../../../lib/mock-data/shipments';
import { Shipment } from '../../../lib/types/shipment';
import { AlertTriangle, ShieldAlert, Filter } from 'lucide-react';

export default function ExceptionsPage() {
    const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
    const [activeTab, setActiveTab] = useState<'CRITICAL' | 'REVIEW' | 'MONITORING'>('CRITICAL');

    const exceptionShipments = MOCK_SHIPMENTS.filter((s) => s.isException);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                        <AlertTriangle className="text-red-400" /> Exception Command Center
                    </h1>
                    <p className="text-xs text-[var(--text-dim)]">PRD 4.2 Section 21: Dedicated priority management for trapped parcels.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center">
                    <h3 className="text-sm font-bold text-white font-display mb-3 self-start">Radar Bottleneck Analysis</h3>
                    <ExceptionRadar />
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <div className="flex border-b border-[var(--border)] text-xs font-bold gap-6">
                        <button
                            onClick={() => setActiveTab('CRITICAL')}
                            className={`pb-3 border-b-2 flex items-center gap-2 ${activeTab === 'CRITICAL' ? 'border-red-500 text-red-400' : 'border-transparent text-[var(--text-dim)]'
                                }`}
                        >
                            <ShieldAlert size={14} /> Critical Now (74)
                        </button>
                        <button
                            onClick={() => setActiveTab('REVIEW')}
                            className={`pb-3 border-b-2 ${activeTab === 'REVIEW' ? 'border-amber-500 text-amber-400' : 'border-transparent text-[var(--text-dim)]'
                                }`}
                        >
                            Needs Review (18)
                        </button>
                        <button
                            onClick={() => setActiveTab('MONITORING')}
                            className={`pb-3 border-b-2 ${activeTab === 'MONITORING' ? 'border-purple-500 text-purple-400' : 'border-transparent text-[var(--text-dim)]'
                                }`}
                        >
                            Monitoring SLA (42)
                        </button>
                    </div>

                    <ShipmentTable shipments={exceptionShipments} onSelectShipment={(s) => setSelectedShipment(s)} />
                </div>
            </div>

            <ShipmentDrawer shipment={selectedShipment} onClose={() => setSelectedShipment(null)} />
        </div>
    );
}
