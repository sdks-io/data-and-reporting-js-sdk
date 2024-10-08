/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ExceptionProduct {
  /**
   * Product Id
   * Optional if ProductCode is passed else Mandatory.
   */
  productid?: number | null;
  /**
   * Product Code
   * Optional if ProductId is passed else Mandatory.
   */
  productCode?: string | null;
}

export const exceptionProductSchema: Schema<ExceptionProduct> = object({
  productid: ['Productid', optional(nullable(number()))],
  productCode: ['ProductCode', optional(nullable(string()))],
});
