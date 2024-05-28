/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
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

export interface AccountRequest {
  /**
   * Account Status.
   * Optional if StatusList is passed, else mandatory.
   * Ignored if StatusList is passed.
   * Allowed values:
   * •	ALL
   * •	ACTIVE
   * •	BLOCKED
   * •	CANCELLED
   * •	CREDITLOCK
   * •	DELINQUENCYLOCK
   */
  status?: string | null;
  /**
   * Include card summary details in the response.
   * When passed as false, the card summary related parameters on response will be set to null.
   * Optional – default value: true.
   */
  includeCardSummary?: boolean;
  /**
   * Payer id of the customer.
   * Optional if PayerNumber is passed, else Mandatory.
   */
  payerId?: number | null;
  /**
   * PayerNumber of the customer.
   * Optional if PayerId is passed, else Mandatory.
   */
  payerNumber?: string | null;
  /**
   * Page Size – Number of records to show on a page.
   * Optional
   * Default value 50
   */
  pageSize?: number | null;
  /** API Request Id */
  requestId?: string | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * ColCoCode or ColCoCountryCode  is Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   */
  colCoCode?: number | null;
  /**
   * The 2-character ISO Code for the customer and card owning country.
   * ColCoCode or ColCoCountryCode  is Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   */
  colCoCountryCode?: string | null;
  /**
   * Page Number (as shown to the users)
   * Optional
   * Default value 1
   */
  currentPage?: number | null;
  /**
   * Optional – default value: false.
   * When passed as true, the API will return accounts that are configured as Invoice Point only.
   */
  invoicePointsOnly?: boolean | null;
  /**
   * Collecting Company Id (in GFN) of the selected payer.
   * Optional if ColCoCode or ColCoCountryCode  is passed else Mandatory.
   */
  colCoId?: number | null;
  /** Return e-Toll Customer details When True. */
  returnTollsCustomerId?: boolean;
  accounts?: Accounts[];
  /**
   * Account Name of the customer.
   * Optional.
   * Minimum of 4 characters should be provided else not considered.
   * Accounts those have the entered value at any part of the Name will be returned.
   */
  accountName?: string | null;
  /**
   * Account Statuses.
   * Optional
   * Multiple statuses are allowed to be included in the search criteria.
   * Allowed values:
   * •	ACTIVE
   * •	BLOCKED
   * •	CANCELLED
   * •	CREDITLOCK
   * •	DELINQUENCYLOCK
   */
  statusList?: (string | null)[];
}

export const accountRequestSchema: Schema<AccountRequest> = object({
  status: ['Status', optional(nullable(string()))],
  includeCardSummary: ['IncludeCardSummary', optional(boolean())],
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  pageSize: ['PageSize', optional(nullable(number()))],
  requestId: ['RequestId', optional(nullable(string()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  colCoCountryCode: ['ColCoCountryCode', optional(nullable(string()))],
  currentPage: ['CurrentPage', optional(nullable(number()))],
  invoicePointsOnly: ['InvoicePointsOnly', optional(nullable(boolean()))],
  colCoId: ['ColCoId', optional(nullable(number()))],
  returnTollsCustomerId: ['ReturnTollsCustomerId', optional(boolean())],
  accounts: ['Accounts', optional(array(lazy(() => accountsSchema)))],
  accountName: ['AccountName', optional(nullable(string()))],
  statusList: ['StatusList', optional(array(nullable(string())))],
});
