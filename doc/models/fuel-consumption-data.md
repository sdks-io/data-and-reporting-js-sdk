
# Fuel Consumption Data

## Structure

`FuelConsumptionData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `payerName` | `string \| null \| undefined` | Optional | Payment customer Name |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number |
| `cardNumber` | `string \| null \| undefined` | Optional | Card PAN |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card group ID |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name |
| `driverName` | `string \| null \| undefined` | Optional | Driver name |
| `licenseNumber` | `string \| null \| undefined` | Optional | Vehicle registration number |
| `initialOdometer` | `number \| null \| undefined` | Optional | First transaction odometer reading |
| `lastOdometer` | `number \| null \| undefined` | Optional | Last transaction odometer reading |
| `distance` | `number \| null \| undefined` | Optional | Distance in  KM or Miles based on Customer and Colco Settings |
| `fuelConsumption` | `number \| null \| undefined` | Optional | Total Fuel Consumption. |
| `fuelNetAmount` | `number \| null \| undefined` | Optional | Net Fuel Amount |
| `discount` | `number \| null \| undefined` | Optional | Total Discount |
| `fuelTax` | `number \| null \| undefined` | Optional | Fuel Tax Amount |
| `fuelVolume` | `number \| null \| undefined` | Optional | Total Fuel Volume in Litres |
| `grossNonFuelExpenses` | `number \| null \| undefined` | Optional | Gross Nonfuel Amount |
| `cO2Produced` | `number \| null \| undefined` | Optional | Total Co2 produced |
| `transactionCount` | `number \| null \| undefined` | Optional | Total Transaction Count |

## Example (as JSON)

```json
{
  "AccountName": "AccountName0",
  "AccountNumber": "AccountNumber4",
  "PayerName": "PayerName8",
  "PayerNumber": "PayerNumber2",
  "CardNumber": "CardNumber2"
}
```

