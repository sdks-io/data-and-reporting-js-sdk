
# Transaction Exceptions Request

## Structure

`TransactionExceptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1 for Philippines<br>5 for UK |
| `colCoCode` | `number \| undefined` | Optional | Collecting Company Code  of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86 for Philippines<br>5 for UK |
| `payerId` | `number \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory |
| `payerNumber` | `string \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory |
| `accounts` | [`Accounts[] \| undefined`](../../doc/models/accounts.md) | Optional | - |
| `transactionsFromDate` | `string` | Required | Exceptions to be searched in transactions from date.<br>Should be with in last 24 months from the ToDate parameter.<br>Mandatory<br>Format: yyyyMMdd |
| `transactionsToDate` | `string` | Required | Exceptions to be searched in transactions until date.<br>Mandatory.<br>Format: yyyyMMdd |
| `value` | `number \| undefined` | Optional | Value to be used on the Filter Condition |
| `condition` | `number` | Required | Filter condition for the Exceptions.<br>Mandatory<br><br>1. VolumeGreaterThan<br>2. VolumeLessThan<br>3. UsageGreaterThan<br>4. UsageLessThan<br>5. ValueGreaterThan (in Customer Currency)<br>6. ValueLessThan  (in Customer Currency)<br>   Note: -<br>   When “OutputType” = 1 is passed as input, above 3 and 4 Condition are not applicable. |
| `products` | [`ExceptionProduct[] \| undefined`](../../doc/models/exception-product.md) | Optional | - |
| `exceptionPeriod` | `number \| undefined` | Optional | Period in which the Exceptions such as Monthly/Weekly or Daily volume, value or usage to be identified in the given transactions date range. It is only applied when the Output Type is specified as "Cards".<br>Mandatory when Output Type is Cards<br><br>1. Month<br>2. Week<br>3. Day<br>4. Date Range |
| `outputType` | `number` | Required | Output Type for Exceptions.<br>Mandatory.<br>Possible values:<br><br>1. Transactions<br>2. Cards |
| `fuelOnly` | `boolean \| undefined` | Optional | True/False<br>Optional<br>Default value: False.<br>When passed as ‘True’ Only returned records with Fuel transactions.<br>When passed as ‘False’ the above condition will not be checked. |
| `siteGroupIds` | `number[] \| undefined` | Optional | SiteGroupIds to be applied to the Filter Condition.<br>Optional<br>When not passed, ignored.<br>When passed, transactions that are matching with the provided list of site group id’s are only returned. |
| `useFieldId` | `boolean \| undefined` | Optional | True/False<br>Optional<br>Default value – False.<br>When set to True, the property names in the output will be replaced by Field IDs. |

## Example (as JSON)

```json
{
  "ColCoId": 154,
  "ColCoCode": 168,
  "PayerId": 202,
  "PayerNumber": "PayerNumber4",
  "Accounts": [
    {
      "AccountId": 28,
      "AccountNumber": "AccountNumber0"
    }
  ],
  "TransactionsFromDate": "TransactionsFromDate4",
  "TransactionsToDate": "TransactionsToDate6",
  "Condition": 240,
  "OutputType": 166
}
```

