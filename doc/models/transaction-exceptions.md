
# Transaction Exceptions

## Structure

`TransactionExceptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `salesItemId` | `number \| null \| undefined` | Optional | Unique Sales Item Identifier |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Identifier |
| `productId` | `number \| null \| undefined` | Optional | Product Id |
| `transactionGUID` | `string \| null \| undefined` | Optional | Transaction Unique Identifier |
| `transactionDate` | `string \| null \| undefined` | Optional | Local Transaction Date  of where the transaction took place<br>Format: yyyyMMdd |
| `customerInvoiceValueTotalGross` | `number \| null \| undefined` | Optional | Total Gross Amount for the Invoice Customer |
| `cardPAN` | `string \| null \| undefined` | Optional | Card PAN number<br>Returns masked PAN number when masking is enabled at the Microservices configuration (Mask all digits except the last 6 digits of the PAN) |
| `cardExpiry` | `string \| null \| undefined` | Optional | Card Expiry Date<br>Format: yyyyMMdd |
| `transactionTime` | `string \| null \| undefined` | Optional | Local Transaction Time of where the transaction took place<br>Format: HH:mm:ss (24 hours format) |
| `uTCOffset` | `string \| null \| undefined` | Optional | UTC Offset extracted from GFN Sales Date time. Note: This may not be accurate for all TPN transactions<br>Format: +/-HH:mm:ss (24 hours format) |
| `fleetIdInput` | `string \| null \| undefined` | Optional | Fleet Id Input as entered by the drivers at the time of transaction |
| `odometerInput` | `number \| null \| undefined` | Optional | Odometer Input as entered by the drivers at the time of transaction |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name embossed on the card |
| `vehicleRegistration` | `string \| null \| undefined` | Optional | Vehicle Registration Number embossed on the card |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code (Example: GBP) |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code (i.e. £, $, etc.,) |
| `transactionCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code |
| `transactionCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Transaction Currency Code (i.e. £, $, etc.,) |
| `transactionNetAmount` | `number \| null \| undefined` | Optional | Net Amount |
| `transactionTax` | `number \| null \| undefined` | Optional | Tax Amount |
| `transactionGrossAmount` | `number \| null \| undefined` | Optional | Gross Amount |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Invoiced Net Amount |
| `invoiceTax` | `number \| null \| undefined` | Optional | Invoiced Tax Amount |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Invoice Gross Amount |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Country of Purchase (Ex: France, Germany, etc.,) |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `quantity` | `number \| null \| undefined` | Optional | Quantity/Volume |
| `fuelProduct` | `boolean \| null \| undefined` | Optional | True if the product on transaction is listed as a fuel product else return false |
| `unitPriceInTransactionCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in transaction currency |
| `unitPriceInInvoiceCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in invoice currency |
| `unitDiscountTransactionCurrency` | `number \| null \| undefined` | Optional | Unit Discount in transaction currency |
| `unitDiscountInvoiceCurrency` | `number \| null \| undefined` | Optional | Unit Discount in invoice currency |
| `isInvoiced` | `boolean \| null \| undefined` | Optional | True when the transaction is already invoice, else return False |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice Number if invoiced |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoice Date<br>Format: yyyyMMdd HH:mm:ss |
| `siteCode` | `string \| null \| undefined` | Optional | Site Code |
| `siteName` | `string \| null \| undefined` | Optional | Site Name |
| `siteCountry` | `string \| null \| undefined` | Optional | Site Country |
| `location` | [`ExceptionSiteLocation \| undefined`](../../doc/models/exception-site-location.md) | Optional | Geography Location entity for Site Location |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card Group Name |
| `receiptNumber` | `string \| null \| undefined` | Optional | Receipt Number |
| `productCode` | `string \| null \| undefined` | Optional | Product Code |
| `productName` | `string \| null \| undefined` | Optional | Product Name |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name |
| `delCoExchangeRate` | `number \| null \| undefined` | Optional | DelCo Exchange Rate (Site exchange rate) |
| `colCoExchangeRate` | `number \| null \| undefined` | Optional | ColCo Exchange Rate (Customer exchange rate) |
| `isShellSite` | `boolean \| null \| undefined` | Optional | True when transaction occurred at a Shell site else return False |
| `network` | `string \| null \| undefined` | Optional | Network as configured |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site GroupName |
| `postingDate` | `string \| null \| undefined` | Optional | Site GroupName |
| `issuerCode` | `string \| null \| undefined` | Optional | First digits of the Card PAN<br>7002 = Fleet  <br>7077 = CRT |
| `purchasedInCountryCode` | `string \| null \| undefined` | Optional | ISO code of the country where the transaction took place |
| `customerCountryCode` | `string \| null \| undefined` | Optional | ISO code of the  Customer Country |
| `customerCountry` | `string \| null \| undefined` | Optional | Name of the Customer Country |
| `releaseCode` | `string \| null \| undefined` | Optional | Release code, 7th Digit of the Card PAN |
| `cardGroupId` | `string \| null \| undefined` | Optional | Card group ID |
| `cardSequenceNumber` | `string \| null \| undefined` | Optional | 3 digits, Card sequence number and Check digit  (Digit 16,17 and 18 on the card pan) |
| `checkDigit` | `string \| null \| undefined` | Optional | Check digit, Last number of the card pan |
| `fleetIDDescription` | `string \| null \| undefined` | Optional | FleetId/CRN description in Card Platform configured at the account level |
| `vATRate` | `number \| null \| undefined` | Optional | VAT Percentage |
| `vATCategory` | `string \| null \| undefined` | Optional | VAT Category Id-Description<br>1-Zero Rated<br>2-A1 PH-O 12% Sales Domestic<br>3-VAT exempt |
| `effectiveDiscountInTrxCurrency` | `string \| null \| undefined` | Optional | Effective Discount (excluding VAT, in transaction currency)  4 digits |
| `transactionType` | `string \| null \| undefined` | Optional | Transaction Type |
| `pINIndicator` | `string \| null \| undefined` | Optional | Pin Indicator (Indicates whether PIN used or not used at the time of transaction) |
| `vATApplicable` | `string \| null \| undefined` | Optional | Is VAT Applicable for this transaction<br>“Y” or “N” |
| `netInvoiceIndicator` | `string \| null \| undefined` | Optional | Net Invoice Indicator, Will the customer receive an invoice without VAT?<br>Example: “Y” or “N” |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Customer currency code |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency Symbol |
| `effectiveUnitDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Unit Discount |
| `effectiveDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Discount |
| `vATonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | VAT on Net Amount |
| `discountType` | `string \| null \| undefined` | Optional | Discount Type<br>Example: 1-None<br>2-Pence per unit<br>3-Percentage |
| `transactionStatus` | `string \| null \| undefined` | Optional | Transaction status  "U" or "I"<br>“U” stands for Uninvoiced<br>“I” stands for Invoiced |
| `payerGroup` | `string \| null \| undefined` | Optional | Payer Group applicable for the Large Customer NL+8 digit code |
| `refundFlag` | `string \| null \| undefined` | Optional | Refund Flag “N” for Not Refunded and “Y” for Refunded. |
| `originalSalesItemId` | `number \| null \| undefined` | Optional | Shows Sales Item Id of the original item that was refunded |
| `delcoName` | `string \| null \| undefined` | Optional | Delco Name |
| `delcoCode` | `string \| null \| undefined` | Optional | Delco Code |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer number |
| `payerName` | `string \| null \| undefined` | Optional | Payer name |
| `cardExpiryPeriod` | `string \| null \| undefined` | Optional | Year/Month of the Card Expiry captured on the transaction |
| `authorisationCode` | `string \| null \| undefined` | Optional | Authorisation code of the transaction |
| `transactionId` | `string \| null \| undefined` | Optional | Unique id of the transaction that may include one or more salesitems |
| `transactionLine` | `string \| null \| undefined` | Optional | Transaction line item number |
| `allowClearing` | `string \| null \| undefined` | Optional | Is the Sales Item allowed for clearing? i.e. not written off<br>Example: “Y” or “N” |
| `cRMNumber` | `string \| null \| undefined` | Optional | CRM Case number if the sales item is in dispute |
| `disputeStatus` | `string \| null \| undefined` | Optional | Sales Item Dispute Status if disputed<br>0	No Dispute<br>1	In Dispute<br>2	Re-Instated<br>3	Adjusted<br>4	Written Off by Colco<br>5	Written Off by Delco<br>6	Charged Back to Site |
| `rebateRate` | `number \| null \| undefined` | Optional | Unit discount in customer currency |
| `delCoToColCoExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate from transaction currency to customer currency. |
| `netEuroAmount` | `number \| null \| undefined` | Optional | Net euro amount. |
| `euroRebateAmount` | `number \| null \| undefined` | Optional | Euro rebate amount. |
| `euroVATAmount` | `number \| null \| undefined` | Optional | Euro VAT amount. |
| `parentCustomerNumber` | `string \| null \| undefined` | Optional | Parent customer number |
| `vATonNetAmount` | `number \| null \| undefined` | Optional | VAT on Net Amount (in transaction currency) 2 decimals |
| `vATCountry` | `string \| null \| undefined` | Optional | VAT Country |

## Example (as JSON)

```json
{
  "SalesItemId": 113.2,
  "CardId": 104,
  "ProductId": 220,
  "TransactionGUID": "TransactionGUID2",
  "TransactionDate": "TransactionDate6"
}
```

