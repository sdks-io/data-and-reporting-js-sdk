
# EID Document Response

## Structure

`EIDDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCESS, FAILED |
| `data` | [`EIDDocument[] \| undefined`](../../doc/models/eid-document.md) | Optional | - |
| `pageSize` | `number \| undefined` | Optional | Number of records returned in the response |
| `page` | `number \| undefined` | Optional | Current page |
| `totalPages` | `number \| undefined` | Optional | Total number of pages available for the requested data |
| `totalRecords` | `number \| undefined` | Optional | Total number of elements corresponding to the request |
| `isFirstPage` | `boolean \| undefined` | Optional | True if it is the first page, false otherwise |
| `isLastPage` | `boolean \| undefined` | Optional | True if it is the last page, false, otherwise. |

## Example (as JSON)

```json
{
  "RequestId": "RequestId8",
  "Status": "Status4",
  "Data": [
    {
      "DocumentId": 28,
      "AccountGroupId": "AccountGroupId2",
      "AccountGroupName": "AccountGroupName6",
      "DocumentType": "DocumentType6",
      "DocumentFormat": "DocumentFormat0"
    }
  ],
  "PageSize": 188,
  "Page": 208
}
```

