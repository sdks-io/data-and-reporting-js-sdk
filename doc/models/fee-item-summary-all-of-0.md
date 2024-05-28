
# Fee Item Summary All of 0

## Structure

`FeeItemSummaryAllOf0`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeTypeGroup` | `string \| null \| undefined` | Optional | Fee type group in under which the Fee item is generated. |
| `feeTypeId` | `string \| null \| undefined` | Optional | Fee Type Id ID  Description |
| `productId` | `number \| null \| undefined` | Optional | Product Id |
| `productCode` | `string \| null \| undefined` | Optional | Product Code |
| `productName` | `string \| null \| undefined` | Optional | Product Name |
| `productGroupId` | `number \| null \| undefined` | Optional | Product Group Id |
| `productGroupName` | `string \| null \| undefined` | Optional | Product Group Name |
| `totalQuantity` | `number \| null \| undefined` | Optional | Total Quantity |
| `totalInvoiceNetAmount` | `number \| null \| undefined` | Optional | Total Net amount in invoice currency |
| `totalInvoiceGrossAmount` | `number \| null \| undefined` | Optional | Total Gross amount in invoice currency |
| `totalInvoiceVATAmount` | `number \| null \| undefined` | Optional | Total VAT amount in invoice currency |
| `invoiceCurrencyCode` | `string \| null \| undefined` | Optional | ISO 4217 currency code of the country |
| `invoiceCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Invoice Currency Code |

## Example (as JSON)

```json
{
  "FeeTypeGroup": "Account",
  "FeeTypeId": "1",
  "ProductId": 102,
  "ProductCode": "Invoice production fee",
  "ProductName": "Invoice production fee",
  "ProductGroupId": 22,
  "ProductGroupName": "Card related fees",
  "TotalQuantity": 2,
  "TotalInvoiceNetAmount": 22.23,
  "TotalInvoiceGrossAmount": 28.92,
  "TotalInvoiceVATAmount": 10.02,
  "InvoiceCurrencyCode": "GBP",
  "InvoiceCurrencySymbol": "Ã‚Â£"
}
```

