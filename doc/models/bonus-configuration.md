
# Bonus Configuration

## Structure

`BonusConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingAccountId` | `number \| null \| undefined` | Optional | Account identifier of the Pricing Account associated with the Payer. |
| `pricingAccountNumber` | `string \| null \| undefined` | Optional | Account number of the Pricing Account associated with the Payer. |
| `pricingAccountShortName` | `string \| null \| undefined` | Optional | Short name of the Pricing Account associated with the Payer. |
| `pricingAccountFullName` | `string \| null \| undefined` | Optional | Full name of the Pricing Account associated with the Payer. |
| `feeRuleId` | `number \| null \| undefined` | Optional | Bonus or association bonus configuration identifier that is associated to the payer. |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Bonus or association bonus configuration description that is associated to the payer. |
| `feeRuleDateEffective` | `string \| null \| undefined` | Optional | The bonus or association bonus configuration becomes effective on the payer from this date.<br>Format: YYYYMMDD |
| `feeRuleDateTerminated` | `string \| null \| undefined` | Optional | The bonus or association bonus configuration is terminated for the payer on this date.<br>Format: YYYYMMDD |
| `bonusPaidTo` | `string \| null \| undefined` | Optional | Configuration to specify how the bonus is paid.<br>Format: ID-Description<br>Example:<br>1-Pay to Payer<br>2-Pay to invoice levels before the payer<br>3-Pay to specific customer<br>4-Pay to Association Customer<br>5-Pay to Associated Customers |
| `bonusPaidToAccountId` | `number \| null \| undefined` | Optional | Account identifier of the specific account to which the bonus is paid back |
| `bonusPaidToAccountNumber` | `string \| null \| undefined` | Optional | Account number of the specific account to which the bonus is paid back |
| `bonusPaidToAccountShortName` | `string \| null \| undefined` | Optional | Short name of the specific account to which the bonus is paid back |
| `bonusPaidToAccountFullName` | `string \| null \| undefined` | Optional | Full name of the specific account to which the bonus is paid back |
| `frequency` | `string \| null \| undefined` | Optional | Frequency of the configuration.<br>Format: ID-Description<br>Examples:<br>1-Daily (all days)<br>2-Daily (only working days)<br>3-Weekly – Monday |
| `nextCalculationDate` | `string \| null \| undefined` | Optional | The next bonus is calculated for the payer on this date.<br>Format: YYYYMMDD |
| `previousCalculatedDate` | `string \| null \| undefined` | Optional | The previous bonus was calculated for the payer on this date.<br>Format: YYYYMMDD |
| `feeRuleBasis` | `string \| null \| undefined` | Optional | Fee Rule Basis configured.<br>Format: ID-Description<br>Example:<br>1-Currency Per Unit<br>2-Percentage of Uplift<br>3-Lump Sum |
| `feeRuleCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the currency configured in the Bonus Configuration, if any. |
| `feeRuleCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the currency configured in the Bonus Configuration, if any. |
| `feeRuleAvailableFrom` | `string \| null \| undefined` | Optional | This bonus or association bonus is available from this date.<br>Format: YYYYMMDD |
| `feeRuleAvailableTo` | `string \| null \| undefined` | Optional | This bonus or association bonus configuration will not be available from this date.<br>Format: YYYYMMDD |
| `feeRuleLocations` | [`FeeRuleLocation[] \| undefined`](../../doc/models/fee-rule-location.md) | Optional | - |
| `feeRuleTiers` | [`FeeRuleTier[] \| undefined`](../../doc/models/fee-rule-tier.md) | Optional | - |
| `associatedAccounts` | [`AssociatedAccount[] \| undefined`](../../doc/models/associated-account.md) | Optional | - |
| `feeRuleProducts` | [`FeeRuleProduct[] \| undefined`](../../doc/models/fee-rule-product.md) | Optional | - |

## Example (as JSON)

```json
{
  "PricingAccountId": 80,
  "PricingAccountNumber": "PricingAccountNumber0",
  "PricingAccountShortName": "PricingAccountShortName2",
  "PricingAccountFullName": "PricingAccountFullName8",
  "FeeRuleId": 12
}
```

