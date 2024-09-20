
# Search Statement of Account

## Structure

`SearchStatementOfAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementOfAccountId` | `number \| null \| undefined` | Optional | Statement of account identifier |
| `soAReferenceNumber` | `string \| null \| undefined` | Optional | Statement of account reference |
| `statementDate` | `string \| null \| undefined` | Optional | Date on which the SOA was generated.<br>Format: yyyyMMdd |
| `payerId` | `number \| null \| undefined` | Optional | Payment customer id of the customer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payment customer number. |
| `amountDue` | `number \| null \| undefined` | Optional | Invoiced amount and due for payment |
| `amountOverdue` | `number \| null \| undefined` | Optional | Invoiced amount and overdue for payment. |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO code of SOA currency. |
| `currencySymbol` | `string \| null \| undefined` | Optional | Symbol of SOA currency.<br>Example: € |
| `dueDate` | `string \| null \| undefined` | Optional | Due date for payment. Format: yyyyMMdd<br>Note:<br>•    Clients to convert this to appropriate DateTime type.<br>•    SoA due date is considered as the latest due date of the invoices within the SoA |
| `invoicedOnBehalfOf` | `string \| null \| undefined` | Optional | ISO code of the country i.e., UK, DE, MY, etc.<br>This is the value of the first invoice within the SoA. It may not be same for all the invoices within the SoA. |
| `status` | `string \| null \| undefined` | Optional | Status of the document. Valid values –<br><br>1. Paid – Fully paid all Invoices with in the SOA.<br>2. Overdue – At least one invoice payment due date is less than current date with in the SOA.<br>3. Due – At least one invoice is due for payment and is within the due date. There is no invoice overdue for payment. |
| `grossAmountCustomerCurrency` | `number \| null \| undefined` | Optional | Total gross amount in customer currency. |
| `documentReferenceNumber` | `string \| null \| undefined` | Optional | Document reference number fetched |

## Example (as JSON)

```json
{
  "StatementOfAccountId": 120,
  "SoAReferenceNumber": "SoAReferenceNumber4",
  "StatementDate": "StatementDate2",
  "PayerId": 18,
  "PayerNumber": "PayerNumber6"
}
```

