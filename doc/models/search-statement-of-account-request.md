
# Search Statement of Account Request

## Structure

`SearchStatementOfAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`SearchSOAReq \| undefined`](../../doc/models/search-soa-req.md) | Optional | - |
| `page` | `number \| undefined` | Optional | Page number |
| `pageSize` | `number \| undefined` | Optional | Number of records in page |

## Example (as JSON)

```json
{
  "Filters": {
    "ColCoCode": 14,
    "PayerNumber": "PayerNumber0",
    "InvoiceNumber": "InvoiceNumber0",
    "FromDate": "FromDate6",
    "ToDate": "ToDate4"
  },
  "Page": 114,
  "PageSize": 94
}
```

