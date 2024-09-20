
# Account Response Accounts Items

## Structure

`AccountResponseAccountsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountFullName` | `string \| null \| undefined` | Optional | Account Full Name |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `bestOfIndicator` | `boolean \| undefined` | Optional | Best of Indicator of the Pricing customer/account configured. |
| `billingFrequencyType` | `string \| null \| undefined` | Optional | Billing/Invoice frequency. The frequency in which the transactions will be considered for invoicing in a bulling run<br>E.g.:<br>1    Daily (all days)<br>2    Daily (only working days)<br>3    Weekly - Monday<br>4    Weekly – Tuesday<br>Etc. |
| `billingFrequencyTypeId` | `number \| null \| undefined` | Optional | Billing/Invoice frequency Identifier. Indicates the frequency in which the transactions will be considered for invoicing in a bulling run |
| `billingRunFrequency` | `string \| null \| undefined` | Optional | Frequency at which the billing process is triggered. E.g.:<br>1    Daily (all days)<br>2    Daily (only working days)<br>3    Weekly - Monday<br>4    Weekly – Tuesday<br>Etc. |
| `billingRunFrequencyTypeId` | `number \| null \| undefined` | Optional | Frequency at which the billing process is triggered.<br>E.g.: 1, 2, 3, etc. |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | The 2-character ISO Code for the customer and card owning country. |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO code of customer currency. |
| `currencySymbol` | `string \| null \| undefined` | Optional | € |
| `day1Run` | `number \| null \| undefined` | Optional | The first day in a month when the billing should run in case of multiple billing runs configured with in a single month |
| `day2Run` | `number \| null \| undefined` | Optional | The second day in a month when the billing should run in case of multiple billing runs configured with in a single month |
| `day3Run` | `number \| null \| undefined` | Optional | The third day in a month when the billing should run in case of multiple billing runs configured with in a single month |
| `day4Run` | `number \| null \| undefined` | Optional | The fourth day in a month when the billing should run in case of multiple billing runs configured with in a single month |
| `frequencyType` | `string \| null \| undefined` | Optional | Frequency type unit id & description<br>E.g.:<br>1 - Daily<br>2 - Weekly<br>3 - Monthly<br>4 - Invoicing<br>6 - Calendar quarter |
| `grossAmount` | `number \| null \| undefined` | Optional | Gross amount in customer currency. |
| `internationalPOSLanguageCode` | `string \| null \| undefined` | Optional | POS international language code |
| `internationalPOSLanguageID` | `number \| null \| undefined` | Optional | POS international language ID |
| `invoiceAccountID` | `number \| null \| undefined` | Optional | The Account ID of the account on which the invoice is generated. |
| `invoiceAccountNumber` | `string \| null \| undefined` | Optional | The Account Number of the account on which the invoice is generated. |
| `invoiceAccountShortName` | `string \| null \| undefined` | Optional | The Account Short Name of the account on which the invoice is generated. |
| `invoiceDistributionMethods` | [`InvoiceDistributionMethod[] \| undefined`](../../doc/models/invoice-distribution-method.md) | Optional | - |
| `isInternational` | `boolean \| null \| undefined` | Optional | Whether the account is international. |
| `isInvoicePoint` | `boolean \| null \| undefined` | Optional | Whether the account is an invoice point. |
| `lastModifiedDate` | `string \| null \| undefined` | Optional | Account last modified date and time |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of customer currency. |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency symbol. |
| `localPOSLanguageCode` | `string \| null \| undefined` | Optional | POS local language code |
| `localPOSLanguageID` | `number \| null \| undefined` | Optional | POS local language ID |
| `netAmount` | `number \| null \| undefined` | Optional | Net amount in customer currency. |
| `outstandingBalance` | `number \| null \| undefined` | Optional | Outstanding balance in customer currency. |
| `paidAmount` | `number \| null \| undefined` | Optional | Amount paid in customer currency. |
| `status` | `string \| null \| undefined` | Optional | Account Status |
| `statusReason` | `string \| null \| undefined` | Optional | Account status change reason id-description for the Status Reason, if any |
| `totalActiveCardGroups` | `number \| null \| undefined` | Optional | Total number of active card groups under the account |
| `totalActiveCards` | `number \| null \| undefined` | Optional | Total number of active cards under the account. |
| `totalBlockedCards` | `number \| null \| undefined` | Optional | Total number of cards under the account that are permanently blocked |
| `totalCancelledCards` | `number \| null \| undefined` | Optional | Total number of cards under the account that are cancelled |
| `totalCards` | `number \| null \| undefined` | Optional | Total number of cards under the account. |
| `totalExpiredCards` | `number \| null \| undefined` | Optional | Total number of expired cards under the account. |
| `totalFraudCards` | `number \| null \| undefined` | Optional | Total number of cards in Fraud status. |
| `totalNewCards` | `number \| null \| undefined` | Optional | Total number of cards in “New” status. |
| `totalRenewalPendingCards` | `number \| null \| undefined` | Optional | Total number of Renewal Pending account under the payer |
| `totalReplacedCards` | `number \| null \| undefined` | Optional | Total number of cards under the account with status as “Replaced” |
| `totalTemporaryBlockCardsByCustomer` | `number \| null \| undefined` | Optional | Total number of cards under the account that are temporarily blocked by customer. |
| `totalTemporaryBlockCardsByShell` | `number \| null \| undefined` | Optional | Total number of cards under the account that are temporarily blocked by Shell. |
| `vATAmount` | `number \| null \| undefined` | Optional | VAT amount in customer currency. |
| `isPartnerCard` | `number \| null \| undefined` | Optional | The account / sub-account is partner card account or not.<br>Possible values (1= Non-PC account, 2= PC account, 3= PC Payer with Card Types, 4= PC Payer)<br>Note: A partner card account is assumed to have only partner card card-types associated |
| `tollsCustomerId` | `string \| null \| undefined` | Optional | Customer id in e-TM system |
| `tollsColcoCountryTypeId` | `string \| null \| undefined` | Optional | Colco country type id in e-TM system |
| `contracts` | [`CustomerContract[] \| undefined`](../../doc/models/customer-contract.md) | Optional | - |
| `isConsortiumMember` | `string \| null \| undefined` | Optional | true |

## Example (as JSON)

```json
{
  "AccountFullName": "CI TEST_Update20 New updated",
  "AccountId": 123,
  "AccountNumber": "DE00000008",
  "AccountShortName": "CI TEST_Update20",
  "BillingFrequencyType": "Monthly - 3rd",
  "BillingFrequencyTypeId": 1,
  "BillingRunFrequency": "Weekly - Monday",
  "BillingRunFrequencyTypeId": 1,
  "ColCoCountryCode": "14",
  "CurrencyCode": "14",
  "CurrencySymbol": "EUR",
  "Day1Run": 1,
  "Day2Run": 31,
  "Day3Run": 2,
  "Day4Run": 3,
  "FrequencyType": "Daily",
  "GrossAmount": 1232,
  "InternationalPOSLanguageCode": "deu",
  "InternationalPOSLanguageID": 1,
  "InvoiceAccountID": 9,
  "InvoiceAccountNumber": "DE00000008",
  "InvoiceAccountShortName": "BCI TEST_Update20",
  "LastModifiedDate": "20240131 11:12:34",
  "LocalCurrencyCode": "EUR",
  "LocalCurrencySymbol": "€",
  "LocalPOSLanguageCode": "deu",
  "LocalPOSLanguageID": 1,
  "NetAmount": 3434,
  "OutstandingBalance": 4354,
  "PaidAmount": 4343,
  "Status": "Blocked",
  "StatusReason": "3 - Customer Request",
  "TotalActiveCardGroups": 198,
  "TotalActiveCards": 544,
  "TotalBlockedCards": 121,
  "TotalCancelledCards": 168,
  "TotalCards": 10966,
  "TotalExpiredCards": 1000,
  "TotalFraudCards": 8,
  "TotalNewCards": 2,
  "TotalRenewalPendingCards": 0,
  "TotalReplacedCards": 20,
  "TotalTemporaryBlockCardsByCustomer": 9,
  "TotalTemporaryBlockCardsByShell": 2,
  "VATAmount": 2322,
  "IsPartnerCard": 1,
  "TollsCustomerId": "332",
  "TollsColcoCountryTypeId": "14",
  "BestOfIndicator": false
}
```

