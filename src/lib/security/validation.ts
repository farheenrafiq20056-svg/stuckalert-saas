import { z } from 'zod';

export const StoreConnectionSchema = z.object({
    organizationName: z.string().min(2, 'Organization name must be at least 2 characters').max(100),
    platform: z.enum(['shopify', 'woocommerce'], { required_error: 'Select platform' }),
    storeUrl: z.string().url('Invalid store URL format (must start with https://)'),
    apiKey: z.string().min(8, 'API Key must be at least 8 characters'),
});

export const CarrierKeySchema = z.object({
    carrier: z.enum(['fedex', 'dhl', 'trax', 'leopard', 'other']),
    apiKey: z.string().min(10, 'API key required'),
    apiSecret: z.string().optional(),
    pollingIntervalHours: z.number().min(1).max(24).default(3),
});

export const AddressReverificationSchema = z.object({
    orderNumber: z.string().min(3),
    customerPhone: z.string().min(8, 'Valid phone number required'),
    newAddress: z.string().min(10, 'Please enter a complete delivery address').max(300),
    landmarkNotes: z.string().max(200).optional(),
});

export const AutomationRuleSchema = z.object({
    ruleName: z.string().min(3).max(80),
    triggerStatus: z.enum(['NO_SCAN_48H', 'FAILED_ATTEMPT', 'CARRIER_DELAY', 'ADDRESS_ISSUE']),
    delayHours: z.number().min(0).max(168),
    action: z.enum(['WHATSAPP_VERIFICATION', 'SLACK_ALERT', 'TELEGRAM_ALERT', 'RTO_FLAG']),
    enabled: z.boolean().default(true),
});

export type StoreConnectionInput = z.infer<typeof StoreConnectionSchema>;
export type CarrierKeyInput = z.infer<typeof CarrierKeySchema>;
export type AddressReverificationInput = z.infer<typeof AddressReverificationSchema>;
export type AutomationRuleInput = z.infer<typeof AutomationRuleSchema>;
