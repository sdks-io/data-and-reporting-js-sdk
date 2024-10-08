/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Accounts, accountsSchema } from './accounts';

export interface PriceTransactionRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
   */
  colCoId?: number | null;
  /**
   * Collecting Company Code  of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number | null;
  /**
   * Payer Id  of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   */
  payerId?: number | null;
  /**
   * Payer Number (Ex: GB000000123) of the selected payer.
   * Optional if PayerId is passed else Mandatory
   * Example: GB000000123
   */
  payerNumber?: string | null;
  accounts?: Accounts;
  /**
   * Card Id (i.e. Unique Card Id in GFN)
   * Optional
   * When both Card Id and Card PAN are not present on request, the response will have transactions of all cards under the selected payer or account
   */
  cardId?: number | null;
  /**
   * Full Card PAN
   * Optional
   * When both Card Id and Card PAN are not present on request, the response will have transactions of all cards under the selected payer or account.
   */
  cardPAN?: string | null;
  /**
   * Driver Name (of Card record)
   * Optional
   * Minimum of 4 characters should be provided else not considered
   * Transactions of the card having the entered value at any part of the Driver Name will be returned
   */
  driverName?: string | null;
  /**
   * Vehicle Registration (of Card record)
   * Optional
   * Minimum of 4 characters should be provided else not considered
   * Transactions of the card having the entered value at any part of the VRN will be returned
   */
  vehicleRegistrationNumber?: string | null;
  /**
   * Invoice status of the transactions.
   * Mandatory
   * Possible options:
   * I - Invoiced
   * U – Un-Invoiced
   * A – All
   */
  invoiceStatus?: string | null;
  /**
   * Product Id
   * Example:
   * 21    Unleaded - High octane
   * 22    Unleaded - Medium octane
   * 23    Unleaded - Low octane
   * 24    Unleaded Environmental
   */
  productId?: number | null;
  /**
   * Product Code – Global as per GFN configuration
   * Optional
   * Max Length: 8
   * Example:
   * 10    TMF Charges
   * 11    Tunnel/Bridges
   * 12    Motorway toll
   * 13    Ferries
   */
  productCode?: string | null;
  /**
   * ISO Country Code (ex: UK, FR)
   * Note: If IncludeFees is true then this filter will be ignored
   */
  purchasedInCountry?: string | null;
  /** Card Group Id in GFN */
  cardGroupId?: number | null;
  /**
   * Allowed Sorting Options:
   * 1.    TransactionDateAscending
   * 2.    TransactionDateDescending
   * 3.    GrossAmountDescending
   * 4.    GrossAmountAscending
   * 5.    DriverNameAscending (If Driver Name is null then VRN value will be considered)
   * 6.    DriverNameDescending (If Driver Name is null then VRN value will be considered)
   * 7.    VRNAscending (If VRN is null then Driver Name value will be considered)
   * 8.    VRNDescending (If VRN is null then Driver Name value will be considered)
   * 9.    NetAmountAscending
   * 10.    NetAmountDescensding
   * Example value to be passed: “1,3”
   */
  sortOrder?: string | null;
  /**
   * Transactions from Date/Time.
   * Optional – When provided, it should be with in last 24 months.
   * Format: yyyyMMdd
   */
  fromDate?: string | null;
  /**
   * Transactions to Date/Time.
   * Optional- Refer introduction section of this operation for the priority and sequence of different date and invoice number filters that are conditionally applied.
   * Note:
   * 1) When the value is blank and FromDate is provided on the input, all transactions took place 210(Configurable) days after the given FromDate is returned.
   * 2) Difference between FromDate and ToDate cannot be more than 210 (Configurable) days.
   * Format: yyyyMMdd
   */
  toDate?: string | null;
  /**
   * Transactions Period.
   * Possible values are:
   * 1.    Last 7 Days
   * 2.    Last 30 Days
   * 3.    Last 90 Days
   * Optional - Refer introduction section of this operation for the priority and sequence of different date and invoice number filters that are conditionally applied.
   */
  period?: number | null;
  /**
   * Site Code as configured in GFN
   * Example:
   * 050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755
   * 050002 -    CHARNOCK RICHARD STHBOUND MWSA 0755
   * 050005 -    HARTSHEAD MOOR EASTBOUND MWSA 0761.
   * 050006 -    HARTSHEAD MOOR WESTBOUND MWSA.
   * Note: If IncludeFees is true then this filter will be ignored
   */
  siteCode?: string | null;
  /**
   * Site Group Id in GFN
   * Optional
   * Example: 202
   * Note: If IncludeFees is true then this filter will be ignored
   */
  siteGroupId?: number | null;
  /**
   * Transaction Posting Date/time in the Cards Platform - From Date/time.
   * Note:
   * 1) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.
   * 2) If IncludeFees is true then this filter will be ignored
   * Format: yyyyMMdd HH:mm:ss
   */
  postingDateFrom?: string | null;
  /**
   * Transaction Posting Date/time in the Cards Platform – To Date/time.
   * Note:
   * 1) If IncludeFees is true then this filter will be ignored.
   * 2) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.
   * Format: yyyyMMdd HH:mm:ss
   */
  postingDateTo?: string | null;
  /**
   * Unique SalesItemId (Either Billed on Unbilled)
   * Optional
   * Note: If IncludeFees is true then this filter will be ignored
   */
  salesItemId?: string | null;
  /**
   * Unique Transaction Id
   * Optional
   * Note: If IncludeFees is true then this filter will be ignored
   */
  transactionId?: string | null;
  /**
   * Invoice Date.
   * Optional
   * Note:
   * 1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date.
   * Format: yyyyMMdd
   */
  invoiceDate?: string | null;
  /**
   * Invoice Number.
   * Optional
   * Note:
   * 1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date.
   */
  invoiceNumber?: string | null;
  /**
   * True/False
   * Optional
   * Default value: True.
   * When passed as ‘True’ the transactions records with report date not equal to 9999-12-30 will be returned.
   * When passed as ‘False’ the above condition will not be checked.
   */
  validInvoiceDateOnly?: boolean | null;
  /**
   * Start date for transaction search by invoice date.
   * Optional
   * Note:
   * 1) Value should be with in last 24 months (if provided).
   * 2) Maximum of 90(Configurable) day’s duration allowed per search.
   * 3) When provided, InvoiceFromDate has to be less than or equal to InvoiceToDate.
   * Format: yyyyMMdd
   */
  invoiceFromDate?: string | null;
  /**
   * End date for transaction search by invoice date.
   * Optional
   * Note:
   * 1) When InvoiceFromDate is provided and InvoiceToDate is null, then InvoiceToDate will be calculated as (InvoiceFromDate + 90 days) or (CurrentDate) whichever is lesser.
   * Format: yyyyMMdd
   */
  invoiceToDate?: string | null;
  /**
   * True/False
   * Optional
   * Default value: False.
   * When passed as ‘True’ Only returned records with Fuel transactions.
   * When passed as ‘False’ the above condition will not be checked.
   */
  fuelOnly?: boolean | null;
  /**
   * True/False
   * Optional
   * Default value: False
   * When passed as ‘True’ then  ignore few filters, all sales items along with fees included on the same response
   */
  includeFees?: boolean | null;
  /**
   * True/False
   * Optional
   * Default value – False.
   * When set to True, the property names in the output will be replaced by Field IDs.
   * This will reduce the output payload size significantly for large data sets and help faster transmission of data over networks.
   */
  useFieldId?: boolean | null;
  /** Current Page Number */
  currentPage?: number | null;
  /**
   * Page Size – Number of records to show on a page
   * Optional
   * Default value 50
   */
  pageSize?: number;
}

export const priceTransactionRequestSchema: Schema<PriceTransactionRequest> = object(
  {
    colCoId: ['ColCoId', optional(nullable(number()))],
    colCoCode: ['ColCoCode', optional(nullable(number()))],
    payerId: ['PayerId', optional(nullable(number()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
    accounts: ['Accounts', optional(lazy(() => accountsSchema))],
    cardId: ['CardId', optional(nullable(number()))],
    cardPAN: ['CardPAN', optional(nullable(string()))],
    driverName: ['DriverName', optional(nullable(string()))],
    vehicleRegistrationNumber: [
      'VehicleRegistrationNumber',
      optional(nullable(string())),
    ],
    invoiceStatus: ['InvoiceStatus', optional(nullable(string()))],
    productId: ['ProductId', optional(nullable(number()))],
    productCode: ['ProductCode', optional(nullable(string()))],
    purchasedInCountry: ['PurchasedInCountry', optional(nullable(string()))],
    cardGroupId: ['CardGroupId', optional(nullable(number()))],
    sortOrder: ['SortOrder', optional(nullable(string()))],
    fromDate: ['FromDate', optional(nullable(string()))],
    toDate: ['ToDate', optional(nullable(string()))],
    period: ['Period', optional(nullable(number()))],
    siteCode: ['SiteCode', optional(nullable(string()))],
    siteGroupId: ['SiteGroupId', optional(nullable(number()))],
    postingDateFrom: ['PostingDateFrom', optional(nullable(string()))],
    postingDateTo: ['PostingDateTo', optional(nullable(string()))],
    salesItemId: ['SalesItemId', optional(nullable(string()))],
    transactionId: ['TransactionId', optional(nullable(string()))],
    invoiceDate: ['InvoiceDate', optional(nullable(string()))],
    invoiceNumber: ['InvoiceNumber', optional(nullable(string()))],
    validInvoiceDateOnly: [
      'ValidInvoiceDateOnly',
      optional(nullable(boolean())),
    ],
    invoiceFromDate: ['InvoiceFromDate', optional(nullable(string()))],
    invoiceToDate: ['InvoiceToDate', optional(nullable(string()))],
    fuelOnly: ['FuelOnly', optional(nullable(boolean()))],
    includeFees: ['IncludeFees', optional(nullable(boolean()))],
    useFieldId: ['UseFieldId', optional(nullable(boolean()))],
    currentPage: ['CurrentPage', optional(nullable(number()))],
    pageSize: ['PageSize', optional(number())],
  }
);
