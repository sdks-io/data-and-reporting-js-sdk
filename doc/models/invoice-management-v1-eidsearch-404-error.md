
# Invoice Management V1 Eidsearch 404 Error

## Structure

`InvoiceManagementV1Eidsearch404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique request identifier passed from end user. This identifier helps in tracing a transaction |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCES, FAILED, PARTIAL_SUCCESS |
| `errors` | [`ErrorDetails[] \| undefined`](../../doc/models/error-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "RequestId0",
  "Status": "Status6",
  "Errors": [
    {
      "Code": "Code4",
      "Title": "Title6",
      "Detail": "Detail6",
      "AdditionalInfo": {
        "key0": "AdditionalInfo0",
        "key1": "AdditionalInfo1",
        "key2": "AdditionalInfo2"
      }
    }
  ]
}
```

