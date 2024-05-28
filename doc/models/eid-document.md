
# EID Document

## Structure

`EIDDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentId` | `number \| null \| undefined` | Optional | Technical identifier for the EID file. Should not be stored in database as it is not guaranteed to stay unchanged over time. |
| `accountGroupId` | `string \| null \| undefined` | Optional | Account Group Id |
| `accountGroupName` | `string \| null \| undefined` | Optional | Account group name |
| `documentType` | `string \| null \| undefined` | Optional | Document type.<br>Possible values:<br>•	NAT (National)<br>•	INT (International) |
| `documentFormat` | `string \| null \| undefined` | Optional | Document format (CHORUS, DIFI etc.) |
| `documentDate` | `string \| null \| undefined` | Optional | Document date.<br>Example: 20170101 |
| `numberOfInvoices` | `number \| null \| undefined` | Optional | Number of invoices |
| `fileSize` | `number \| null \| undefined` | Optional | Document size |
| `documentStatus` | `string \| null \| undefined` | Optional | Document status.<br>Possible values:<br>•	NEW<br>•	VIEWED<br>•	DOWNLOADED<br>•	RESTORED |
| `documentName` | `string \| null \| undefined` | Optional | Document file name. |

## Example (as JSON)

```json
{
  "DocumentId": 250,
  "AccountGroupId": "AccountGroupId2",
  "AccountGroupName": "AccountGroupName0",
  "DocumentType": "DocumentType8",
  "DocumentFormat": "DocumentFormat4"
}
```

