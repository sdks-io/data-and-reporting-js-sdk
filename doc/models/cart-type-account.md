
# Cart Type Account

## Structure

`CartTypeAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the customer. |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer. |
| `isDefault` | `boolean \| undefined` | Optional | Whether card type is default or not. |
| `customerCardTypeId` | `number \| undefined` | Optional | Customer Card Type Id in Cards Platform. |
| `isVisibleToCustomers` | `boolean \| undefined` | Optional | True/False – Whether the card type can be used for card ordering. <br><br> Note - IsVisibleToCustomers will be set as ‘false’ when the card type is not active or. configured in MS to be not visible. |
| `embossAccountName` | `string \| undefined` | Optional | Default Name to be embossed on the card. |
| `defaultPurchaseCategoryId` | `number \| undefined` | Optional | Default Purchase category of the card type. |
| `usageRestrictions` | [`CardUsageRestrictions \| undefined`](../../doc/models/card-usage-restrictions.md) | Optional | - |
| `dayTimeRestrictions` | [`CardDayTimeRestrictions \| undefined`](../../doc/models/card-day-time-restrictions.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": 1234,
  "AccountNumber": "GB000000123",
  "IsDefault": true,
  "CustomerCardTypeId": 1,
  "IsVisibleToCustomers": true,
  "EmbossAccountName": "abcd1234",
  "DefaultPurchaseCategoryId": 34
}
```

