
# Usage Summary

## Structure

`UsageSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| null \| undefined` | Optional | Transaction date.<br>The records will be sorted by this field in ascending order.<br><br>Format: yyyyMMdd |
| `productId` | `number \| null \| undefined` | Optional | Product Id |
| `productCode` | `string \| null \| undefined` | Optional | Client Product code |
| `productName` | `string \| null \| undefined` | Optional | Product name in English |
| `isFuelProduct` | `boolean \| null \| undefined` | Optional | Whether the product is fuel or non-fuel |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site Group Name |
| `totalVolume` | `number \| null \| undefined` | Optional | Total Volume |
| `totalGross` | `number \| null \| undefined` | Optional | Total Gross in Customer Currency |
| `totalNet` | `number \| null \| undefined` | Optional | Total Net in Customer Currency |
| `currencyCode` | `string \| null \| undefined` | Optional | Customer Currency Code |
| `currencySymbol` | `string \| null \| undefined` | Optional | Customer Currency Symbol |
| `productGroupID` | `number \| null \| undefined` | Optional | Product group ID |
| `productGroupName` | `string \| null \| undefined` | Optional | Product group Name |

## Example (as JSON)

```json
{
  "Date": "Date0",
  "ProductId": 198,
  "ProductCode": "ProductCode6",
  "ProductName": "ProductName6",
  "IsFuelProduct": false
}
```

