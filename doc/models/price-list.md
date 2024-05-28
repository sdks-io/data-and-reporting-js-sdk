
# Price List

## Structure

`PriceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| null \| undefined` | Optional | Date on which the price is applicable.<br>Format: yyyyMMdd<br>E.g.: 20180131 |
| `day` | `string \| null \| undefined` | Optional | Day on which the price is applicable.<br>E.g.: Sunday, Monday etc. |
| `type` | `string \| null \| undefined` | Optional | Price list type.<br>E.g., List, Shell Standard International List |
| `priceListId` | `number \| null \| undefined` | Optional | Price list ID |
| `priceListDescription` | `string \| null \| undefined` | Optional | Price list description<br>E.g., UK Fuels CRT Reseller List Price |
| `priceRuleId` | `number \| null \| undefined` | Optional | Price Rule Id |
| `priceRuleName` | `string \| null \| undefined` | Optional | Price Rule Name |
| `delCoId` | `number \| null \| undefined` | Optional | DelCo Id |
| `countryCode` | `string \| null \| undefined` | Optional | Country ISO Code<br>E.g., UK, NL, etc., |
| `country` | `string \| null \| undefined` | Optional | Country<br>E.g., United Kingdom, Netherlands etc |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group name |
| `productCode` | `string \| null \| undefined` | Optional | Client Product Code |
| `productId` | `number \| null \| undefined` | Optional | Product Id |
| `productName` | `string \| null \| undefined` | Optional | Product name in English |
| `pricePerUnit` | `number \| null \| undefined` | Optional | Price per unit |
| `currencyCode` | `string \| null \| undefined` | Optional | Currency Code.<br>Format : 3 digit ISO code |
| `currencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol<br>Example: £ |
| `priceType` | `string \| null \| undefined` | Optional | Price Type<br>Possible Values are:<br>•	Country– Price rule defined at country whereas Price Rule DelcoId same as ColcoId.<br>•	TPNDelcoPrice – Price rule defined in the TPN whereas Price Rule DelcoId is different from ColcoId.<br>•	NetworkPrice – Price rule defined at Fuel Network level.<br>•	Other – Price rule defined at either Site or SiteGroup level. |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site-Group ID<br>E.g.: 100007 |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site-Group name |
| `siteCode` | `number \| null \| undefined` | Optional | Site Code |
| `siteId` | `number \| null \| undefined` | Optional | Site ID |
| `siteName` | `string \| null \| undefined` | Optional | Site Name |
| `fuelNetworkId` | `number \| null \| undefined` | Optional | Fuel Network ID |
| `networkName` | `string \| null \| undefined` | Optional | Network Name |
| `priceRuleDelcoId` | `number \| null \| undefined` | Optional | PriceRuleDelcoId |
| `priceRuleDelcoName` | `string \| null \| undefined` | Optional | Company Name of the price rule DelCo.<br><br>E.g.:<br>•	Pilipinas Shell Petroleum Corp<br>•	Shell U.K. Oil Products Limited<br>•	G & V SERVICE STATIONS NV |
| `priceRuleCountry` | `string \| null \| undefined` | Optional | PriceRuleCountry<br>E.g.: United Kingdom |
| `priceRuleCountryCode` | `string \| null \| undefined` | Optional | ISO Code of PriceRuleCountry<br>E.g.: UK, NL, etc., |
| `priceRuleBasisId` | `number \| null \| undefined` | Optional | PriceRuleBasisId |
| `discountValue` | `number \| null \| undefined` | Optional | Discount value |
| `pricePerUnitAfterDiscount` | `number \| null \| undefined` | Optional | Price per unit after discount |
| `vATPercentage` | `number \| null \| undefined` | Optional | VAT Percentage |
| `priceRuleCategoryId` | `number \| null \| undefined` | Optional | PriceRuleCategoryId |
| `tiers` | [`Tier[] \| undefined`](../../doc/models/tier.md) | Optional | - |

## Example (as JSON)

```json
{
  "Date": "Date8",
  "Day": "Day4",
  "Type": "Type0",
  "PriceListId": 210,
  "PriceListDescription": "PriceListDescription0"
}
```

