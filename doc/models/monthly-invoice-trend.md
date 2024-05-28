
# Monthly Invoice Trend

## Structure

`MonthlyInvoiceTrend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO code of invoice currency.<br>Example: EUR |
| `currencySymbol` | `string \| null \| undefined` | Optional | Symbol of invoice currency.<br>Example: € |
| `month` | `number \| null \| undefined` | Optional | Month. |
| `totalNetAmount` | `number \| null \| undefined` | Optional | Total net amount invoiced in this month. |
| `totalVATAmount` | `number \| null \| undefined` | Optional | Total VAT amount invoiced in this month. |
| `year` | `number \| null \| undefined` | Optional | Year. |

## Example (as JSON)

```json
{
  "CurrencyCode": "CurrencyCode8",
  "CurrencySymbol": "CurrencySymbol4",
  "Month": 36,
  "TotalNetAmount": 98.02,
  "TotalVATAmount": 158.14
}
```

