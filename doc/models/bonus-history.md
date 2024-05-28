
# Bonus History

## Structure

`BonusHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer |
| `payerShortName` | `string \| null \| undefined` | Optional | Payer short name. |
| `payerFullName` | `string \| null \| undefined` | Optional | Payer full name. |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the selected payer. |
| `accountShortName` | `string \| null \| undefined` | Optional | Account short name. |
| `accountFullName` | `string \| null \| undefined` | Optional | Account full name. |
| `invoiceAccountId` | `number \| null \| undefined` | Optional | Invoice Account Id |
| `invoiceAccountNumber` | `string \| null \| undefined` | Optional | Invoice Account Number of the selected payer. |
| `invoiceAccountShortName` | `string \| null \| undefined` | Optional | Invoice Account short name. |
| `invoiceAccountFullName` | `string \| null \| undefined` | Optional | Invoice Account full name. |
| `feeRuleId` | `string \| null \| undefined` | Optional | Bonus or association bonus configuration identifier |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Bonus or association bonus configuration description that is associated to the bonus fee item |
| `fromDate` | `string \| null \| undefined` | Optional | Bonus was calculated from this date.<br>Format: YYYYMMDD |
| `toDate` | `string \| null \| undefined` | Optional | Bonus was calculated till this date.<br>Format: YYYYMMDD |
| `bonusPaidTo` | `string \| null \| undefined` | Optional | Specifies how the bonus was paid back.<br>Format: ID-Description<br>Example:<br>1-Pay to Payer<br>2-Pay to invoice levels before the payer<br>3-Pay to specific customer<br>4-Pay to Association Customer<br>5-Pay to Associated Customers |
| `feeItemId` | `number \| null \| undefined` | Optional | Bonus fee item identifier. |
| `feeRuleBasis` | `string \| null \| undefined` | Optional | Fee Rule Basis of the bonus fee item.<br>Format: ID-Description<br>Example:<br>1-Currency Per Unit<br>2-Percentage of Uplift<br>3-Lump Sum |
| `feeItemCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the currency in which Bonus is paid.<br>Example: GBP |
| `feeItemCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the currency in which Bonus is paid. |
| `proratedVolume` | `number \| null \| undefined` | Optional | Prorated volume considered under the account as  configured for the bonus association. |
| `totalVolume` | `number \| null \| undefined` | Optional | Total volume considered for calculating the bonus. |
| `feeProduct` | `string \| null \| undefined` | Optional | Product as shown in the invoice for the bonus paid.<br>Format: ID-Description<br>Example: 1562-Bonus diesel Shell Netherlands on agreed site(s) |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Gross Amount – Bonus Paid including VAT as shown on the Invoice |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Net Amount – Bonus Paid excluding VAT as shown on the Invoice |
| `invoiceVATAmount` | `number \| null \| undefined` | Optional | VAT calculated for the bonus paid as shown on the Invoice |
| `isFeeCancelled` | `boolean \| null \| undefined` | Optional | True/False<br>True if bonus is generated but cancelled. When true, consider this as not paid. |
| `feeItemTierProratedVolume` | `number \| null \| undefined` | Optional | Prorated volume in the bonus fee item tier. |
| `feeItemTierTotalVolume` | `number \| null \| undefined` | Optional | Total volume in the bonus fee item tier. |
| `tierMinimum` | `number \| null \| undefined` | Optional | Tier minimum value considered for calculation |
| `tierRate` | `number \| null \| undefined` | Optional | Tier rate considered for calculation |

## Example (as JSON)

```json
{
  "PayerId": 240,
  "PayerNumber": "PayerNumber0",
  "PayerShortName": "PayerShortName4",
  "PayerFullName": "PayerFullName0",
  "AccountId": 44
}
```

