/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface SearchDocReq {
  /**
   * Payer Number of the selected payer.
   * Mandatory
   * Example: GB000000123
   */
  payerNumber: string | null;
  /**
   * Account Number of the customer.
   * Mandatory for customer users else optional.
   * This input is a search criterion, if given.
   * Example: GB000000123
   */
  accountNumber?: string | null;
  /**
   * Account Number of the customers.
   * optional.
   * This input is a search criterion, if given.
   * Example: [“GB00000123”, “GB00000225”]
   */
  accountNumberList?: string[];
  /**
   * Invoice number.
   * Optional if InvoiceNumberList is passed else Mandatory
   * This input is a search criterion, if given.
   * Example: 0123456789
   */
  invoiceNumber?: string | null;
  /**
   * List of Invoice number.
   * Optional if InvoiceNumber is passed else Mandatory
   * Example: [“0123456789”, “0123459799”]
   */
  invoiceNumberList?: string[];
  /**
   * The status of the invoices
   * Optional
   * One of the following values:
   * •    NEW
   * •    VIEWED
   * •    DOWNLOADED
   * •    RESTORED
   */
  invoiceStatus?: string | null;
  /**
   * Invoice Issuing Date Range/From
   * Optional
   * Format: yyyy/MM/dd
   */
  issuingDateFrom?: string | null;
  /**
   * Invoice Issuing Date Range/To
   * Optional
   * Format: yyyy/MM/dd
   */
  issuingDateTo?: string | null;
  /**
   * Invoice Due Date Range/From
   * Optional
   * Format: yyyy/MM/dd
   */
  dueDateFrom?: string | null;
  /**
   * Invoice Due Date Range/To
   * Optional
   * Format: yyyy/MM/dd
   */
  dueDateTo?: string | null;
  /**
   * Gross amount of the bill.
   * Optional
   */
  grossAmount?: string | null;
  /**
   * Criteria on the gross amount, for instance use GT when to retrieve the invoices for that gross amount is greater than the given amount on GrossAmount parameter above.
   * Optional
   * This parameter will be ignored if GrossAmount parameter is not set.
   * One of the following values:
   * •    LT (Less Than)
   * •    LE (Lesser or Equal)
   * •    EQ (equal)
   * •    GE (Greater or equal)
   * •    GT (Greater than)
   */
  grossAmountOperator?: string | null;
  /**
   * Document Type
   * Optional
   * One of the following values:
   * •    NAT (National)
   * •    INT (International)
   * •    SOA (Statement of Account)
   */
  documentType?: string | null;
  /** Two letter ISO country code. */
  vATIssuerCountry?: string | null;
  /**
   * Collecting Company Code of the selected payer.
   * Mandatory
   * Example:
   * 86-Philippines
   * 5-UK
   */
  sortyBy?: string[];
  /**
   * Collecting Company Code of the selected payer.
   * Mandatory
   * Example:
   * 86-Philippines
   * 5-UK
   */
  colCoCode: number | null;
}

export const searchDocReqSchema: Schema<SearchDocReq> = object({
  payerNumber: ['PayerNumber', nullable(string())],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  accountNumberList: ['AccountNumberList', optional(array(string()))],
  invoiceNumber: ['InvoiceNumber', optional(nullable(string()))],
  invoiceNumberList: ['InvoiceNumberList', optional(array(string()))],
  invoiceStatus: ['InvoiceStatus', optional(nullable(string()))],
  issuingDateFrom: ['IssuingDateFrom', optional(nullable(string()))],
  issuingDateTo: ['IssuingDateTo', optional(nullable(string()))],
  dueDateFrom: ['DueDateFrom', optional(nullable(string()))],
  dueDateTo: ['DueDateTo', optional(nullable(string()))],
  grossAmount: ['GrossAmount', optional(nullable(string()))],
  grossAmountOperator: ['GrossAmountOperator', optional(nullable(string()))],
  documentType: ['DocumentType', optional(nullable(string()))],
  vATIssuerCountry: ['VATIssuerCountry', optional(nullable(string()))],
  sortyBy: ['SortyBy', optional(array(string()))],
  colCoCode: ['ColCoCode', nullable(number())],
});
