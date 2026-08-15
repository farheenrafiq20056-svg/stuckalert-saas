'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, AlertTriangle, Cpu, Radio, Share2, BarChart2, Settings, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

const NAV_ITEMS = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/shipments', label: 'Shipments', icon: Package, badge: 286, badgeColor: 'amber' },
    { href: '/exceptions', label: 'Exceptions', icon: AlertTriangle, badge: 74, badgeColor: 'red' },
    { href: '/ndr', label: 'NDR Action', icon: HelpCircle, badge: 7, badgeColor: 'violet' },
    { href: '/automation', label: 'Automation', icon: Cpu },
    { href: '/carriers', label: 'Carriers', icon: Radio },
    { href: '/integrations', label: 'Integrations', icon: Share2 },
    { href: '/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
    const pathname = usePathname();

    return (
        <aside
            className={`h-screen bg-[var(--surface)] border-r border-[var(--border)] flex flex-col transition-all duration-200 z-20 relative select-none ${collapsed ? 'w-[64px]' : 'w-[224px]'
                }`}
        >
            {/* Brand Header */}
            <div className="p-4 border-b border-[var(--border)] flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-[var(--cyan)]">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <rect x="5" y="9" width="20" height="16" rx="2" stroke="#00d4ff" strokeWidth="1.5" />
                        <line x1="5" y1="17" x2="25" y2="17" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.5" />
                        <path d="M11 7 Q15 3 19 7" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
                        <circle cx="22" cy="8" r="3" fill="#f59e0b" />
                    </svg>
                </div>
                {!collapsed && (
                    <div>
                        <div className="font-display font-extrabold text-base text-white tracking-tight leading-none">
                            STUCK<span className="text-[var(--cyan)]">ALERT</span>
                        </div>
                        <div className="text-[9px] font-mono text-[var(--text-dimmer)] tracking-wider mt-0.5">
                            DELIVERY INTELLIGENCE
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-3 px-2 overflow-y-auto space-y-1">
                {NAV_ITEMS.map((item) => {
                    const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${active
                                    ? 'bg-[var(--cyan-dim)] text-[var(--cyan)] border-l-2 border-[var(--cyan)]'
                                    : 'text-[var(--text-dim)] hover:bg-white/[0.04] hover:text-white'
                                }`}
                        >
                            <Icon size={18} className="flex-shrink-0" />
                            {!collapsed && (
                                <div className="flex items-center justify-between w-full">
                                    <span>{item.label}</span>
                                    {item.badge && (
                                        <span
                                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${item.badgeColor === 'red'
                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                    : item.badgeColor === 'violet'
                                                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                                }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* System Status & Toggle */}
            <div className="p-3 border-t border-[var(--border)] flex-shrink-0">
                {!collapsed && (
                    <div className="mb-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2">
                            <span className="live-dot" />
                            <span className="text-[11px] font-mono font-bold text-emerald-400">SYSTEM LIVE</span>
                        </div>
                        <p className="text-[10px] text-[var(--text-dimmer)] mt-1">12,842 shipments monitored</p>
                    </div>
                )}
                <button
                    onClick={onToggle}
                    className="w-full py-1.5 px-2 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:bg-[var(--elevated)] hover:text-white text-xs flex items-center justify-center gap-2 transition"
                >
                    {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /> <span>Collapse</span></>}
                </button>
            </div>
        </aside>
    );
};
