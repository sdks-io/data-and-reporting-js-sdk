
# Logged in User Res

## Structure

`LoggedInUserRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`LoggedInUserResponse[] \| undefined`](../../doc/models/logged-in-user-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "UserName": "UserName0",
      "DisplayName": "DisplayName2",
      "IdMSSOID": "IdMSSOID8",
      "PreferredLanguage": "PreferredLanguage0",
      "IsSuperAdmin": false
    },
    {
      "UserName": "UserName0",
      "DisplayName": "DisplayName2",
      "IdMSSOID": "IdMSSOID8",
      "PreferredLanguage": "PreferredLanguage0",
      "IsSuperAdmin": false
    },
    {
      "UserName": "UserName0",
      "DisplayName": "DisplayName2",
      "IdMSSOID": "IdMSSOID8",
      "PreferredLanguage": "PreferredLanguage0",
      "IsSuperAdmin": false
    }
  ]
}
```

