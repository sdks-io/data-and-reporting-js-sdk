
# Transaction Fees Response

## Structure

`TransactionFeesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeItems` | [`FeeItem[] \| undefined`](../../doc/models/fee-item.md) | Optional | - |
| `currentPage` | `number \| undefined` | Optional | Current Page |
| `rowCount` | `number \| undefined` | Optional | Total row count matched for the given input criteria |
| `totalPages` | `number \| undefined` | Optional | Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |

## Example (as JSON)

```json
{
  "FeeItems": [
    {
      "FeeItemId": 18,
      "AccountId": 106,
      "AccountNumber": "AccountNumber0",
      "AccountShortName": "AccountShortName2",
      "InvoiceAccountId": 66
    },
    {
      "FeeItemId": 18,
      "AccountId": 106,
      "AccountNumber": "AccountNumber0",
      "AccountShortName": "AccountShortName2",
      "InvoiceAccountId": 66
    }
  ],
  "CurrentPage": 222,
  "RowCount": 120,
  "TotalPages": 32,
  "Error": {
    "Code": "Code4",
    "Description": "Description2"
  }
}
```

