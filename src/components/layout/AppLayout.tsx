'use client';

import React, { useState, useEffect } from 'react';
import { AuthProvider, AuthGuard } from '../security/AuthGuard';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { CommandPalette } from './CommandPalette';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [cmdOpen, setCmdOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCmdOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AuthProvider>
            <AuthGuard>
                <div className="flex h-screen bg-[var(--bg)] overflow-hidden text-[var(--text)]">
                    <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
                    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                        <TopNav onOpenCommandPalette={() => setCmdOpen(true)} />
                        <main className="flex-1 overflow-y-auto p-6">{children}</main>
                    </div>
                    <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
                </div>
            </AuthGuard>
        </AuthProvider>
    );
};
