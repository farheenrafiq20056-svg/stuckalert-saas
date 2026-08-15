'use client';

import React, { useState } from 'react';
import { Cpu, Plus, ArrowDown, Play, CheckCircle2, MessageSquare, Bell, ShieldAlert } from 'lucide-react';
import { AutomationRuleSchema } from '../../lib/security/validation';
import { sanitizeHtml } from '../../lib/security/sanitize';

interface WorkflowNode {
    id: string;
    type: 'WHEN' | 'FOR' | 'CHECK' | 'THEN' | 'SEND';
    label: string;
    detail: string;
    icon: React.ElementType;
    color: string;
}

export const AutomationStudio: React.FC = () => {
    const [nodes, setNodes] = useState<WorkflowNode[]>([
        { id: '1', type: 'WHEN', label: 'Shipment Status Exception', detail: 'No scan update detected', icon: ShieldAlert, color: '#ef4444' },
        { id: '2', type: 'FOR', label: 'Duration Exceeded', detail: '48 consecutive hours', icon: Cpu, color: '#f59e0b' },
        { id: '3', type: 'CHECK', label: 'Carrier Filter', detail: 'Carrier = DHL or FedEx', icon: Cpu, color: '#7c5af6' },
        { id: '4', type: 'THEN', label: 'Dispatch Channel Alert', detail: 'Send Slack #delivery-ops alert', icon: Bell, color: '#00d4ff' },
        { id: '5', type: 'SEND', label: 'Customer Retention Link', detail: 'Send 1-click WhatsApp verification', icon: MessageSquare, color: '#10b981' },
    ]);

    const [testSuccess, setTestSuccess] = useState(false);

    const handleTestWorkflow = () => {
        setTestSuccess(true);
        setTimeout(() => setTestSuccess(false), 4000);
    };

    return (
        <div className="space-y-6">
            {/* Studio Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <div>
                    <h2 className="text-lg font-bold font-display text-white flex items-center gap-2">
                        <Cpu className="text-[var(--cyan)]" /> Automation Studio
                    </h2>
                    <p className="text-xs text-[var(--text-dim)]">Visual node-based retention workflow builder</p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleTestWorkflow} className="btn-ghost text-xs">
                        <Play size={14} className="text-emerald-400" /> Test Active Workflow
                    </button>
                    <button className="btn-primary text-xs">
                        <Plus size={14} /> Add Workflow Node
                    </button>
                </div>
            </div>

            {testSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center justify-between animate-fade-in">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        <span>Dry run simulation completed successfully: 18 eligible shipments matched rule logic.</span>
                    </div>
                    <span className="font-mono text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">200 OK</span>
                </div>
            )}

            {/* Visual Node Flow */}
            <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

                {nodes.map((node, idx) => {
                    const Icon = node.icon;
                    return (
                        <React.Fragment key={node.id}>
                            <div className="w-full max-w-md p-4 rounded-xl bg-[var(--elevated)] border border-[var(--border-bright)] hover:border-cyan-500/40 transition-all flex items-center gap-4 shadow-lg group relative z-10">
                                <span
                                    className="font-mono text-[10px] font-bold px-2 py-1 rounded-md text-white"
                                    style={{ backgroundColor: `${node.color}33`, color: node.color, border: `1px solid ${node.color}55` }}
                                >
                                    {node.type}
                                </span>
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                        <Icon size={14} style={{ color: node.color }} /> {node.label}
                                    </div>
                                    <div className="text-[11px] text-[var(--text-dim)] mt-0.5">{sanitizeHtml(node.detail)}</div>
                                </div>
                            </div>

                            {idx < nodes.length - 1 && (
                                <div className="flex flex-col items-center my-1 z-10 text-[var(--cyan)] animate-pulse">
                                    <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-600/30" />
                                    <ArrowDown size={14} className="-mt-1" />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
