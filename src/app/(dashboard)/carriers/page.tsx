'use client';

import React from 'react';
import { CarrierScoreboard } from '../../../components/carriers/CarrierScoreboard';

export default function CarriersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold font-display text-white">Carrier SLA Scoreboard</h1>
                <p className="text-xs text-[var(--text-dim)]">Analytical reporting & encrypted multi-carrier API key vault.</p>
            </div>
            <CarrierScoreboard />
        </div>
    );
}
