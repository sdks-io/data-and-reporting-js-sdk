
# Statement of Account Resp

## Structure

`StatementOfAccountResp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastStatementOfAccount` | [`LastStatementOfAccount \| undefined`](../../doc/models/last-statement-of-account.md) | Optional | Latest statement of the account generated for the given Payer. |
| `monthlyInvoiceTrend` | [`MonthlyInvoiceTrend[] \| null \| undefined`](../../doc/models/monthly-invoice-trend.md) | Optional | - |
| `pastStatementOfAccounts` | [`PastStatementOfAccounts[] \| undefined`](../../doc/models/past-statement-of-accounts.md) | Optional | - |
| `paymentsSinceLastSOA` | [`PaymentsSinceLastSOA[] \| null \| undefined`](../../doc/models/payments-since-last-soa.md) | Optional | - |
| `invoicesSummaries` | [`InvoicesSummaries[] \| null \| undefined`](../../doc/models/invoices-summaries.md) | Optional | - |

## Example (as JSON)

```json
{
  "LastStatementOfAccount": {
    "AmountDue": 220.3,
    "AmountNotOverdue": 42.96,
    "AmountOverdue": 58.04,
    "CreditLimit": 162,
    "CreditLimitCurrencyCode": "CreditLimitCurrencyCode4"
  },
  "MonthlyInvoiceTrend": [
    {
      "CurrencyCode": "CurrencyCode8",
      "CurrencySymbol": "CurrencySymbol4",
      "Month": 36,
      "TotalNetAmount": 98.02,
      "TotalVATAmount": 158.14
    }
  ],
  "PastStatementOfAccounts": [
    {
      "AmountDue": 208.8,
      "AmountNotOverdue": 54.46,
      "AmountOverdue": 69.54,
      "AmountOverdueFromUnallocated": 130.1,
      "AmountPaid": 138.64
    }
  ],
  "PaymentsSinceLastSOA": [
    {
      "AccountId": 0,
      "AccountNumber": "AccountNumber4",
      "AccountShortName": "AccountShortName6",
      "SummaryDocumentId": 92,
      "SummaryDocumentNumber": "SummaryDocumentNumber8"
    },
    {
      "AccountId": 0,
      "AccountNumber": "AccountNumber4",
      "AccountShortName": "AccountShortName6",
      "SummaryDocumentId": 92,
      "SummaryDocumentNumber": "SummaryDocumentNumber8"
    },
    {
      "AccountId": 0,
      "AccountNumber": "AccountNumber4",
      "AccountShortName": "AccountShortName6",
      "SummaryDocumentId": 92,
      "SummaryDocumentNumber": "SummaryDocumentNumber8"
    }
  ],
  "InvoicesSummaries": [
    {
      "AmountDue": 132.62,
      "AmountNotOverdue": 125.36,
      "AmountOverdue": 110.28,
      "AmountPaid": 62.46,
      "BillingCurrencyCode": "BillingCurrencyCode0"
    },
    {
      "AmountDue": 132.62,
      "AmountNotOverdue": 125.36,
      "AmountOverdue": 110.28,
      "AmountPaid": 62.46,
      "BillingCurrencyCode": "BillingCurrencyCode0"
    }
  ]
}
```

