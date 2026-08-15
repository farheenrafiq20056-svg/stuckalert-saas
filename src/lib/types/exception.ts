import { NormalizedStatus } from './shipment';

export type ExceptionCategory =
    | 'NO_SCAN_48H'
    | 'FAILED_ATTEMPT'
    | 'ADDRESS_ISSUE'
    | 'WEATHER_DELAY'
    | 'CARRIER_SLA_RISK'
    | 'RTO_HIGH_RISK';

export interface AttentionItem {
    id: string;
    title: string;
    category: ExceptionCategory;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO';
    affectedCount: number;
    estimatedImpact: string;
    recommendedAction: string;
    ctaText: string;
    ctaActionUrl?: string;
    normalizedStatus: NormalizedStatus;
}
