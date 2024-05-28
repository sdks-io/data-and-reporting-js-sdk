
# Fuel Consumption Response

## Structure

`FuelConsumptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fuelConsumption` | [`FuelConsumptionData[] \| undefined`](../../doc/models/fuel-consumption-data.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |

## Example (as JSON)

```json
{
  "FuelConsumption": [
    {
      "AccountName": "AccountName6",
      "AccountNumber": "AccountNumber0",
      "PayerName": "PayerName2",
      "PayerNumber": "PayerNumber8",
      "CardNumber": "CardNumber8"
    }
  ],
  "Error": {
    "Code": "Code4",
    "Description": "Description2"
  },
  "RequestId": "RequestId4"
}
```

