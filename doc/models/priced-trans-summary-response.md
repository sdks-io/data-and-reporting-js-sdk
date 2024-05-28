
# Priced Trans Summary Response

## Structure

`PricedTransSummaryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionsSummary` | [`PricedTransSummaryResponseTransactionsSummaryItems[] \| undefined`](../../doc/models/priced-trans-summary-response-transactions-summary-items.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |

## Example (as JSON)

```json
{
  "TransactionsSummary": [
    {
      "ProductId": 184,
      "ProductCode": "ProductCode8",
      "ProductName": "ProductName8",
      "ProductGroupId": 112,
      "ProductGroupName": "ProductGroupName0"
    },
    {
      "ProductId": 184,
      "ProductCode": "ProductCode8",
      "ProductName": "ProductName8",
      "ProductGroupId": 112,
      "ProductGroupName": "ProductGroupName0"
    },
    {
      "ProductId": 184,
      "ProductCode": "ProductCode8",
      "ProductName": "ProductName8",
      "ProductGroupId": 112,
      "ProductGroupName": "ProductGroupName0"
    }
  ],
  "Error": {
    "Code": "Code4",
    "Description": "Description2"
  },
  "RequestId": "RequestId2"
}
```

