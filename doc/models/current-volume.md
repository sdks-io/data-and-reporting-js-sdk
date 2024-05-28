
# Current Volume

## Structure

`CurrentVolume`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeRuleId` | `number \| null \| undefined` | Optional | Bonus or association bonus configuration identifier that is associated to the payer |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Bonus or association bonus configuration description that is associated to the payer. |
| `month` | `number \| null \| undefined` | Optional | Consumption(Volume) of the month. |
| `year` | `string \| null \| undefined` | Optional | Consumption (Volume) of the year. |
| `totalVolume` | `number \| null \| undefined` | Optional | Total volume consumption for the month/year above. |

## Example (as JSON)

```json
{
  "FeeRuleId": 74,
  "FeeRuleDescription": "FeeRuleDescription8",
  "Month": 138,
  "Year": "Year2",
  "TotalVolume": 115.68
}
```

