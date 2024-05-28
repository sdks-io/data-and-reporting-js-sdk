
# Invoice Search Details

## Structure

`InvoiceSearchDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountFullName` | `string \| null \| undefined` | Optional | Account Full Name<br>Example: AT_reversal customer_FN |
| `accountId` | `number \| null \| undefined` | Optional | Account ID<br>Example: 29484 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number<br>Example: GB99215176 |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name<br>Example: AT Earth Movers-SN |
| `colCoId` | `number \| null \| undefined` | Optional | ColCo Id.<br>Example: 18 |
| `colCoOpCoId` | `string \| null \| undefined` | Optional | ColCo’s OpCo Id.<br>Example: 018 |
| `currentBillingFrequency` | `string \| null \| undefined` | Optional | Current billing frequency of the account.<br>A few of the possible IDs and Description are below:<br>1	Daily (all days)<br>2	Daily (only working days)<br>3	Weekly - Monday<br>4	Weekly - Tuesday<br>5	Weekly - Wednesday<br>6	Weekly - Thursday<br>7	Weekly - Friday<br>8	Weekly - Saturday<br>9	Weekly - Sunday<br>10	Monthly - 1st<br>Example: Weekly – Wednesday |
| `currentBillingFrequencyId` | `number \| null \| undefined` | Optional | Current billing frequency id of the account.<br>A few of the possible IDs and Description are below:<br>1	Daily (all days)<br>2	Daily (only working days)<br>3	Weekly - Monday<br>4	Weekly - Tuesday<br>5	Weekly - Wednesday<br>6	Weekly - Thursday<br>7	Weekly - Friday<br>8	Weekly - Saturday<br>9	Weekly - Sunday<br>10	Monthly - 1st<br>Example: 5 |
| `currentDistributionMethod` | `string \| null \| undefined` | Optional | Current distribution method name of the account.<br>Example : Id & Description<br>1	e-mail<br>2	Fax<br>3	Courier to Customer<br>4	Courier to Client<br>5	Print<br>6	FTP<br>7	SMS |
| `currentDistributionMethodId` | `number \| null \| undefined` | Optional | Current distribution method id of the account.<br>Example : Id & Description<br>1	e-mail<br>2	Fax<br>3	Courier to Customer<br>4	Courier to Client<br>5	Print<br>6	FTP<br>7	SMS |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Customer currency ISO code.<br>Example: EUR |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency code.<br>Example: € |
| `delCoClientNumber` | `string \| null \| undefined` | Optional | DelCo’s client company number.<br>Example: 132 |
| `delCoId` | `number \| null \| undefined` | Optional | DelCo Id.<br>Example: 132 |
| `delCoOpCoId` | `string \| null \| undefined` | Optional | DelCo’s OpCo Id.<br>Example: 032 |
| `documentType` | `string \| null \| undefined` | Optional | Document type Id description. |
| `documentTypeId` | `number \| null \| undefined` | Optional | Document type Id. |
| `dueDate` | `string \| null \| undefined` | Optional | Due date. Format: yyyyMMdd.<br>Example: 20170115 |
| `grossAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Gross amount in customer currency in the document. |
| `grossAmountTransactionCurrency` | `number \| null \| undefined` | Optional | Gross amount in transaction currency in the document |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoicing date. Format: yyyyMMdd<br>Example: 20170101 |
| `invoicedBy` | `string \| null \| undefined` | Optional | Company name. |
| `invoicedOnBehalfOf` | `string \| null \| undefined` | Optional | Country Name.<br>Example: Czech Republic |
| `invoiceId` | `number \| null \| undefined` | Optional | Invoice id.<br>Example: 1 |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice number.<br>Example: 0123456789 |
| `isInternational` | `boolean \| null \| undefined` | Optional | True/False.<br>True if this is an International invoice, else false. |
| `isNational` | `boolean \| null \| undefined` | Optional | True/False.<br>True if this is a National invoice, else false. |
| `netAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Net amount in customer currency in the document. |
| `netAmountTransactionCurrency` | `number \| null \| undefined` | Optional | Net amount in transaction currency in the document. |
| `payerId` | `number \| null \| undefined` | Optional | Payment customer id of the customer.<br>Example: 123456 |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number.<br>Example: GB000000123 |
| `paymentTerms` | `string \| null \| undefined` | Optional | A few of the possible IDs and Descriptions are below:<br>1	14 days after Invoice<br>2	15 days after Invoice<br>3	21 days after Invoice<br>4	30 days after Invoice<br>5	45 days after Invoice |
| `paymentTermsId` | `number \| null \| undefined` | Optional | Payment terms id of the payment customer.<br>A few of the possible IDs and Descriptions are below:<br>1	14 days after Invoice<br>2	15 days after Invoice<br>3	21 days after Invoice<br>4	30 days after Invoice<br>5	45 days after Invoice |
| `replacementInvoiceId` | `number \| null \| undefined` | Optional | Replaced document id.<br>Example: 2 |
| `reversalInvoiceId` | `number \| null \| undefined` | Optional | Reversed document id.<br>Example: 3 |
| `status` | `string \| null \| undefined` | Optional | Status of the document. Valid values –<br>•	[Empty] – For all document types except for Invoice and Statement.<br>•	Due – Invoices/Statements due for payment and is within the due date.<br>•	Paid – Fully paid Invoices/Statements.<br>Overdue – Invoices/Statements due of payment and has crossed the due date. |
| `summaryDocumentBillingType` | `string \| null \| undefined` | Optional | Billing type description.<br>Example: Id & Description<br>-3	Guarantee History<br>-1	Initial Balance<br>0	Standard Invoice<br>1	Immediate Invoice<br>2	Guarantee<br>4	Advanced DD Invoice |
| `summaryDocumentBillingTypeId` | `number \| null \| undefined` | Optional | Billing type id.<br>Example: Id & Description<br>-3	Guarantee History<br>-1	Initial Balance<br>0	Standard Invoice<br>1	Immediate Invoice<br>2	Guarantee<br>4	Advanced DD Invoice |
| `summaryDocumentDate` | `string \| null \| undefined` | Optional | Document generated date. Format: yyyyMMdd<br>Example: 20170101 |
| `summaryDocumentDDAmount` | `number \| null \| undefined` | Optional | DD amount. |
| `summaryDocumentDueDate` | `string \| null \| undefined` | Optional | Due date for document. Format: yyyyMMdd<br>Example: 20170115 |
| `summaryDocumentId` | `number \| null \| undefined` | Optional | Summary document identifier<br>Example: 1 |
| `summaryDocumentIsFullyPaid` | `boolean \| null \| undefined` | Optional | True/False<br>True if invoice amount is fully paid, else false |
| `summaryDocumentNumber` | `string \| null \| undefined` | Optional | Summary document number<br>Example: ‘0/CZ0000000123456/2017’ |
| `summaryDocumentPaidAmount` | `number \| null \| undefined` | Optional | Total amount paid. |
| `summaryDocumentSoAReferenceNumber` | `string \| null \| undefined` | Optional | Statement of Account reference number of the payment customer. |
| `summaryDocumentStatementOfAccountId` | `number \| null \| undefined` | Optional | Statement of Account Id of the payment customer. |
| `transactionCurrencyCode` | `string \| null \| undefined` | Optional | Transaction currency ISO code.<br>Example: EUR |
| `transactionCurrencySymbol` | `string \| null \| undefined` | Optional | Transaction currency symbol.<br>Example: € |
| `type` | `string \| null \| undefined` | Optional | Invoice type description.<br>A few of the possible IDs and Description are below:<br>1	Original<br>2	Reversal<br>3	Replacement<br>Example: Original |
| `typeId` | `number \| null \| undefined` | Optional | Invoice type id.<br>A few of the possible IDs and Descriptions are below:<br>1	Original<br>2	Reversal<br>3	Replacement<br>Example: 1 |
| `vATAmountCustomerCurrency` | `number \| null \| undefined` | Optional | VAT amount in customer currency in the document |
| `vATAmountTransactionCurrency` | `number \| null \| undefined` | Optional | VAT amount in transaction currency in the document |
| `vATCountry` | `string \| null \| undefined` | Optional | Country name of the VAT country.<br>Example: France, Germany |
| `vATCountryId` | `number \| null \| undefined` | Optional | Country Id of the VAT country.<br>Example: 1,2 |
| `vATCountryISOCode` | `string \| null \| undefined` | Optional | Country ISO code of the VAT country.<br>Example : CZ, SK, UK, etc., |
| `vATCountryOpCoId` | `string \| null \| undefined` | Optional | VAT country’s OpCo Id.<br>Example: 032 |
| `documentReference` | `string \| null \| undefined` | Optional | document reference number of the Invoice file |
| `additionalDocuments` | [`InvoiceSearchAdditionalDocument[] \| undefined`](../../doc/models/invoice-search-additional-document.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountFullName": "AccountFullName4",
  "AccountId": 252,
  "AccountNumber": "AccountNumber6",
  "AccountShortName": "AccountShortName8",
  "ColCoId": 144
}
```

