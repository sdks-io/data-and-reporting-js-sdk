/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ErrorDetails, errorDetailsSchema } from './errorDetails';

export interface ErrorObject {
  /** Unique request identifier passed from end user. This identifier helps in tracing a transaction */
  requestId?: string;
  /** Indicates overall status of the request. Allowed values: SUCCES, FAILED, PARTIAL_SUCCESS */
  status?: string;
  errors?: ErrorDetails[];
}

export const errorObjectSchema: Schema<ErrorObject> = object({
  requestId: ['RequestId', optional(string())],
  status: ['Status', optional(string())],
  errors: ['Errors', optional(array(lazy(() => errorDetailsSchema)))],
});
