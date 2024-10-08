/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  InvoiceDatesRequestFilters,
  invoiceDatesRequestFiltersSchema,
} from './invoiceDatesRequestFilters';

export interface InvoiceDatesRequest {
  filters?: InvoiceDatesRequestFilters;
}

export const invoiceDatesRequestSchema: Schema<InvoiceDatesRequest> = object({
  filters: ['Filters', optional(lazy(() => invoiceDatesRequestFiltersSchema))],
});
