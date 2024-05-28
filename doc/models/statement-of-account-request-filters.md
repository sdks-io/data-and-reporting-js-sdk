
# Statement of Account Request Filters

## Structure

`StatementOfAccountRequestFilters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Optional If ColCo Id is passed else Mandatory. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory. |
| `includeMonthlyInvoiceTrend` | `boolean \| null \| undefined` | Optional | True/False.<br>Optional. Default is False.<br>True if the past 13 monthly invoice trend to be included as part of the response. Else false. |
| `includePastStatementOfAccounts` | `boolean \| null \| undefined` | Optional | True/False.<br>Optional. Default is False.<br>True if the past X SOA documents are to be included as part of the response. Else false. |
| `dueOrOverDueSOADocumentsOnly` | `boolean \| null \| undefined` | Optional | True/False<br>Optional Default is False.<br>If true PastStatementOfAccounts entity on this API output should contain the SOA documents that are due or overdue only. |
| `numberOfSOADocuments` | `number \| null \| undefined` | Optional | This parameter is only applicable when “IncludePastStatementOfAccounts” parameter is set to True. |
| `includeAccountInvoicesSummary` | `boolean \| null \| undefined` | Optional | True/False<br>Optional.<br>Default value is false.<br>When true InvoicesSummaries list will be returned in the API output. |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional If ColCo Code is passed else Mandatory. |
| `accounts` | [`Accounts[] \| undefined`](../../doc/models/accounts.md) | Optional | - |

## Example (as JSON)

```json
{
  "ColCoCode": 14,
  "PayerId": 48,
  "PayerNumber": "PayerNumber8",
  "IncludeMonthlyInvoiceTrend": false,
  "IncludePastStatementOfAccounts": false
}
```

