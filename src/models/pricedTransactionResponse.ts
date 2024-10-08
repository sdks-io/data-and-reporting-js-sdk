/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  PricedTransactionResponseTransactionsItems,
  pricedTransactionResponseTransactionsItemsSchema,
} from './pricedTransactionResponseTransactionsItems';

export interface PricedTransactionResponse {
  transactions?: PricedTransactionResponseTransactionsItems[];
}

export const pricedTransactionResponseSchema: Schema<PricedTransactionResponse> = object(
  {
    transactions: [
      'Transactions',
      optional(
        array(lazy(() => pricedTransactionResponseTransactionsItemsSchema))
      ),
    ],
  }
);
