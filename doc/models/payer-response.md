
# Payer Response

## Structure

`PayerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `payers` | [`PayerDetails[] \| undefined`](../../doc/models/payer-details.md) | Optional | - |
| `currentPage` | `number \| undefined` | Optional | Current Page |
| `rowCount` | `number \| undefined` | Optional | Total row count matched for the given input criteria |
| `totalPages` | `number \| undefined` | Optional | Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria. Return 1 if the page size is -1 as all records are returned |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "CurrentPage": 1,
  "RowCount": 1,
  "TotalPages": 1,
  "Payers": [
    {
      "ColCoId": 78,
      "ColCoCode": 92,
      "CountryCode": "CountryCode8",
      "Country": "Country2",
      "PayerId": 126
    },
    {
      "ColCoId": 78,
      "ColCoCode": 92,
      "CountryCode": "CountryCode8",
      "Country": "Country2",
      "PayerId": 126
    },
    {
      "ColCoId": 78,
      "ColCoCode": 92,
      "CountryCode": "CountryCode8",
      "Country": "Country2",
      "PayerId": 126
    }
  ]
}
```

