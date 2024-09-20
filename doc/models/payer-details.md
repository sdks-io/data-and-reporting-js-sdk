
# Payer Details

## Structure

`PayerDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting company id of the customer. |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting company code of the customer. |
| `countryCode` | `string \| null \| undefined` | Optional | ISO code of the customer country. |
| `country` | `string \| null \| undefined` | Optional | Country of the customer |
| `payerId` | `number \| null \| undefined` | Optional | Payer id of the customer |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the customer |
| `payerFullName` | `string \| null \| undefined` | Optional | Full Name of the Payer |
| `payerShortName` | `string \| null \| undefined` | Optional | Short name of the payer |
| `payerGroupId` | `number \| null \| undefined` | Optional | Payer Group Id |
| `amountDue` | `number \| null \| undefined` | Optional | Invoiced amount and due for payment from the last SOA. |
| `amountOverdue` | `number \| null \| undefined` | Optional | Invoiced amount and overdue for payment from the last SOA. |
| `amountNotOverdue` | `number \| null \| undefined` | Optional | Invoiced amount and not overdue for payment from the last SOA. |
| `outstandingBalance` | `number \| null \| undefined` | Optional | Current outstanding balance amount from the last SOA. |
| `unallocatedPayment` | `number \| null \| undefined` | Optional | Unallocated payment.<br>When negative, indicates overdue amount from the last SOA. |
| `sOACurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code |
| `sOACurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol |
| `sOACreditLimitCurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code |
| `sOACreditLimitCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol |
| `lastPaymentCurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code |
| `lastPaymentCurrencySymbol` | `string \| null \| undefined` | Optional | currency symbol |
| `lastPaymentAmount` | `number \| null \| undefined` | Optional | Latest payment amount for the requested payer. |
| `lastPaymentDate` | `string \| null \| undefined` | Optional | Latest payment date for the requested payer. |
| `sOALastPaymentAmount` | `number \| null \| undefined` | Optional | Last payment amount in statement of account for the requested payer. |
| `sOALastPaymentDate` | `string \| null \| undefined` | Optional | Last payment date in statement of account for the requested payer. |
| `currencyCode` | `string \| null \| undefined` | Optional | Currency ISO code |
| `currencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | The 2-character ISO Code for the customer and card owning country. |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | Currency ISO code of the local country. |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol of the local country |
| `localCurrencyExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate from OU base currency to local currency. |
| `localCurrencyExchangeRateSoA` | `number \| null \| undefined` | Optional | Exchange rate from SoA credit limit currency to local currency |
| `billingFrequencyTypeId` | `number \| null \| undefined` | Optional | Billing/Invoice frequency Identifier. Indicates the frequency in which the transactions will be considered for invoicing in a bulling run<br>E.g.: 1, 2, 3, etc. |
| `billingFrequencyType` | `string \| null \| undefined` | Optional | Billing/Invoice frequency. The frequency in which the transactions will be considered for invoicing in a bulling run<br>E.g.:<br>1    Daily (all days)<br>2    Daily (only working days)<br>3    Weekly - Monday<br>4    Weekly – Tuesday<br>Etc. |
| `billingRunFrequencyTypeId` | `number \| null \| undefined` | Optional | Frequency at which the billing process is triggered.<br>E.g.: 1, 2, 3, etc. |
| `billingRunFrequnecy` | `string \| null \| undefined` | Optional | Frequency at which the billing process is triggered.E.g.:<br>1    Daily (all days)<br>2    Daily (only working days)<br>3    Weekly - Monday<br>4    Weekly – Tuesday<br>Etc. |
| `day1Run` | `number \| null \| undefined` | Optional | The first day in a month when the billing should run in case of multiple billing runs configured with in a single month. |
| `day2Run` | `number \| null \| undefined` | Optional | The second day in a month when the billing should run in case of multiple billing runs configured with in a single month. |
| `day3Run` | `number \| null \| undefined` | Optional | The third day in a month when the billing should run in case of multiple billing runs configured with in a single month. |
| `day4Run` | `number \| null \| undefined` | Optional | The fourth day in a month when the billing should run in case of multiple billing runs configured with in a single month. |
| `invoiceDistributionMethods` | [`InvoiceDistributionMethod[] \| undefined`](../../doc/models/invoice-distribution-method.md) | Optional | - |
| `outputType` | `string \| null \| undefined` | Optional | Invoice output type (Id-Description)<br>E.g.:<br>1-PDF<br>6-Print |
| `invoiceAccountID` | `number \| null \| undefined` | Optional | The Account ID of the account on which the invoice is generated. |
| `invoiceAccountNumber` | `string \| null \| undefined` | Optional | The Account Number of the account on which the invoice is generated. |
| `invoiceAccountShortName` | `string \| null \| undefined` | Optional | The Account Short Name of the account on which the invoice is generated. |
| `bestOfIndicator` | `boolean \| undefined` | Optional | Best of Indicator of the Pricing customer/account configured.<br>**Default**: `false` |
| `isInternational` | `boolean \| undefined` | Optional | Whether the account is international.<br>**Default**: `false` |
| `totalAccounts` | `number \| null \| undefined` | Optional | Total number of accounts under the payer. |
| `totalActiveAccounts` | `number \| null \| undefined` | Optional | Total number of active accounts under the payer. |
| `totalCards` | `number \| null \| undefined` | Optional | Total number of cards under the payer. |
| `totalActiveCards` | `number \| null \| undefined` | Optional | Total number of active cards under the payer. |
| `totalBlockedCards` | `number \| null \| undefined` | Optional | Total number of cards under the payer that are permanently blocked |
| `totalCancelledCards` | `number \| null \| undefined` | Optional | Total number of cards under the payer that are cancelled |
| `totalExpiredCards` | `number \| null \| undefined` | Optional | Total number of expired cards under the payer. |
| `totalRenewalPendingCards` | `number \| null \| undefined` | Optional | Total number of Renewal Pending cards under the payer. |
| `totalReplacedCards` | `number \| null \| undefined` | Optional | Total number of cards under the payer with status as “Replaced |
| `totalTemporaryBlockCardsByCustomer` | `number \| null \| undefined` | Optional | Total number of cards under the payer that are temporarily blocked by customer. |
| `totalTemporaryBlockCardsByShell` | `number \| null \| undefined` | Optional | Total number of cards under the payer that are temporarily blocked by Shell. |
| `totalNewCards` | `number \| null \| undefined` | Optional | Total number of cards in “New” status |
| `totalFraudCards` | `number \| null \| undefined` | Optional | Total number of cards in Fraud status |
| `totalBlockedAccounts` | `number \| null \| undefined` | Optional | Total number of accounts in Blocked status |
| `totalCancelledAccounts` | `number \| null \| undefined` | Optional | Total number of accounts in Cancel status |
| `payerTradingName` | `string \| null \| undefined` | Optional | Trading name for the Payer |
| `status` | `string \| undefined` | Optional | Payer current status id and description<br>e.g. (Id – Description):<br>1-Active<br>2-Requested from UTA<br>3-Awaiting embossing<br>4-Manufactured<br>5-Awaiting despatch |
| `billingLanguage` | `string \| null \| undefined` | Optional | Payer Billing Language id and description |
| `legalEntity` | `string \| null \| undefined` | Optional | Legal entity id and description of the Payer |
| `dateEstablished` | `string \| null \| undefined` | Optional | Payer/Company Established Date. |
| `customerClassification` | `string \| null \| undefined` | Optional | Payer/Company Classification id and description |
| `industryClass` | `string \| null \| undefined` | Optional | Payer/Company Industry class id and description |
| `marketingSegmentation` | `string \| null \| undefined` | Optional | Marketing Segmentation id and description |
| `lineOfBusiness` | `string \| null \| undefined` | Optional | Payer/Company Line of Business Id and Description |
| `printCreditLimit` | `boolean \| undefined` | Optional | Is Credit Limit printed on the statement of account: True/False<br>If True Credit Limit is printed on invoice/SOA<br>**Default**: `false` |
| `cardGroupType` | `string \| null \| undefined` | Optional | Card Group Type configured for Payer<br>e.g. (Id – Description):<br>1-Horizontal only<br>2-Vertical only<br>3-Both |
| `renewCards` | `boolean \| undefined` | Optional | If set to True cards will be automatically renewed on expiry<br>**Default**: `false` |
| `allowSelectPIN` | `boolean \| undefined` | Optional | If set to True then Self Select PIN is allowed for Payer<br>**Default**: `false` |
| `useFleetPIN` | `boolean \| undefined` | Optional | If set to True then Fleet PIN is applied for the cards directly under payer |
| `vATRegNumber` | `string \| null \| undefined` | Optional | Payer/Company VAT registration number. |
| `vATRegNumber2` | `string \| undefined` | Optional | Payer/Company VAT registration number 2. |
| `registrationNumber` | `string \| null \| undefined` | Optional | Payer/Company Registration number |
| `registrationNumber2` | `string \| null \| undefined` | Optional | Payer/Company Registration number2 |
| `salesLedgerBalance` | `number \| null \| undefined` | Optional | Sales Ledger Balance (Billed) |
| `exposure` | `number \| null \| undefined` | Optional | Exposure after guarantee |
| `outstandingDebt` | `number \| null \| undefined` | Optional | Total outstanding debt (including billed and unbilled sales and fee items) |
| `availableCredit` | `number \| null \| undefined` | Optional | The available credit for the payer.<br>This is the credit limit minus the outstanding debt. |
| `band` | `string \| null \| undefined` | Optional | Band Id and Description of the Payer in Card Platform.<br>e.g. (Id – Description):<br>1-Platinum<br>2-Gold<br>3-Silver<br>4-Bronze |
| `globalCustomerReferenceId` | `string \| null \| undefined` | Optional | Global Customer reference id configured in card platform for Payer (Same as Payer Group) |
| `creditLimit` | `number \| null \| undefined` | Optional | Payment Credit limit of Payer. |
| `creditLimitInCustomerCurrency` | `number \| null \| undefined` | Optional | Credit limit in Customer currency.<br>Note: For currency details refer the parameters CurrencyCode & CurrencySymbol in the PayerDetail response. |
| `billingCurrencyCode` | `string \| null \| undefined` | Optional | Customer Billing currency ISO code. |
| `billingCurrencySymbol` | `string \| null \| undefined` | Optional | Customer Billing currency Symbol. |
| `paymentMethod` | `string \| null \| undefined` | Optional | Payment method Id and Description as configured for Payer in Card Platform |
| `paymentTerms` | `string \| null \| undefined` | Optional | Payment terms Id and Description as configured for Payer in Card Platform |
| `temporaryCreditLimitIncrease` | `number \| null \| undefined` | Optional | Temporary Credit limit increase value |
| `temporaryCreditLimitIncreaseInCustomerCurrency` | `number \| null \| undefined` | Optional | Temporary Credit limit increase value |
| `temporaryCreditLimitExpiryDate` | `string \| null \| undefined` | Optional | Temporary Credit limit expiry date |
| `payerBankAccount` | [`BankAccount[] \| undefined`](../../doc/models/bank-account.md) | Optional | - |
| `cardDeliveryAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | - |
| `correspondanceAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | - |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | - |
| `hasActiveVolBasedPricing` | `boolean \| undefined` | Optional | True, if the payer is setup for volume-based pricing and is active on the current date, else false.<br><br>This field is returned only when IncludeBonusParameters is set to True in the request. Else set to null. |
| `hasActiveVolBasedBonus` | `boolean \| undefined` | Optional | True, if the payer is setup for volume-based bonus and is active on the current date, else false.<br>This field is returned only when IncludeBonusParameters is set to True in the request. Else set to null. |
| `hasActiveVolBasedAssociationBonus` | `boolean \| undefined` | Optional | True, if the payer is setup for volume-based association bonus and is active on the current date, else false.<br>This field is returned only when IncludeBonusParameters is set to True in the request. Else set to null. |
| `financeCurrency` | [`FinanceCurrency2 \| undefined`](../../doc/models/finance-currency-2.md) | Optional | - |
| `tollsCustomerId` | `string \| null \| undefined` | Optional | Customer id in e-TM system<br>This field will have value only when ReturnTollsCustomerId is set to true in the request else set to null or empty. |
| `tollsColcoCountryTypeId` | `string \| null \| undefined` | Optional | String    Colco country type id in e-TM system<br>This field will have value only when ReturnTollsCustomerId is set to true in the request else set to null or empty. |
| `contracts` | [`CustomerContract[] \| undefined`](../../doc/models/customer-contract.md) | Optional | - |

## Example (as JSON)

```json
{
  "ColCoId": 14,
  "ColCoCode": 14,
  "CountryCode": "DE",
  "Country": "Germany",
  "PayerId": 12345,
  "PayerNumber": "DE000000123",
  "PayerFullName": "ABC Company",
  "PayerShortName": "ABC",
  "PayerGroupId": 456,
  "AmountDue": 1500,
  "AmountOverdue": 450,
  "AmountNotOverdue": 4546.76,
  "OutstandingBalance": 456,
  "UnallocatedPayment": 123,
  "SOACurrencyCode": "EUR",
  "SOACurrencySymbol": "€",
  "SOACreditLimitCurrencyCode": "EUR",
  "SOACreditLimitCurrencySymbol": "€",
  "LastPaymentCurrencyCode": "EUR",
  "LastPaymentCurrencySymbol": "€",
  "LastPaymentAmount": 5465,
  "LastPaymentDate": "20230405",
  "SOALastPaymentAmount": 45443,
  "SOALastPaymentDate": "20230805",
  "CurrencyCode": "EUR",
  "CurrencySymbol": "€",
  "ColCoCountryCode": "DE",
  "LocalCurrencyCode": "EUR",
  "LocalCurrencySymbol": "€",
  "LocalCurrencyExchangeRate": 1.45,
  "LocalCurrencyExchangeRate_SoA": 1.2,
  "BillingFrequencyTypeId": 1,
  "BillingFrequencyType": "weekly",
  "BillingRunFrequencyTypeId": 1,
  "BillingRunFrequnecy": "weekly",
  "Day1Run": 0,
  "Day2Run": 0,
  "Day3Run": 0,
  "Day4Run": 0,
  "OutputType": "PDF",
  "InvoiceAccountID": 12345,
  "InvoiceAccountNumber": "1234567",
  "InvoiceAccountShortName": "Test Account",
  "BestOfIndicator": false,
  "IsInternational": false,
  "TotalAccounts": 5,
  "TotalActiveAccounts": 4,
  "TotalCards": 567,
  "TotalActiveCards": 560,
  "TotalBlockedCards": 6,
  "TotalCancelledCards": 0,
  "TotalExpiredCards": 1,
  "TotalRenewalPendingCards": 0,
  "TotalReplacedCards": 0,
  "TotalTemporaryBlockCardsByCustomer": 0,
  "TotalTemporaryBlockCardsByShell": 0,
  "TotalNewCards": 0,
  "TotalBlockedAccounts": 0,
  "TotalCancelledAccounts": 0,
  "PayerTradingName": "ABC Company",
  "Status": "Active",
  "BillingLanguage": "1-German",
  "LegalEntity": "20-Unlimited Corporation",
  "DateEstablished": "19880504",
  "CustomerClassification": "3-10049 Domestic",
  "IndustryClass": "4-Growing of sugar cane",
  "MarketingSegmentation": "1-National CRT",
  "LineOfBusiness": "1-CRT",
  "PrintCreditLimit": false,
  "CardGroupType": "1-Horizontal only",
  "RenewCards": false,
  "AllowSelectPIN": false,
  "VATRegNumber": "4534545",
  "VATRegNumber2": "45345545",
  "RegistrationNumber": "453543",
  "RegistrationNumber2": "35435",
  "SalesLedgerBalance": 0,
  "Exposure": 0,
  "OutstandingDebt": 0,
  "AvailableCredit": 0,
  "Band": "Gold",
  "GlobalCustomerReferenceId": "1234",
  "CreditLimit": 3434,
  "BillingCurrencyCode": "EUR",
  "BillingCurrencySymbol": "€",
  "PaymentMethod": "Incoming - Bank Transfer",
  "PaymentTerms": "0 days after invoice",
  "TemporaryCreditLimitIncrease": 0,
  "TemporaryCreditLimitIncreaseInCustomerCurrency": 0,
  "TemporaryCreditLimitExpiryDate": "20230504",
  "TollsCustomerId": "2332",
  "TollsColcoCountryTypeId": "33"
}
```

