'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { Shipment } from '../../lib/types/shipment';
import { AddressReverificationSchema } from '../../lib/security/validation';
import { checkRateLimit } from '../../lib/security/rate-limiter';
import { sanitizeHtml } from '../../lib/security/sanitize';

interface NDRWorkflowModalProps {
    shipment: Shipment | null;
    onClose: () => void;
}

export const NDRWorkflowModal: React.FC<NDRWorkflowModalProps> = ({ shipment, onClose }) => {
    const [phone, setPhone] = useState(shipment?.customerPhone || '');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [sentSuccess, setSentSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    if (!shipment) return null;

    const handleSendVerification = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        // Check rate limit
        const limit = checkRateLimit('send_ndr_whatsapp', 3, 60000);
        if (!limit.allowed) {
            setErrorMsg(`Rate limit reached. Please wait ${limit.waitTimeSec} seconds before re-sending.`);
            return;
        }

        // Validate schema
        const result = AddressReverificationSchema.safeParse({
            orderNumber: shipment.orderNumber,
            customerPhone: phone,
            newAddress: address || 'Current Address Verification Requested',
            landmarkNotes: notes,
        });

        if (!result.success) {
            setErrorMsg(result.error.errors[0].message);
            return;
        }

        setSentSuccess(true);
    };

    return (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[var(--surface)] border border-[var(--border-bright)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Header */}
                <div className="p-5 border-b border-[var(--border)] flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-transparent to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h3 className="text-base font-bold font-display text-white">Automated NDR Re-Verification</h3>
                            <p className="text-xs text-[var(--text-dim)]">Trigger WhatsApp 1-Click Verification Link</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-1.5 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:text-white">
                        <X size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {sentSuccess ? (
                        <div className="py-6 text-center space-y-4 animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-white">Verification Link Dispatched!</h4>
                            <p className="text-xs text-[var(--text-dim)] max-w-xs mx-auto">
                                A secure 1-click address re-confirmation link has been sent via WhatsApp to{' '}
                                <span className="font-mono text-cyan-400">{sanitizeHtml(phone)}</span>.
                            </p>
                            <div className="p-3 bg-[var(--elevated)] rounded-xl border border-[var(--border)] text-left text-xs space-y-1">
                                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                                    <ShieldCheck size={14} /> Status: Awaiting Customer Confirmation
                                </div>
                                <div className="text-[var(--text-dimmer)]">Auto-RTO prevention active for order {shipment.orderNumber}.</div>
                            </div>
                            <button onClick={onClose} className="btn-primary w-full justify-center text-xs mt-4">
                                Done
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSendVerification} className="space-y-4">
                            {errorMsg && (
                                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                                    <AlertCircle size={14} /> {errorMsg}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Customer Phone (WhatsApp)</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+92 300 0000000"
                                    className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1">Address / Landmark Notes (Optional)</label>
                                <textarea
                                    rows={2}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="e.g. Near Main Gate, Ring when outside..."
                                    className="w-full bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg p-2.5 text-xs text-white"
                                />
                            </div>

                            <div className="p-3 bg-[var(--elevated)] rounded-xl border border-[var(--border)] text-xs text-[var(--text-dim)]">
                                💡 <span className="text-white font-medium">RTO Cost Saver:</span> Customers will receive an interactive WhatsApp button to confirm or update their location pin in 1 click.
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={onClose} className="btn-ghost flex-1 justify-center text-xs">
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary flex-1 justify-center text-xs">
                                    <Send size={14} /> Dispatch WhatsApp Link
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
