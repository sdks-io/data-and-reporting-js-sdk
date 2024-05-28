
# Invoice Summary Details

## Structure

`InvoiceSummaryDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalInvoices` | `number \| null \| undefined` | Optional | Total number of invoices matching with the given search criteria. |
| `totalGrossAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Total gross amount in customer currency combined from all the invoices matching with the given search criteria. |
| `totalNetAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Total net amount in customer currency combined from all the invoices matching with the given search criteria. |
| `totalVATAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Total VAT amount in customer currency combined from all the invoices matching with the given search criteria. |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Customer currency ISO code.<br>Example: EUR |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency code.<br>Example: € |

## Example (as JSON)

```json
{
  "TotalInvoices": 122,
  "TotalGrossAmountCustomerCurrency": 134.06,
  "TotalNetAmountCustomerCurrency": 45.3,
  "TotalVATAmountCustomerCurrency": 48.56,
  "CustomerCurrencyCode": "CustomerCurrencyCode2"
}
```

