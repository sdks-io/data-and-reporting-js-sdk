
# PIN Advice Types

## Structure

`PINAdviceTypes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pINAdviceTypeID` | `number \| null \| undefined` | Optional | Id of of PIN advice type.<br>Possible Values:<br><br>1. Paper<br>2. Email<br>3. SMS<br>4. None |
| `isCardOrderOption` | `boolean \| undefined` | Optional | Whether the PIN advice type is available for card ordering |
| `isPINReminderOption` | `boolean \| undefined` | Optional | Whether the PIN advice type is available for PIN Reminder |

## Example (as JSON)

```json
{
  "PINAdviceTypeID": 1,
  "IsCardOrderOption": false,
  "IsPINReminderOption": false
}
```

