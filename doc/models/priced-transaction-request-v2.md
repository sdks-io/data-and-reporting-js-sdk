
# Priced Transaction Request V2

## Structure

`PricedTransactionRequestV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`Filters \| undefined`](../../doc/models/filters.md) | Optional | - |
| `page` | `number \| undefined` | Optional | Specify the page of results to be returned. |
| `pageSize` | `number \| undefined` | Optional | Specify the number of records to returned; Max 1000 |

## Example (as JSON)

```json
{
  "Filters": {
    "ColCoCode": "ColCoCode8",
    "ColCoId": 0,
    "InvoiceStatus": "U",
    "PayerNumber": "PayerNumber0",
    "AccountId": 108,
    "AccountNumber": "AccountNumber2",
    "DriverName": "DriverName8",
    "CardId": 14
  },
  "Page": 230,
  "PageSize": 210
}
```

