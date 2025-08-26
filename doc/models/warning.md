
# Warning

## Structure

`Warning`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required | A custom message giving the detailed outage information. The message will contain the duration and the reason for the outage. |
| `type` | `string` | Required | Type of warning |

## Example (as JSON)

```json
{
  "Message": "System is down for upgradation.",
  "Type": "System Outage"
}
```

