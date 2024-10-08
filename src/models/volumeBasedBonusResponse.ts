/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  BonusConfiguration,
  bonusConfigurationSchema,
} from './bonusConfiguration';
import { BonusHistory, bonusHistorySchema } from './bonusHistory';
import { CurrentVolume, currentVolumeSchema } from './currentVolume';
import { ErrorStatus, errorStatusSchema } from './errorStatus';

export interface VolumeBasedBonusResponse {
  configuration?: BonusConfiguration[];
  currentPeriodConsumption?: CurrentVolume[];
  historicalBonusPaid?: BonusHistory[];
  error?: ErrorStatus;
  /** API Request Id */
  requestId?: string;
}

export const volumeBasedBonusResponseSchema: Schema<VolumeBasedBonusResponse> = object(
  {
    configuration: [
      'Configuration',
      optional(array(lazy(() => bonusConfigurationSchema))),
    ],
    currentPeriodConsumption: [
      'CurrentPeriodConsumption',
      optional(array(lazy(() => currentVolumeSchema))),
    ],
    historicalBonusPaid: [
      'HistoricalBonusPaid',
      optional(array(lazy(() => bonusHistorySchema))),
    ],
    error: ['Error', optional(lazy(() => errorStatusSchema))],
    requestId: ['RequestId', optional(string())],
  }
);
