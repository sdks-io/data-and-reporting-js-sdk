/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ErrorStatus, errorStatusSchema } from './errorStatus';
import {
  PricedTransSummaryResponseTransactionsSummaryItems,
  pricedTransSummaryResponseTransactionsSummaryItemsSchema,
} from './pricedTransSummaryResponseTransactionsSummaryItems';

export interface PricedTransSummaryResponse {
  transactionsSummary?: PricedTransSummaryResponseTransactionsSummaryItems[];
  error?: ErrorStatus;
  /** API Request Id */
  requestId?: string;
}

export const pricedTransSummaryResponseSchema: Schema<PricedTransSummaryResponse> = object(
  {
    transactionsSummary: [
      'TransactionsSummary',
      optional(
        array(
          lazy(() => pricedTransSummaryResponseTransactionsSummaryItemsSchema)
        )
      ),
    ],
    error: ['Error', optional(lazy(() => errorStatusSchema))],
    requestId: ['RequestId', optional(string())],
  }
);
