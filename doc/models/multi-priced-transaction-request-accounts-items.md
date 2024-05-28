
# Multi Priced Transaction Request Accounts Items

## Structure

`MultiPricedTransactionRequestAccountsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory<br>Example: 123456 |
| `payerNumber` | `string \| undefined` | Optional | Payer Number (Ex: GB000000123) of the selected payer.<br>Optional if PayerId is passed else Mandatory<br>Example: GB000000123 |
| `accountId` | `number \| undefined` | Optional | Account Id  of the selected account. |
| `accountNumber` | `string \| undefined` | Optional | Account Number (ex: GB000000123) of the selected account. |

## Example (as JSON)

```json
{
  "PayerId": 144,
  "PayerNumber": "PayerNumber2",
  "AccountId": 204,
  "AccountNumber": "AccountNumber4"
}
```

