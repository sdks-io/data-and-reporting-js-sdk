
# Recent Transaction Req

## Structure

`RecentTransactionReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null` | Required | Three character Collecting Company Code (Shell Code) of the selected payer |
| `payerNumber` | `string \| null` | Required | Unique Identifier for the customer at payment point.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `accountNumber` | `string \| null \| undefined` | Optional | Customer account number. |
| `productCode` | `string \| null \| undefined` | Optional | Global product code |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Delco country<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `cardPAN` | `string \| null \| undefined` | Optional | Card identifier number masked |
| `fromDateTime` | `string \| null \| undefined` | Optional | Start date and time of transactions |
| `toDateTime` | `string \| null \| undefined` | Optional | End date and time of transactions. Mandatory if FromDateTime is provided. |
| `transactionStatus` | `string \| null \| undefined` | Optional | Status of transaction. DO NOT pass the value if includeDeclines is passed |
| `fuelOnly` | `string \| null \| undefined` | Optional | When passed as ‘true’ Only returned records with Fuel transactions.(All Fuels).When passed as ‘false’ the above condition will not be checked. (Both All Fuels and Non-Fuel) |
| `productGroupName` | `string \| null \| undefined` | Optional | Product group name |
| `vehicleRegistrationNumber` | `string \| null \| undefined` | Optional | Vehicle registration number embossed on the card |
| `includeDeclines` | `boolean \| null \| undefined` | Optional | Flag to enable to get declined records |
| `cardIssuerName` | `string \| null \| undefined` | Optional | Card issuer name |
| `columnList` | `string \| undefined` | Optional | Column list to be part of response, it can be 'All' to return all possible column. E.g. 'All'<br><br>To get specific columns pass multiple columns name separated by comma along with 'PayerNumber'. E.g. "PayerNumber,ProductCode" |

## Example (as JSON)

```json
{
  "ColCoCode": 14,
  "PayerNumber": "GB00001232",
  "AccountNumber": "GB00001233",
  "ProductCode": "22",
  "PurchasedInCountry": "GB",
  "CardPAN": "700205******890645",
  "FromDateTime": "2020-11-09 13:56:03.000",
  "ToDateTime": "2020-12-09 13:56:03.000",
  "TransactionStatus": "APPROVED",
  "FuelOnly": "False",
  "ProductGroupName": "Motor gasoline",
  "VehicleRegistrationNumber": "YG67OUM",
  "IncludeDeclines": true,
  "CardIssuerName": "Mathew",
  "ColumnList": "PayerNumber,AccountNumber,ProductName,FuelVolume,PAN"
}
```

