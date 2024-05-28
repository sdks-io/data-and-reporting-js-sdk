
# Invoice Search Response

## Structure

`InvoiceSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | API Request Id |
| `status` | `string \| null \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCES, FAILED |
| `data` | [`InvoiceSearchDetails[] \| undefined`](../../doc/models/invoice-search-details.md) | Optional | - |
| `page` | `number \| null \| undefined` | Optional | Specifies the returned page of the results |
| `pageSize` | `number \| null \| undefined` | Optional | Specifies the number of records to be returned which could be less than the PageSize in the request |
| `totalRecords` | `number \| null \| undefined` | Optional | Specifies the total records available in the result |
| `totalPages` | `number \| null \| undefined` | Optional | Specifies the total pages available in the result |

## Example (as JSON)

```json
{
  "RequestId": "RequestId0",
  "Status": "Status6",
  "Data": [
    {
      "AccountFullName": "AccountFullName6",
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "AccountShortName": "AccountShortName0",
      "ColCoId": 210
    },
    {
      "AccountFullName": "AccountFullName6",
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "AccountShortName": "AccountShortName0",
      "ColCoId": 210
    },
    {
      "AccountFullName": "AccountFullName6",
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "AccountShortName": "AccountShortName0",
      "ColCoId": 210
    }
  ],
  "Page": 226,
  "PageSize": 206
}
```

