
# EID Search Req

## Structure

`EIDSearchReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null` | Required | Collecting Company Code of the selected payer.<br>Mandatory |
| `accountGroupCountry` | `number \| null` | Required | Country code (colco code) of the account group.<br>Mandatory |
| `accountGroupId` | `string[]` | Required | List of IDs of the account groups that user has access to.<br>Mandatory |
| `accountGroupName` | `string \| null \| undefined` | Optional | Account group name<br>Optional.<br>This input is a search criterion, if given. |
| `fromDate` | `string \| null \| undefined` | Optional | EID date searched from this date.<br>Optional. |
| `toDate` | `string \| null \| undefined` | Optional | Invoice date searched until this date.<br>Optional. |
| `invoiceType` | `string \| null \| undefined` | Optional | Invoice type.<br>Optional.<br>Possible values:<br>•	NAT (National)<br>•	INT (International) |
| `invoiceStatus` | `string \| null \| undefined` | Optional | Status of the document.<br>Optional.<br>Possible values:<br>•	NEW<br>•	VIEWED<br>•	DOWNLOADED<br>•	RESTORED |
| `sortBy` | `string[] \| undefined` | Optional | Sort option –<br>•    InvoiceNumber ASC<br>•    InvoiceDate ASC<br>•    InvoiceNumber DESC<br>•    InvoiceDate DESC<br>Optional |

## Example (as JSON)

```json
{
  "ColCoCode": 222,
  "AccountGroupCountry": 138,
  "AccountGroupId": [
    "AccountGroupId7",
    "AccountGroupId8"
  ],
  "AccountGroupName": "AccountGroupName8",
  "FromDate": "FromDate4",
  "ToDate": "ToDate4",
  "InvoiceType": "InvoiceType6",
  "InvoiceStatus": "InvoiceStatus2"
}
```

