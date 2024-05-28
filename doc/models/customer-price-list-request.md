
# Customer Price List Request

## Structure

`CustomerPriceListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | - |
| `colCoCode` | `number \| null \| undefined` | Optional | - |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the customer.<br>Optional |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br>Optional |
| `customerSpecificList` | `number \| null \| undefined` | Optional | Whether customer specific price lists and customer specific discount values set on pump prices are to be returned or not. |
| `priceListType` | `number \| null \| undefined` | Optional | Specifies the type of price lists to be included in the response.<br>Optional – default value is zero.<br><br>Allowed values:<br>0 – All<br>1 – National Only<br>2 – International Only |
| `delCoId` | `number \| null \| undefined` | Optional | Delivering Company ID<br>Optional. |
| `fromDate` | `string \| null` | Required | Start date to fetch the price lists, discount values on pump prices and VAT rates.<br>Mandatory<br>Format: yyyyMMdd |
| `toDate` | `string \| null` | Required | End date to fetch the price lists, discount values on pump prices and VAT rates.<br>Mandatory and greater than or equal to FromDate.<br>Maximum of 30 (configurable) day’s duration is allowed between ‘From’ and ‘To’ dates.<br>Format: yyyyMMdd |
| `includePumpPriceDiscounts` | `boolean \| null \| undefined` | Optional | True / False.<br>A flag to request the discount information set on pump prices for the customer to be included in the response.<br>Optional<br>Default value: False |

## Example (as JSON)

```json
{
  "ColCoId": 82,
  "ColCoCode": 96,
  "PayerId": 130,
  "PayerNumber": "PayerNumber6",
  "AccountId": 190,
  "FromDate": "FromDate2",
  "ToDate": "ToDate8"
}
```

