
# Volume Based Bonus Res

## Structure

`VolumeBasedBonusRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`VolumeBasedBonusResponse[] \| undefined`](../../doc/models/volume-based-bonus-response.md) | Optional | - |
| `warnings` | [`Warning[] \| undefined`](../../doc/models/warning.md) | Optional | A list of Warning entity.<br>This entity will hold the details of the scheduled System Outages of any dependent applications of this service.<br>Note: If there is no scheduled outage information available, in the configuration in AMS, for this service, this parameter won’t be present in output. |

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
          "Month": 174,
          "Year": "Year2",
          "TotalVolume": 254.28
        }
      ],
      "HistoricalBonusPaid": [
        {
          "PayerId": 156,
          "PayerNumber": "PayerNumber0",
          "PayerShortName": "PayerShortName4",
          "PayerFullName": "PayerFullName0",
          "AccountId": 216
        },
        {
          "PayerId": 156,
          "PayerNumber": "PayerNumber0",
          "PayerShortName": "PayerShortName4",
          "PayerFullName": "PayerFullName0",
          "AccountId": 216
        },
        {
          "PayerId": 156,
          "PayerNumber": "PayerNumber0",
          "PayerShortName": "PayerShortName4",
          "PayerFullName": "PayerFullName0",
          "AccountId": 216
        }
      ]
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
```

