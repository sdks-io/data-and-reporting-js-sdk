
# Priced Trans Summary Response Transactions Summary Items

## Structure

`PricedTransSummaryResponseTransactionsSummaryItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number \| null \| undefined` | Optional | Product Id |
| `productCode` | `string \| null \| undefined` | Optional | Product Code<br>Examples:<br>10	TMF Charges<br>11	Tunnel/Bridges<br>12	Motorway toll<br>13	Ferries |
| `productName` | `string \| null \| undefined` | Optional | Product Name<br>Examples:<br>Unleaded - High octane<br>Unleaded - Medium octane<br>Unleaded - Low octane<br>Unleaded Environmental |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id<br>Example:<br>1	Parent Product Group<br>2	All Fuels<br>3	Motor gasoline<br>4	2 stroke<br>5	Autogas<br>6	CNG |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name<br>Example:<br>1	Parent Product Group<br>2	All Fuels<br>3	Motor gasoline<br>4	2 stroke<br>5	Autogas<br>6	CNG<br>7	Automotive Gas Oil |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id<br>Example: 202 |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site Group Name<br>Example: CZ 9100 ECONOMY NETWORK |
| `totalFuelQuantity` | `number \| null \| undefined` | Optional | Total Fuel Quantity |
| `totalNetAmount` | `number \| null \| undefined` | Optional | Total Net amount in invoice currency |
| `totalGrossAmount` | `number \| null \| undefined` | Optional | Total Gross amount in invoice currency |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code<br>Example: GBP |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code<br>Example: £, $ |
| `customerRetailValueTotalNet` | `number \| null \| undefined` | Optional | Sum of the retail net price |
| `customerRetailValueTotalGross` | `number \| null \| undefined` | Optional | Sum of the retail gross price |

## Example (as JSON)

```json
{
  "ProductId": 164,
  "ProductCode": "ProductCode2",
  "ProductName": "ProductName8",
  "ProductGroupId": 92,
  "ProductGroupName": "ProductGroupName4"
}
```

