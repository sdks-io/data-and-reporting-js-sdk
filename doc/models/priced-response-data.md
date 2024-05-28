
# Priced Response Data

## Structure

`PricedResponseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| null \| undefined` | Optional | Name of the account<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `36` |
| `accountId` | `number \| null \| undefined` | Optional | Account Id (i.e. Customer Id of the Sub Account in GFN) of the selected account. |
| `accountNumber` | `string \| null \| undefined` | Optional | AccountNumber of the selected account. |
| `accountShortName` | `string \| null \| undefined` | Optional | Nick name of the account<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `25` |
| `additional1` | `string \| null \| undefined` | Optional | Addtional SerialId or endpoint Id<br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `20` |
| `additional2` | `string \| null \| undefined` | Optional | Addtional SerialId or endpoint Id<br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `20` |
| `additional3` | `string \| null \| undefined` | Optional | Addtional SerialId or endpoint Id<br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `20` |
| `additional4` | `string \| null \| undefined` | Optional | Addtional SerialId or endpoint Id<br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `20` |
| `allowClearing` | `string \| null \| undefined` | Optional | Allow clearings<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `25` |
| `authorisationCode` | `number \| null \| undefined` | Optional | Autorization code<br>**Constraints**: `>= 1`, `<= 999999` |
| `transactionStatus` | `string \| null \| undefined` | Optional | Status of the transaction<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name of Card record<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `25` |
| `cardExpiryPeriod` | `number \| null \| undefined` | Optional | Expiry period of the card<br>**Constraints**: `>= 1`, `<= 9999` |
| `cardExpiry` | `string \| null \| undefined` | Optional | Card Expiry Date |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card Group Code<br>**Constraints**: `>= 1`, `<= 99999` |
| `cardGroupName` | `string \| null \| undefined` | Optional | Group nmae of the card |
| `issuerCode` | `number \| null \| undefined` | Optional | Issuer code<br>**Constraints**: `>= 1`, `<= 9999` |
| `cardPAN` | `string \| null \| undefined` | Optional | Full Card PAN<br>**Constraints**: *Minimum Length*: `19`, *Maximum Length*: `19` |
| `releaseCode` | `number \| null \| undefined` | Optional | Release code<br>**Constraints**: `>= 1`, `<= 10` |
| `cardSequenceNumber` | `number \| null \| undefined` | Optional | Sequesnce number of the card<br>**Constraints**: `>= 1`, `<= 999` |
| `cardType` | `string \| null \| undefined` | Optional | Type of card<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `colCoCode` | `string \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `unitDiscountInvoiceCurrency` | `number \| null \| undefined` | Optional | Unit discount Invoice currency |
| `colCoExchangeRate` | `number \| undefined` | Optional | Colco exchange rate |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol on which the invoice was raised<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `correctionFlag` | `boolean \| null \| undefined` | Optional | Is there any correction |
| `cRMNumber` | `number \| null \| undefined` | Optional | CRM number<br>**Constraints**: `>= 10`, `<= 10` |
| `customerCountry` | `string \| null \| undefined` | Optional | Customer country<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `30` |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Curreny which customer uses to transact.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Custome currency symbol<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `rebateonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | Rebate on net amount in customer currency |
| `effectiveDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective discount in customers currency |
| `effectiveUnitDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | effectiive unit discount in customers currency |
| `unitPriceInInvoiceCurrency` | `number \| null \| undefined` | Optional | Unitpricing in invoice currency |
| `invoiceTax` | `number \| null \| undefined` | Optional | Invoice tax |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Invoice amount befor tax |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Invoice amount after tax |
| `vATonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | Vat on net amount in customer currency |
| `customerRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Customer retail unit price before tax |
| `customerRetailValueTotalGross` | `number \| null \| undefined` | Optional | Total Customer retail value before tax |
| `customerRetailValueTotalNet` | `number \| null \| undefined` | Optional | Total customer retail value after tax |
| `transactionTypeDescription` | `number \| null \| undefined` | Optional | Trasaction type description |
| `rebateonNetAmountInTransactionCurrency` | `number \| null \| undefined` | Optional | Rebate give to net amountin transaction currency that is used |
| `effectiveDiscountInTrxCurrency` | `number \| null \| undefined` | Optional | Currency used to giveEffective discount on transactions |
| `delCoToColCoExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate between Delco and Colco |
| `cards` | `number[] \| undefined` | Optional | **Constraints**: *Minimum Items*: `1`, *Maximum Items*: `500` |
| `unitDiscountTransactionCurrency` | `number \| null \| undefined` | Optional | Currency used forto provide unit Transaction discount |
| `transactionGrossAmount` | `number \| null \| undefined` | Optional | Transactional amount before tax |
| `transactionNetAmount` | `number \| null \| undefined` | Optional | Transaction net amount after tax |
| `transactionTax` | `number \| null \| undefined` | Optional | Transaction tax |
| `vATonNetAmount` | `number \| null \| undefined` | Optional | Transactinal tax rates |
| `delcoListPriceUnitNet` | `number \| null \| undefined` | Optional | Priv |
| `delcoRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Delco retail price per unit before tax |
| `unitPriceInTransactionCurrency` | `number \| null \| undefined` | Optional | Delco retail price per unit after tax |
| `delcoRetailPriceUnitNet` | `number \| null \| undefined` | Optional | Delco retail price per unit |
| `delcoRetailValueTotalGross` | `number \| null \| undefined` | Optional | Delco retail price before tax |
| `delcoRetailValueTotalNet` | `number \| null \| undefined` | Optional | Delco per unit price after tax |
| `transactionCurrencySymbol` | `string \| null \| undefined` | Optional | Currency used for transaction. |
| `discountType` | `string \| null \| undefined` | Optional | Type of discount available |
| `disputeStatus` | `boolean \| null \| undefined` | Optional | Is there any dispute status?True or False<br>**Default**: `false` |
| `isShellSite` | `boolean \| undefined` | Optional | Is it a shell sites?True or False<br>**Default**: `false` |
| `fleetIdInput` | `string \| null \| undefined` | Optional | Fleet identifier |
| `incomingProductCode` | `number \| null \| undefined` | Optional | In coming product code |
| `postingDate` | `string \| null \| undefined` | Optional | Date of Posting |
| `postingTime` | `string \| null \| undefined` | Optional | Time whern posting happened |
| `productCode` | `number \| null \| undefined` | Optional | Product Code - 21 Unleaded - High octane,22 Unleaded - Medium octane,23 Unleaded - Low octane,24 Unleaded Environmental |
| `productName` | `string \| null \| undefined` | Optional | Name of the product<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `30` |
| `productGroupId` | `number \| null \| undefined` | Optional | Id of the product to which group it belongs |
| `incomingCurrencyCode` | `string \| null \| undefined` | Optional | In coming currecncy code<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `incomingSiteDescription` | `string \| null \| undefined` | Optional | In coming Site description |
| `location` | `string \| null \| undefined` | Optional | Location of the Shell site<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `siteName` | `string \| null \| undefined` | Optional | Shell site name<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `siteCode` | `number \| null \| undefined` | Optional | Shell site code |
| `incomingSiteNumber` | `number \| null \| undefined` | Optional | In coming site number |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | Currency code on which the invoice is raised<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `invoiceDate` | `string \| null \| undefined` | Optional | Date on which the invoice was raised |
| `invoiceNumber` | `number \| null \| undefined` | Optional | Invoice number |
| `fuelProduct` | `boolean \| null \| undefined` | Optional | Is it a fuel product? True or False |
| `vATApplicable` | `string \| null \| undefined` | Optional | Is VAT applicable?Y or N<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `payerName` | `string \| null \| undefined` | Optional | Name of the payer<br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `50` |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer account number<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `15` |
| `parentCustomerNumber` | `string \| null \| undefined` | Optional | Parent account number of the payer<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `15` |
| `payerGroup` | `string \| null \| undefined` | Optional | The group which the payer belongs to |
| `payerGroupName` | `string \| null \| undefined` | Optional | Name of the group to which the payer belongs to.<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `checkDigit` | `number \| null \| undefined` | Optional | Check digit |
| `netInvoiceIndicator` | `string \| null \| undefined` | Optional | After tax net invoice number |
| `delcoCode` | `number \| null \| undefined` | Optional | Delco code |
| `networkCode` | `number \| null \| undefined` | Optional | Network  code of the payer<br>**Constraints**: `>= 3`, `<= 3` |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Country of purchase<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `siteCountry` | `string \| null \| undefined` | Optional | Country where the site exists<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `vATCountry` | `string \| null \| undefined` | Optional | Country where VAT is applicable<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `delcoName` | `string \| null \| undefined` | Optional | Name of the delivery company<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `network` | `string \| null \| undefined` | Optional | Network of the Delivery company<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `25` |
| `odometerInput` | `number \| null \| undefined` | Optional | Odometet input |
| `originalSalesItemId` | `string \| null \| undefined` | Optional | Original item identifier for sales<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `25` |
| `fleetIDDescription` | `string \| null \| undefined` | Optional | Fleet identifier description |
| `parentCustomerId` | `number \| null \| undefined` | Optional | Identifier of parent customer |
| `pINIndicator` | `string \| null \| undefined` | Optional | PIN indicator |
| `productGroupName` | `string \| null \| undefined` | Optional | Name og the group the product belongs to |
| `purchasedInCountryCode` | `string \| null \| undefined` | Optional | The countroy code where the purchase was made |
| `quantity` | `number \| null \| undefined` | Optional | Quantity of the product |
| `rebateRate` | `number \| null \| undefined` | Optional | Rebate rate if any |
| `receiptNumber` | `number \| null \| undefined` | Optional | Reciept number |
| `refundFlag` | [`PricedTransactionRespV2RefundFlagEnum \| undefined`](../../doc/models/priced-transaction-resp-v2-refund-flag-enum.md) | Optional | Flag to check if there is any refund<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `siteGroupId` | `number \| null \| undefined` | Optional | Group identifier for the site |
| `siteGroupName` | `string \| null \| undefined` | Optional | Name of the Site group |
| `latitude` | `number \| null \| undefined` | Optional | Latitude of the site |
| `longitude` | `number \| null \| undefined` | Optional | Longitude of the site |
| `delCoExchangeRate` | `number \| null \| undefined` | Optional | Delivery company exchange rate |
| `euroRebateAmount` | `number \| null \| undefined` | Optional | Rebate amount in Euros |
| `netEuroAmount` | `number \| null \| undefined` | Optional | Net amount in Euros |
| `euroVATAmount` | `number \| null \| undefined` | Optional | Vat amount in Euros |
| `parentCustomerName` | `string \| null \| undefined` | Optional | Customers parent name<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `isInvoiced` | `boolean \| null \| undefined` | Optional | Is invoice raised<br>**Default**: `false` |
| `transactionCurrencyCode` | `string \| null \| undefined` | Optional | Transaction currency code |
| `creditDebitCode` | `string \| null \| undefined` | Optional | Is it Credit or debit C for credit D for Debit |
| `transactionDate` | `string \| null \| undefined` | Optional | Date of transaction |
| `transactionTime` | `string \| null \| undefined` | Optional | Time of transaction |
| `transactionItemId` | `string \| null \| undefined` | Optional | Identifier of the Iem in transaction |
| `trnIdentifier` | `string \| null \| undefined` | Optional | Transaction identifier |
| `type` | `string \| null \| undefined` | Optional | Transaction type for Delco |
| `transactionLine` | `number \| null \| undefined` | Optional | - |
| `transactionType` | `string \| null \| undefined` | Optional | Transaction type Colco |
| `uTCOffset` | `string \| null \| undefined` | Optional | Leaving country |
| `vATCategory` | `string \| null \| undefined` | Optional | To which category and counry does the  VAT come under |
| `vATRate` | `number \| null \| undefined` | Optional | VAT rate |
| `vehicleRegistration` | `string \| null \| undefined` | Optional | Vehicle registration number |
| `isCancelled` | `string \| null \| undefined` | Optional | Check if the pruchase is cancelled<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `colCoGrossAmount` | `number \| null \| undefined` | Optional | Gross amount from Colco |
| `colCoNetAmount` | `number \| null \| undefined` | Optional | Net amount from Colco |
| `colCoVATAmount` | `number \| null \| undefined` | Optional | Colco VAT amount |
| `originalCurrencySymbol` | `string \| null \| undefined` | Optional | Original currency code<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `originalCurrencyCode` | `string \| null \| undefined` | Optional | Original currency code<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `originalVATAmount` | `number \| null \| undefined` | Optional | Original VAT amount |
| `embossText` | `string \| null \| undefined` | Optional | Comapany name embosses in text<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `originalExchangeRate` | `number \| null \| undefined` | Optional | Orginal exchange rate |
| `originalTransactionItemInvoiceDate` | `string \| null \| undefined` | Optional | Original treansaction date |
| `feeTypeId` | `number \| null \| undefined` | Optional | Fee type identifier<br>**Constraints**: `>= 1`, `<= 1` |
| `lineItemDescription` | `boolean \| null \| undefined` | Optional | Line item identifier of the product<br>**Default**: `false` |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Fee rule description<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `25` |
| `frequency` | `number \| null \| undefined` | Optional | Frequency of transaction<br>**Constraints**: `>= 1`, `<= 1` |
| `feeRuleId` | `number \| null \| undefined` | Optional | Fee rule identifier<br>**Constraints**: `>= 1`, `<= 1` |
| `systemEntryDate` | `string \| null \| undefined` | Optional | Entry date in the system |
| `systemEntryTime` | `string \| null \| undefined` | Optional | Entry time in the system |
| `isManual` | `string \| null \| undefined` | Optional | Checking if its manual<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `originalTransactionItemId` | `string \| null \| undefined` | Optional | Is it manual<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `originalTransactionItemInvoiceNumber` | `number \| null \| undefined` | Optional | Original invoice transaction number |
| `originalTransactionItemInvoiceId` | `number \| null \| undefined` | Optional | Original Invoice transaction Identifier |
| `payerShortName` | `string \| null \| undefined` | Optional | Payers short name<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `reverseCharge` | `string \| null \| undefined` | Optional | Is reverse charge?<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `originalGrossAmount` | `number \| null \| undefined` | Optional | Original gross amount |
| `originalNetAmount` | `number \| null \| undefined` | Optional | Original Net amount |
| `unitOfMeasure` | `string \| null \| undefined` | Optional | Unit of measure<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `roadType` | `string \| null \| undefined` | Optional | Type of road<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `customerCountryIsoCode` | `string \| null \| undefined` | Optional | Customer country ISO Code<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `eVOperator` | `string \| null \| undefined` | Optional | EvOperator Name<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `20` |
| `eVSerialId` | `string \| null \| undefined` | Optional | Ev Operator identifier<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `eVChargePointSerial` | `string \| null \| undefined` | Optional | EV Charging point iserial identifier<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50` |
| `eVChargePointConnectorType` | `number \| null \| undefined` | Optional | Ev chariging connector type |
| `eVChargePointConnectorTypeDescription` | `string \| null \| undefined` | Optional | EV charging point connector type description |
| `eVChargeDuration` | `string \| null \| undefined` | Optional | Ev charging Duration |
| `eVChargeStartDate` | `string \| null \| undefined` | Optional | EvCharging start Date |
| `eVChargeStartTime` | `string \| null \| undefined` | Optional | EvCharging start time |
| `eVChargeEndDate` | `string \| null \| undefined` | Optional | EvCharging End Date |
| `eVChargeEndTime` | `string \| null \| undefined` | Optional | EvCharging End time |
| `hostingCollectingCompanyNumber` | `number \| null \| undefined` | Optional | - |
| `transactionId` | `number \| null \| undefined` | Optional | - |
| `fuelOnly` | `boolean \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "AccountName": "Blue Colour Ltd",
  "AccountId": 29484,
  "AccountNumber": "DE26667080",
  "AccountShortName": "Mathew",
  "Additional1": "GBALLEGO0002452",
  "Additional2": "GBALLEGO0002452",
  "Additional3": "GBALLEGO0002452",
  "Additional4": "GBALLEGO0002452",
  "AllowClearing": "Null",
  "AuthorisationCode": 300796,
  "TransactionStatus": "Y",
  "DriverName": "SATTY BHAMRA",
  "CardExpiryPeriod": 2204,
  "CardExpiry": "2022-01-01",
  "CardGroupId": 40000,
  "CardGroupName": "006240 FIRE BRIGHT SOLUTIONS",
  "IssuerCode": 7002,
  "CardPAN": "7002053465789891000",
  "ReleaseCode": 9,
  "CardSequenceNumber": 617,
  "CardType": "GB STD FLT NAT SINGLE R9",
  "ColCoCode": "014",
  "UnitDiscountInvoiceCurrency": -0.0051,
  "ColCoExchangeRate": 0.851858,
  "InvoiceCurrencySymbol": "GBP",
  "CustomerCountry": "United Kingdom",
  "CustomerCurrencyCode": "GBP",
  "CustomerCurrencySymbol": "£",
  "EffectiveDiscountInCustomerCurrency": -0.22,
  "EffectiveUnitDiscountInCustomerCurrency": -0.0051,
  "UnitPriceInInvoiceCurrency": 1.1024,
  "InvoiceTax": 0,
  "InvoiceGrossAmount": 57.25,
  "InvoiceNetAmount": 47.71,
  "VATonNetAmountInCustomerCurrency": 9.54,
  "CustomerRetailPriceUnitGross": 0,
  "CustomerRetailValueTotalGross": 57.52,
  "CustomerRetailValueTotalNet": 47.93,
  "TransactionTypeDescription": 9.59,
  "RebateonNetAmountInTransactionCurrency": -0.22,
  "EffectiveDiscountInTrxCurrency": -0.22,
  "UnitDiscountTransactionCurrency": -0.005,
  "TransactionGrossAmount": 57.25,
  "TransactionNetAmount": 47.71,
  "TransactionTax": 9.54,
  "VATonNetAmount": 9.54,
  "DelcoListPriceUnitNet": 0,
  "DelcoRetailPriceUnitGross": 1.32888,
  "UnitPriceInTransactionCurrency": 1.1074,
  "DelcoRetailPriceUnitNet": 1.1074,
  "DelcoRetailValueTotalGross": 57.52,
  "DelcoRetailValueTotalNet": 47.93,
  "TransactionCurrencySymbol": "$",
  "DiscountType": "Retail",
  "DisputeStatus": false,
  "IsShellSite": false,
  "FleetIdInput": "YG67OUM",
  "IncomingProductCode": 23,
  "PostingDate": "2021-08-02",
  "ProductCode": 30,
  "ProductName": "Unleaded - Medium octane",
  "ProductGroupId": 22,
  "IncomingCurrencyCode": "GBP",
  "IncomingSiteDescription": "Shell Broadway Ring",
  "Location": "Shell Broadway Ring",
  "SiteName": "Shell Broadway Ring",
  "SiteCode": 32,
  "IncomingSiteNumber": 15,
  "InvoiceCurrencyCode": "GBP",
  "InvoiceDate": "2021-08-02",
  "InvoiceNumber": 3201016193,
  "VATApplicable": "Y",
  "PayerName": "Colours Services Ltd",
  "PayerNumber": "GB12121212",
  "ParentCustomerNumber": "GB12121212",
  "PayerGroup": "H312066",
  "PayerGroupName": "12162566 - FUEL CARD SERVICE",
  "CheckDigit": 6,
  "NetInvoiceIndicator": "Y",
  "DelcoCode": 5,
  "NetworkCode": 3,
  "PurchasedInCountry": "United Kingdom",
  "SiteCountry": "United Kingdom",
  "VATCountry": "United Kingdom",
  "DelcoName": "Shell U.K. Oil Products Limited",
  "Network": "Shell",
  "OdometerInput": 0,
  "OriginalSalesItemId": "Null",
  "FleetIDDescription": "YG67OUM",
  "ParentCustomerId": 6494,
  "PINIndicator": "Y, N",
  "ProductGroupName": "Fees",
  "PurchasedInCountryCode": "GB",
  "Quantity": 43.28,
  "RebateRate": 0.0022,
  "ReceiptNumber": 6803,
  "RefundFlag": "Y",
  "SiteGroupId": 202,
  "SiteGroupName": "CZ 9100 ECONOMY NETWORK",
  "Latitude": 53.83606,
  "Longitude": -1.61854,
  "DelCoExchangeRate": 0.851858,
  "EuroRebateAmount": -0.258259,
  "NetEuroAmount": 56.01,
  "EuroVATAmount": 11.2,
  "ParentCustomerName": "FUEL CARD SERVICES LTD",
  "IsInvoiced": false,
  "TransactionCurrencyCode": "GBP",
  "CreditDebitCode": "D or C",
  "TransactionDate": "2021-08-01",
  "TransactionTime": "01/01/0001 12:16:58",
  "TransactionItemId": "H305908971030",
  "TrnIdentifier": "H305908971030",
  "Type": "SALE",
  "TransactionLine": 1,
  "TransactionType": "Purchase",
  "UTCOffset": "Europe/London",
  "VATCategory": "United Kingdom Standard VAT Rate",
  "VATRate": 0.2,
  "VehicleRegistration": "YG67OUM",
  "IsCancelled": "Y",
  "ColCoGrossAmount": 57.25,
  "ColCoNetAmount": 47.71,
  "ColCoVATAmount": 9.54,
  "OriginalCurrencySymbol": "$",
  "OriginalCurrencyCode": "$",
  "OriginalVATAmount": 0,
  "EmbossText": "PARKLANE PROPERTIES LTD",
  "OriginalExchangeRate": 0,
  "OriginalTransactionItemInvoiceDate": "2022-02-02",
  "FeeTypeId": 1,
  "LineItemDescription": true,
  "FeeRuleDescription": "Simple Fee",
  "Frequency": 1,
  "FeeRuleId": 1,
  "SystemEntryDate": "2021-08-28",
  "SystemEntryTime": "01/01/0001 20:21:08",
  "IsManual": "Y",
  "OriginalTransactionItemId": "Y",
  "OriginalTransactionItemInvoiceNumber": 6750802,
  "OriginalTransactionItemInvoiceId": 234,
  "PayerShortName": "FUEL CARD SERVICES LTD",
  "ReverseCharge": "Y",
  "OriginalGrossAmount": 57.25,
  "OriginalNetAmount": 57.25,
  "UnitOfMeasure": "L",
  "RoadType": "National Road",
  "CustomerCountryIsoCode": "DE",
  "EVOperator": "Shell Recharge",
  "EVSerialId": "GBALLEGO0002452",
  "EVChargePointSerial": "GBALLEGO0002452",
  "EVChargePointConnectorType": 5,
  "EVChargePointConnectorTypeDescription": "DC 50 kW",
  "EVChargeDuration": "PT3205S",
  "EVChargeStartDate": "2021-08-01",
  "EVChargeStartTime": "01/01/0001 20:08:01",
  "EVChargeEndDate": "2022-08-01",
  "EVChargeEndTime": "01/01/0001 20:08:01"
}
```

