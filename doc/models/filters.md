
# Filters

## Structure

`Filters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `string \| null` | Required | Collecting Company Code (Shell Code) of the selected payer. |
| `invoiceStatus` | `unknown` | Required | - |
| `payerNumber` | `string \| null` | Required | Payer Number of the selected payer.<br>**Constraints**: *Minimum Length*: `1` |
| `accountId` | `number \| null \| undefined` | Optional | Account Id (GFN customer id) |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the selected account. |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name (of Card record)<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `40` |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card Group Id in GFN |
| `cardPAN` | `string \| null \| undefined` | Optional | Full Card PAN |
| `productCode` | `string \| null \| undefined` | Optional | Product Code – Global as per GFN configuration<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8` |
| `productName` | `string \| null \| undefined` | Optional | Product Name – Global as per GFN configuration<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `siteCode` | `string \| null \| undefined` | Optional | Site Code in GFN<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `87` |
| `incomingSiteNumber` | `string \| null \| undefined` | Optional | Site Code as configured in GFN<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `10` |
| `invoiceDate` | `string \| null \| undefined` | Optional | Returns the billed transaction for the given invoice date |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Returns the billed transaction for the given invoice number<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `purchasedInCountryCode` | `string \| null \| undefined` | Optional | Purchased InCountryCode<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | Network Delco PurchasedCountryName |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id in GFN |
| `vehicleRegistrationNumber` | `string \| null \| undefined` | Optional | Vehicle Registration (of Card record)<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `128` |
| `feeTypeId` | `number \| null \| undefined` | Optional | Card Id (i.e. Unique Card Id in GFN) |
| `lineItemDescription` | `string \| null \| undefined` | Optional | Item identifier in the transaction.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `128` |
| `cards` | `number[] \| undefined` | Optional | This entity accepts the list of CardId to filter in the response.<br>Note: The number of cardId allowed to be passed in the request is configurable to a maximum of 500 cards.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `500` |
| `sortOrder` | [`PricedTransactionReqV2SortOrderEnum \| undefined`](../../doc/models/priced-transaction-req-v2-sort-order-enum.md) | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `fromDate` | `string \| null \| undefined` | Optional | From transaction delivery date<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `toDate` | `string \| null \| undefined` | Optional | To transaction delivery date<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `period` | [`PricedTransactionReqV2PeriodEnum \| undefined`](../../doc/models/priced-transaction-req-v2-period-enum.md) | Optional | - |
| `postingDateFrom` | `string \| null \| undefined` | Optional | Transaction posting start date and time<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `postingDateTo` | `string \| null \| undefined` | Optional | Transaction posting end date and time<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `transactionItemId` | `string \| null \| undefined` | Optional | Unique id of the transaction that may include one or more salesitems |
| `fuelOnly` | `boolean \| null \| undefined` | Optional | Is FuelOnly indicator<br>**Default**: `false` |
| `includeFees` | `boolean \| null \| undefined` | Optional | When passed as ‘true’ then all sales items along with fees will be included in the response and the follwoing filteres will be ignored<br><br>* InvoiceNumber<br>* InvoiceDate<br>* PostingDateFrom<br>* PostingDateTo |
| `isMultipayer` | `boolean \| undefined` | Optional | If true then returns all the data linked tothe payer group of the provided PayerNumberin the request |
| `validInvoiceDateOnly` | `boolean \| undefined` | Optional | When passed as ‘True’ the transactions records with report date not equal to 9999-12-30 will be returned. When passed as ‘False’ the above condition will not be checked.<br>**Default**: `false` |
| `invoiceFromDate` | `string \| null \| undefined` | Optional | Invoice From Date, this is a search criterion to filter invoiced transactions with invoice date from this date.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `invoiceToDate` | `string \| null \| undefined` | Optional | Invoice To Date, this is a search criterion to filter invoiced transactions with invoice date until this date.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `19` |
| `hostingCollectingCompanyNumber` | `string \| null \| undefined` | Optional | Hosting Collecting Company Number of the selected payer. |
| `search` | `string \| null \| undefined` | Optional | Search based on DriverName or VRN |
| `transactionId` | `string \| null \| undefined` | Optional | Unique id of the transaction that may include one or more salesitems |

## Example (as JSON)

```json
{
  "ColCoCode": "032",
  "InvoiceStatus": {
    "key1": "val1",
    "key2": "val2"
  },
  "PayerNumber": "DE26685263",
  "AccountId": 29484,
  "AccountNumber": "DE26667080",
  "DriverName": "HH NX 508",
  "CardGroupId": 40000,
  "CardPAN": "7002051006629890645",
  "ProductCode": "10",
  "ProductName": "Diesel AGO",
  "SiteCode": "05000100",
  "IncomingSiteNumber": "100021",
  "InvoiceDate": "2022-01-01 00:00:00",
  "InvoiceNumber": "3201016193",
  "PurchasedInCountryCode": "GB",
  "PurchasedInCountry": "United Kingdom",
  "SiteGroupId": 202,
  "FeeTypeId": 275549,
  "LineItemDescription": "ABC3",
  "FromDate": "2022-01-01 00:00:00",
  "ToDate": "2022-01-01 00:00:00",
  "PostingDateFrom": "2022-01-01 00:00:00",
  "PostingDateTo": "2022-01-01 00:00:00",
  "TransactionItemId": "io9KVXk1UkW57XWKyeaHHg",
  "FuelOnly": false,
  "ValidInvoiceDateOnly": false,
  "InvoiceFromDate": "2022-01-01 00:00:00",
  "InvoiceToDate": "2022-01-01 00:00:00",
  "HostingCollectingCompanyNumber": "032",
  "Search": "2K89909",
  "TransactionId": "io9KVXk1UkW57XWKyeaHHg"
}
```

