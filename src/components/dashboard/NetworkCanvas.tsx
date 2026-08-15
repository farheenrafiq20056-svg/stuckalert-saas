'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    color: string;
    rgb: string;
    pulse: number;
    pulseSpeed: number;
    type: 'normal' | 'risk' | 'critical' | 'delivered' | 'hub';
}

const COLOR_MAP: Record<string, string> = {
    '#00d4ff': '0,212,255',
    '#f59e0b': '245,158,11',
    '#ef4444': '239,68,68',
    '#10b981': '16,185,129',
    '#7c5af6': '124,90,246',
};

export const NetworkCanvas: React.FC<{ className?: string; nodeCount?: number }> = ({
    className = '',
    nodeCount = 55,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = 0;
        let H = 0;
        let raf = 0;

        const resize = () => {
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width = W * window.devicePixelRatio;
            canvas.height = H * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();

        const typePool: Node['type'][] = [
            'normal', 'normal', 'normal', 'normal', 'normal',
            'risk', 'risk', 'critical', 'delivered', 'hub',
        ];

        const colorOf = (t: Node['type']) => {
            switch (t) {
                case 'hub': return '#7c5af6';
                case 'risk': return '#f59e0b';
                case 'critical': return '#ef4444';
                case 'delivered': return '#10b981';
                default: return '#00d4ff';
            }
        };

        const nodes: Node[] = Array.from({ length: nodeCount }, () => {
            const type = typePool[Math.floor(Math.random() * typePool.length)];
            const color = colorOf(type);
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: type === 'hub' ? 4.5 : type === 'normal' ? 1.8 + Math.random() * 1.2 : 2.5 + Math.random() * 1.5,
                color,
                rgb: COLOR_MAP[color] || '0,212,255',
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.018 + Math.random() * 0.025,
                type,
            };
        });

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    const maxD = nodes[i].type === 'hub' || nodes[j].type === 'hub' ? 160 : 110;
                    if (d < maxD) {
                        const alpha = (1 - d / maxD) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach((n) => {
                n.pulse += n.pulseSpeed;
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;

                if (n.type !== 'normal' && n.type !== 'delivered') {
                    const pr = (Math.sin(n.pulse) * 0.5 + 0.5) * 18;
                    const pa = (1 - pr / 18) * 0.25;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.r + pr, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${n.rgb},${pa})`;
                    ctx.fill();
                }

                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
                g.addColorStop(0, `rgba(${n.rgb},0.35)`);
                g.addColorStop(1, `rgba(${n.rgb},0)`);
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = n.color;
                ctx.fill();
            });

            raf = requestAnimationFrame(draw);
        };

        draw();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, [nodeCount]);

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%', display: 'block' }} />;
};
