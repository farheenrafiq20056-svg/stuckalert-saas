'use client';

import React, { useState } from 'react';
import { ShipmentTable } from '../../../components/shipments/ShipmentTable';
import { ShipmentDrawer } from '../../../components/shipments/ShipmentDrawer';
import { NDRWorkflowModal } from '../../../components/ndr/NDRWorkflowModal';
import { MOCK_SHIPMENTS } from '../../../lib/mock-data/shipments';
import { Shipment } from '../../../lib/types/shipment';
import { Package, Download } from 'lucide-react';

export default function ShipmentsPage() {
    const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
    const [ndrShipment, setNdrShipment] = useState<Shipment | null>(null);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                        <Package className="text-cyan-400" /> Active Shipments
                    </h1>
                    <p className="text-xs text-[var(--text-dim)]">Normalized carrier status data grid and journey tracker.</p>
                </div>
                <button className="btn-primary py-1.5 px-3 text-xs">
                    <Download size={14} /> Export CSV
                </button>
            </div>

            <ShipmentTable shipments={MOCK_SHIPMENTS} onSelectShipment={(s) => setSelectedShipment(s)} />

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
