'use client';

import React from 'react';
import { LandingHero } from '../components/landing/LandingHero';
import { LandingFeatures } from '../components/landing/LandingFeatures';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
            <nav className="h-16 border-b border-[var(--border)] px-6 flex items-center justify-between">
                <div className="font-display font-extrabold text-lg text-white">
                    STUCK<span className="text-[var(--cyan)]">ALERT</span>
                </div>
                <Link href="/dashboard" className="btn-primary text-xs py-2 px-4">
                    Enter Dashboard
                </Link>
            </nav>
            <main>
                <LandingHero onEnterApp={() => { }} />
                <LandingFeatures />
            </main>
            <footer className="py-8 text-center text-xs text-[var(--text-dimmer)] border-t border-[var(--border)]">
                StuckAlert SaaS © 2026. Automated Delivery Monitoring & Retention Platform.
            </footer>
        </div>
    );
}
