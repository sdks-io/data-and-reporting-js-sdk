/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, number, object, optional, Schema } from '../schema';

export interface PINAdviceTypes {
  /**
   * Id of of PIN advice type.
   * Possible Values:
   * 1.    Paper
   * 2.    Email
   * 3.    SMS
   * 4.    None
   */
  pINAdviceTypeID?: number | null;
  /** Whether the PIN advice type is available for card ordering */
  isCardOrderOption?: boolean;
  /** Whether the PIN advice type is available for PIN Reminder */
  isPINReminderOption?: boolean;
}

export const pINAdviceTypesSchema: Schema<PINAdviceTypes> = object({
  pINAdviceTypeID: ['PINAdviceTypeID', optional(nullable(number()))],
  isCardOrderOption: ['IsCardOrderOption', optional(boolean())],
  isPINReminderOption: ['IsPINReminderOption', optional(boolean())],
});
