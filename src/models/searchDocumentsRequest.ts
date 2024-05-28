/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { SearchDocReq, searchDocReqSchema } from './searchDocReq';

export interface SearchDocumentsRequest {
  filters?: SearchDocReq;
  /** Specify the page of results to be returned. */
  page?: string;
  /** Specify the number of records to returned; Max 1000 */
  pageSize?: string;
}

export const searchDocumentsRequestSchema: Schema<SearchDocumentsRequest> = object(
  {
    filters: ['Filters', optional(lazy(() => searchDocReqSchema))],
    page: ['Page', optional(string())],
    pageSize: ['PageSize', optional(string())],
  }
);
