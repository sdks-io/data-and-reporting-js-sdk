
# Update Odometer

## Structure

`UpdateOdometer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `salesItemId` | `string \| null` | Required | Unique SalesItemId (Either Billed on Unbilled)<br>Mandatory |
| `newOdometerValue` | `number \| null` | Required | NewOdometerValue that needs to be updated |

## Example (as JSON)

```json
{
  "SalesItemId": "SalesItemId2",
  "NewOdometerValue": 158
}
```

