
# Last Statement of Account

Latest statement of the account generated for the given Payer.

## Structure

`LastStatementOfAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountDue` | `number \| null \| undefined` | Optional | Invoiced amount and due for payment. |
| `amountNotOverdue` | `number \| null \| undefined` | Optional | Invoiced amount and not overdue for payment. |
| `amountOverdue` | `number \| null \| undefined` | Optional | Invoiced amount and overdue for payment. |
| `creditLimit` | `number \| null \| undefined` | Optional | Credit limit. |
| `creditLimitCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of the credit limit’s currency.<br>Example: EUR |
| `creditLimitCurrencySymbol` | `string \| null \| undefined` | Optional | Symbol of the credit limit’s currency.<br>Example: € |
| `creditLimitInCustomerCurrency` | `number \| null \| undefined` | Optional | Credit limit in Customer currency.<br>**Note**: For currency details refer the parameters CurrencyCode & CurrencySymbol in the StatementOfAccount response. |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO code of SOA currency.<br>Example: EUR |
| `currencySymbol` | `string \| null \| undefined` | Optional | Symbol of SOA currency.<br>Example: € |
| `lastPaymentCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of Last Payment currency.<br>Example: EUR |
| `lastPaymentCurrencySymbol` | `string \| null \| undefined` | Optional | Symbol of Last Payment currency.<br>Example: € |
| `lastPaymentDate` | `string \| null \| undefined` | Optional | Last payment date. Format: yyyyMMdd |
| `lastPaymentValue` | `number \| null \| undefined` | Optional | Last payment value. |
| `outstandingBalance` | `number \| null \| undefined` | Optional | Current outstanding balance amount. |
| `payerId` | `number \| null \| undefined` | Optional | Payment customer id of the customer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number. |
| `paymentDueDate` | `string \| null \| undefined` | Optional | Due date for payment. Format: yyyyMMdd |
| `paymentMethod` | `string \| null \| undefined` | Optional | Payment method description of the Payer.<br>Example: Id & Description<br>•    Incoming - Direct Debit<br>•    Incoming - Cheque<br>•    Incoming - Direct Debit A<br>•    Incoming - Bank Transfer<br>•    Incoming - Cash |
| `paymentMethodId` | `number \| null \| undefined` | Optional | Payment method Id of the Payer.<br>Example: Id & Description<br>•    Incoming - Direct Debit<br>•    Incoming - Cheque<br>•    Incoming - Direct Debit A<br>•    Incoming - Bank Transfer<br>•    Incoming - Cash |
| `paymentTerms` | `string \| null \| undefined` | Optional | Payment terms description of the Payer.<br>Example: Id & Description<br>•    14 days after Invoice<br>•    15 days after Invoice<br>•    21 days after Invoice<br>•    30 days after Invoice<br>•    45 days after Invoice<br>•    0 days after invoice<br>•    days after invoice<br>•    days after invoice<br>•    7 days after invoice<br>•    10th of the following month |
| `paymentTermsId` | `number \| null \| undefined` | Optional | Payment terms Id of the Payer.<br>Example: Id & Description<br>•    14 days after Invoice<br>•    15 days after Invoice<br>•    21 days after Invoice<br>•    30 days after Invoice<br>•    45 days after Invoice<br>•    0 days after invoice<br>•    days after invoice<br>•    days after invoice<br>•    7 days after invoice<br>•    10th of the following month |
| `soAReferenceNumber` | `string \| null \| undefined` | Optional | Statement of account reference number |
| `statementDate` | `string \| null \| undefined` | Optional | Date on which the SOA was generated.<br>Format: yyyyMMdd |
| `statementOfAccountId` | `number \| null \| undefined` | Optional | Statement of account identifier,<br>Example: 1 |
| `totalBillingDocuments` | `number \| null \| undefined` | Optional | Total number of billing documents for this Statement of Account |
| `totalSummaryBillingDocuments` | `number \| null \| undefined` | Optional | Total number of summary billing documents for this Statement of Account |
| `unallocatedPayment` | `number \| null \| undefined` | Optional | Unallocated payment.<br>When negative, indicates overdue amount. |

## Example (as JSON)

```json
{
  "AmountDue": 220.3,
  "AmountNotOverdue": 42.96,
  "AmountOverdue": 58.04,
  "CreditLimit": 162,
  "CreditLimitCurrencyCode": "CreditLimitCurrencyCode4"
}
```

