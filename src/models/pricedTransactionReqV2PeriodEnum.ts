/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for PricedTransactionReqV2PeriodEnum
 */
export enum PricedTransactionReqV2PeriodEnum {
  Enum1 = 1,
  Enum2 = 2,
  Enum3 = 3,
}

/**
 * Schema for PricedTransactionReqV2PeriodEnum
 */
export const  pricedTransactionReqV2PeriodEnumSchema: Schema<PricedTransactionReqV2PeriodEnum> = numberEnum(PricedTransactionReqV2PeriodEnum);
