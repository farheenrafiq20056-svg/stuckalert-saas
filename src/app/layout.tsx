import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'StuckAlert | E-Commerce Delivery Intelligence & Proactive Retention',
    description:
        'Automated delivery exception monitoring, courier tracking normalization, and proactive customer retention workflows.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
