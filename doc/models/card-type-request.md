
# Card Type Request

## Structure

`CardTypeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory. |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected payer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer. |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the customer.<br>Optional if AccountNumber is passed else Mandatory. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br>Optional if AccountId is passed else Mandatory<br>Example: GB000000124 |
| `includeUsageRestrictions` | `boolean \| undefined` | Optional | Include usage restrictions in the response.<br>Optional field– default value is False.<br>Possible values: True/False |
| `includePurchaseCategories` | `boolean \| undefined` | Optional | Include purchase categories in the response.<br>Optional field– default value is False.<br>Possible values: True/False |

## Example (as JSON)

```json
{
  "ColCoId": 14,
  "ColCoCode": 14,
  "PayerId": 2343,
  "PayerNumber": "GB000000124",
  "AccountId": 343,
  "AccountNumber": "GB000000124"
}
```

