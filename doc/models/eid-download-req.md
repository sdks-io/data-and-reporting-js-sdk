
# EID Download Req

## Structure

`EIDDownloadReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null` | Required | Collecting Company Code of the selected payer.<br>Mandatory |
| `eIDList` | `string[]` | Required | - |
| `accountGroupCountry` | `number \| null` | Required | ColCo code associated with the Account Group IDs of the given EID/EDI files.<br>Mandatory |
| `accountGroupIdList` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "ColCoCode": 92,
  "EIDList": [
    "EIDList2",
    "EIDList3"
  ],
  "AccountGroupCountry": 8,
  "AccountGroupIdList": [
    "AccountGroupIdList5",
    "AccountGroupIdList4",
    "AccountGroupIdList3"
  ]
}
```

