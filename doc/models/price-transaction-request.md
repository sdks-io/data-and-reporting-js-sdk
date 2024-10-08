
# Price Transaction Request

## Structure

`PriceTransactionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1 for Philippines<br>5 for UK |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code  of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86 for Philippines<br>5 for UK |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id  of the selected payer.<br>Optional if PayerNumber is passed else Mandatory |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number (Ex: GB000000123) of the selected payer.<br>Optional if PayerId is passed else Mandatory<br>Example: GB000000123 |
| `accounts` | [`Accounts \| undefined`](../../doc/models/accounts.md) | Optional | - |
| `cardId` | `number \| null \| undefined` | Optional | Card Id (i.e. Unique Card Id in GFN)<br>Optional<br>When both Card Id and Card PAN are not present on request, the response will have transactions of all cards under the selected payer or account |
| `cardPAN` | `string \| null \| undefined` | Optional | Full Card PAN<br>Optional<br>When both Card Id and Card PAN are not present on request, the response will have transactions of all cards under the selected payer or account. |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name (of Card record)<br>Optional<br>Minimum of 4 characters should be provided else not considered<br>Transactions of the card having the entered value at any part of the Driver Name will be returned |
| `vehicleRegistrationNumber` | `string \| null \| undefined` | Optional | Vehicle Registration (of Card record)<br>Optional<br>Minimum of 4 characters should be provided else not considered<br>Transactions of the card having the entered value at any part of the VRN will be returned |
| `invoiceStatus` | `string \| null \| undefined` | Optional | Invoice status of the transactions.<br>Mandatory<br>Possible options:<br>I - Invoiced<br>U – Un-Invoiced<br>A – All |
| `productId` | `number \| null \| undefined` | Optional | Product Id<br>Example:<br>21    Unleaded - High octane<br>22    Unleaded - Medium octane<br>23    Unleaded - Low octane<br>24    Unleaded Environmental |
| `productCode` | `string \| null \| undefined` | Optional | Product Code – Global as per GFN configuration<br>Optional<br>Max Length: 8<br>Example:<br>10    TMF Charges<br>11    Tunnel/Bridges<br>12    Motorway toll<br>13    Ferries |
| `purchasedInCountry` | `string \| null \| undefined` | Optional | ISO Country Code (ex: UK, FR)<br><br>Note: If IncludeFees is true then this filter will be ignored |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card Group Id in GFN |
| `sortOrder` | `string \| null \| undefined` | Optional | Allowed Sorting Options:<br><br>1. TransactionDateAscending<br>2. TransactionDateDescending<br>3. GrossAmountDescending<br>4. GrossAmountAscending<br>5. DriverNameAscending (If Driver Name is null then VRN value will be considered)<br>6. DriverNameDescending (If Driver Name is null then VRN value will be considered)<br>7. VRNAscending (If VRN is null then Driver Name value will be considered)<br>8. VRNDescending (If VRN is null then Driver Name value will be considered)<br>9. NetAmountAscending<br>10. NetAmountDescensding<br>    Example value to be passed: “1,3” |
| `fromDate` | `string \| null \| undefined` | Optional | Transactions from Date/Time.<br>Optional – When provided, it should be with in last 24 months.<br><br>Format: yyyyMMdd |
| `toDate` | `string \| null \| undefined` | Optional | Transactions to Date/Time.<br>Optional- Refer introduction section of this operation for the priority and sequence of different date and invoice number filters that are conditionally applied.<br>Note:<br><br>1) When the value is blank and FromDate is provided on the input, all transactions took place 210(Configurable) days after the given FromDate is returned.<br>2) Difference between FromDate and ToDate cannot be more than 210 (Configurable) days.<br><br>Format: yyyyMMdd |
| `period` | `number \| null \| undefined` | Optional | Transactions Period.<br>Possible values are:<br><br>1. Last 7 Days<br>2. Last 30 Days<br>3. Last 90 Days<br>   Optional - Refer introduction section of this operation for the priority and sequence of different date and invoice number filters that are conditionally applied. |
| `siteCode` | `string \| null \| undefined` | Optional | Site Code as configured in GFN<br>Example:<br>050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755<br>050002 -    CHARNOCK RICHARD STHBOUND MWSA 0755<br>050005 -    HARTSHEAD MOOR EASTBOUND MWSA 0761.<br>050006 -    HARTSHEAD MOOR WESTBOUND MWSA.<br>Note: If IncludeFees is true then this filter will be ignored |
| `siteGroupId` | `number \| null \| undefined` | Optional | Site Group Id in GFN<br>Optional<br>Example: 202<br>Note: If IncludeFees is true then this filter will be ignored |
| `postingDateFrom` | `string \| null \| undefined` | Optional | Transaction Posting Date/time in the Cards Platform - From Date/time.<br><br>Note:<br><br>1) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.<br>2) If IncludeFees is true then this filter will be ignored<br>   Format: yyyyMMdd HH:mm:ss |
| `postingDateTo` | `string \| null \| undefined` | Optional | Transaction Posting Date/time in the Cards Platform – To Date/time.<br><br>Note:<br><br>1) If IncludeFees is true then this filter will be ignored.<br>2) When the value of both PostingDateFrom and PostingDateTo are present in the request then the value of PostingDateFrom must be less than PostingDateTo.<br>   Format: yyyyMMdd HH:mm:ss |
| `salesItemId` | `string \| null \| undefined` | Optional | Unique SalesItemId (Either Billed on Unbilled)<br>Optional<br>Note: If IncludeFees is true then this filter will be ignored |
| `transactionId` | `string \| null \| undefined` | Optional | Unique Transaction Id<br>Optional<br>Note: If IncludeFees is true then this filter will be ignored |
| `invoiceDate` | `string \| null \| undefined` | Optional | Invoice Date.<br>Optional<br>Note:<br><br>1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date.<br><br>Format: yyyyMMdd |
| `invoiceNumber` | `string \| null \| undefined` | Optional | Invoice Number.<br>Optional<br>Note:<br><br>1) If value is not blank then the system will ignore the InvoiceStatus parameter and it will return all the billed transactions for the given invoice date. |
| `validInvoiceDateOnly` | `boolean \| null \| undefined` | Optional | True/False<br>Optional<br>Default value: True.<br>When passed as ‘True’ the transactions records with report date not equal to 9999-12-30 will be returned.<br>When passed as ‘False’ the above condition will not be checked. |
| `invoiceFromDate` | `string \| null \| undefined` | Optional | Start date for transaction search by invoice date.<br>Optional<br>Note:<br><br>1) Value should be with in last 24 months (if provided).<br>2) Maximum of 90(Configurable) day’s duration allowed per search.<br>3) When provided, InvoiceFromDate has to be less than or equal to InvoiceToDate.<br>   Format: yyyyMMdd |
| `invoiceToDate` | `string \| null \| undefined` | Optional | End date for transaction search by invoice date.<br>Optional<br>Note:<br><br>1) When InvoiceFromDate is provided and InvoiceToDate is null, then InvoiceToDate will be calculated as (InvoiceFromDate + 90 days) or (CurrentDate) whichever is lesser.<br>   Format: yyyyMMdd |
| `fuelOnly` | `boolean \| null \| undefined` | Optional | True/False<br>Optional<br>Default value: False.<br>When passed as ‘True’ Only returned records with Fuel transactions.<br>When passed as ‘False’ the above condition will not be checked. |
| `includeFees` | `boolean \| null \| undefined` | Optional | True/False<br>Optional<br>Default value: False<br>When passed as ‘True’ then  ignore few filters, all sales items along with fees included on the same response |
| `useFieldId` | `boolean \| null \| undefined` | Optional | True/False<br>Optional<br>Default value – False.<br>When set to True, the property names in the output will be replaced by Field IDs.<br>This will reduce the output payload size significantly for large data sets and help faster transmission of data over networks. |
| `currentPage` | `number \| null \| undefined` | Optional | Current Page Number |
| `pageSize` | `number \| undefined` | Optional | Page Size – Number of records to show on a page<br>Optional<br>Default value 50 |

## Example (as JSON)

```json
{
  "ColCoId": 34,
  "ColCoCode": 48,
  "PayerId": 82,
  "PayerNumber": "PayerNumber6",
  "Accounts": {
    "AccountId": 28,
    "AccountNumber": "AccountNumber0"
  }
}
```

