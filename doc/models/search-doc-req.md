
# Search Doc Req

## Structure

`SearchDocReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerNumber` | `string \| null` | Required | Payer Number of the selected payer.<br>Mandatory<br>Example: GB000000123 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br>Mandatory for customer users else optional.<br>This input is a search criterion, if given.<br>Example: GB000000123 |
| `accountNumberList` | `string[] \| undefined` | Optional | Account Number of the customers.<br>optional.<br>This input is a search criterion, if given.<br>Example: [“GB00000123”, “GB00000225”] |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice number.<br>Optional if InvoiceNumberList is passed else Mandatory<br>This input is a search criterion, if given.<br>Example: 0123456789 |
| `invoiceNumberList` | `string[] \| undefined` | Optional | List of Invoice number.<br>Optional if InvoiceNumber is passed else Mandatory<br>Example: [“0123456789”, “0123459799”] |
| `invoiceStatus` | `string \| null \| undefined` | Optional | The status of the invoices<br>Optional<br>One of the following values:<br>•    NEW<br>•    VIEWED<br>•    DOWNLOADED<br>•    RESTORED |
| `issuingDateFrom` | `string \| null \| undefined` | Optional | Invoice Issuing Date Range/From<br>Optional<br>Format: yyyy/MM/dd |
| `issuingDateTo` | `string \| null \| undefined` | Optional | Invoice Issuing Date Range/To<br>Optional<br>Format: yyyy/MM/dd |
| `dueDateFrom` | `string \| null \| undefined` | Optional | Invoice Due Date Range/From<br>Optional<br>Format: yyyy/MM/dd |
| `dueDateTo` | `string \| null \| undefined` | Optional | Invoice Due Date Range/To<br>Optional<br>Format: yyyy/MM/dd |
| `grossAmount` | `string \| null \| undefined` | Optional | Gross amount of the bill.<br>Optional |
| `grossAmountOperator` | `string \| null \| undefined` | Optional | Criteria on the gross amount, for instance use GT when to retrieve the invoices for that gross amount is greater than the given amount on GrossAmount parameter above.<br>Optional<br><br>This parameter will be ignored if GrossAmount parameter is not set.<br><br>One of the following values:<br>•    LT (Less Than)<br>•    LE (Lesser or Equal)<br>•    EQ (equal)<br>•    GE (Greater or equal)<br>•    GT (Greater than) |
| `documentType` | `string \| null \| undefined` | Optional | Document Type<br>Optional<br>One of the following values:<br>•    NAT (National)<br>•    INT (International)<br>•    SOA (Statement of Account) |
| `vATIssuerCountry` | `string \| null \| undefined` | Optional | Two letter ISO country code. |
| `sortyBy` | `string[] \| undefined` | Optional | Collecting Company Code of the selected payer.<br>Mandatory<br>Example:<br>86-Philippines<br>5-UK |
| `colCoCode` | `number \| null` | Required | Collecting Company Code of the selected payer.<br>Mandatory<br>Example:<br>86-Philippines<br>5-UK |

## Example (as JSON)

```json
{
  "PayerNumber": "PayerNumber0",
  "AccountNumber": "AccountNumber2",
  "AccountNumberList": [
    "AccountNumberList0"
  ],
  "InvoiceNumber": "InvoiceNumber0",
  "InvoiceNumberList": [
    "InvoiceNumberList5"
  ],
  "InvoiceStatus": "InvoiceStatus4",
  "ColCoCode": 50
}
```

