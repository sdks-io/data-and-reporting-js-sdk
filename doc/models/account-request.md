
# Account Request

## Structure

`AccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| null \| undefined` | Optional | Account Status.<br>Optional if StatusList is passed, else mandatory.<br>Ignored if StatusList is passed.<br>Allowed values:<br>•    ALL<br>•    ACTIVE<br>•    BLOCKED<br>•    CANCELLED<br>•    CREDITLOCK<br>•    DELINQUENCYLOCK |
| `includeCardSummary` | `boolean \| undefined` | Optional | Include card summary details in the response.<br><br>When passed as false, the card summary related parameters on response will be set to null.<br><br>Optional – default value: true.<br>**Default**: `true` |
| `payerId` | `number \| null \| undefined` | Optional | Payer id of the customer.<br>Optional if PayerNumber is passed, else Mandatory. |
| `payerNumber` | `string \| null \| undefined` | Optional | PayerNumber of the customer.<br>Optional if PayerId is passed, else Mandatory. |
| `pageSize` | `number \| null \| undefined` | Optional | Page Size – Number of records to show on a page.<br>Optional<br>Default value 50 |
| `requestId` | `string \| null \| undefined` | Optional | API Request Id |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>ColCoCode or ColCoCountryCode  is Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided. |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | The 2-character ISO Code for the customer and card owning country.<br>ColCoCode or ColCoCountryCode  is Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided. |
| `currentPage` | `number \| null \| undefined` | Optional | Page Number (as shown to the users)<br>Optional<br>Default value 1 |
| `invoicePointsOnly` | `boolean \| null \| undefined` | Optional | Optional – default value: false.<br>When passed as true, the API will return accounts that are configured as Invoice Point only.<br>**Default**: `false` |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id (in GFN) of the selected payer.<br>Optional if ColCoCode or ColCoCountryCode  is passed else Mandatory. |
| `returnTollsCustomerId` | `boolean \| undefined` | Optional | Return e-Toll Customer details When True. |
| `accounts` | [`Accounts[] \| undefined`](../../doc/models/accounts.md) | Optional | - |
| `accountName` | `string \| null \| undefined` | Optional | Account Name of the customer.<br>Optional.<br>Minimum of 4 characters should be provided else not considered.<br>Accounts those have the entered value at any part of the Name will be returned. |
| `statusList` | `(string \| null)[] \| undefined` | Optional | Account Statuses.<br>Optional<br>Multiple statuses are allowed to be included in the search criteria.<br>Allowed values:<br>•    ACTIVE<br>•    BLOCKED<br>•    CANCELLED<br>•    CREDITLOCK<br>•    DELINQUENCYLOCK |

## Example (as JSON)

```json
{
  "Status": "ALL",
  "IncludeCardSummary": true,
  "PayerId": 9,
  "PayerNumber": "GB00000111",
  "PageSize": 10,
  "RequestId": "b9eb91b6-65d4-4196-f910-6b0846875e70",
  "ColCoCode": 14,
  "ColCoCountryCode": "14",
  "CurrentPage": 1,
  "InvoicePointsOnly": false,
  "ColCoId": 14,
  "AccountName": "test"
}
```

