/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface SearchDocumentsInvoice {
  /**
   * Unique Invoice Reference id of the invoice for downloading the zip file containing PDF and proofing elements.
   * Example: 123456
   */
  documentReference?: number;
  /**
   * Payment customer number.
   * Example: GB000000123
   */
  invoiceNumber?: string | null;
  /** Customer payer name */
  payerName?: string | null;
  /**
   * Account Number
   * Example: GB99215176
   */
  accountNumber?: string | null;
  /** Invoice account name */
  accountName?: string | null;
  /**
   * Document type
   * String containing one of the following values:
   * •    NAT (National)
   * •    INT (International)
   * •    SOA (Statement of Account)
   */
  documentType?: string | null;
  /** Included tax amount in the invoice */
  grossAmount?: number | null;
  netAmount?: number | null;
  taxAmount?: number | null;
  currencyCode?: string | null;
  invoiceStatus?: string | null;
  invoiceDate?: string | null;
  dueDate?: string | null;
  vATCountryISOCode?: string | null;
}

export const searchDocumentsInvoiceSchema: Schema<SearchDocumentsInvoice> = object(
  {
    documentReference: ['DocumentReference', optional(number())],
    invoiceNumber: ['InvoiceNumber', optional(nullable(string()))],
    payerName: ['PayerName', optional(nullable(string()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountName: ['AccountName', optional(nullable(string()))],
    documentType: ['DocumentType', optional(nullable(string()))],
    grossAmount: ['GrossAmount', optional(nullable(number()))],
    netAmount: ['NetAmount', optional(nullable(number()))],
    taxAmount: ['TaxAmount', optional(nullable(number()))],
    currencyCode: ['CurrencyCode', optional(nullable(string()))],
    invoiceStatus: ['InvoiceStatus', optional(nullable(string()))],
    invoiceDate: ['InvoiceDate', optional(nullable(string()))],
    dueDate: ['DueDate', optional(nullable(string()))],
    vATCountryISOCode: ['VATCountryISOCode', optional(nullable(string()))],
  }
);
