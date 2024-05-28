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

export interface CardGroupResponseCardGroupsItems {
  /** Account Id for the associated card group */
  accountId?: number | null;
  /** Account number for the associated card group */
  accountNumber?: string | null;
  /** Account short name for the associated card group */
  accountShortName?: string | null;
  /** Total number of active cards for the given search criteria */
  activeCards?: number | null;
  /** Total number of cards for the given search criteria that are permanently blocked */
  blockedCards?: number | null;
  /** Total number of cards for the given search criteria that are cancelled */
  cancelledCards?: number | null;
  /** card delivery point enabled or not */
  cardDeliveryPoint?: boolean | null;
  /** Id of the card group matching the search criteria. */
  cardGroupId?: number | null;
  /** Name of the card group matching the search criteria. */
  cardGroupName?: string | null;
  /** Card Type Code */
  cardTypeCode?: string | null;
  /** Card Type Id */
  cardTypeId?: number | null;
  /** Card Type Name */
  cardTypeName?: string | null;
  /** Total number of expired cards for the given search criteria */
  expiredCards?: number | null;
  /**
   * Expiry date of the card.
   * Format: yyyyMMdd
   * Note: Clients to convert this to appropriate DateTime type.
   */
  expiryDate?: string | null;
  /** PrintOnCard true/false */
  printOnCard?: boolean | null;
  /** Total number of Renewal Pending Cards for the given search criteria */
  renewalPendingCards?: number | null;
  replacedCards?: number | null;
  /** Status of the card group. */
  status?: string | null;
  /** Total number of cards for the given search criteria that are temporarily blocked by customer */
  temporaryBlockByCustomer?: number | null;
  /** Total number of cards for the given search criteria that are temporarily blocked by Shell */
  temporaryBlockByShell?: number | null;
  /**
   * Terminated Date.
   * Format: yyyyMMdd
   * Note: Clients to convert this to appropriate Date Time type.
   */
  terminatedDate?: string | null;
  /** Total number of cards for the given search criteria */
  totalCards?: number | null;
}

export const cardGroupResponseCardGroupsItemsSchema: Schema<CardGroupResponseCardGroupsItems> = object(
  {
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountShortName: ['AccountShortName', optional(nullable(string()))],
    activeCards: ['ActiveCards', optional(nullable(number()))],
    blockedCards: ['BlockedCards', optional(nullable(number()))],
    cancelledCards: ['CancelledCards', optional(nullable(number()))],
    cardDeliveryPoint: ['CardDeliveryPoint', optional(nullable(boolean()))],
    cardGroupId: ['CardGroupId', optional(nullable(number()))],
    cardGroupName: ['CardGroupName', optional(nullable(string()))],
    cardTypeCode: ['CardTypeCode', optional(nullable(string()))],
    cardTypeId: ['CardTypeId', optional(nullable(number()))],
    cardTypeName: ['CardTypeName', optional(nullable(string()))],
    expiredCards: ['ExpiredCards', optional(nullable(number()))],
    expiryDate: ['ExpiryDate', optional(nullable(string()))],
    printOnCard: ['PrintOnCard', optional(nullable(boolean()))],
    renewalPendingCards: ['RenewalPendingCards', optional(nullable(number()))],
    replacedCards: ['ReplacedCards', optional(nullable(number()))],
    status: ['Status', optional(nullable(string()))],
    temporaryBlockByCustomer: [
      'TemporaryBlockByCustomer',
      optional(nullable(number())),
    ],
    temporaryBlockByShell: [
      'TemporaryBlockByShell',
      optional(nullable(number())),
    ],
    terminatedDate: ['TerminatedDate', optional(nullable(string()))],
    totalCards: ['TotalCards', optional(nullable(number()))],
  }
);
