
# Invoices Summaries

## Structure

`InvoicesSummaries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountDue` | `number \| null \| undefined` | Optional | Amount due from last summary document date. |
| `amountNotOverdue` | `number \| null \| undefined` | Optional | Amount that are due from past summary documents. |
| `amountOverdue` | `number \| null \| undefined` | Optional | Amount that are overdue from past summary documents. |
| `amountPaid` | `number \| null \| undefined` | Optional | Total amount paid in billing currency. |
| `billingCurrencyCode` | `string \| null \| undefined` | Optional | Billing currency ISO code. |
| `billingCurrencySymbol` | `string \| null \| undefined` | Optional | Billing currency symbol.<br>Example: € |
| `outstandingBalance` | `number \| null \| undefined` | Optional | Current outstanding balance amount |
| `paymentDueDate` | `string \| null \| undefined` | Optional | Payment due date.<br>Format: YYYYMMDD |
| `summaryDocumentDate` | `string \| null \| undefined` | Optional | Summary document date.<br>Format: YYYYMMDD |
| `totalBillingDocuments` | `number \| null \| undefined` | Optional | Total number of invoices generated on this date. |
| `totalGrossAmountBillingCurrency` | `number \| null \| undefined` | Optional | Total gross amount in billing currency. |
| `totalNetAmountBillingCurrency` | `number \| null \| undefined` | Optional | Total net amount in billing currency. |
| `totalSummaryDocuments` | `number \| null \| undefined` | Optional | Total number of summary documents generated on this date. |
| `totalVATAmountBillingCurrency` | `number \| null \| undefined` | Optional | Total VAT amount in billing currency. |

## Example (as JSON)

```json
{
  "AmountDue": 132.62,
  "AmountNotOverdue": 125.36,
  "AmountOverdue": 110.28,
  "AmountPaid": 62.46,
  "BillingCurrencyCode": "BillingCurrencyCode0"
}
```

