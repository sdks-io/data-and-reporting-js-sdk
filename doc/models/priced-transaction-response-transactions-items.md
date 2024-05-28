
# Priced Transaction Response Transactions Items

## Structure

`PricedTransactionResponseTransactionsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | TransactionType is the type of transaction.<br>Example: SalesItem /FeeItem |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id |
| `cardPAN` | `string \| null \| undefined` | Optional | Card PAN |
| `cardExpiry` | `string \| null \| undefined` | Optional | Card Expiry Date |
| `transactionDate` | `string \| null \| undefined` | Optional | Local Transaction Date  of where the transaction took place |
| `transactionTime` | `string \| null \| undefined` | Optional | Local Transaction Time of where the transaction took place |
| `uTCOffset` | `string \| null \| undefined` | Optional | UTC Offset extracted from Sales Date time.<br>Note: This may not be accurate for all TPN transactions<br>Format: +/-HH:mm:ss (24 hours format)<br>Note: - The value could be null/blank for fees item. |
| `fleetIdInput` | `string \| null \| undefined` | Optional | Fleet Id Input as entered by the drivers at the time of transaction<br>Example: XYZ1234<br>Note: - The value could be null/blank for fees item. |
| `odometerInput` | `number \| null \| undefined` | Optional | Odometer Input as entered by the drivers at the time of transaction<br>Example: 12345<br>Note: - The value could be null/blank for fees item. |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name embossed on the card<br>Example:  ANDREW GILBERRY |
| `vehicleRegistration` | `string \| null \| undefined` | Optional | Vehicle Registration Number embossed on the card<br>Example: MV65YLH |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code<br>Example: GBP |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code<br>Example: £, $ |
| `transactionCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code |
| `transactionCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Transaction Currency Code<br>Example: £, $ |
| `transactionNetAmount` | `number \| null \| undefined` | Optional | Net Amount |
| `transactionTax` | `number \| null \| undefined` | Optional | Tax Amount |
| `transactionGrossAmount` | `number \| null \| undefined` | Optional | Gross Amount |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Invoiced Net Amount<br>Note: For a fee item, this parameter will be populated with fee InvoiceNetAmount. |
| `invoiceTax` | `number \| null \| undefined` | Optional | Invoiced Tax Amount |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Invoice Gross Amount<br>Note: For a fee item, this parameter will be populated with fee InvoiceGrossAmount. |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Country of Purchase |
| `accountId` | `number \| null \| undefined` | Optional | Account Id<br>Example: 29484 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `quantity` | `number \| null \| undefined` | Optional | Quantity/Volume |
| `fuelProduct` | `boolean \| null \| undefined` | Optional | True if the product on transaction is listed as a fuel product else return false |
| `unitPriceInTransactionCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in transaction currency |
| `unitPriceInInvoiceCurrency` | `number \| null \| undefined` | Optional | Product Unit Price in invoice currency |
| `unitDiscountTransactionCurrency` | `number \| null \| undefined` | Optional | Unit Discount in transaction currency |
| `unitDiscountInvoiceCurrency` | `number \| null \| undefined` | Optional | Unit Discount in invoice currency<br>Note: - The value could be null/blank for fees item. |
| `isInvoiced` | `boolean \| null \| undefined` | Optional | True when the transaction is already invoice, else return False |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice Number if invoiced<br>S04500493 |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoice Date<br>Format: yyyyMMdd HH:mm:ss |
| `siteCode` | `string \| null \| undefined` | Optional | Site Code<br>Example:<br>050001 -	CHARNOCK RICHARD NTHBOUND MWSA 0755<br>050002 -	CHARNOCK RICHARD STHBOUND MWSA 0755 |
| `siteName` | `string \| null \| undefined` | Optional | Site Name<br>Example:<br>050001 -	CHARNOCK RICHARD NTHBOUND MWSA 0755<br>050002 -	CHARNOCK RICHARD STHBOUND MWSA 0755 |
| `siteCountry` | `string \| null \| undefined` | Optional | Site Country<br>Example: France, Germany<br>Note: - The value could be null/blank for fees item.<br>Geography Location entity for Site Location<br>Note: - The value could be null/blank for fees item. |
| `location` | [`(PricedTransactionItemsLocationItems \| null)[] \| undefined`](../../doc/models/priced-transaction-items-location-items.md) | Optional | Geography Location entity for Site Location<br>Note: - The value could be null/blank for fees item |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card Group Name |
| `receiptNumber` | `string \| null \| undefined` | Optional | Receipt Number |
| `productCode` | `string \| null \| undefined` | Optional | Product Code<br>10	TMF Charges<br>11	Tunnel/Bridges<br>12	Motorway toll<br>13	Ferries |
| `productName` | `string \| null \| undefined` | Optional | Product Name<br>Unleaded - High octane<br>Unleaded - Medium octane<br>Unleaded - Low octane<br>Unleaded Environmental |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id<br>Example:<br>1	Parent Product Group<br>2	All Fuels<br>3	Motor gasoline<br>4	2 stroke<br>5	Autogas<br>6	CNG |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name<br>Example:<br>1	Parent Product Group<br>2	All Fuels<br>3	Motor gasoline<br>4	2 stroke<br>5	Autogas<br>6	CNG<br>7	Automotive Gas Oil |
| `delCoExchangeRate` | `number \| null \| undefined` | Optional | DelCo Exchange Rate (Site exchange rate) |
| `colCoExchangeRate` | `number \| null \| undefined` | Optional | ColCo Exchange Rate (Customer exchange rate) |
| `isShellSite` | `boolean \| null \| undefined` | Optional | True when transaction occurred at a Shell site else return False<br>Note: - The value could be null/blank for fees item. |
| `network` | `string \| null \| undefined` | Optional | Network as configured in GFN (Shell PH, ESSO, etc.,)<br>100013	STEINDORFER<br>100015	S.A. BELGIAN SHELL N.V.<br>100016	ESSO BE<br>Note: - The value could be null/blank for fees item |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id<br>Example: 202<br>Note: - The value could be null/blank for fees item. |
| `siteGroupName` | `string \| null \| undefined` | Optional | Site Group Name<br>Example: CZ 9100 ECONOMY NETWORK |
| `postingDate` | `string \| null \| undefined` | Optional | Transaction Posting Date<br>Format: yyyyMMdd HHmmss |
| `issuerCode` | `string \| null \| undefined` | Optional | First digits of the Card PAN<br>7002 = Fleet  <br>7077 = CRT |
| `purchasedInCountryCode` | `string \| null \| undefined` | Optional | ISO code of the country where the transaction took place<br>Example: “NL” |
| `customerCountryCode` | `string \| null \| undefined` | Optional | ISO code of the  Customer Country |
| `customerCountry` | `string \| null \| undefined` | Optional | Name of the Customer Country |
| `releaseCode` | `string \| null \| undefined` | Optional | Release code, 7th Digit of the Card PAN |
| `cardGroupId` | `string \| null \| undefined` | Optional | Card group ID |
| `cardSequenceNumber` | `string \| null \| undefined` | Optional | 3 digits, Card sequence number and Check digit |
| `checkDigit` | `string \| null \| undefined` | Optional | Check digit, Last number of the card pan |
| `fleetIDDescription` | `string \| null \| undefined` | Optional | FleetId/CRN description in Card Platform configured at the account level |
| `vATRate` | `number \| null \| undefined` | Optional | VAT Percentage<br>0.20 for 20% |
| `vATCategory` | `string \| null \| undefined` | Optional | VAT Category Id-Description<br>1-Zero Rated<br>2-A1 PH-O 12% Sales Domestic<br>3-VAT exempt |
| `vATCountry` | `string \| null \| undefined` | Optional | VAT Country |
| `effectiveDiscountInTrxCurrency` | `number \| null \| undefined` | Optional | Effective Discount (excluding VAT, in transaction currency) 4 digits<br>Example: 0.0000<br>Note: - The value could be null/blank for fees item. |
| `transactionType` | `string \| null \| undefined` | Optional | Transaction Type<br>Example: Purchase when Card is Present else Blank<br>Note: - The value could be null/blank for fees item. |
| `pINIndicator` | `string \| null \| undefined` | Optional | Pin Indicator (Indicates whether PIN used or not used at the time of transaction)<br>Example: “PIN Used'” or “No PIN” or “Unknown”<br>Note: - The value could be null/blank for fees item |
| `vATApplicable` | `string \| null \| undefined` | Optional | Is VAT Applicable for this transaction |
| `netInvoiceIndicator` | `string \| null \| undefined` | Optional | Net Invoice Indicator, Will the customer receive an invoice without VAT?<br>Example: “Y” or “N” |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | Customer currency code |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Customer currency Symbol |
| `effectiveUnitDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Unit Discount (excluding VAT in Customer currency)<br>Note: - The value could be null/blank for fees item. |
| `effectiveDiscountInCustomerCurrency` | `number \| null \| undefined` | Optional | Effective Discount (excluding VAT in Customer currency)<br>Note: - The value could be null/blank for fees item |
| `vATonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | VAT on Net Amount (in Customer currency) |
| `discountType` | `string \| null \| undefined` | Optional | Discount Type<br>Example: 1-None<br>2-Pence per unit<br>3-Percentage<br>Note: - The value could be null/blank for fees item |
| `transactionStatus` | `string \| null \| undefined` | Optional | Transaction status "U" or "I"<br>“U” stands for Uninvoiced<br>“I” stands for Invoiced |
| `salesItemId` | `number \| null \| undefined` | Optional | Unique Sales Item Identifier<br>Example: 18315958002<br>Note: For a fee item, this parameter will be populated with SalesItemId. |
| `payerGroup` | `string \| null \| undefined` | Optional | Payer Group applicable for the Large Customer NL+8 digit code |
| `payerGroupName` | `string \| null \| undefined` | Optional | Payer Group Name |
| `refundFlag` | `string \| null \| undefined` | Optional | Refund Flag “N” for Not Refunded and “Y” for Refunded. |
| `originalSalesItemId` | `string \| null \| undefined` | Optional | Shows Sales Item Id of the original item that was refunded |
| `delcoName` | `string \| null \| undefined` | Optional | Delco Name |
| `delcoCode` | `string \| null \| undefined` | Optional | Delco Code |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer number (Country code+8 digits) |
| `payerName` | `string \| null \| undefined` | Optional | Payer name<br>Example: V.M. LE COMTE |
| `cardExpiryPeriod` | `string \| null \| undefined` | Optional | Year/Month of the Card Expiry captured on the transaction |
| `authorisationCode` | `string \| null \| undefined` | Optional | Authorisation code of the transaction<br>Example: 011256<br>Note: - The value could be null/blank for fees item |
| `transactionId` | `string \| null \| undefined` | Optional | Unique id of the transaction that may include one or more salesitems |
| `transactionLine` | `string \| null \| undefined` | Optional | Transaction line item number |
| `allowClearing` | `string \| null \| undefined` | Optional | Is the Sales Item allowed for clearing? i.e. not written off<br>Example: “Y” or “N”<br>Note: - The value could be null/blank for fees item. |
| `cRMNumber` | `string \| null \| undefined` | Optional | CRM Case number if the sales item is in dispute<br>Note: - The value could be null/blank for fees item. |
| `disputeStatus` | `string \| null \| undefined` | Optional | Sales Item Dispute Status if disputed<br>0	No Dispute<br>1	In Dispute<br>2	Re-Instated<br>3	Adjusted<br>4	Written Off by Colco<br>5	Written Off by Delco<br>6	Charged Back to Site<br>Note: - The value could be null/blank for fees item. |
| `rebateRate` | `number \| null \| undefined` | Optional | Unit discount in customer currency.<br>Example: 28.279000<br>Note: - The value could be null/blank for fees item |
| `delCoToColCoExchangeRate` | `number \| null \| undefined` | Optional | Exchange rate from transaction currency to customer currency.<br>Example: 1<br>Note: - The value could be null/blank for fees item |
| `netEuroAmount` | `number \| null \| undefined` | Optional | Net euro amount.<br>Example: 37.93<br>Note: - The value could be null/blank for fees item |
| `euroRebateAmount` | `number \| null \| undefined` | Optional | Euro rebate amount.<br>Example: 0<br>Note: - The value could be null/blank for fees item |
| `euroVATAmount` | `number \| null \| undefined` | Optional | Euro VAT amount.<br>Example: 7.96<br>Note: - The value could be null/blank for fees item |
| `parentCustomerNumber` | `string \| null \| undefined` | Optional | Parent customer number |
| `parentCustomerName` | `string \| null \| undefined` | Optional | Parent customer name. |
| `parentCustomerId` | `number \| null \| undefined` | Optional | Parent customer id. |
| `incomingSiteNumber` | `string \| null \| undefined` | Optional | Incoming Site Number<br>Example: 100021<br>Note: - The value could be null/blank for fees item. |
| `incomingSiteDescription` | `string \| null \| undefined` | Optional | Incoming Site Description<br>Example: HN3 INTI_02-82.02<br>Note: - The value could be null/blank for fees item. |
| `incomingCurrencyCode` | `string \| null \| undefined` | Optional | Incoming Currency Code<br>Example: GBP<br>Note: - The value could be null/blank for fees item |
| `incomingProductCode` | `string \| null \| undefined` | Optional | Incoming Product Code<br>Example: 30 |
| `creditDebitCode` | `string \| null \| undefined` | Optional | Credit Debit Code<br>Example: “D” or “C”<br>The value could be null/blank for fees item. |
| `correctionFlag` | `string \| null \| undefined` | Optional | Correction Flag<br>Example: “Y” or “N”<br>The value could be null/blank for fees item. |
| `additional1` | `string \| null \| undefined` | Optional | Additional1 |
| `additional2` | `string \| null \| undefined` | Optional | Additional2 |
| `additional3` | `string \| null \| undefined` | Optional | Additional3 |
| `additional4` | `string \| null \| undefined` | Optional | Additional4 |
| `rebateonNetAmountInCustomerCurrency` | `number \| null \| undefined` | Optional | Rebate on Net Amount In Customer Currency<br>Example: -0.735000000000<br>Note: - The value could be null/blank for fees item. |
| `rebateonNetAmountInTransactionCurrency` | `number \| null \| undefined` | Optional | Rebate on Net Amount In Transaction Currency<br>Example: -0.735000000000<br>Note: - The value could be null/blank for fees item. |
| `networkCode` | `string \| null \| undefined` | Optional | Network Code<br>Example: AVEE PTUAZONW CUBFAO COSFS<br>Note: - The value could be null/blank for fees item |
| `trnIdentifier` | `string \| null \| undefined` | Optional | Transaction Identifier |
| `cardType` | `string \| null \| undefined` | Optional | Card Type |
| `delcoListPriceUnitNet` | `number \| null \| undefined` | Optional | Delco List Price Unit Net<br>Example: 30.500000 |
| `delcoRetailPriceUnitNet` | `number \| null \| undefined` | Optional | Retail Net Price (or pump net price) per Unit in transaction currency<br>Example: 1.921000 |
| `delcoRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Retail gross price (or pump gross price) per unit in transaction currency |
| `delcoRetailValueTotalNet` | `number \| null \| undefined` | Optional | Retail net price (or net pump price) in transaction currency |
| `delcoRetailValueTotalGross` | `number \| null \| undefined` | Optional | Retail gross price (or gross pump price) in transaction currency |
| `customerRetailPriceUnitGross` | `number \| null \| undefined` | Optional | Retail gross price (or pump gross price) per unit in customer currency |
| `customerRetailValueTotalGross` | `number \| null \| undefined` | Optional | Retail gross price (or gross pump price) in customer currency |
| `customerRetailValueTotalNet` | `number \| null \| undefined` | Optional | Retail gross price (or gross pump price) in customer currency<br>Retail net price (or net pump price) in customer currency |
| `transactionTypeDescription` | `string \| null \| undefined` | Optional | Transaction Type Description<br>Note: - The value could be null/blank for fees item |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |

## Example (as JSON)

```json
{
  "Type": "Type0",
  "CardId": 132,
  "CardPAN": "CardPAN4",
  "CardExpiry": "CardExpiry8",
  "TransactionDate": "TransactionDate8"
}
```

