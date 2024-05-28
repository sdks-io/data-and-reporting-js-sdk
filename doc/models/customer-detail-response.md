
# Customer Detail Response

## Structure

`CustomerDetailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the selected account. |
| `accountName` | `string \| null \| undefined` | Optional | Account Name of the selected account. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the selected account. |
| `accountShortName` | `string \| null \| undefined` | Optional | Short name of the customer. |
| `accountTradingName` | `string \| null \| undefined` | Optional | Trading name of the customer |
| `allowFleetIdInput` | `boolean \| undefined` | Optional | True/False.<br>When false, users should not be allowed to enable Fleet Id prompt option while ordering cards under this account. |
| `band` | `string \| null \| undefined` | Optional | Band Id and Description of the Payer in Card Platform<br>e.g. (Id – Description):<br>1-Platinum<br>2-Gold<br>3-Silver<br>4-Bronze |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | - |
| `cardGroupPosition` | `string \| null \| undefined` | Optional | Card group position at –<br>•	Payer – Payer level<br>•	Account – Account level |
| `correspondenceAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | - |
| `deliveryAddresses` | [`DeliveryAddresses[] \| undefined`](../../doc/models/delivery-addresses.md) | Optional | - |
| `fleetPin` | `boolean \| undefined` | Optional | Is Fleet Pin optional enabled for the selected account |
| `fullName` | `string \| null \| undefined` | Optional | Full Name of the customer |
| `invoiceCustomerId` | `number \| null \| undefined` | Optional | Customer Id of the Invoice Point of the account |
| `invoiceCustomerShortName` | `string \| null \| undefined` | Optional | Short Name of the Invoice Point of the account |
| `isInvoicePoint` | `boolean \| null \| undefined` | Optional | Whether the account is an invoice point. |
| `marketingSegmentation` | `string \| null \| undefined` | Optional | Marketing Segmentation id and description<br>e.g. (Id – Description):<br>1-National CRT<br>2-International CRT & IKAs<br>3-Small Customers<br>4-National/International Fleet/IKA |
| `vATNumber` | `string \| null \| undefined` | Optional | VAT Registration Number of Customer |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected account. |
| `payerName` | `string \| null \| undefined` | Optional | Payer Name of the selected account. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected account. |
| `selfSelectedPin` | `boolean \| null \| undefined` | Optional | Is Self-selected Pin enabled for the account |
| `status` | `string \| null \| undefined` | Optional | Payer current status id and description<br>e.g. (Id – Description):<br>1-Active<br>2-Requested from UTA<br>3-Awaiting embossing<br>4-Manufactured<br>5-Awaiting despatch |
| `defaultPINAdviceType` | `number \| null \| undefined` | Optional | Default PIN AdviceType of the customer.<br>Possible Values:<br><br>1. Paper<br>2. Email<br>3. SMS<br>4. None |
| `pINAdviceTypes` | [`PINAdviceTypes[] \| undefined`](../../doc/models/pin-advice-types.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| null \| undefined` | Optional | API Request id |
| `pINChangeAllowedByCardholder` | `boolean \| undefined` | Optional | PIN change allowed for card holder or not. |
| `pINChangeAllowedFromFleetPIN` | `boolean \| undefined` | Optional | PIN change allowed from fleetpin or not. |

## Example (as JSON)

```json
{
  "AccountId": 1227,
  "AccountName": "5.11.3 DE",
  "AccountNumber": "DE00001067",
  "AccountShortName": "5.11.3 DE",
  "AccountTradingName": "5.11.3 DE",
  "Band": "2 - Gold",
  "FullName": "5.11.3 DE",
  "InvoiceCustomerId": 1227,
  "InvoiceCustomerShortName": "5.11.3 DE",
  "MarketingSegmentation": "4 - National/International Fleet/IKA",
  "VATNumber": "PH6578900900",
  "PayerId": 1227,
  "PayerName": "5.11.3 DE",
  "PayerNumber": "DE00001067",
  "Status": "1 - Active",
  "DefaultPINAdviceType": 1,
  "RequestId": "908358e3-03ca-4aef-93b2-37586b859171"
}
```

