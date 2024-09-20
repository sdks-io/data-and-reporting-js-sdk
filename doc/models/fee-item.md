
# Fee Item

## Structure

`FeeItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeItemId` | `number \| null \| undefined` | Optional | Fee Item unique identifier in the H3 Cards Platform |
| `accountId` | `number \| null \| undefined` | Optional | Account Id |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountShortName` | `string \| null \| undefined` | Optional | Account short Number |
| `invoiceAccountId` | `number \| null \| undefined` | Optional | Invoice Account Id |
| `invoiceAccountNumber` | `string \| null \| undefined` | Optional | Invoice Account Number |
| `invoiceAccountShortName` | `string \| null \| undefined` | Optional | Invoice Account short Name |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number |
| `payerShortName` | `string \| null \| undefined` | Optional | Payer short Name |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card Group Id |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card Group Name |
| `feeTypeId` | `number \| null \| undefined` | Optional | Fee type identifier. |
| `feeType` | `string \| null \| undefined` | Optional | Fee type description |
| `feeTypeGroup` | `string \| null \| undefined` | Optional | Fee type group in under which the Fee item is generated.<br>Example:<br>Account<br>Card<br>Others |
| `feeRuleId` | `number \| null \| undefined` | Optional | Fee rule identifier |
| `feeRuleDescription` | `string \| null \| undefined` | Optional | Fee rule description |
| `feeRuleTiers` | [`FeesFeeRuleTiers[] \| undefined`](../../doc/models/fees-fee-rule-tiers.md) | Optional | - |
| `feeItemDate` | `string \| null \| undefined` | Optional | Local Fee Item Date of when the transaction took place<br>Format: yyyyMMdd |
| `feeItemTime` | `string \| null \| undefined` | Optional | Local Fee Item Time of where the transaction took place<br>Format: HH:mm:ss (24 hours format) |
| `isManual` | `boolean \| null \| undefined` | Optional | True/False.<br>Is manual |
| `isCancelled` | `boolean \| null \| undefined` | Optional | True/False.<br>Is cancelled |
| `customerCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code<br>Example: GBP |
| `customerCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Currency Code<br>Example: £, $ |
| `productId` | `number \| null \| undefined` | Optional | Product Id<br>Example: Sample list of product ids and description.<br>100 Service fee<br>102 Invoice production fee<br>103 Account fee<br>104 Transaction fee<br>105 Card membership fee |
| `productCode` | `string \| null \| undefined` | Optional | Product Code – Global as per GFN configuration<br>Example:<br>2 Service fee<br>4 Invoice production fee<br>5 Account fee<br>6 Transaction fee<br>7 Card membership fee |
| `productName` | `string \| null \| undefined` | Optional | Product Name<br>Example: Sample list of product ids and description.<br>Service fee<br>Invoice production fee |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id<br>Example: Sample list<br>22    Card related fees<br>23    Monetary Adjustment |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name<br>Example: Sample list<br>22    Card related fees<br>23    Monetary Adjustment |
| `lineItemDescription` | `string \| null \| undefined` | Optional | Line Item Description generally the quantity as printed on Invoice or the manually keyed in description for manual fees |
| `quantity` | `number \| null \| undefined` | Optional | Quantity |
| `isInvoiced` | `boolean \| null \| undefined` | Optional | True/False.<br>Is fee item invoiced |
| `vATCountryCode` | `string \| null \| undefined` | Optional | VAT country ISO code |
| `vATCountryName` | `string \| null \| undefined` | Optional | VAT country name |
| `vATPercentage` | `number \| null \| undefined` | Optional | VAT percentage |
| `vATCategoryID` | `number \| null \| undefined` | Optional | VAT Category identifier |
| `vATCategoryDescription` | `string \| null \| undefined` | Optional | VAT Category description |
| `legislativeRegionId` | `number \| null \| undefined` | Optional | Legislative region id |
| `legislativeRegionName` | `string \| null \| undefined` | Optional | Legislative region name |
| `systemEntryDate` | `string \| null \| undefined` | Optional | System entry date |
| `systemEntryTime` | `string \| null \| undefined` | Optional | System entry time |
| `colCoNetAmount` | `number \| null \| undefined` | Optional | ColCo net amount |
| `colCoVATAmount` | `number \| null \| undefined` | Optional | ColCoVAT amount |
| `colCoGrossAmount` | `number \| null \| undefined` | Optional | ColCo gross amount |
| `interimInvoiceId` | `number \| null \| undefined` | Optional | Interim invoice id |
| `interimInvoiceNumber` | `string \| null \| undefined` | Optional | Interim invoice number |
| `invoiceId` | `number \| null \| undefined` | Optional | Invoice id |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice number |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoice date<br>Format: yyyyMMdd |
| `customerExchangeRate` | `number \| null \| undefined` | Optional | Customer exchange rate |
| `invoiceNetAmount` | `number \| null \| undefined` | Optional | Invoice net amount |
| `invoiceGrossAmount` | `number \| null \| undefined` | Optional | Invoice gross amount |
| `invoiceVATAmount` | `number \| null \| undefined` | Optional | Invoice VAT amount |
| `reverseCharge` | `boolean \| null \| undefined` | Optional | True/False.<br>Reverse charge. |
| `originalFeeItemId` | `number \| null \| undefined` | Optional | Original Fee Item id. |
| `originalCurrencyCode` | `string \| null \| undefined` | Optional | Original FeeItem Currency ISO code. |
| `originalCurrencySymbol` | `string \| null \| undefined` | Optional | Original FeeItem currency symbol |
| `originalUnitPrice` | `number \| null \| undefined` | Optional | Original FeeItem unit price |
| `originalNetAmount` | `number \| null \| undefined` | Optional | Original FeeItem net amount |
| `originalVATAmount` | `number \| null \| undefined` | Optional | Original FeeItem VAT amount |
| `originalGrossAmount` | `number \| null \| undefined` | Optional | Original FeeItem gross amount |
| `originalExchangeRate` | `number \| null \| undefined` | Optional | Original FeeItem exchange rate |
| `originalLegislativeRegionId` | `number \| null \| undefined` | Optional | Original legislative region id |
| `originalLegislativeRegionName` | `string \| null \| undefined` | Optional | Original legislative region name |
| `frequency` | `string \| null \| undefined` | Optional | Fee frequency derived from Fee rules if applicable<br>Returns ID-Description in one field<br>Example:<br>1- Daily (all days)<br>2-Daily (only working days)<br>3-Weekly – Monday<br>4-Weekly - Tuesday |
| `feeItemCardLevelBreakup` | `string \| null \| undefined` | Optional | Fee breakup at card level for Fee Items where applicable. |
| `originalFeeItemInvoiceId` | `number \| null \| undefined` | Optional | Invoice Id/ Billing Document Id of the original fee item (when not null).<br>Applicable only for fee items that are refund to an original fee item that is already invoiced. |
| `originalFeeItemInvoiceNumber` | `string \| null \| undefined` | Optional | Invoice Number of the original fee item (when not null).<br>Applicable only for fee items that are refund to an original fee item that is already invoiced. |
| `originalFeeItemInvoiceDate` | `string \| null \| undefined` | Optional | Invoice Date of the original fee item (when not null).<br>Applicable only for fee items that are refund to an original fee item that is already invoiced.<br>Format: yyyyMMdd |
| `driverName` | `string \| null \| undefined` | Optional | Driver name embossed on the Card |
| `embossText` | `string \| null \| undefined` | Optional | Text embossed on the Card |
| `vRN` | `string \| null \| undefined` | Optional | Reg. Number embossed on the Card |

## Example (as JSON)

```json
{
  "FeeItemId": 156,
  "AccountId": 244,
  "AccountNumber": "AccountNumber6",
  "AccountShortName": "AccountShortName8",
  "InvoiceAccountId": 204
}
```

