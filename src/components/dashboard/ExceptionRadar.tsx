'use client';

import React, { useState } from 'react';

interface RadarItem {
    label: string;
    count: number;
    severity: 'critical' | 'warning' | 'moderate';
    angle: number;
    distance: number;
}

const ITEMS: RadarItem[] = [
    { label: 'No Scan 48h+', count: 18, severity: 'critical', angle: -90, distance: 0.3 },
    { label: 'Failed Attempt', count: 12, severity: 'critical', angle: -20, distance: 0.35 },
    { label: 'Address Issue', count: 7, severity: 'warning', angle: 40, distance: 0.55 },
    { label: 'Carrier SLA', count: 22, severity: 'warning', angle: 95, distance: 0.6 },
    { label: 'Weather Delay', count: 9, severity: 'moderate', angle: 150, distance: 0.72 },
    { label: 'RTO Risk', count: 3, severity: 'critical', angle: -145, distance: 0.28 },
];

const COLOR = { critical: '#ef4444', warning: '#f59e0b', moderate: '#7c5af6' };
const DIM = { critical: 'rgba(239,68,68,0.12)', warning: 'rgba(245,158,11,0.12)', moderate: 'rgba(124,90,246,0.12)' };

export const ExceptionRadar: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const cx = 160;
    const cy = 160;
    const maxR = 130;

    return (
        <div className="relative w-[320px] h-[320px] flex-shrink-0">
            <svg width={320} height={320} viewBox="0 0 320 320">
                {[0.25, 0.5, 0.75, 1].map((r, i) => (
                    <circle key={i} cx={cx} cy={cy} r={maxR * r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
                ))}
                {[0, 30, 60, 90, 120, 150].map((a, i) => {
                    const rad = (a * Math.PI) / 180;
                    return (
                        <line
                            key={i}
                            x1={cx}
                            y1={cy}
                            x2={cx + Math.cos(rad) * maxR}
                            y2={cy + Math.sin(rad) * maxR}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth={1}
                        />
                    );
                })}

                <defs>
                    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(0,212,255,0.15)" />
                        <stop offset="100%" stopColor="rgba(0,212,255,0)" />
                    </radialGradient>
                </defs>
                <circle cx={cx} cy={cy} r={36} fill="url(#center-glow)" />
                <circle cx={cx} cy={cy} r={24} fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.2)" strokeWidth={1} />

                {ITEMS.map((item) => {
                    const rad = (item.angle * Math.PI) / 180;
                    const d = item.distance * maxR;
                    const nx = cx + Math.cos(rad) * d;
                    const ny = cy + Math.sin(rad) * d;
                    const c = COLOR[item.severity];
                    const dim = DIM[item.severity];
                    const isHov = hovered === item.label;
                    const size = 6 + (1 - item.distance) * 12;

                    return (
                        <g key={item.label}>
                            <line
                                x1={cx}
                                y1={cy}
                                x2={nx}
                                y2={ny}
                                stroke={c}
                                strokeOpacity={isHov ? 0.4 : 0.15}
                                strokeWidth={isHov ? 1.5 : 1}
                                strokeDasharray="3 4"
                            />
                            <circle cx={nx} cy={ny} r={size * 2.2} fill={dim} className="animate-pulse" />
                            <circle
                                cx={nx}
                                cy={ny}
                                r={size}
                                fill={c}
                                fillOpacity={isHov ? 0.9 : 0.7}
                                stroke={c}
                                strokeWidth={isHov ? 2 : 1}
                                className="cursor-pointer transition-all"
                                onMouseEnter={() => setHovered(item.label)}
                                onMouseLeave={() => setHovered(null)}
                            />
                            <text
                                x={nx}
                                y={ny + 0.5}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={size > 8 ? 9 : 7}
                                fontWeight={600}
                                fill="#fff"
                                fontFamily="JetBrains Mono, monospace"
                                className="pointer-events-none"
                            >
                                {item.count}
                            </text>
                        </g>
                    );
                })}

                <text x={cx} y={cy - 5} textAnchor="middle" fontSize={9} fontWeight={600} fill="rgba(0,212,255,0.8)" fontFamily="JetBrains Mono, monospace" letterSpacing={1}>
                    HEALTH
                </text>
                <text x={cx} y={cy + 8} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff" fontFamily="Manrope, sans-serif">
                    74%
                </text>
            </svg>

            {hovered && (() => {
                const item = ITEMS.find((i) => i.label === hovered)!;
                return (
                    <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[var(--elevated2)] border rounded-lg px-3 py-1.5 whitespace-nowrap pointer-events-none"
                        style={{ borderColor: `${COLOR[item.severity]}44` }}
                    >
                        <div className="text-[11px] font-bold font-mono" style={{ color: COLOR[item.severity] }}>
                            {item.label}
                        </div>
                        <div className="text-xs font-bold text-white">{item.count} shipments</div>
                    </div>
                );
            })()}
        </div>
    );
};
