
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
      "CardTypeId": 236,
      "TokenTypeId": 168,
      "CardTypeName": "CardTypeName6",
      "TokenTypeName": "TokenTypeName8",
      "PANLength": 32
    }
  ]
}
```

