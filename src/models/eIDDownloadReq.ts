/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, nullable, number, object, Schema, string } from '../schema';

export interface EIDDownloadReq {
  /**
   * Collecting Company Code of the selected payer.
   * Mandatory
   */
  colCoCode: number | null;
  eIDList: string[];
  /**
   * ColCo code associated with the Account Group IDs of the given EID/EDI files.
   * Mandatory
   */
  accountGroupCountry: number | null;
  accountGroupIdList: string[];
}

export const eIDDownloadReqSchema: Schema<EIDDownloadReq> = object({
  colCoCode: ['ColCoCode', nullable(number())],
  eIDList: ['EIDList', array(string())],
  accountGroupCountry: ['AccountGroupCountry', nullable(number())],
  accountGroupIdList: ['AccountGroupIdList', array(string())],
});
