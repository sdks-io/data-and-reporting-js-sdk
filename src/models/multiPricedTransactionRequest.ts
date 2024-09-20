/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  MultiPricedTransactionRequestAccountsItems,
  multiPricedTransactionRequestAccountsItemsSchema,
} from './multiPricedTransactionRequestAccountsItems';

export interface MultiPricedTransactionRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
   */
  colCoId?: number;
  /**
   * Collecting Company Code of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode: number;
  /**
   * List of Payers/Accounts entity.
   * Mandatory.
   * •    Max number of payers allowed in the input is 10, if it exceeds in the input it will throw an error.
   * •    This value is configurable. Initial configuration will be 100 and will change to 10 once SFH changes are integrated.
   * Note:
   * 1.    At least one payer should be present.
   * Accounts information are optional.
   */
  accounts: MultiPricedTransactionRequestAccountsItems[];
  /**
   * Invoice status of the transactions
   * Mandatory
   * Possible options:
   * I - Invoiced
   * U – Un-Invoiced
   * A – All
   * Max Length: 1
   */
  invoiceStatus?: string;
  /**
   * ISO Country Code (ex: UK, FR)
   * Optional
   * Note: If IncludeFees is true then this filter will be ignored
   */
  purchasedInCountry?: string;
  /**
   * Transactions from Date/Time.
   * Optional – When provided, it should be with in last 24 months.
   * Format: yyyyMMdd
   */
  fromDate?: string;
  /**
   * Transactions to Date/Time.
   * 1) When the value is blank and FromDate is provided on the input, all transactions took place 210(Configurable) days after the given FromDate is returned.
   * 2) Difference between FromDate and ToDate cannot be more than 210 (Configurable) days.
   * Format: yyyyMMdd
   */
  toDate?: string;
  /**
   * Transactions Period.
   * Possible values are:
   * 1.    Last 7 Days
   * 2.    Last 30 Days
   * 3.    Last 90 Days
   */
  period?: number;
  /**
   * Transaction Posting Date/time in the Cards Platform - From Date/time.
   * Note:
   * 1) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.
   * 2) If IncludeFees is true then this filter will be ignored
   * Format: yyyyMMdd HH:mm:ss
   */
  postingDateFrom?: string;
  /**
   * Transaction Posting Date/time in the Cards Platform – To Date/time.
   * Note:
   * 1) If IncludeFees is true then this filter will be ignored.
   * 2) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.
   * Format: yyyyMMdd HH:mm:ss
   */
  postingDateTo?: string;
  /**
   * Invoice Date.
   * Optional
   * Note:
   * 1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date.
   * 2) If IncludeFees is true then this filter will be ignored
   * Format: yyyyMMdd
   */
  invoiceDate?: string;
  /**
   * Invoice Number.
   * Optional
   * Note:
   * 1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date.
   */
  invoiceNumber?: string;
  /**
   * True/False
   * Optional
   * Default value: True.
   * When passed as ‘True’ the transactions records with report date not equal to 9999-12-30 will be returned.
   * When passed as ‘False’ the above condition will not be checked.
   * Note: If IncludeFees is ‘True’ then this filter will be ignored
   */
  validInvoiceDateOnly?: boolean;
  /**
   * Start date for transaction search by invoice date.
   * Optional
   * Note:
   * 1) Value should be with in last 24 months (if provided).
   * 2) Maximum of 90(Configurable) days duration allowed per search.
   * 3) When provided, InvoiceFromDate has to be less than or equal to InvoiceToDate.
   * Format: yyyyMMdd
   */
  invoiceFromDate?: string;
  /**
   * End date for transaction search by invoice date.
   * Optional
   * Note:
   * 1) When InvoiceFromDate is provided and InvoiceToDate is null, then InvoiceToDate will be calculated as (InvoiceFromDate + 90 days) or (CurrentDate) whichever is lesser.
   * Format: yyyyMMdd
   */
  invoiceToDate?: string;
  /**
   * True/False
   * Optional
   * Default value: False.
   * When passed as ‘True’ Only returned records with Fuel transactions.
   * When passed as ‘False’ the above condition will not be checked.
   * Note: If IncludeFees is ‘True’ then this filter will be ignored
   */
  fuelOnly?: boolean;
  /**
   * True/False
   * Optional
   * Default value: False
   * When passed as ‘True’ then  ignore complex filters, all sales items along with fees included on the same response
   */
  includeFees?: boolean;
  /**
   * Allowed Sorting Options:
   * 1.    TransactionDateAscending
   * 2.    TransactionDateDescending
   * 3.    GrossAmountDescending
   * 4.    GrossAmountAscending
   * 5.    NetAmountAscending
   * 6.    NetAmountDescensding
   * Example value to be passed: 1,3
   * Note: If IncludeFees is ‘True’ then sorting is not allowed. This parameter will be ignored.
   */
  sortOrder?: string;
  /**
   * Page Number (as shown to the users)
   * Optional
   * Default value 1
   * Note: If IncludeFees is ‘True’ then pagination is not allowed. This parameter will be ignored.
   */
  currentPage?: number;
  /**
   * Page Size – Number of records to show on a page
   * Optional
   * Default value 50
   * Note: If IncludeFees is ‘True’ then pagination is not allowed. This parameter will be ignored.
   */
  pageSize?: number;
}

export const multiPricedTransactionRequestSchema: Schema<MultiPricedTransactionRequest> = object(
  {
    colCoId: ['ColCoId', optional(number())],
    colCoCode: ['ColCoCode', number()],
    accounts: [
      'Accounts',
      array(lazy(() => multiPricedTransactionRequestAccountsItemsSchema)),
    ],
    invoiceStatus: ['InvoiceStatus', optional(string())],
    purchasedInCountry: ['PurchasedInCountry', optional(string())],
    fromDate: ['FromDate', optional(string())],
    toDate: ['ToDate', optional(string())],
    period: ['Period', optional(number())],
    postingDateFrom: ['PostingDateFrom', optional(string())],
    postingDateTo: ['PostingDateTo', optional(string())],
    invoiceDate: ['InvoiceDate', optional(string())],
    invoiceNumber: ['InvoiceNumber', optional(string())],
    validInvoiceDateOnly: ['ValidInvoiceDateOnly', optional(boolean())],
    invoiceFromDate: ['InvoiceFromDate', optional(string())],
    invoiceToDate: ['InvoiceToDate', optional(string())],
    fuelOnly: ['FuelOnly', optional(boolean())],
    includeFees: ['IncludeFees', optional(boolean())],
    sortOrder: ['SortOrder', optional(string())],
    currentPage: ['CurrentPage', optional(number())],
    pageSize: ['PageSize', optional(number())],
  }
);
