/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface InvoiceDatesData {
  /** List of Invoice numbers. */
  invoiceNumbers?: string[];
  /**
   * List of Invoicing dates.
   * Format: yyyyMMdd
   */
  invoiceDates?: string[];
}

export const invoiceDatesDataSchema: Schema<InvoiceDatesData> = object({
  invoiceNumbers: ['InvoiceNumbers', optional(array(string()))],
  invoiceDates: ['InvoiceDates', optional(array(string()))],
});
