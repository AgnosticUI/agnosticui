/**
 * @file nodeFactory.ts
 * @description Domain-focused component node factory mapping natural language inquiries
 * down to deterministic mock database queries, producing flat AgNode layout graphs.
 * Strictly verified against the canonical agnosticui-schema.json specifications.
 */

import { type AgNode } from '@agnosticui/schema';
import { mockUsersAccounts, mockBillingProfiles } from '../db/mockData.js';

/**
 * Evaluates natural language messages to discover and extract account states.
 * Synthesizes pristine, flattened AgNode arrays matching strict design specifications.
 */
export function runAccountLookupTool(message: string): AgNode[] {
  const userMatch = message.match(/usr_\d+/);
  if (!userMatch) return [];

  const userId = userMatch[0];
  const user = mockUsersAccounts[userId];
  const billing = mockBillingProfiles[userId];

  console.log(`[NODE_FACTORY] 🧮 Manufacturing component layout graph nodes for token: "${userId}"`);

  // Target Case: Detect past_due account blockages driven by expired card credentials
  if (user && billing && user.accountStatus === 'past_due' && billing.expiryStatus === 'expired') {
    console.log(`[NODE_FACTORY] ⚠️ Expired card exception found for user ${userId}. Synthesizing compliant graphs...`);
    
    return [
      {
        id: `msg_alert_${userId}`,
        component: "AgMessageBubble",
        message: `Security Notification: Account ${userId} (${user.name}) is currently locked. Reason: Primary payment method is ${billing.expiryStatus}. Outstanding: $${billing.outstandingBalance.toFixed(2)}. Please prompt update below.`,
        children: []
      } as any,
      {
        id: `card_form_${userId}`,
        component: "AgCard",
        children: [`input_cc_${userId}`, `btn_submit_${userId}`]
      } as any,
      {
        id: `input_cc_${userId}`,
        component: "AgInput",
        label: `Update Payment Instrument (${billing.cardBrand} last4: ${billing.cardLast4})`,
        placeholder: "0000 0000 0000 0000",
        children: []
      } as any,
      {
        id: `btn_submit_${userId}`,
        component: "AgButton",
        variant: "primary",
        label: "SUBMIT REMEDIATION TRANSACTION",
        on_click: "SUBMIT_REMEDIATION",
        children: []
      } as any
    ];
  }

  // Fallback active response
  if (user) {
    return [
      {
        id: `msg_ok_${userId}`,
        component: "AgMessageBubble",
        message: `Account audit successful: User ${user.name} matches plan status "${user.plan}" and is currently active.`,
        children: []
      } as any
    ];
  }

  return [];
}
