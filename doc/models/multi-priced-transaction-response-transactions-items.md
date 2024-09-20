
# Multi Priced Transaction Response Transactions Items

## Structure

`MultiPricedTransactionResponseTransactionsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | TransactionType is the type of transaction.<br>Example: SalesItem /FeeItem |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id in GFN<br>Example: 275549 |
| `cardPAN` | `string \| null \| undefined` | Optional | Card PAN<br>Mask PAN if enabled at Microservices configuration (Mask all digits except the Last 6 digits of the PAN)<br>Example: 7002051006629890645 |
| `cardExpiry` | `string \| null \| undefined` | Optional | Card Expiry Date<br>Format: yyyyMMdd |
| `transactionDate` | `string \| null \| undefined` | Optional | Local Transaction Date of where the transaction took place<br>Format: yyyyMMdd<br><br>Note: For a fee item, this parameter will be populated with fee date. |
| `transactionTime` | `string \| null \| undefined` | Optional | Local Transaction Time of where the transaction took place<br>Format: HH:mm:ss (24 hours format)<br><br>Note: For a fee item, this parameter will be populated with fee date. |
| `uTCOffset` | `string \| null \| undefined` | Optional | UTC Offset extracted from Sales Date time.<br>Note: This may not be accurate for all TPN transactions<br>Format: +/-HH:mm:ss (24 hours format) |
| `fleetIdInput` | `string \| null \| undefined` | Optional | Fleet Id Input as entered by the drivers at the time of transaction<br>Example: XYZ1234<br>Note: - The value could be null/blank for fees item. |
| `odometerInput` | `number \| null \| undefined` | Optional | Odometer Input as entered by the drivers at the time of transaction<br>Example: 12345<br>Note: - The value could be null/blank for fees item. |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name embossed on the card<br>Example:  ANDREW GILBERRY |
| `vehicleRegistration` | `string \| null \| undefined` | Optional | Vehicle Registration Number embossed on the card |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code<br>Example: £, $ |
| `transactionCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code<br>Example: GBP |
| `transactionCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Transaction Currency Code<br>Example: £, $ |
| `transactionNetAmount` | `number \| null \| undefined` | Optional | Net Amount |
| `transactionTax` | `number \| null \| undefined` | Optional | Tax Amount |
| `transactionGrossAmount` | `number \| null \| undefined` | Optional | Gross Amount |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Invoiced Net Amount<br>Note: For a fee item, this parameter will be populated with fee InvoiceNetAmount. |
| `invoiceTax` | `number \| null \| undefined` | Optional | Invoiced Tax Amount |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Invoice Gross Amount<br>Note: For a fee item, this parameter will be populated with fee InvoiceGrossAmount. |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Country of Purchase<br>Example: France, Germany<br>Note: - The value could be null/blank for fees item. |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `quantity` | `number \| null \| undefined` | Optional | Quantity/Volume |
| `fuelProduct` | `boolean \| null \| undefined` | Optional | True if the product on transaction is listed as a fuel product else return false |
| `unitPriceInTransactionCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in transaction currency<br>Note: - The value could be null/blank for fees item |
| `unitPriceInInvoiceCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in invoice currency<br>Note: - The value could be null/blank for fees item |
| `unitDiscountTransactionCurrency` | `number \| null \| undefined` | Optional | Unit Discount in transaction currency<br>Note: - The value could be null/blank for fees item |
| `unitDiscountInvoiceCurrency` | `number \| null \| undefined` | Optional | Unit Discount in invoice currency<br>Note: - The value could be null/blank for fees item. |
| `isInvoiced` | `boolean \| null \| undefined` | Optional | True when the transaction is already invoice, else return False |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice Number if invoiced<br>Example:<br>S04500493<br>S04478304<br>S04490319 |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoice Date<br>Format: yyyyMMdd HH:mm:ss |
| `siteCode` | `string \| null \| undefined` | Optional | Site Code<br>Example:<br>050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755 |
| `siteName` | `string \| null \| undefined` | Optional | Site Name<br>Example:<br>050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755 |
| `siteCountry` | `string \| null \| undefined` | Optional | Site Country<br>Example: France, Germany |
| `location` | [`SiteLocation[] \| undefined`](../../doc/models/site-location.md) | Optional | - |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card Group Name |
| `receiptNumber` | `string \| null \| undefined` | Optional | ReceiptNumber |
| `productCode` | `string \| null \| undefined` | Optional | Product Code<br>10    TMF Charges<br>11    Tunnel/Bridges<br>12    Motorway toll |
| `productName` | `string \| null \| undefined` | Optional | Product Name<br>Example:<br><br>Unleaded - High octane<br>Unleaded - Medium octane<br>Unleaded - Low octane<br>Unleaded Environmental |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id<br>Example:<br>1    Parent Product Group<br>2    All Fuels<br>3    Motor gasoline<br>4    2 stroke<br>5    Autogas |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name<br>Example:<br>1    Parent Product Group<br>2    All Fuels<br>3    Motor gasoline<br>4    2 stroke<br>5    Autogas |
| `delCoExchangeRate` | `number \| null \| undefined` | Optional | DelCo Exchange Rate (Site exchange rate)<br>Note: - The value could be null/blank for fees item. |
| `colCoExchangeRate` | `number \| null \| undefined` | Optional | ColCo Exchange Rate (Customer exchange rate) |
| `isShellSite` | `boolean \| null \| undefined` | Optional | True when transaction occurred at a Shell site else return False<br>Note: - The value could be null/blank for fees item. |
| `network` | `string \| null \| undefined` | Optional | Network  (Shell PH, ESSO, etc.,)<br>100013    STEINDORFER<br>100015    S.A. BELGIAN SHELL N.V.<br>100016    ESSO BE<br>Note: - The value could be null/blank for fees item. |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id<br>Example: 202<br>Note: - The value could be null/blank for fees item. |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site GroupName<br>Example: CZ 9100 ECONOMY NETWORK<br>Note: - The value could be null/blank for fees item. |
| `postingDate` | `string \| null \| undefined` | Optional | Transaction Posting Date<br>Format: yyyyMMdd HHmmss |
| `issuerCode` | `string \| null \| undefined` | Optional | First digits of the Card PAN<br>7002 = Fleet |
| `purchasedInCountryCode` | `string \| null \| undefined` | Optional | ISO code of the country where the transaction took place<br>Example: “NL”<br>Note: - The value could be null/blank for fees item. |
| `customerCountryCode` | `string \| null \| undefined` | Optional | ISO code of the Customer Country<br>Example: NL |
| `customerCountry` | `string \| null \| undefined` | Optional | Name of the Customer Country<br>Example: Netherlands |
| `releaseCode` | `string \| null \| undefined` | Optional | Release code, 7th Digit of the Card PAN<br>Example: 8 for 7021882 |
| `cardGroupId` | `string \| null \| undefined` | Optional | Card group ID |
| `cardSequenceNumber` | `string \| null \| undefined` | Optional | 3 digits, Card sequence number and Check digit (Digit 16,17 and 18 on the card pan) |
| `checkDigit` | `string \| null \| undefined` | Optional | Check digit, Last number of the card pan |
| `fleetIDDescription` | `string \| null \| undefined` | Optional | FleetId/CRN description in Card Platform configured at the account level |
| `vATRate` | `number \| null \| undefined` | Optional | VAT Percentage<br>0.20 for 20%<br>Note: This parameter will be populated in the response for both SalesItem and FeeItem |
| `vATCategory` | `string \| null \| undefined` | Optional | VAT Category Id-Description<br>1-Zero Rated |
| `vATCountry` | `string \| null \| undefined` | Optional | VAT Country<br>Example: Netherlands |
| `effectiveDiscountInTrxCurrency` | `number \| null \| undefined` | Optional | Effective Discount (excluding VAT, in transaction currency) 4 digits<br>Example: 0.0000 |
| `transactionType` | `string \| null \| undefined` | Optional | Transaction Type<br>Example: Purchase when Card is Present else Blank<br>Note: - The value could be null/blank for fees item. |
| `pINIndicator` | `string \| null \| undefined` | Optional | Pin Indicator (Indicates whether PIN used or not used at the time of transaction)<br>Example: “PIN Used'” or “No PIN” or “Unknown”<br>Note: - The value could be null/blank for fees item |
| `vATApplicable` | `string \| null \| undefined` | Optional | Is VAT Applicable for this transaction<br>Example: “Y” or “N” |
| `netInvoiceIndicator` | `string \| null \| undefined` | Optional | Net Invoice Indicator, Will the customer receive an invoice without VAT?<br>Example: “Y” or “N”<br>Note: - The value could be null/blank for fees item. |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Customer currency code<br>Example: GBP |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency Symbol |
| `effectiveUnitDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Unit Discount (excluding VAT in Customer currency)<br>Note: - The value could be null/blank for fees item. |
| `effectiveDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Discount (excluding VAT in Customer currency)<br>Note: - The value could be null/blank for fees item. |
| `vATonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | VAT on Net Amount (in Customer currency) |
| `discountType` | `string \| null \| undefined` | Optional | Discount Type<br>Example: 1-None<br>2-Pence per unit |
| `transactionStatus` | `string \| null \| undefined` | Optional | Transaction status "U" or "I"<br>“U” stands for Uninvoiced<br>“I” stands for Invoiced |
| `salesItemId` | `number \| null \| undefined` | Optional | Unique Sales Item Identifier<br>Example: 18315958002<br>Note: For a fee item, this parameter will be populated with SalesItemId. |
| `payerGroup` | `string \| null \| undefined` | Optional | Payer Group applicable for the Large Customer NL+8 digit code |
| `payerGroupName` | `string \| null \| undefined` | Optional | Payer Group Name |
| `refundFlag` | `string \| null \| undefined` | Optional | Refund Flag “N” for Not Refunded and “Y” for Refunded.<br>Note: - The value could be null/blank for fees item. |
| `originalSalesItemId` | `string \| null \| undefined` | Optional | Shows Sales Item Id of the original item that was refunded |
| `delcoName` | `string \| null \| undefined` | Optional | Delco Name<br>Example: SHELL NEDERLAND VERKOOPMAATSCHAPPIJ BV |
| `delcoCode` | `string \| null \| undefined` | Optional | Delco Code<br>014, 018, etc., |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer number (Country code+8 digits)<br>Example: NL10042616 |
| `payerName` | `string \| null \| undefined` | Optional | Payer name<br>Example: V.M. LE COMTE |
| `cardExpiryPeriod` | `string \| null \| undefined` | Optional | Year/Month of the Card Expiry captured on the transaction<br>Example: 1901 |
| `authorisationCode` | `string \| null \| undefined` | Optional | Authorisation code of the transaction<br>Example: 011256<br>Note: - The value could be null/blank for fees item. |
| `transactionId` | `string \| null \| undefined` | Optional | Unique id of the transaction that may include one or more salesitems<br>Example: io9KVXk1UkW57XWKyeaHHg<br>Note: - The value could be null/blank for fees item. |
| `transactionLine` | `string \| null \| undefined` | Optional | Transaction line item number<br>Example: 1<br>Note: - The value could be null/blank for fees item. |
| `allowClearing` | `string \| null \| undefined` | Optional | Is the Sales Item allowed for clearing? i.e. not written off<br>Example: “Y” or “N”<br>Note: - The value could be null/blank for fees item. |
| `cRMNumber` | `string \| null \| undefined` | Optional | CRM Case number if the sales item is in dispute.<br>Note: - The value could be null/blank for fees item. |
| `disputeStatus` | `string \| null \| undefined` | Optional | Sales Item Dispute Status if disputed<br>0    No Dispute<br>1    In Dispute<br>2    Re-Instated<br>3    Adjusted<br>4    Written Off by Colco<br>5    Written Off by Delco<br>6    Charged Back to Site |
| `rebateRate` | `number \| null \| undefined` | Optional | Unit discount in customer currency.<br>Example: 28.279000 |
| `delCoToColCoExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate from transaction currency to customer currency.<br>Example: 1 |
| `netEuroAmount` | `number \| null \| undefined` | Optional | Net euro amount.<br>Example: 37.93<br>Note: - The value could be null/blank for fees item. |
| `euroRebateAmount` | `number \| null \| undefined` | Optional | Euro rebate amount.<br>Example: 0<br>Note: - The value could be null/blank for fees item. |
| `euroVATAmount` | `number \| null \| undefined` | Optional | Euro VAT amount.<br>Example: 7.96<br>Note: - The value could be null/blank for fees item. |
| `parentCustomerNumber` | `string \| null \| undefined` | Optional | Parent customer number |
| `parentCustomerName` | `string \| null \| undefined` | Optional | Parent customer name. |
| `parentCustomerId` | `number \| null \| undefined` | Optional | Parent customer id. |
| `incomingSiteNumber` | `string \| null \| undefined` | Optional | Incoming Site Number<br>Example: 100021<br>Note: - The value could be null/blank for fees item. |
| `incomingSiteDescription` | `string \| null \| undefined` | Optional | Incoming Site Description<br>Example: HN3 INTI_02-82.02<br>Note: - The value could be null/blank for fees item. |
| `incomingCurrencyCode` | `string \| null \| undefined` | Optional | Incoming Currency Code<br>Example: GBP<br>Note: - The value could be null/blank for fees item. |
| `incomingProductCode` | `string \| null \| undefined` | Optional | Incoming Product Code<br>Example: 30 |
| `creditDebitCode` | `string \| null \| undefined` | Optional | Credit Debit Code<br>Example: “D” or “C”<br>The value could be null/blank for fees item. |
| `correctionFlag` | `string \| null \| undefined` | Optional | Correction Flag<br>Example: “Y” or “N”<br>Note: - The value could be null/blank for fees item. |
| `additional1` | `string \| null \| undefined` | Optional | Additional details |
| `additional2` | `string \| null \| undefined` | Optional | Additional details |
| `additional3` | `string \| null \| undefined` | Optional | Additional details |
| `additional4` | `string \| null \| undefined` | Optional | Additional details |
| `rebateonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | Rebate on Net Amount in Customer Currency<br>Example: -0.735000000000<br>Note: - The value could be null/blank for fees item. |
| `rebateonNetAmountInTransactionCurrency` | `number \| null \| undefined` | Optional | Rebate on Net Amount in Transaction Currency<br>Example: -0.735000000000<br>Note: - The value could be null/blank for fees item. |
| `networkCode` | `string \| null \| undefined` | Optional | Network Code<br>Example: AVEE PTUAZONW CUBFAO COSFS<br>Note: - The value could be null/blank for fees item. |
| `trnIdentifier` | `string \| null \| undefined` | Optional | Transaction Identifier |
| `cardType` | `string \| null \| undefined` | Optional | Card Type |
| `delcoListPriceUnitNet` | `number \| null \| undefined` | Optional | Delco List Price Unit Net<br>Example: 30.500000<br>Note: - The value could be null/blank for fees item |
| `delcoRetailPriceUnitNet` | `number \| null \| undefined` | Optional | Retail Net Price (or pump net price) per Unit in transaction currency<br>Example: 1.921000<br>Note: - The value could be null/blank for fees item |
| `delcoRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Retail gross price (or pump gross price) per unit in transaction currency<br>Note: - The value could be null/blank for fees item |
| `delcoRetailValueTotalNet` | `number \| null \| undefined` | Optional | Retail net price (or net pump price) in transaction currency<br>Note: - The value could be null/blank for fees item |
| `delcoRetailValueTotalGross` | `number \| null \| undefined` | Optional | Retail gross price (or gross pump price) in transaction currency<br>Note: - The value could be null/blank for fees item |
| `customerRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Retail gross price (or pump gross price) per unit in customer currency<br>Note: - The value could be null/blank for fees item |
| `customerRetailValueTotalGross` | `number \| null \| undefined` | Optional | Retail gross price (or gross pump price) in customer currency<br>Note: - The value could be null/blank for fees item |
| `customerRetailValueTotalNet` | `number \| null \| undefined` | Optional | Retail net price (or net pump price) in customer currency<br>Note: - The value could be null/blank for fees item |
| `transactionTypeDescription` | `string \| null \| undefined` | Optional | Transaction Type Description<br>Note: - The value could be null/blank for fees item |

## Example (as JSON)

```json
{
  "Type": "Type8",
  "CardId": 146,
  "CardPAN": "CardPAN2",
  "CardExpiry": "CardExpiry6",
  "TransactionDate": "TransactionDate6"
}
```

