
# Past Statement of Accounts

## Structure

`PastStatementOfAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountDue` | `number \| null \| undefined` | Optional | Invoiced amount under this statement of account and due for payment. |
| `amountNotOverdue` | `number \| null \| undefined` | Optional | Total Invoiced amount until this SOA and not overdue for payment. |
| `amountOverdue` | `number \| null \| undefined` | Optional | Overdue amount from the previously generated statement of accounts. |
| `amountOverdueFromUnallocated` | `number \| null \| undefined` | Optional | Overdue amount calculated from unallocated payment. |
| `amountPaid` | `number \| null \| undefined` | Optional | Amount settled for this Statement. |
| `balanceOnThisStatement` | `number \| null \| undefined` | Optional | Balance amount to be settled on this SOA. |
| `billingCurrencyCode` | `string \| null \| undefined` | Optional | Billing currency ISO code.<br>Example: EUR |
| `billingCurrencySymbol` | `string \| null \| undefined` | Optional | Billing currency symbol.<br>Example: € |
| `creditLimit` | `number \| null \| undefined` | Optional | Credit limit. |
| `creditLimitCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of the credit limit’s currency.<br>Example: EUR |
| `creditLimitCurrencySymbol` | `string \| null \| undefined` | Optional | Symbol of the credit limit’s currency.<br>Example: € |
| `creditLimitInCustomerCurrency` | `number \| null \| undefined` | Optional | Credit limit in Customer currency.<br>Note: For currency details refer the parameters CurrencyCode & CurrencySymbol in the SOADetail response. |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO code of SOA currency.<br>Example: EUR |
| `currencySymbol` | `string \| null \| undefined` | Optional | Symbol of SOA currency.<br>Example: € |
| `fullyPaid` | `boolean \| null \| undefined` | Optional | True If all summary billing documents under this SOA are fully paid (i.e., the fully paid flag is set to true for all documents or the amount allocated is greater than or equal to the amount due under this SOA. |
| `lastPaymentCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of last payment currency.<br>Example: EUR |
| `lastPaymentCurrencySymbol` | `string \| null \| undefined` | Optional | Symbol of last payment currency.<br>Example: € |
| `lastPaymentDate` | `string \| null \| undefined` | Optional | Last payment date. Format: yyyyMMdd |
| `lastPaymentValue` | `number \| null \| undefined` | Optional | Last payment value. |
| `outstandingBalance` | `number \| null \| undefined` | Optional | Total outstanding balance at the time of this SOA generation. |
| `payerId` | `number \| null \| undefined` | Optional | Payment customer id of the customer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number. |
| `paymentDueDate` | `string \| null \| undefined` | Optional | Due date for payment. Format: yyyyMMdd |
| `soAReferenceNumber` | `string \| null \| undefined` | Optional | Statement of account reference number. |
| `statementDate` | `string \| null \| undefined` | Optional | Date on which the SOA was generated.<br>Format: yyyyMMdd |
| `statementOfAccountId` | `number \| null \| undefined` | Optional | Statement of account identifier, |
| `totalBillingDocuments` | `number \| null \| undefined` | Optional | Total number of billing documents generated under this Statement of Account. |
| `totalNetAmountBillingCurrency` | `number \| null \| undefined` | Optional | Total NET amount from all billing documents in this SOA. |
| `totalSummaryBillingDocuments` | `number \| null \| undefined` | Optional | Total number of summary billing documents for this Statement of Account |
| `totalVATAmountBillingCurrency` | `number \| null \| undefined` | Optional | Total VAT amount from all billing documents in this SOA. |
| `unallocatedPayment` | `number \| null \| undefined` | Optional | Amount paid but not allocated to any invoices at the time of this SOA generation. |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code of the local country. It is derived based on CountryCode from microservice configuration. This field is expected to have different value than the previously mentioned field CurrencyCode, only in the case of serviced OUs.<br>Example: EUR |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol of the local country. It is derived based on CountryCode from microservice configuration. This field is expected to have different value than the previously mentioned field CurrencySymbol, only in the case of serviced OUs.<br>Example: € |
| `localCurrencyExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate from Billing currency to local currency.<br>Example: 1.2 |

## Example (as JSON)

```json
{
  "AmountDue": 208.8,
  "AmountNotOverdue": 54.46,
  "AmountOverdue": 69.54,
  "AmountOverdueFromUnallocated": 130.1,
  "AmountPaid": 138.64
}
```

