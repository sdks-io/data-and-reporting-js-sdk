
# Pricing Current Volume

## Structure

`PricingCurrentVolume`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeRuleId` | `number \| null \| undefined` | Optional | Bonus or association bonus configuration identifier  that is associated to the payer. |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Bonus or association bonus configuration description that is associated to the payer |
| `priceRuleID` | `number \| null \| undefined` | Optional | Pricing current period Pricing Price Rule ID that is associated to the payer. |
| `priceRuleDescription` | `string \| null \| undefined` | Optional | Pricing current period pricing rule description that is associated to the payer |
| `totalVolume` | `number \| null \| undefined` | Optional | Total volume consumption for the current period. |
| `nextFeeCreationDate` | `string \| null \| undefined` | Optional | Next Fee Rule Creation Date for that is associated to the payer.<br>Format: YYYYMMDD |

## Example (as JSON)

```json
{
  "FeeRuleId": 134,
  "FeeRuleDescription": "FeeRuleDescription4",
  "PriceRuleID": 96,
  "PriceRuleDescription": "PriceRuleDescription6",
  "TotalVolume": 64.96
}
```

