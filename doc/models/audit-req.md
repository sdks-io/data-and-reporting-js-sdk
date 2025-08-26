
# Audit Req

## Structure

`AuditReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`AuditRequest \| undefined`](../../doc/models/audit-request.md) | Optional | - |
| `page` | `number \| null \| undefined` | Optional | Page Number (as shown to the users)<br><br>**Default**: `1` |
| `pageSize` | `number \| null \| undefined` | Optional | Page Size – Number of records to show on a page.<br><br>**Default**: `50` |

## Example (as JSON)

```json
{
  "Page": 1,
  "PageSize": 100,
  "Filters": {
    "Status": "Status6",
    "PayerNumber": "PayerNumber0",
    "PayerId": 48,
    "AccountNumber": "AccountNumber2",
    "ColCoCode": 14
  }
}
```

