
# Card Type Response Customer Card Types Items

## Structure

`CardTypeResponseCustomerCardTypesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardTypeId` | `number \| undefined` | Optional | Card Type Id in Cards Platform. |
| `tokenTypeId` | `number \| undefined` | Optional | Token type identifier. |
| `cardTypeName` | `string \| undefined` | Optional | Card Type Name. |
| `tokenTypeName` | `string \| undefined` | Optional | Token Type Name. |
| `pANLength` | `number \| undefined` | Optional | PAN Length. |
| `expiryPeriod` | `number \| undefined` | Optional | Default Expiry period. |
| `isNational` | `boolean \| undefined` | Optional | True/False – Whether it is a National Card type or not. |
| `isInternational` | `boolean \| undefined` | Optional | True/False – Whether it is an International Card type or not. |
| `isCRT` | `boolean \| undefined` | Optional | True/False – Wether it is a CRT Card type or not. |
| `isFleet` | `boolean \| undefined` | Optional | True/False – Whether it is it a Fleet Card typeor not. |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True/False – Whether it is only allowed in Shell Stations or not. |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True/False – Whether this card type is allowed in partner Stations. |
| `canHavePIN` | `boolean \| undefined` | Optional | True/False – Whether the cards of this card type can have PIN. |
| `isVirtual` | `boolean \| undefined` | Optional | True/False - Whether it is a Virtual Card type or not. |
| `isActive` | `boolean \| undefined` | Optional | Whether card type is active or not. |
| `isCardAvailableForDownload` | `boolean \| null \| undefined` | Optional | Whether card type is available for download. |
| `colCoCurrencyCode` | `string \| undefined` | Optional | ISO currency code of the country. |
| `colCoCurrencySymbol` | `string \| undefined` | Optional | Currency symbol of the country. |
| `eMVContactless` | `boolean \| null \| undefined` | Optional | Is Europay, MasterCard, and Visa Contactless enabled or not. |
| `rFID` | `boolean \| null \| undefined` | Optional | Whether the card type is enabled for RFID (Radio Frequency Identification) |
| `pINChangeSupported` | `boolean \| null \| undefined` | Optional | PIN change supported or not. |
| `requirePIN` | `boolean \| null \| undefined` | Optional | Whether a PIN is mandatory for the cards of this card type. |
| `offlinePIN` | `boolean \| null \| undefined` | Optional | Whether offline PIN is enabled or not. |
| `mediumTypeID` | `number \| undefined` | Optional | Id of the medium type identifier. <br><br> Full list below - <br> 1 - Fuel Card <br> 2 - Fuel Card with EV <br> 3 - EV only  <br> 4 - Fuel Card and Key Fob <br> 5 - Key Fob <br> 6 - Virtual Card <br> 7 - NPII Token <br> 8 – Smartpay Token |
| `mediumType` | `string \| undefined` | Optional | Name of the medium type identifier. <br><br> Full list below - <br> 1 - Fuel Card <br> 2 - Fuel Card with EV <br> 3 - EV only  <br> 4 - Fuel Card and Key Fob <br> 5 - Key Fob <br> 6 - Virtual Card <br> 7 - NPII Token <br> 8 – Smartpay Token |
| `cartTypeAccounts` | [`CartTypeAccount[] \| undefined`](../../doc/models/cart-type-account.md) | Optional | List of accounts. |
| `purchaseCategories` | [`PurchaseCategories[] \| null \| undefined`](../../doc/models/purchase-categories.md) | Optional | - |

## Example (as JSON)

```json
{
  "CardTypeId": 7077861,
  "TokenTypeId": 1234,
  "CardTypeName": "Philippines CRT",
  "TokenTypeName": "PH FLE NAT SIN R1",
  "PANLength": 12,
  "ExpiryPeriod": 30,
  "IsNational": true,
  "IsInternational": true,
  "IsCRT": true,
  "IsFleet": true,
  "IsShellSitesOnly": true,
  "IsPartnerSitesIncluded": true,
  "CanHavePIN": true,
  "IsVirtual": true,
  "IsActive": true,
  "IsCardAvailableForDownload": true,
  "ColCoCurrencyCode": "GBP",
  "ColCoCurrencySymbol": "£",
  "EMVContactless": true,
  "RFID": true,
  "PINChangeSupported": true,
  "RequirePIN": true,
  "OfflinePIN": true,
  "MediumTypeID": 8,
  "MediumType": "Smartpay Token"
}
```

