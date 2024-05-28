
# Payments Since Last SOA

List of payments made by the customer after the latest Statement of Account.
Note: All the payments made by the customer will be returned when there is no Statement of Account available for customer.

## Structure

`PaymentsSinceLastSOA`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Identifier for which payment is made.<br>Example: 12345 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number for which payment is made.<br>Example: GB000000123 |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name<br>Example: GB Earth Movers-SN |
| `summaryDocumentId` | `number \| null \| undefined` | Optional | Summary billing document reference id.<br>Example: 2 |
| `summaryDocumentNumber` | `string \| null \| undefined` | Optional | Summary billing document reference number. |
| `summaryDocumentDate` | `string \| null \| undefined` | Optional | Summary billing document date.<br>Format: YYYYMMDD |
| `summaryDocumentPaymentDueDate` | `string \| null \| undefined` | Optional | Payment due date of the Summary billing document.<br>Format: YYYYMMDD |
| `summaryDocumentTotalValue` | `number \| null \| undefined` | Optional | Total value in the Summary billing document. |
| `summaryDocumentTotalVAT` | `number \| null \| undefined` | Optional | Total VAT in the Summary billing document. |
| `summaryDocumentDDAmount` | `number \| null \| undefined` | Optional | Total DD amount in the Summary billing document. |
| `paymentDate` | `string \| null \| undefined` | Optional | Date of payment.<br>Format: YYYYMMDD |
| `paymentReference` | `string \| null \| undefined` | Optional | Reference text of the payment. |
| `paymentCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of payment currency.<br>Example: EUR |
| `paymentCurrencySymbol` | `string \| null \| undefined` | Optional | Symbol of payment currency.<br>Example: € |
| `amountPaid` | `number \| null \| undefined` | Optional | Amount paid. |
| `balance` | `number \| null \| undefined` | Optional | Balance amount to be settled for the Summary document. |
| `truePayment` | `string \| null \| undefined` | Optional | True Payment. |
| `prepaidBalance` | `number \| null \| undefined` | Optional | Balance in the pre-paid amount. |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code of the local country. It is derived based on CountryCode from microservice configuration. This field is expected to have different value than the previously mentioned field CurrencyCode, only in the case of serviced OUs.<br>Example: EUR |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol of the local country. It is derived based on CountryCode from microservice configuration. This field is expected to have different value than the previously mentioned field CurrencySymbol, only in the case of serviced OUs.<br>Example: € |
| `localCurrencyExchangeRate` | `string \| null \| undefined` | Optional | Exchange rate from Payment currency to local currency. |

## Example (as JSON)

```json
{
  "AccountId": 0,
  "AccountNumber": "AccountNumber4",
  "AccountShortName": "AccountShortName6",
  "SummaryDocumentId": 92,
  "SummaryDocumentNumber": "SummaryDocumentNumber8"
}
```

