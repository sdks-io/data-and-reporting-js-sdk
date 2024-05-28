
# Payers

## Structure

`Payers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the payer |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided. |
| `payerId` | `number \| null \| undefined` | Optional | Payer id of the customer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the customer. |
| `payerName` | `string \| null \| undefined` | Optional | Payer Name of the customer. |
| `payerGroupId` | `number \| null \| undefined` | Optional | Payer Group identifier of the customer |

## Example (as JSON)

```json
{
  "ColCoId": 14,
  "ColCoCode": 14,
  "PayerId": 12345,
  "PayerName": "ABC company",
  "PayerGroupId": 456,
  "PayerNumber": "PayerNumber0"
}
```

