
# Priced Transaction Response V2

## Structure

`PricedTransactionResponseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the req |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request |
| `data` | [`PricedResponseData[] \| undefined`](../../doc/models/priced-response-data.md) | Optional | - |
| `page` | `number \| undefined` | Optional | Current page |
| `pageSize` | `number \| undefined` | Optional | Number of records returned in the response |
| `totalPages` | `number \| undefined` | Optional | Total number of pages available for the requested data |

## Example (as JSON)

```json
{
  "RequestId": "RequestId6",
  "Status": "Status0",
  "Data": [
    {
      "AccountName": "AccountName4",
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "AccountShortName": "AccountShortName0",
      "Additional1": "Additional10"
    }
  ],
  "Page": 122,
  "PageSize": 102
}
```

