
# Account Access

## Structure

`AccountAccess`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colcoId` | `number \| null \| undefined` | Optional | Collecting company id. |
| `colcoCode` | `number \| null \| undefined` | Optional | Collecting company code. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id to which the user has access |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number to which the user has access |
| `payerName` | `string \| null \| undefined` | Optional | Name of the Payer to which the user has access |
| `accountId` | `number \| null \| undefined` | Optional | Account Id to which the user has access |
| `accountNumber` | `string \| undefined` | Optional | Account Number to which the user has access |
| `accountName` | `string \| null \| undefined` | Optional | Name of the Account to which the user has access |

## Example (as JSON)

```json
{
  "ColcoId": 14,
  "ColcoCode": 14,
  "PayerId": 854,
  "PayerNumber": "DE26688504",
  "PayerName": "TK MobilPlus",
  "AccountId": 435,
  "AccountNumber": "DE26688504",
  "AccountName": "TK Sub Account"
}
```

