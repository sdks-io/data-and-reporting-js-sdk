/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema } from '../schema';

export interface FeeRuleTier {
  /** Minimum consumption configured in the tier. */
  tierMinimum?: number | null;
  /** Bonus value for the tier. */
  value?: number | null;
  /** Maximum consumption configured in the tier. */
  tierMaximum?: number | null;
}

export const feeRuleTierSchema: Schema<FeeRuleTier> = object({
  tierMinimum: ['TierMinimum', optional(nullable(number()))],
  value: ['Value', optional(nullable(number()))],
  tierMaximum: ['TierMaximum', optional(nullable(number()))],
});
