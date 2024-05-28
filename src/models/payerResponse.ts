/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ErrorStatus, errorStatusSchema } from './errorStatus';
import { PayerDetails, payerDetailsSchema } from './payerDetails';

export interface PayerResponse {
  /** Request Id of the API call */
  requestId?: string | null;
  payers?: PayerDetails[];
  /** Current Page */
  currentPage?: number;
  /** Total row count matched for the given input criteria */
  rowCount?: number;
  /** Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria. Return 1 if the page size is -1 as all records are returned */
  totalPages?: number;
  error?: ErrorStatus;
}

export const payerResponseSchema: Schema<PayerResponse> = object({
  requestId: ['RequestId', optional(nullable(string()))],
  payers: ['Payers', optional(array(lazy(() => payerDetailsSchema)))],
  currentPage: ['CurrentPage', optional(number())],
  rowCount: ['RowCount', optional(number())],
  totalPages: ['TotalPages', optional(number())],
  error: ['Error', optional(lazy(() => errorStatusSchema))],
});
