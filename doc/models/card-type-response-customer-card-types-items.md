
# Card Type Response Customer Card Types Items

## Structure

`CardTypeResponseCustomerCardTypesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canHavePIN` | `boolean \| undefined` | Optional | True/False – Whether the cards of this card type can have PIN. |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type Id |
| `cardTypeName` | `string \| null \| undefined` | Optional | Card Type Name. |
| `colCoCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the country. |
| `customerCardTypeId` | `number \| null \| undefined` | Optional | Customer Card Type Id |
| `dayTimeRestrictions` | [`CardDayTimeRestrictions \| undefined`](../../doc/models/card-day-time-restrictions.md) | Optional | - |
| `defaultPurchaseCategoryId` | `number \| null \| undefined` | Optional | Default Purchase category of the card type. |
| `embossAccountName` | `string \| null \| undefined` | Optional | Default Name to be embossed on the card |
| `expiryPeriod` | `number \| null \| undefined` | Optional | Default Expiry period. |
| `isCRT` | `boolean \| undefined` | Optional | True/False – Wether it is a CRT Card type or not. |
| `isFleet` | `boolean \| undefined` | Optional | True/False – Whether it is it a Fleet Card typeor not. |
| `isInternational` | `boolean \| undefined` | Optional | True/False – Whether it is an International Card type or not. |
| `isNational` | `boolean \| undefined` | Optional | True/False – Whether it is a National Card type or not. |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True/False – Whether this card type is allowed in partner Stations. |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True/False – Whether it is only allowed in Shell Stations or not. |
| `isVirtual` | `boolean \| undefined` | Optional | True/False - Whether it is a Virtual Card type or not. |
| `isVisibleToCustomers` | `boolean \| undefined` | Optional | True/False – Whether this card type is visible in SFH for card ordering. |
| `isActive` | `boolean \| undefined` | Optional | Whether card type is active or not. |
| `isCardAvailableForDownload` | `boolean \| undefined` | Optional | - |
| `isCardVisibleToCustomers` | `boolean \| undefined` | Optional | - |
| `pANLength` | `number \| null \| undefined` | Optional | PAN Length |
| `purchaseCategories` | [`PurchaseCategories[] \| null \| undefined`](../../doc/models/purchase-categories.md) | Optional | - |
| `tokenTypeId` | `number \| null \| undefined` | Optional | Token type identifier. |
| `tokenTypeName` | `string \| null \| undefined` | Optional | Token Type Name. |
| `usageRestrictions` | [`CardUsageRestrictions \| undefined`](../../doc/models/card-usage-restrictions.md) | Optional | - |
| `eMVContactless` | `boolean \| undefined` | Optional | Is Europay, MasterCard, and Visa Contactless enabled or not |
| `rFID` | `boolean \| undefined` | Optional | Whether the card type is enabled for RFID (Radio Frequency Identification) |
| `pINChangeSupported` | `boolean \| undefined` | Optional | PIN change supported or not. |
| `requirePIN` | `boolean \| undefined` | Optional | Whether a PIN is mandatory for the cards of this card type. |
| `offlinePIN` | `boolean \| undefined` | Optional | Whether offline PIN is enabled or not. |
| `isDefault` | `boolean \| undefined` | Optional | Whether card type is default or not. |
| `applicationsToShowNPIITokens` | `boolean \| undefined` | Optional | True/False<br>Note: ApplicationsToShowNPIITokens will be set as ‘True’ when the accessing application API key exists in the “ApplicationsToShowNPIITokens” card type configuration else “False”. |
| `mediumTypeID` | `number \| null \| undefined` | Optional | Id of the medium type identifier.<br>Example: 1,2,4<br><br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>3 - EV only<br>4 - Fuel Card and Key Fob<br>5 - Key Fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 – Smartpay Token |
| `mediumType` | `string \| null \| undefined` | Optional | Name of the medium type identifier.<br>Example: Fuel Card, Fuel Card with EV, Key Fob<br><br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>3 - EV only<br>4 - Fuel Card and Key Fob<br>5 - Key Fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 - Smartpay Token |
| `colCoCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the country. |

## Example (as JSON)

```json
{
  "CardTypeId": 228,
  "CardTypeName": "DE-Kleinfhzg. International Multi",
  "ColCoCurrencyCode": "EUR",
  "CustomerCardTypeId": 1576,
  "DefaultPurchaseCategoryId": 127,
  "EmbossAccountName": "5.11.3 DE",
  "ExpiryPeriod": 48,
  "PANLength": 19,
  "TokenTypeId": 160,
  "TokenTypeName": "DE FLT INT MUL - CHIP",
  "MediumTypeID": 1,
  "MediumType": "Fuel Card",
  "ColCoCurrencySymbol": "£",
  "CanHavePIN": false
}
```

