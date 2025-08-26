
# Transaction Exceptions Res

## Structure

`TransactionExceptionsRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`TransactionExceptionsResponse[] \| undefined`](../../doc/models/transaction-exceptions-response.md) | Optional | - |
| `warnings` | [`Warning[] \| undefined`](../../doc/models/warning.md) | Optional | A list of Warning entity.<br>This entity will hold the details of the scheduled System Outages of any dependent applications of this service.<br>Note: If there is no scheduled outage information available, in the configuration in AMS, for this service, this parameter won’t be present in output. |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "CardExceptions": [
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        },
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        }
      ],
      "TransactionExceptions": [
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        }
      ]
    },
    {
      "CardExceptions": [
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        },
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        }
      ],
      "TransactionExceptions": [
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        }
      ]
    },
    {
      "CardExceptions": [
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        },
        {
          "AccountId": 224,
          "AccountNumber": "AccountNumber4",
          "AccountShortName": "AccountShortName6",
          "CardId": 130,
          "CurrencyCode": "CurrencyCode2"
        }
      ],
      "TransactionExceptions": [
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        },
        {
          "SalesItemId": 113.2,
          "CardId": 104,
          "ProductId": 220,
          "TransactionGUID": "TransactionGUID2",
          "TransactionDate": "TransactionDate6"
        }
      ]
    }
  ],
  "Warnings": [
    {
      "Message": "Message0",
      "Type": "Type4"
    },
    {
      "Message": "Message0",
      "Type": "Type4"
    }
  ]
}
```

