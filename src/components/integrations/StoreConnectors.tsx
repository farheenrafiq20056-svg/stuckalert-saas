'use client';

import React, { useState } from 'react';
import { Share2, ShoppingBag, Store, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { StoreConnectionSchema } from '../../lib/security/validation';

export const StoreConnectors: React.FC = () => {
    const [platform, setPlatform] = useState<'shopify' | 'woocommerce'>('shopify');
    const [orgName, setOrgName] = useState('');
    const [storeUrl, setStoreUrl] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleConnect = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        const validation = StoreConnectionSchema.safeParse({
            organizationName: orgName,
            platform,
            storeUrl,
            apiKey,
        });

        if (!validation.success) {
            setErrorMsg(validation.error.errors[0].message);
            return;
        }

        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <div className="space-y-6">
            {/* Existing Connections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                            <ShoppingBag size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Shopify Official Store</h4>
                            <p className="text-xs text-[var(--text-dim)]">mystore.myshopify.com • Auto Webhook</p>
                        </div>
                    </div>
                    <span className="pill pill-green">CONNECTED</span>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between opacity-60">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                            <Store size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">WooCommerce Store</h4>
                            <p className="text-xs text-[var(--text-dim)]">REST API Webhook Sync</p>
                        </div>
                    </div>
                    <span className="pill pill-dim">NOT CONNECTED</span>
                </div>
            </div>

            {/* Connect Form */}
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                        <Share2 size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-bold font-display text-white">Connect New Storefront (2-Minute Setup)</h3>
                        <p className="text-xs text-[var(--text-dim)]">Sync orders and tracking numbers automatically without manual export</p>
                    </div>
                </div>

                {success && (
                    <div className="p-3 mb-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                        <CheckCircle2 size={16} /> Store connected successfully! Webhooks active.
                    </div>
                )}

                {errorMsg && (
                    <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                        <AlertCircle size={16} /> {errorMsg}
                    </div>
                )}

                <form onSubmit={handleConnect} className="space-y-4 max-w-xl">
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setPlatform('shopify')}
                            className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${platform === 'shopify'
                                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                                    : 'bg-[var(--elevated)] border-[var(--border)] text-[var(--text-dim)]'
                                }`}
                        >
                            <ShoppingBag size={16} /> Shopify
                        </button>
                        <button
                            type="button"
                            onClick={() => setPlatform('woocommerce')}
                            className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${platform === 'woocommerce'
                                    ? 'bg-purple-500/10 border-purple-500 text-purple-400'
                                    : 'bg-[var(--elevated)] border-[var(--border)] text-[var(--text-dim)]'
                                }`}
                        >
                            <Store size={16} /> WooCommerce
                        </button>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Organization Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Acme Outfitters"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Store URL</label>
                        <input
                            type="url"
                            placeholder="https://mystore.myshopify.com"
                            value={storeUrl}
                            onChange={(e) => setStoreUrl(e.target.value)}
                            className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">API Access Token</label>
                        <input
                            type="password"
                            placeholder="shpat_••••••••••••••••••••"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white font-mono"
                        />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-xs py-2.5">
                        <Lock size={14} /> Connect & Sync Store Orders
                    </button>
                </form>
            </div>
        </div>
    );
};
