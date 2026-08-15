'use client';

import React from 'react';
import { LandingHero } from '../components/landing/LandingHero';
import { LandingFeatures } from '../components/landing/LandingFeatures';

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
            <main>
                <LandingHero />
                <LandingFeatures />
            </main>
        </div>
    );
}
