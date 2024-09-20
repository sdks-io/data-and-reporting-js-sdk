/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorDetails } from '../models/errorDetails';

/**
 * Creates an instance of InvoiceManagementV1Search500
 */
interface InvoiceManagementV1Search500 {
  /** Unique request identifier passed from end user. This identifier helps in tracing a transaction */
  RequestId?: string;
  /** Indicates overall status of the request. Allowed values: SUCCES, FAILED, PARTIAL_SUCCESS */
  Status?: string;
  Errors?: ErrorDetails[];
}

export class InvoiceManagementV1Search500Error extends ApiError<
  InvoiceManagementV1Search500
> {}
