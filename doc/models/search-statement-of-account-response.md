
# Search Statement of Account Response

## Structure

`SearchStatementOfAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the req |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request |
| `data` | [`SearchStatementOfAccount[] \| undefined`](../../doc/models/search-statement-of-account.md) | Optional | - |
| `page` | `number \| undefined` | Optional | Current page |
| `totalRecords` | `number \| undefined` | Optional | Total Number of records in response |
| `totalPages` | `number \| undefined` | Optional | Total number of pages available for the requested data |
| `pageSize` | `number \| undefined` | Optional | Number of records returned in the response |

## Example (as JSON)

```json
{
  "RequestId": "RequestId6",
  "Status": "Status2",
  "Data": [
    {
      "StatementOfAccountId": 152,
      "SoAReferenceNumber": "SoAReferenceNumber6",
      "StatementDate": "StatementDate2",
      "PayerId": 2,
      "PayerNumber": "PayerNumber6"
    },
    {
      "StatementOfAccountId": 152,
      "SoAReferenceNumber": "SoAReferenceNumber6",
      "StatementDate": "StatementDate2",
      "PayerId": 2,
      "PayerNumber": "PayerNumber6"
    },
    {
      "StatementOfAccountId": 152,
      "SoAReferenceNumber": "SoAReferenceNumber6",
      "StatementDate": "StatementDate2",
      "PayerId": 2,
      "PayerNumber": "PayerNumber6"
    }
  ],
  "Page": 214,
  "TotalRecords": 118
}
```

