'use client';

import React, { useState } from 'react';
import { NDRWorkflowModal } from '../../../components/ndr/NDRWorkflowModal';
import { MOCK_SHIPMENTS } from '../../../lib/mock-data/shipments';
import { Shipment } from '../../../lib/types/shipment';
import { MessageSquare, CheckCircle2, PhoneCall } from 'lucide-react';
import { maskPhoneNumber } from '../../../lib/security/masking';

export default function NDRPage() {
    const [activeModalShipment, setActiveModalShipment] = useState<Shipment | null>(null);

    const ndrEligible = MOCK_SHIPMENTS.filter(
        (s) => s.currentStatus === 'FAILED_ATTEMPT' || s.currentStatus === 'DELIVERY_EXCEPTION'
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                    <MessageSquare className="text-amber-400" /> Automated NDR Management
                </h1>
                <p className="text-xs text-[var(--text-dim)]">PRD 4.2 P1: 1-click address re-confirmation links via SMS & WhatsApp.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ndrEligible.map((shipment) => (
                    <div key={shipment.id} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-white font-display text-base">{shipment.orderNumber}</span>
                            <span className="pill pill-amber">FAILED ATTEMPT</span>
                        </div>
                        <p className="text-xs text-[var(--text-dim)]">{shipment.exceptionReason}</p>
                        <div className="text-xs font-mono text-[var(--text-dimmer)] flex items-center gap-2">
                            <PhoneCall size={12} /> {maskPhoneNumber(shipment.customerPhone)} • {shipment.customerName}
                        </div>
                        <button
                            onClick={() => setActiveModalShipment(shipment)}
                            className="btn-primary w-full justify-center text-xs py-2 mt-2"
                        >
                            <MessageSquare size={14} /> Send WhatsApp Verification Link
                        </button>
                    </div>
                ))}
            </div>

            <NDRWorkflowModal shipment={activeModalShipment} onClose={() => setActiveModalShipment(null)} />
        </div>
    );
}
