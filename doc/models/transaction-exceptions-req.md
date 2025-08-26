
# Transaction Exceptions Req

## Structure

`TransactionExceptionsReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`TransactionExceptionsRequest \| undefined`](../../doc/models/transaction-exceptions-request.md) | Optional | - |

## Example (as JSON)

```json
{
  "Filters": {
    "ColCoId": 0,
    "ColCoCode": 14,
    "PayerId": 48,
    "PayerNumber": "PayerNumber0",
    "Accounts": [
      {
        "AccountId": 28,
        "AccountNumber": "AccountNumber0"
      },
      {
        "AccountId": 28,
        "AccountNumber": "AccountNumber0"
      },
      {
        "AccountId": 28,
        "AccountNumber": "AccountNumber0"
      }
    ],
    "TransactionsFromDate": "TransactionsFromDate8",
    "TransactionsToDate": "TransactionsToDate0",
    "Condition": 86,
    "OutputType": 12
  }
}
```

