
# Payer Access

## Structure

`PayerAccess`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isDefault` | `boolean \| undefined` | Optional | Whether this payer is the default payer of the user.<br>**Default**: `false` |
| `colcoId` | `number \| null \| undefined` | Optional | Collecting company id. |
| `colcoCode` | `number \| null \| undefined` | Optional | Collecting company code.<br>Example:<br>86-Philippines<br>5-UK |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | The 2-character ISO Code for the customer and card owning country |
| `payerGroupId` | `number \| null \| undefined` | Optional | Payer Group Id of the payer. |
| `payerGroup` | `string \| null \| undefined` | Optional | Payer group of the payer.<br>The value of this parameter will always be null when the input parameter “IncludePayerGroup” is false. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id to which the user has access<br>Example: 123456 |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number to which the user has access<br>Example: GB000000123 |
| `payerName` | `string \| null \| undefined` | Optional | Name of the Payer to which the user has access |

## Example (as JSON)

```json
{
  "IsDefault": false,
  "ColcoId": 14,
  "ColcoCode": 14,
  "ColCoCountryCode": "DE",
  "PayerGroupId": 123,
  "PayerGroup": "null",
  "PayerId": 854,
  "PayerNumber": "DE26688504",
  "PayerName": "TK MobilPlus"
}
```

