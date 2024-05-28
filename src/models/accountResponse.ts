/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AccountResponseAccountsItems,
  accountResponseAccountsItemsSchema,
} from './accountResponseAccountsItems';
import { ErrorStatus, errorStatusSchema } from './errorStatus';

export interface AccountResponse {
  accounts?: AccountResponseAccountsItems[];
  /** current page */
  currentPage?: number;
  /** Total row count matched for the given input criteria */
  rowCount?: number;
  /** Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria. */
  totalPages?: number;
  error?: ErrorStatus;
  /** API Request ID */
  requestId?: string;
}

export const accountResponseSchema: Schema<AccountResponse> = object({
  accounts: [
    'Accounts',
    optional(array(lazy(() => accountResponseAccountsItemsSchema))),
  ],
  currentPage: ['CurrentPage', optional(number())],
  rowCount: ['RowCount', optional(number())],
  totalPages: ['TotalPages', optional(number())],
  error: ['Error', optional(lazy(() => errorStatusSchema))],
  requestId: ['RequestId', optional(string())],
});
