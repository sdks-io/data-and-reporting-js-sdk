
# Card Usage Summary Response

## Structure

`CardUsageSummaryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usageSummary` | [`UsageSummary[] \| undefined`](../../doc/models/usage-summary.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "UsageSummary": [
    {
      "Date": "Date0",
      "ProductId": 198,
      "ProductCode": "ProductCode6",
      "ProductName": "ProductName6",
      "IsFuelProduct": false
    },
    {
      "Date": "Date0",
      "ProductId": 198,
      "ProductCode": "ProductCode6",
      "ProductName": "ProductName6",
      "IsFuelProduct": false
    },
    {
      "Date": "Date0",
      "ProductId": 198,
      "ProductCode": "ProductCode6",
      "ProductName": "ProductName6",
      "IsFuelProduct": false
    }
  ],
  "RequestId": "RequestId2",
  "Error": {
    "Code": "Code4",
    "Description": "Description2"
  }
}
```

