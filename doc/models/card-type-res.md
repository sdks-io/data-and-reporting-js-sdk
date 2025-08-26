
# Card Type Res

## Structure

`CardTypeRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`CardTypeResponseCustomerCardTypesItems[] \| undefined`](../../doc/models/card-type-response-customer-card-types-items.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "CanHavePIN": false,
      "CardTypeId": 236,
      "CardTypeName": "CardTypeName6",
      "ColCoCurrencyCode": "ColCoCurrencyCode0",
      "CustomerCardTypeId": 50
    }
  ]
}
```

