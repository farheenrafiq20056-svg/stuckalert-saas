/**
 * StuckAlert PRD 4.1 Normalized Shipment Status Schema
 */
export type NormalizedStatus =
    | 'LABEL_CREATED'
    | 'IN_TRANSIT'
    | 'DELIVERY_EXCEPTION'
    | 'OUT_FOR_DELIVERY'
    | 'FAILED_ATTEMPT'
    | 'DELIVERED';

export type CarrierName = 'fedex' | 'dhl' | 'trax' | 'leopard' | 'tcs';

export interface TrackingLog {
    id: string;
    rawStatus: string;
    normalizedStatus: NormalizedStatus;
    location: string;
    timestamp: string;
}

export interface Shipment {
    id: string;
    orderNumber: string;
    customerName: string;
    customerPhone?: string;
    customerEmail?: string;
    carrier: CarrierName;
    trackingNumber: string;
    currentStatus: NormalizedStatus;
    isException: boolean;
    exceptionReason?: string;
    transitDays: number;
    lastScan: string;
    destination: string;
    riskScore: number; // 0 to 100
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    estimatedExposure?: number; // USD / RTO risk exposure
    trackingLogs: TrackingLog[];
}
