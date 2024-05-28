/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import { PricedRequestData, pricedRequestDataSchema } from './pricedRequestData';

export interface PricedTransactionRequestV2 {
  /** This endpoint allows querying the transaction data (i.e. Priced, Billed and Unbilled sales items) from SFSBI. It provides a flexible search criteria and supports paging */
  filters?: PricedRequestData;
  /** Specify the page of results to be returned. */
  page?: number;
  /** Specify the number of records to returned; Max 1000 */
  pageSize?: number;
}

export const pricedTransactionRequestV2Schema: Schema<PricedTransactionRequestV2> = object(
  {
    filters: ['Filters', optional(lazy(() => pricedRequestDataSchema))],
    page: ['Page', optional(number())],
    pageSize: ['PageSize', optional(number())],
  }
);
