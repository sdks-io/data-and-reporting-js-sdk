/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface FleetmanagementV1UserLoggedinuserRequest {
  /** True/False. The output will include the payer group information only when true is passed. */
  includePayerGroup?: boolean;
  /** True/False. The output will include the EID (Electronic Invoice data) information only when true is passed.. */
  includeEIDDetails?: boolean;
  /**
   * Name of the API on which user access needs to be validated
   * Optional.
   */
  requestedAPIName?: string | null;
  /**
   * Payer id of the customer.</br>
   * Optional.</br>
   * This input is a search criterion.</br>
   * Note: If PayerId or PayerNumber is provided in the input, the given payer will be available in the output if the user has access to the given payer.
   */
  payerId?: number | null;
  /**
   * PayerNumber of the customer.</br>
   * Optional</br>
   * This input is a search criterion.</br>
   * Note: If Payerid or PayerNumber is provided in the input, the given payer will be available in the output if the user has access to the given payer.
   */
  payerNumber?: string | null;
}

export const fleetmanagementV1UserLoggedinuserRequestSchema: Schema<FleetmanagementV1UserLoggedinuserRequest> = object(
  {
    includePayerGroup: ['IncludePayerGroup', optional(boolean())],
    includeEIDDetails: ['IncludeEIDDetails', optional(boolean())],
    requestedAPIName: ['RequestedAPIName', optional(nullable(string()))],
    payerId: ['PayerId', optional(nullable(number()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
  }
);
