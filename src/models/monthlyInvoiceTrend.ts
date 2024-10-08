/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface MonthlyInvoiceTrend {
  /**
   * ISO code of invoice currency.
   * Example: EUR
   */
  currencyCode?: string | null;
  /**
   * Symbol of invoice currency.
   * Example: €
   */
  currencySymbol?: string | null;
  /** Month. */
  month?: number | null;
  /** Total net amount invoiced in this month. */
  totalNetAmount?: number | null;
  /** Total VAT amount invoiced in this month. */
  totalVATAmount?: number | null;
  /** Year. */
  year?: number | null;
}

export const monthlyInvoiceTrendSchema: Schema<MonthlyInvoiceTrend> = object({
  currencyCode: ['CurrencyCode', optional(nullable(string()))],
  currencySymbol: ['CurrencySymbol', optional(nullable(string()))],
  month: ['Month', optional(nullable(number()))],
  totalNetAmount: ['TotalNetAmount', optional(nullable(number()))],
  totalVATAmount: ['TotalVATAmount', optional(nullable(number()))],
  year: ['Year', optional(nullable(number()))],
});
