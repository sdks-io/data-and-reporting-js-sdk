
# Audit Response

## Structure

`AuditResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`AuditArrayElements[] \| undefined`](../../doc/models/audit-array-elements.md) | Optional | - |
| `page` | `number \| undefined` | Optional | Current Page |
| `totalRecords` | `number \| undefined` | Optional | Total row count matched for the given input criteria |
| `totalPages` | `number \| undefined` | Optional | Calculated page count based on page size from the incoming API request and total number of rows matched for the given input criteria. Return 1 if the page size is -1 as all records are returned. |
| `pageSize` | `number \| undefined` | Optional | Page Size – Number of records to show on current page. |
| `warnings` | [`Warning[] \| undefined`](../../doc/models/warning.md) | Optional | A list of Warning entity.<br>This entity will hold the details of the scheduled System Outages of any dependent applications of this service.<br>Note: If there is no scheduled outage information available, in the configuration in AMS, for this service, this parameter won’t be present in output. |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Page": 1,
  "TotalRecords": 100,
  "TotalPages": 100,
  "PageSize": 100,
  "Data": [
    {
      "Audits": [
        {
          "AccountId": 178,
          "AccountNumber": "AccountNumber2",
          "AdditionalInformation1": "AdditionalInformation16",
          "AdditionalInformation2": "AdditionalInformation26",
          "AdditionalInformation3": "AdditionalInformation30"
        },
        {
          "AccountId": 178,
          "AccountNumber": "AccountNumber2",
          "AdditionalInformation1": "AdditionalInformation16",
          "AdditionalInformation2": "AdditionalInformation26",
          "AdditionalInformation3": "AdditionalInformation30"
        }
      ]
    },
    {
      "Audits": [
        {
          "AccountId": 178,
          "AccountNumber": "AccountNumber2",
          "AdditionalInformation1": "AdditionalInformation16",
          "AdditionalInformation2": "AdditionalInformation26",
          "AdditionalInformation3": "AdditionalInformation30"
        },
        {
          "AccountId": 178,
          "AccountNumber": "AccountNumber2",
          "AdditionalInformation1": "AdditionalInformation16",
          "AdditionalInformation2": "AdditionalInformation26",
          "AdditionalInformation3": "AdditionalInformation30"
        }
      ]
    }
  ]
}
```

