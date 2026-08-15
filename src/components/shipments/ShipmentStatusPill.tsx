'use client';

import React from 'react';
import { NormalizedStatus } from '../../lib/types/shipment';

const STATUS_CONFIG: Record<
    NormalizedStatus,
    { label: string; className: string }
> = {
    LABEL_CREATED: { label: 'LABEL CREATED', className: 'pill-dim' },
    IN_TRANSIT: { label: 'IN TRANSIT', className: 'pill-cyan' },
    DELIVERY_EXCEPTION: { label: 'DELIVERY EXCEPTION', className: 'pill-red animate-pulse' },
    OUT_FOR_DELIVERY: { label: 'OUT FOR DELIVERY', className: 'pill-violet' },
    FAILED_ATTEMPT: { label: 'FAILED ATTEMPT', className: 'pill-amber' },
    DELIVERED: { label: 'DELIVERED', className: 'pill-green' },
};

export const ShipmentStatusPill: React.FC<{ status: NormalizedStatus }> = ({ status }) => {
    const config = STATUS_CONFIG[status] || { label: status, className: 'pill-dim' };
    return <span className={`pill ${config.className}`}>{config.label}</span>;
};
