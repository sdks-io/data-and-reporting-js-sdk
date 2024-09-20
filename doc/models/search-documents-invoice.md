
# Search Documents Invoice

## Structure

`SearchDocumentsInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentReference` | `number \| undefined` | Optional | Unique Invoice Reference id of the invoice for downloading the zip file containing PDF and proofing elements.<br>Example: 123456 |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Payment customer number.<br>Example: GB000000123 |
| `payerName` | `string \| null \| undefined` | Optional | Customer payer name |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number<br>Example: GB99215176 |
| `accountName` | `string \| null \| undefined` | Optional | Invoice account name |
| `documentType` | `string \| null \| undefined` | Optional | Document type<br>String containing one of the following values:<br>•    NAT (National)<br>•    INT (International)<br>•    SOA (Statement of Account) |
| `grossAmount` | `number \| null \| undefined` | Optional | Included tax amount in the invoice |
| `netAmount` | `number \| null \| undefined` | Optional | - |
| `taxAmount` | `number \| null \| undefined` | Optional | - |
| `currencyCode` | `string \| null \| undefined` | Optional | - |
| `invoiceStatus` | `string \| null \| undefined` | Optional | - |
| `invoiceDate` | `string \| null \| undefined` | Optional | - |
| `dueDate` | `string \| null \| undefined` | Optional | - |
| `vATCountryISOCode` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "DocumentReference": 10,
  "InvoiceNumber": "InvoiceNumber0",
  "PayerName": "PayerName0",
  "AccountNumber": "AccountNumber2",
  "AccountName": "AccountName8"
}
```

