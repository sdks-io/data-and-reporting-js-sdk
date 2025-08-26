
# Fee Summary Response

## Structure

`FeeSummaryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`FeeItemSummaryAllOf0[] \| undefined`](../../doc/models/fee-item-summary-all-of-0.md) | Optional | - |
| `warnings` | [`Warning[] \| undefined`](../../doc/models/warning.md) | Optional | A list of Warning entity.<br>This entity will hold the details of the scheduled System Outages of any dependent applications of this service.<br>Note: If there is no scheduled outage information available, in the configuration in AMS, for this service, this parameter won’t be present in output. |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "FeeTypeGroup": "FeeTypeGroup0",
      "FeeTypeId": "FeeTypeId8",
      "ProductId": 84,
      "ProductCode": "ProductCode4",
      "ProductName": "ProductName4"
    },
    {
      "FeeTypeGroup": "FeeTypeGroup0",
      "FeeTypeId": "FeeTypeId8",
      "ProductId": 84,
      "ProductCode": "ProductCode4",
      "ProductName": "ProductName4"
    },
    {
      "FeeTypeGroup": "FeeTypeGroup0",
      "FeeTypeId": "FeeTypeId8",
      "ProductId": 84,
      "ProductCode": "ProductCode4",
      "ProductName": "ProductName4"
    }
  ],
  "Warnings": [
    {
      "Message": "Message0",
      "Type": "Type4"
    },
    {
      "Message": "Message0",
      "Type": "Type4"
    }
  ]
}
```

