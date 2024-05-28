
# Tier

## Structure

`Tier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tierPriceListId` | `number \| null \| undefined` | Optional | The price list if reference price is list price.<br>Only used when the Price Rule category is set to.<br>‘Tiered Pricing’. |
| `priceListDescription` | `string \| null \| undefined` | Optional | Price list description of the tier. |
| `tierMin` | `number \| null \| undefined` | Optional | Minimum tier volume<br>E.g., 500 |
| `tierMax` | `number \| null \| undefined` | Optional | Maximum tier volume<br>E.g., 1000 |
| `tieredPricingGroupName` | `string \| null \| undefined` | Optional | Pricing group name of tier |
| `tieredPricingGroupPeriod` | `string \| null \| undefined` | Optional | Tiered pricing group period.<br>Possible Values<br><br>1. Monthly<br>2. Quarterly<br>3. Semi Annually<br>4. Annual |
| `discountValue` | `number \| null \| undefined` | Optional | Discount value to be applied to the List price or pump price. |
| `pricePerUnit` | `number \| null \| undefined` | Optional | Price per unit after discount<br>Note: This field will not contain any value for discounts on retail prices. |
| `pricePerUnitAfterDiscount` | `number \| null \| undefined` | Optional | Price per unit (List Price)<br>Note: This field will not contain any value for discounts on retail prices. |

## Example (as JSON)

```json
{
  "TierPriceListId": 46,
  "PriceListDescription": "PriceListDescription4",
  "TierMin": 186,
  "TierMax": 250,
  "TieredPricingGroupName": "TieredPricingGroupName2"
}
```

