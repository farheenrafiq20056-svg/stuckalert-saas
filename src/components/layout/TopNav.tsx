'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell, Command, Shield } from 'lucide-react';
import { useAuth } from '../security/AuthGuard';
import { sanitizeSearchQuery } from '../../lib/security/sanitize';

interface TopNavProps {
    onOpenCommandPalette: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenCommandPalette }) => {
    const { userRole, tenantName, login } = useAuth();
    const [searchVal, setSearchVal] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(sanitizeSearchQuery(e.target.value));
    };

    return (
        <header className="h-16 bg-[var(--surface)] border-b border-[var(--border)] px-6 flex items-center justify-between z-10">
            {/* Global Search Bar */}
            <div className="flex items-center gap-3 flex-1 max-w-md">
                <div className="relative w-full">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
                    <input
                        type="text"
                        placeholder="Search order #, tracking, customer, or carrier..."
                        value={searchVal}
                        onChange={handleSearchChange}
                        onClick={onOpenCommandPalette}
                        className="w-full pl-9 pr-12 py-1.5 bg-[var(--elevated)] border border-[var(--border-bright)] rounded-lg text-xs text-white placeholder:text-[var(--text-dimmer)] focus:border-cyan-500/50"
                    />
                    <button
                        onClick={onOpenCommandPalette}
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-mono bg-white/[0.06] text-[var(--text-dim)] px-1.5 py-0.5 rounded border border-white/10 hover:text-white"
                    >
                        <Command size={10} /> K
                    </button>
                </div>
            </div>

            {/* Operations Controls & Status */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] bg-[var(--elevated)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>UTC {currentTime || 'LIVE'}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="relative p-2 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:text-white hover:bg-[var(--elevated)] transition">
                        <Bell size={16} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
                    </button>
                </div>

                {/* Role & Tenant Selector */}
                <div className="flex items-center gap-3 border-l border-[var(--border)] pl-4">
                    <div className="text-right hidden sm:block">
                        <div className="text-xs font-bold text-white">{tenantName}</div>
                        <div className="text-[10px] font-mono text-cyan-400 capitalize flex items-center justify-end gap-1">
                            <Shield size={10} /> {userRole.replace('_', ' ')}
                        </div>
                    </div>
                    <select
                        value={userRole}
                        onChange={(e) => login(e.target.value as any)}
                        className="text-xs py-1 px-2 bg-[var(--elevated)] text-[var(--text-dim)] border border-[var(--border-bright)] rounded-md cursor-pointer hover:text-white"
                    >
                        <option value="ops_lead">Ops Lead</option>
                        <option value="support_specialist">Support Rep</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
        </header>
    );
};
