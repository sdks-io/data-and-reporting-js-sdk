/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** Invoice document reference number for the additional invoice files such as KSeF file (Poland). This field is optional, and it will be missing if additional documents are not applicable. Also, it will not be populated if the invoice date is older than 13 months. */
export interface InvoiceSearchAdditionalDocument {
  /** Unique ID for the additional invoice document. */
  reference?: string | null;
  /**
   * Type of the additional document.
   * Mandatory
   * Possible values:
   * •    KSeF - Applicable for Poland market.
   */
  type?: string | null;
  /** True if a KSeF PDF will be produced for the customer. */
  isApplicable?: string | null;
}

export const invoiceSearchAdditionalDocumentSchema: Schema<InvoiceSearchAdditionalDocument> = object(
  {
    reference: ['Reference', optional(nullable(string()))],
    type: ['Type', optional(nullable(string()))],
    isApplicable: ['IsApplicable', optional(nullable(string()))],
  }
);
