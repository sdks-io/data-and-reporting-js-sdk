
# Card Usage Restrictions

## Structure

`CardUsageRestrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `level` | `string \| null \| undefined` | Optional | Describes at which level the restriction is set at.<br>Possible values:<br>OU = Restriction set at ColCo card type<br>Customer = Restriction set at customer card type |
| `dailySpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in a day. |
| `weeklySpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in a week. |
| `monthlySpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in a month. |
| `annualSpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in a year. |
| `lifeTimeSpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in the card’s life time. |
| `dailyVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in a day. |
| `weeklyVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in a week. |
| `monthlyVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in a month. |
| `annualVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in a year.<br>**Default**: `0` |
| `lifeTimeVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in the card’s life time. |
| `transactionSpendLimit` | `number \| null \| undefined` | Optional | Maximum amount that can be spend on the card in a transaction. |
| `transactionVolumeLimit` | `number \| null \| undefined` | Optional | Maximum volume of fuel that can be bought on the card in a transaction. |
| `dailyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed on a card in a day. |
| `weeklyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed on a card in a week. |
| `monthlyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed on a card in a month. |
| `annualTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed on the card in a year. |
| `lifeTimeTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed on the card in the card’s life time. |
| `isVelocityCeiling` | `boolean \| undefined` | Optional | IsVelocityCeiling flag<br>Note: When "True", the velocity defaults configured in MS DB will be considered as the Max Limits for velocity changes. When ‘false’ max allowed limits will be 999999999999 for Type “Count” and 9999999999.99 for Type ‘Value’. |

## Example (as JSON)

```json
{
  "Level": "OU",
  "DailySpendLimit": 120.0,
  "WeeklySpendLimit": 56.07,
  "MonthlySpendLimit": 0.0,
  "AnnualSpendLimit": 0.0,
  "LifeTimeSpendLimit": 0,
  "DailyVolumeLimit": 0,
  "WeeklyVolumeLimit": 0,
  "MonthlyVolumeLimit": 0,
  "AnnualVolumeLimit": 0,
  "LifeTimeVolumeLimit": 0,
  "TransactionSpendLimit": 0,
  "TransactionVolumeLimit": 0,
  "DailyTransactionCount": 100,
  "WeeklyTransactionCount": 100,
  "MonthlyTransactionCount": 100,
  "AnnualTransactionCount": 100,
  "LifeTimeTransactionCount": 100
}
```

