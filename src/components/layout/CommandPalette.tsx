'use client';

import React, { useEffect, useState } from 'react';
import { Search, Package, AlertTriangle, Cpu, Radio, Share2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { sanitizeSearchQuery } from '../../lib/security/sanitize';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (isOpen) onClose();
                else setQuery('');
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleNavigate = (path: string) => {
        router.push(path);
        onClose();
    };

    const commands = [
        { label: 'Go to Overview Dashboard', icon: Package, path: '/dashboard' },
        { label: 'View All Active Shipments', icon: Package, path: '/shipments' },
        { label: 'View Exception Radar', icon: AlertTriangle, path: '/exceptions' },
        { label: 'Failed Delivery WhatsApp Trigger', icon: AlertTriangle, path: '/ndr' },
        { label: 'Open Automation Studio', icon: Cpu, path: '/automation' },
        { label: 'Carrier SLA Scoreboard', icon: Radio, path: '/carriers' },
        { label: 'Store Connectors (Shopify/Woo)', icon: Share2, path: '/integrations' },
    ];

    const filtered = commands.filter((c) =>
        c.label.toLowerCase().includes(sanitizeSearchQuery(query).toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 z-50 p-4">
            <div className="w-full max-w-xl bg-[var(--surface)] border border-[var(--border-bright)] rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                <div className="flex items-center px-4 py-3 border-b border-[var(--border)]">
                    <Search size={18} className="text-[var(--text-dim)] mr-3" />
                    <input
                        type="text"
                        autoFocus
                        placeholder="Type a command or search shipments..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent text-sm text-white focus:outline-none"
                    />
                    <button onClick={onClose} className="text-[var(--text-dim)] hover:text-white p-1">
                        <X size={16} />
                    </button>
                </div>

                <div className="max-h-72 overflow-y-auto p-2">
                    {filtered.length > 0 ? (
                        filtered.map((cmd, idx) => {
                            const Icon = cmd.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleNavigate(cmd.path)}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-[var(--text)] hover:bg-[var(--cyan-dim)] hover:text-[var(--cyan)] transition text-left"
                                >
                                    <Icon size={16} />
                                    <span className="font-medium">{cmd.label}</span>
                                </button>
                            );
                        })
                    ) : (
                        <div className="p-4 text-center text-xs text-[var(--text-dim)]">No commands found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};
