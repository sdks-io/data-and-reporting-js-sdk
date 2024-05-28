
# Search Documents Response

## Structure

`SearchDocumentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCES, FAILED |
| `data` | [`SearchDocumentsInvoice[] \| undefined`](../../doc/models/search-documents-invoice.md) | Optional | - |
| `totalRecords` | `number \| undefined` | Optional | Total number of elements corresponding to the request |
| `totalRecordsOnPage` | `number \| undefined` | Optional | Number of elements in the page content. Will be lesser or equal to the size param. |
| `isFirstPage` | `boolean \| undefined` | Optional | True if it is the first page, false otherwise |
| `isLastPage` | `boolean \| undefined` | Optional | True if it is the last page, false, otherwise. |

## Example (as JSON)

```json
{
  "RequestId": "RequestId2",
  "Status": "Status8",
  "Data": [
    {
      "DocumentReference": 190,
      "InvoiceNumber": "InvoiceNumber4",
      "PayerName": "PayerName4",
      "AccountNumber": "AccountNumber8",
      "AccountName": "AccountName4"
    },
    {
      "DocumentReference": 190,
      "InvoiceNumber": "InvoiceNumber4",
      "PayerName": "PayerName4",
      "AccountNumber": "AccountNumber8",
      "AccountName": "AccountName4"
    },
    {
      "DocumentReference": 190,
      "InvoiceNumber": "InvoiceNumber4",
      "PayerName": "PayerName4",
      "AccountNumber": "AccountNumber8",
      "AccountName": "AccountName4"
    }
  ],
  "TotalRecords": 250,
  "TotalRecordsOnPage": 108
}
```

