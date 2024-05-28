
# Fuel Consumption Card

## Structure

`FuelConsumptionCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `number \| undefined` | Optional | Card Id<br>Optional, when PAN is provided else mandatory. |
| `pAN` | `string \| undefined` | Optional | Full Card PAN<br>Optional, when CardId is provided else mandatory. |
| `expiryDate` | `string \| undefined` | Optional | Card Expiry Date<br>Format: yyyyMMdd |

## Example (as JSON)

```json
{
  "CardId": 54,
  "PAN": "PAN4",
  "ExpiryDate": "ExpiryDate4"
}
```

