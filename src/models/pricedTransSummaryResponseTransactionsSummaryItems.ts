/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface PricedTransSummaryResponseTransactionsSummaryItems {
  /** Product Id */
  productId?: number | null;
  /**
   * Product Code
   * Examples:
   * 10    TMF Charges
   * 11    Tunnel/Bridges
   * 12    Motorway toll
   * 13    Ferries
   */
  productCode?: string | null;
  /**
   * Product Name
   * Examples:
   * Unleaded - High octane
   * Unleaded - Medium octane
   * Unleaded - Low octane
   * Unleaded Environmental
   */
  productName?: string | null;
  /**
   * Product Group Id
   * Example:
   * 1    Parent Product Group
   * 2    All Fuels
   * 3    Motor gasoline
   * 4    2 stroke
   * 5    Autogas
   * 6    CNG
   */
  productGroupId?: number | null;
  /**
   * Product Group Name
   * Example:
   * 1    Parent Product Group
   * 2    All Fuels
   * 3    Motor gasoline
   * 4    2 stroke
   * 5    Autogas
   * 6    CNG
   * 7    Automotive Gas Oil
   */
  productGroupName?: string | null;
  /**
   * Site Group Id
   * Example: 202
   */
  siteGroupId?: number | null;
  /**
   * Site Group Name
   * Example: CZ 9100 ECONOMY NETWORK
   */
  siteGroupName?: string | null;
  /** Total Fuel Quantity */
  totalFuelQuantity?: number | null;
  /** Total Net amount in invoice currency */
  totalNetAmount?: number | null;
  /** Total Gross amount in invoice currency */
  totalGrossAmount?: number | null;
  /**
   * ISO currency code
   * Example: GBP
   */
  invoiceCurrencyCode?: string | null;
  /**
   * Currency symbol of the Invoice Currency Code
   * Example: £, $
   */
  invoiceCurrencySymbol?: string | null;
  /** Sum of the retail net price */
  customerRetailValueTotalNet?: number | null;
  /** Sum of the retail gross price */
  customerRetailValueTotalGross?: number | null;
}

export const pricedTransSummaryResponseTransactionsSummaryItemsSchema: Schema<PricedTransSummaryResponseTransactionsSummaryItems> = object(
  {
    productId: ['ProductId', optional(nullable(number()))],
    productCode: ['ProductCode', optional(nullable(string()))],
    productName: ['ProductName', optional(nullable(string()))],
    productGroupId: ['ProductGroupId', optional(nullable(number()))],
    productGroupName: ['ProductGroupName', optional(nullable(string()))],
    siteGroupId: ['SiteGroupId', optional(nullable(number()))],
    siteGroupName: ['SiteGroupName', optional(nullable(string()))],
    totalFuelQuantity: ['TotalFuelQuantity', optional(nullable(number()))],
    totalNetAmount: ['TotalNetAmount', optional(nullable(number()))],
    totalGrossAmount: ['TotalGrossAmount', optional(nullable(number()))],
    invoiceCurrencyCode: ['InvoiceCurrencyCode', optional(nullable(string()))],
    invoiceCurrencySymbol: [
      'InvoiceCurrencySymbol',
      optional(nullable(string())),
    ],
    customerRetailValueTotalNet: [
      'CustomerRetailValueTotalNet',
      optional(nullable(number())),
    ],
    customerRetailValueTotalGross: [
      'CustomerRetailValueTotalGross',
      optional(nullable(number())),
    ],
  }
);
