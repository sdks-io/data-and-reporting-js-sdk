
# Delivery Addresses

## Structure

`DeliveryAddresses`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressId` | `number \| null \| undefined` | Optional | Address Id |
| `addressLine1` | `string \| null \| undefined` | Optional | AddressLine1 |
| `addressLine2` | `string \| null \| undefined` | Optional | AddressLine2 |
| `addressLine3` | `string \| null \| undefined` | Optional | AddressLine3 |
| `city` | `string \| null \| undefined` | Optional | City |
| `companyName` | `string \| null \| undefined` | Optional | Account Name |
| `contactForeName` | `string \| null \| undefined` | Optional | Contact fore name of the delivery address. |
| `contactLastName` | `string \| null \| undefined` | Optional | Contact last name of the delivery address. |
| `contactMiddleName` | `string \| null \| undefined` | Optional | Contact middle name of the delivery address. |
| `contactTitle` | `string \| null \| undefined` | Optional | ContactTitle |
| `country` | `string \| null \| undefined` | Optional | Country |
| `countryId` | `number \| null \| undefined` | Optional | Country Id |
| `countryISOCode` | `string \| null \| undefined` | Optional | Country ISO code |
| `fax` | `string \| null \| undefined` | Optional | Fax number of the address contact. |
| `region` | `string \| null \| undefined` | Optional | Region of the Card Delivery address |
| `regionId` | `number \| null \| undefined` | Optional | Region Id of the address. |
| `telephone` | `string \| null \| undefined` | Optional | Telephone number of the address contact |
| `zipCode` | `string \| null \| undefined` | Optional | Delivery Zip code |
| `addressType` | `number \| null \| undefined` | Optional | Delivery address type.<br>Possible Values:<br>1 – Card and PIN delivery address<br>2 – Card delivery address<br>3 – PIN delivery address |

## Example (as JSON)

```json
{
  "AddressId": 1,
  "AddressLine1": "AddressLine1",
  "AddressLine2": "AddressLine2",
  "AddressLine3": "AddressLine3",
  "City": "germany",
  "CompanyName": "5.11.3 DE",
  "ContactForeName": "5.11.13 DE",
  "ContactLastName": "SAM",
  "ContactMiddleName": "SAM",
  "ContactTitle": "Mr",
  "Country": "Germany",
  "CountryId": 9,
  "CountryISOCode": "DE",
  "Fax": "657875",
  "Region": "Germany",
  "RegionId": 133,
  "Telephone": "78787786868",
  "ZipCode": "E14 5HQ",
  "AddressType": 1
}
```

