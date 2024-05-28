
# Card Exceptions

## Structure

`CardExceptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO currency code |
| `currencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code |
| `day` | `number \| null \| undefined` | Optional | Summary Day: Populated when the Period is passed as ‘Day’. |
| `driverName` | `string \| null \| undefined` | Optional | Driver name |
| `month` | `number \| null \| undefined` | Optional | Summary Month: Populated when the Value of Period is Passed as ‘Month’. |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN |
| `payerId` | `number \| null \| undefined` | Optional | Payment customer id of the customer |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number |
| `payerShortName` | `string \| null \| undefined` | Optional | Payer Short Name |
| `totalAmount` | `number \| null \| undefined` | Optional | Total Amount (In Customer Currency) of Transactions met with the given exceptions criteria. |
| `totalQuantity` | `number \| null \| undefined` | Optional | Total Quantity of Transactions met with the given exceptions criteria. |
| `totalSalesItems` | `number \| null \| undefined` | Optional | Total number of Sales Items met with the given exception criteria. |
| `totalTransactions` | `number \| null \| undefined` | Optional | Total number of Transactions met with the given exception criteria. |
| `vRN` | `string \| null \| undefined` | Optional | Vehicle Registration Number |
| `week` | `number \| null \| undefined` | Optional | Summary Week Number with in the given date range. Populated when the Value of Period is Passed as ‘Week’. |
| `year` | `number \| null \| undefined` | Optional | Summary Year: Populated when the Value of Period is Passed as ‘Month’. |

## Example (as JSON)

```json
{
  "AccountId": 224,
  "AccountNumber": "AccountNumber4",
  "AccountShortName": "AccountShortName6",
  "CardId": 130,
  "CurrencyCode": "CurrencyCode2"
}
```

