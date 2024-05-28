
# Finance Currency

This entity will not be present in the response if the ‘IncludeFinanceCurrency’ flag in the request is ‘false’

## Structure

`FinanceCurrency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| null \| undefined` | Optional | Currency ISO Code used for the Finance Widget. |
| `currencySymbol` | `string \| null \| undefined` | Optional | Currency Symbol |
| `invoiceExchangeRate` | `number \| null \| undefined` | Optional | Factor to be used for converting the amounts in invoice currency to finance widget currency. (If finance currency is same as invoice currency, then the value of this field will be “1” so that the value does not change) |
| `creditLimitExchangeRate` | `number \| null \| undefined` | Optional | Factor to be used for converting the amounts in credit limit currency to finance widget currency. (If finance currency is same as credit limit currency, then the value of this field will be “1” so that the value does not change) |

## Example (as JSON)

```json
{
  "CurrencyCode": "EUR",
  "CurrencySymbol": "€",
  "Invoice_ExchangeRate": 1.0,
  "CreditLimit_ExchangeRate": 1.0
}
```

