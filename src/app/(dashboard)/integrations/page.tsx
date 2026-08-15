'use client';

import React from 'react';
import { StoreConnectors } from '../../../components/integrations/StoreConnectors';

export default function IntegrationsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold font-display text-white">Store Integrations</h1>
                <p className="text-xs text-[var(--text-dim)]">Shopify and WooCommerce 2-minute API sync setup.</p>
            </div>
            <StoreConnectors />
        </div>
    );
}
