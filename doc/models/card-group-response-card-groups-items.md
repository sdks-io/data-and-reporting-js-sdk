
# Card Group Response Card Groups Items

## Structure

`CardGroupResponseCardGroupsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Id for the associated card group |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number for the associated card group |
| `accountShortName` | `string \| null \| undefined` | Optional | Account short name for the associated card group |
| `activeCards` | `number \| null \| undefined` | Optional | Total number of active cards for the given search criteria |
| `blockedCards` | `number \| null \| undefined` | Optional | Total number of cards for the given search criteria that are permanently blocked |
| `cancelledCards` | `number \| null \| undefined` | Optional | Total number of cards for the given search criteria that are cancelled |
| `cardDeliveryPoint` | `boolean \| null \| undefined` | Optional | card delivery point enabled or not |
| `cardGroupId` | `number \| null \| undefined` | Optional | Id of the card group matching the search criteria. |
| `cardGroupName` | `string \| null \| undefined` | Optional | Name of the card group matching the search criteria. |
| `cardTypeCode` | `string \| null \| undefined` | Optional | Card Type Code |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type Id |
| `cardTypeName` | `string \| null \| undefined` | Optional | Card Type Name |
| `expiredCards` | `number \| null \| undefined` | Optional | Total number of expired cards for the given search criteria |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card.<br>Format: yyyyMMdd<br>Note: Clients to convert this to appropriate DateTime type. |
| `printOnCard` | `boolean \| null \| undefined` | Optional | PrintOnCard true/false |
| `renewalPendingCards` | `number \| null \| undefined` | Optional | Total number of Renewal Pending Cards for the given search criteria |
| `replacedCards` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | Status of the card group. |
| `temporaryBlockByCustomer` | `number \| null \| undefined` | Optional | Total number of cards for the given search criteria that are temporarily blocked by customer |
| `temporaryBlockByShell` | `number \| null \| undefined` | Optional | Total number of cards for the given search criteria that are temporarily blocked by Shell |
| `terminatedDate` | `string \| null \| undefined` | Optional | Terminated Date.<br>Format: yyyyMMdd<br>Note: Clients to convert this to appropriate Date Time type. |
| `totalCards` | `number \| null \| undefined` | Optional | Total number of cards for the given search criteria |

## Example (as JSON)

```json
{
  "AccountId": 1229,
  "AccountNumber": "CZ00000929",
  "AccountShortName": "Dominica South1",
  "ActiveCards": 0,
  "BlockedCards": 1,
  "CancelledCards": 0,
  "CardGroupId": 1234,
  "CardGroupName": "1234T",
  "CardTypeCode": "0123",
  "CardTypeId": 123,
  "CardTypeName": "test",
  "ExpiredCards": 0,
  "ExpiryDate": "20231231",
  "RenewalPendingCards": 5,
  "ReplacedCards": 0,
  "Status": "TERMINATED",
  "TemporaryBlockByCustomer": 0,
  "TemporaryBlockByShell": 0,
  "TerminatedDate": "20210712",
  "TotalCards": 10
}
```

