/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface PricedTransactionItemsLocationItems {
  /**
   * Latitude for the Site Geographic Location
   * Example: 37.4224764
   * Note: - The value could be null/blank for fees item.
   */
  latitude?: string | null;
  /**
   * Longitude for the Site Geographic Location
   * Example: 122.0842499
   * Note: - The value could be null/blank for fees item.
   */
  longitude?: string | null;
}

export const pricedTransactionItemsLocationItemsSchema: Schema<PricedTransactionItemsLocationItems> = object(
  {
    latitude: ['Latitude', optional(nullable(string()))],
    longitude: ['Longitude', optional(nullable(string()))],
  }
);
