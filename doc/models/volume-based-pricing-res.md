
# Volume Based Pricing Res

## Structure

`VolumeBasedPricingRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`VolumeBasedPricingResponse[] \| undefined`](../../doc/models/volume-based-pricing-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "Configuration": [
        {
          "PricingAccountId": 94,
          "PricingAccountNumber": "PricingAccountNumber0",
          "PricingAccountShortName": "PricingAccountShortName2",
          "PricingAccountFullName": "PricingAccountFullName8",
          "FeeRuleId": 254
        },
        {
          "PricingAccountId": 94,
          "PricingAccountNumber": "PricingAccountNumber0",
          "PricingAccountShortName": "PricingAccountShortName2",
          "PricingAccountFullName": "PricingAccountFullName8",
          "FeeRuleId": 254
        }
      ],
      "CurrentPeriodConsumption": [
        {
          "FeeRuleId": 146,
          "FeeRuleDescription": "FeeRuleDescription8",
          "PriceRuleID": 84,
          "PriceRuleDescription": "PriceRuleDescription8",
          "TotalVolume": 254.28
        }
      ],
      "History": [
        {
          "FromDate": "FromDate6",
          "ToDate": "ToDate4",
          "FeesRuleID": 136,
          "FeesRuleDescription": "FeesRuleDescription0",
          "TotalVolume": 24.18
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
        },
        {
          "Message": "Message0",
          "Type": "Type4"
        }
      ]
    }
  ]
}
```

