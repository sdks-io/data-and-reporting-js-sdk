/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, Schema } from '../schema';
import {
  RecentTransactionReq,
  recentTransactionReqSchema,
} from './recentTransactionReq';

export interface RecentTransactionRequest {
  /** Specify the number of records to returned; Max 1000 */
  pageSize: number;
  /** Specify the page of results to be returned. */
  page: number;
  filters: RecentTransactionReq;
}

export const recentTransactionRequestSchema: Schema<RecentTransactionRequest> = object(
  {
    pageSize: ['PageSize', number()],
    page: ['Page', number()],
    filters: ['Filters', lazy(() => recentTransactionReqSchema)],
  }
);
