/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, oneOf, Schema, unknown, validateAndMap } from '../../schema';
import {
  PricedTransactionItemsLocationItems,
  pricedTransactionItemsLocationItemsSchema,
} from '../pricedTransactionItemsLocationItems';

/** This is a container type for one-of types. */
export type PricedTransactionResponseTransactionsItemsLocation =
  | unknown
  | PricedTransactionItemsLocationItems
  | null;

export const pricedTransactionResponseTransactionsItemsLocationSchema: Schema<PricedTransactionResponseTransactionsItemsLocation> = oneOf(
  [nullable(unknown()), pricedTransactionItemsLocationItemsSchema]
);

export namespace PricedTransactionResponseTransactionsItemsLocation {
  /**
   * Validation method to narrow down union type to PricedTransactionItemsLocationItems type case.
   *
   * This is PricedTransactionItemsLocationItems case.
   */
  export function isPricedTransactionItemsLocationItems(
    value: unknown
  ): value is PricedTransactionItemsLocationItems {
    const validationResult = validateAndMap(
      value,
      pricedTransactionItemsLocationItemsSchema
    );
    return validationResult.errors === false;
  }
}
