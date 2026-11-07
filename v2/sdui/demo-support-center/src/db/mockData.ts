/**
 * @file mockData.ts
 * @description Strongly-typed in-memory account data engine.
 * Captures explicit database records simulating specific system failures.
 */

// ============================================================================
// 1. Interface Schemas & Type Definitions
// ============================================================================

/**
 * Defines the foundational profile architecture for an active system user.
 */
export interface UserAccount {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  accountStatus: 'active' | 'suspended' | 'past_due';
}

/**
 * Defines the financial and payment gateway status bound to a user profile.
 */
export interface BillingProfile {
  userId: string;
  cardBrand: string;
  cardLast4: string;
  expiryStatus: 'valid' | 'expired';
  outstandingBalance: number;
}

// ============================================================================
// 2. Simulated In-Memory Database Stores
// ============================================================================

/**
 * Primary user account table index.
 * Contains target record usr_992 locked into a past_due operational loop.
 */
export const mockUsersAccounts: Record<string, UserAccount> = {
  "usr_992": {
    id: "usr_992",
    name: "Sam Troublesome",
    email: "sam@error-logs.com",
    plan: "enterprise",
    accountStatus: "past_due" // Triggers the support block
  }
};

/**
 * Connected payment credentials data table index.
 * Explicitly sets the expiryStatus to 'expired' to act as the agent's failure target.
 */
export const mockBillingProfiles: Record<string, BillingProfile> = {
  "usr_992": {
    userId: "usr_992",
    cardBrand: "MasterCard",
    cardLast4: "9981",
    expiryStatus: "expired",    // The root cause of the billing failure loop
    outstandingBalance: 150.00
  }
};

// ============================================================================
// 3. Programmatic Data Lookup Helper API (with Explanatory Logging)
// ============================================================================

/**
 * Simulates a secure transactional database lookup for an account profile.
 * @param userId - The target user tracking identifier string.
 * @returns The UserAccount entity or undefined if no record exists.
 */
export function queryUserAccount(userId: string): UserAccount | undefined {
  console.log(`[DB_LOG] 🔍 Querying mockUsersAccounts table for ID: "${userId}"`);
  
  const record = mockUsersAccounts[userId];
  
  if (record) {
    console.log(`[DB_LOG] ✅ Found user record: ${JSON.stringify(record)}`);
  } else {
    console.warn(`[DB_LOG] ❌ No user record found for identifier: "${userId}"`);
  }
  
  return record;
}

/**
 * Simulates a secure transactional database lookup for associated payment tokens.
 * @param userId - The target user tracking identifier string.
 * @returns The BillingProfile ledger or undefined if no record exists.
 */
export function queryBillingProfile(userId: string): BillingProfile | undefined {
  console.log(`[DB_LOG] 🔍 Querying mockBillingProfiles table for user ID: "${userId}"`);
  
  const record = mockBillingProfiles[userId];
  
  if (record) {
    console.log(`[DB_LOG] ✅ Found billing profile: ${JSON.stringify(record)}`);
  } else {
    console.warn(`[DB_LOG] ❌ No billing profile found for user identifier: "${userId}"`);
  }
  
  return record;
}
