
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressId` | `number \| null \| undefined` | Optional | Address Id in cards platform. |
| `addressLine1` | `string \| null \| undefined` | Optional | Address line1 |
| `addressLine2` | `string \| null \| undefined` | Optional | Address line2 |
| `addressLine3` | `string \| null \| undefined` | Optional | AddressLine3 |
| `zipCode` | `string \| null \| undefined` | Optional | ZipCode |
| `city` | `string \| null \| undefined` | Optional | City |
| `regionId` | `number \| null \| undefined` | Optional | Region Id of the address. |
| `countryISOCode` | `string \| null \| undefined` | Optional | Country ISO code of the address |
| `country` | `string \| null \| undefined` | Optional | Country for the address |
| `telephone` | `string \| null \| undefined` | Optional | Telephone number of the address contact |
| `emailAddress` | `string \| null \| undefined` | Optional | Email address of the address contact |
| `fax` | `string \| null \| undefined` | Optional | Fax number of the address contact |

## Example (as JSON)

```json
{
  "AddressId": 1,
  "AddressLine1": "test street",
  "AddressLine2": "Address line2",
  "AddressLine3": "AddressLine3",
  "ZipCode": "667 78",
  "City": "LUMPUR",
  "RegionId": 1234,
  "CountryISOCode": "CZ",
  "Country": "Germany",
  "Telephone": "3245872364823",
  "EmailAddress": "testmail@gmail.com",
  "Fax": "3245872364823"
}
```

