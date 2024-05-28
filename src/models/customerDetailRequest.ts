/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface CustomerDetailRequest {
  /**
   * Collecting Company Id (in GFN) of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1-Philippines
   * 5-UK
   */
  colCoId?: number | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86-Philippines
   * 5-UK
   */
  colCoCode?: number | null;
  /**
   * Payer Id (i.e., Customer Id of the Payment Customer in H3 Cards Platform) of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   * Example: 123456
   */
  payerId?: number | null;
  /**
   * Payer Number of the selected payer.
   * Optional if PayerId is passed else Mandatory
   * Example: GB000000123
   */
  payerNumber?: string | null;
  /**
   * Account ID of the customer.
   * Optional if AccountNumber is passed else Mandatory.
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.
   * Optional if AccountId is passed else Mandatory.
   */
  accountNumber?: string | null;
}

export const customerDetailRequestSchema: Schema<CustomerDetailRequest> = object(
  {
    colCoId: ['ColCoId', optional(nullable(number()))],
    colCoCode: ['ColCoCode', optional(nullable(number()))],
    payerId: ['PayerId', optional(nullable(number()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
  }
);
