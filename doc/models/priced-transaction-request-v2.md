
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
    "InvoiceStatus": {
      "key1": "val1",
      "key2": "val2"
    },
    "PayerNumber": "PayerNumber0",
    "AccountId": 108,
    "AccountNumber": "AccountNumber2",
    "DriverName": "DriverName8",
    "CardGroupId": 154,
    "CardPAN": "CardPAN8"
  },
  "Page": 230,
  "PageSize": 210
}
```

