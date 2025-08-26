
# Account Req

## Structure

`AccountReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`AccountRequest \| undefined`](../../doc/models/account-request.md) | Optional | - |
| `page` | `number \| null \| undefined` | Optional | Page Number (as shown to the users)<br><br>**Default**: `1` |
| `pageSize` | `number \| null \| undefined` | Optional | Page Size – Number of records to show on a page.<br><br>**Default**: `50` |

## Example (as JSON)

```json
{
  "Page": 1,
  "PageSize": 100,
  "Filters": {
    "Status": "Status6",
    "IncludeCardSummary": false,
    "PayerId": 48,
    "PayerNumber": "PayerNumber0",
    "PageSize": 56
  }
}
```

