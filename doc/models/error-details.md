
# Error Details

## Structure

`ErrorDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Error code representing the error encountered |
| `title` | `string \| undefined` | Optional | Error type description |
| `detail` | `string \| undefined` | Optional | Detailed inforamtion about the error |
| `additionalInfo` | `Record<string, string \| null> \| undefined` | Optional | Applicable when more details related to error to be returned |

## Example (as JSON)

```json
{
  "Code": "Code2",
  "Title": "Title8",
  "Detail": "Detail4",
  "AdditionalInfo": {
    "key0": "AdditionalInfo2"
  }
}
```

