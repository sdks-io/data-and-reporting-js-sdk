
# Pricing History

## Structure

`PricingHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromDate` | `string \| null \| undefined` | Optional | Pricing History Period Start date and should be the first date of the month.<br>Format: YYYYMMDD |
| `toDate` | `string \| null \| undefined` | Optional | Pricing History Period end date and should be the last date of the period month.<br>Format: YYYYMMDD |
| `feesRuleID` | `number \| null \| undefined` | Optional | Pricing History Period Fees Rule ID that is associated to the period of that associated payer.  <br>Example: 8101 |
| `feesRuleDescription` | `string \| null \| undefined` | Optional | Pricing History Period Fees Rule Description that is associated to the period of that associated payer. |
| `totalVolume` | `number \| null \| undefined` | Optional | Total Quantity for the Pricing History Period that is associated to that payer. |

## Example (as JSON)

```json
{
  "FromDate": "FromDate0",
  "ToDate": "ToDate0",
  "FeesRuleID": 44,
  "FeesRuleDescription": "FeesRuleDescription4",
  "TotalVolume": 153.82
}
```

