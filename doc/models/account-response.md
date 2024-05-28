
# Account Response

## Structure

`AccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accounts` | [`AccountResponseAccountsItems[] \| undefined`](../../doc/models/account-response-accounts-items.md) | Optional | - |
| `currentPage` | `number \| undefined` | Optional | current page |
| `rowCount` | `number \| undefined` | Optional | Total row count matched for the given input criteria |
| `totalPages` | `number \| undefined` | Optional | Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria. |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request ID |

## Example (as JSON)

```json
{
  "CurrentPage": 1,
  "RowCount": 1,
  "TotalPages": 1,
  "RequestId": "e5165f29-7e6f-45b4-96fe-f303df9ca180",
  "Accounts": [
    {
      "AccountFullName": "AccountFullName8",
      "AccountId": 28,
      "AccountNumber": "AccountNumber0",
      "AccountShortName": "AccountShortName2",
      "BestOfIndicator": false
    }
  ],
  "Error": {
    "Code": "Code4",
    "Description": "Description2"
  }
}
```

