
# Invoice Download Req

## Structure

`InvoiceDownloadReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null` | Required | Collecting Company Code of the selected payer.<br>Mandatory |
| `payerNumber` | `string \| null` | Required | Payer Number of the selected payer.<br>Mandatory<br>Example: GB000000123 |
| `accountNumber` | `string[] \| undefined` | Optional | List of Account Numbers of the invoices.<br>Mandatory for customer users else optional. |
| `documentReference` | `number[] \| undefined` | Optional | Unique reference ids of invoice document (of zip file).<br>Optional if InvoiceOrSOANumber is passed else Mandatory. |
| `invoiceOrSOANumber` | `string \| null \| undefined` | Optional | Invoice or the SOA document reference number issued by Card s Platform. |

## Example (as JSON)

```json
{
  "ColCoCode": 126,
  "PayerNumber": "PayerNumber0",
  "AccountNumber": [
    "AccountNumber4",
    "AccountNumber5",
    "AccountNumber6"
  ],
  "DocumentReference": [
    117,
    116,
    115
  ],
  "InvoiceOrSOANumber": "InvoiceOrSOANumber0"
}
```

