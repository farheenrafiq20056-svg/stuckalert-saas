'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Radio,
    Lock,
    Shield,
    User,
    Truck,
    Mail,
    Eye,
    EyeOff,
    Sun,
    Play,
    CheckCircle2,
    ShoppingBag,
    Activity
} from 'lucide-react';
import { NetworkCanvas } from '../dashboard/NetworkCanvas';

export const LandingHero: React.FC<{ onEnterApp?: () => void }> = () => {
    const router = useRouter();
    const [selectedProfile, setSelectedProfile] = useState<'ops' | 'founder' | 'dispatch'>('ops');
    const [email, setEmail] = useState('farheen.ops@stuckalert.io');
    const [password, setPassword] = useState('••••••••••••');
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<'signin' | 'register' | 'shopify'>('signin');
    const [rememberSession, setRememberSession] = useState(true);

    const handleProfileSelect = (profile: 'ops' | 'founder' | 'dispatch') => {
        setSelectedProfile(profile);
        if (profile === 'ops') {
            setEmail('farheen.ops@stuckalert.io');
        } else if (profile === 'founder') {
            setEmail('founder@luxedtc.com');
        } else {
            setEmail('dispatch@fasttrack.logistics');
        }
        setPassword('••••••••••••');
    };

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');
    };

    return (
        <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden flex flex-col justify-between">
            {/* Background 3D Network Canvas */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <NetworkCanvas nodeCount={50} />
            </div>

            {/* TOP NAVIGATION BAR */}
            <header className="relative z-20 border-b border-[var(--border)] bg-[#07080d]/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
                {/* Logo & Version Badge */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                            <Radio size={19} className="animate-pulse" />
                        </div>
                        <div>
                            <div className="font-display font-black text-lg tracking-tight text-white leading-none">
                                STUCK <span className="text-[var(--cyan)]">ALERT</span>
                            </div>
                            <div className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider mt-0.5">
                                Delivery Radar
                            </div>
                        </div>
                    </Link>

                    <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-cyan-300 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-[11px] font-semibold tracking-wide">AIR-TRAFFIC RADAR v2.4</span>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[var(--text-dim)]">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#radar" className="hover:text-white transition-colors">Live Radar</a>
                    <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
                    <a href="#carriers" className="hover:text-white transition-colors">Supported Carriers</a>
                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </nav>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-bright)] bg-white/5 text-xs text-[var(--text)] hover:bg-white/10 transition-all">
                        <Sun size={13} className="text-amber-400" />
                        <span>Light Theme</span>
                    </button>
                    <Link
                        href="/dashboard"
                        className="btn-primary text-xs py-2 px-4 rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)] font-semibold"
                    >
                        <Play size={12} className="fill-current" />
                        <span>Launch Live Demo</span>
                    </Link>
                </div>
            </header>

            {/* HERO CONTENT AREA */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">

                {/* LEFT COLUMN - Hero Text & Stats */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
                        <Activity size={14} className="text-cyan-400 animate-pulse" />
                        <span className="font-semibold tracking-wide">Real-Time E-Commerce Delivery Intelligence</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.12]">
                        Air-traffic control for <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
                            e-commerce deliveries.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-[var(--text-dim)] max-w-xl mt-6 leading-relaxed">
                        Connect your store in 2 minutes. Monitor every carrier, detect stuck packages before customers complain, and rescue failed deliveries with automated WhatsApp verification.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--border)] w-full max-w-xl">
                        <div>
                            <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">94.8%</div>
                            <div className="text-xs text-[var(--text-dim)] font-medium mt-1">SLA Recovery</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">-42%</div>
                            <div className="text-xs text-[var(--text-dim)] font-medium mt-1">WISMO Inquiries</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-400">&lt; 48h</div>
                            <div className="text-xs text-[var(--text-dim)] font-medium mt-1">Blackout Alert</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Operations Portal Card */}
                <div className="lg:col-span-5 w-full">
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#0d0f18]/90 border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,212,255,0.1)] relative">

                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                                    <Lock size={18} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-display text-white">Operations Portal</h3>
                                    <p className="text-xs text-[var(--text-dim)]">Sign in or launch an instant demo terminal</p>
                                </div>
                            </div>
                            <div className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                                SECURE 256-BIT
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#121520] border border-[var(--border)] mb-6 text-xs font-semibold text-center">
                            <button
                                onClick={() => setActiveTab('signin')}
                                className={`py-2 rounded-lg transition-all ${activeTab === 'signin' ? 'bg-[#181d2b] text-white shadow' : 'text-[var(--text-dim)] hover:text-white'}`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setActiveTab('register')}
                                className={`py-2 rounded-lg transition-all ${activeTab === 'register' ? 'bg-[#181d2b] text-white shadow' : 'text-[var(--text-dim)] hover:text-white'}`}
                            >
                                Register
                            </button>
                            <button
                                onClick={() => setActiveTab('shopify')}
                                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === 'shopify' ? 'bg-[#181d2b] text-emerald-400 shadow' : 'text-[var(--text-dim)] hover:text-white'}`}
                            >
                                <ShoppingBag size={13} className="text-emerald-400" />
                                <span>Shopify</span>
                            </button>
                        </div>

                        {/* 1-Click Demo Profiles */}
                        <div className="mb-5">
                            <div className="flex items-center justify-between text-[11px] font-mono font-semibold mb-2.5">
                                <span className="text-[var(--text-dim)] tracking-wider">1-CLICK DEMO PROFILES</span>
                                <span className="text-cyan-400">Auto-fills credentials</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5">
                                {/* Profile 1: Ops VP */}
                                <button
                                    type="button"
                                    onClick={() => handleProfileSelect('ops')}
                                    className={`p-3 rounded-xl border text-left transition-all ${selectedProfile === 'ops'
                                            ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                                            : 'bg-[#121520] border-[var(--border)] hover:border-cyan-500/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                                        <Shield size={14} />
                                        <span className="text-xs font-bold font-display text-white">Ops VP</span>
                                    </div>
                                    <div className="text-[10px] text-[var(--text-dim)] font-mono">Apex Global</div>
                                </button>

                                {/* Profile 2: Founder */}
                                <button
                                    type="button"
                                    onClick={() => handleProfileSelect('founder')}
                                    className={`p-3 rounded-xl border text-left transition-all ${selectedProfile === 'founder'
                                            ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_15px_rgba(124,90,246,0.15)]'
                                            : 'bg-[#121520] border-[var(--border)] hover:border-purple-500/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                                        <User size={14} />
                                        <span className="text-xs font-bold font-display text-white">Founder</span>
                                    </div>
                                    <div className="text-[10px] text-[var(--text-dim)] font-mono">Luxe DTC</div>
                                </button>

                                {/* Profile 3: Dispatch */}
                                <button
                                    type="button"
                                    onClick={() => handleProfileSelect('dispatch')}
                                    className={`p-3 rounded-xl border text-left transition-all ${selectedProfile === 'dispatch'
                                            ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                                            : 'bg-[#121520] border-[var(--border)] hover:border-amber-500/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                                        <Truck size={14} />
                                        <span className="text-xs font-bold font-display text-white">Dispatch</span>
                                    </div>
                                    <div className="text-[10px] text-[var(--text-dim)] font-mono">FastTrack</div>
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSignIn} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-[var(--text-dim)] mb-1.5">Work Email</label>
                                <div className="relative">
                                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dimmer)]" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-9 pr-4 py-2.5 bg-[#121520] border border-[var(--border-bright)] rounded-xl text-xs font-mono text-white focus:border-cyan-500 focus:outline-none transition-colors"
                                        placeholder="user@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="block text-xs font-semibold text-[var(--text-dim)]">Password</label>
                                    <a href="#" className="text-[11px] text-cyan-400 hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dimmer)]" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-9 pr-10 py-2.5 bg-[#121520] border border-[var(--border-bright)] rounded-xl text-xs font-mono text-white focus:border-cyan-500 focus:outline-none transition-colors"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dimmer)] hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            {/* Sign In CTA Button */}
                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#07080d] font-bold text-xs font-display tracking-wide uppercase shadow-[0_0_25px_rgba(0,212,255,0.3)] transition-all transform hover:-translate-y-0.5 mt-2"
                            >
                                Sign In to Operations Portal
                            </button>

                            {/* Footer Options */}
                            <div className="flex items-center justify-between text-xs pt-1">
                                <label className="flex items-center gap-2 cursor-pointer text-[var(--text-dim)] select-none">
                                    <input
                                        type="checkbox"
                                        checked={rememberSession}
                                        onChange={(e) => setRememberSession(e.target.checked)}
                                        className="rounded border-[var(--border-bright)] bg-[#121520] text-cyan-500 focus:ring-0"
                                    />
                                    <span>Remember terminal session</span>
                                </label>
                                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <span>TLS Verified</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer text */}
            <footer className="relative z-10 py-4 text-center text-xs text-[var(--text-dimmer)] border-t border-[var(--border)] bg-[#07080d]/60 backdrop-blur-sm">
                StuckAlert SaaS © 2026. Automated Delivery Monitoring & Retention Platform.
            </footer>
        </div>
    );
};
