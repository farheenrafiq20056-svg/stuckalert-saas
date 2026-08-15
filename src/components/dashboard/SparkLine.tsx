'use client';

import React from 'react';

interface SparkLineProps {
    data: number[];
    color?: string;
    height?: number;
    width?: number;
}

export const SparkLine: React.FC<SparkLineProps> = ({
    data,
    color = '#00d4ff',
    height = 32,
    width = 80,
}) => {
    if (!data || data.length < 2) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data
        .map((val, idx) => {
            const x = (idx / (data.length - 1)) * width;
            const y = height - ((val - min) / range) * (height - 6) - 3;
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <svg width={width} height={height} className="overflow-visible">
            <polyline fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" points={points} />
        </svg>
    );
};
