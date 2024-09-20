
# Logged in User Response

## Structure

`LoggedInUserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userName` | `string \| null \| undefined` | Optional | Logged in User Identifier |
| `displayName` | `string \| null \| undefined` | Optional | Name of the logged in user. |
| `idMSSOID` | `string \| null \| undefined` | Optional | Single Sign On/Unique Identifier of the User in Identity Management system |
| `preferredLanguage` | `string \| null \| undefined` | Optional | ISO culture code/ Language chosen by the logged in user |
| `isSuperAdmin` | `boolean \| undefined` | Optional | Whether the user is a super administrator<br>**Default**: `false` |
| `dateFormat` | `string \| null \| undefined` | Optional | Preferred Date format for the logged in user |
| `timeFormat` | `string \| null \| undefined` | Optional | Preferred Time format for the logged in user |
| `weekBegins` | `number \| null \| undefined` | Optional | Preferred Day to Begin the Week. The value will be between 1 to 7 or null. |
| `displayWeek` | `boolean \| undefined` | Optional | Preferred Display Week on Fuel Prices configuration for the logged in User.<br>**Default**: `true` |
| `cSVSeparator` | `string \| null \| undefined` | Optional | Preferred CSV Separator for the logged in user. |
| `decimalSeparator` | `string \| null \| undefined` | Optional | Preferred Decimal separator configured for the logged in user<br>Note: - Colco default value (configured at Microservices) is returned when the user is not provided or does not exist. |
| `reportFormat` | `string \| null \| undefined` | Optional | Preferred report format configured for the logged in user |
| `hasAPIAccess` | `boolean \| undefined` | Optional | True/False<br>True, if user has access to the requested API. This is validated based on the role Vs API access matrix and client Vs API access matrix.<br>**Default**: `true` |
| `roles` | [`Role[] \| undefined`](../../doc/models/role.md) | Optional | List of roles the user have access to |
| `payers` | [`PayerAccess[] \| undefined`](../../doc/models/payer-access.md) | Optional | List of payers which the user has access to.<br>•    It will return 250 payers only and it is configurable. If the user has more than that, the remaining will be ignored.<br>•    The payer which is marked as default will be the first item in the output.<br><br>Note: This list will be empty for users mapped with roles which has either IsShellAdmin or IsServiceAccount set to true as their access level is controlled at ColCo level only. |
| `accounts` | [`AccountAccess[] \| undefined`](../../doc/models/account-access.md) | Optional | List of accounts which the user has access to.<br>Note: This list will be empty for users mapped with roles which has either IsCustomerAdmin, IsShellAdmin or IsServiceAccount set to true as their access level is controller at either ColCo or payer level only. |
| `collectingCompanies` | [`ColCoAccess[] \| undefined`](../../doc/models/col-co-access.md) | Optional | List of collecting companies to which the user has access to<br>Note: This list will be empty for users mapped with roles which has either IsCustomerAdmin or IsCustomerUser set to true as their access level is controller at Payer or Account level. |
| `eIDAccessDetails` | [`EIDAccess[] \| undefined`](../../doc/models/eid-access.md) | Optional | List of Electronic Invoice Data configured for the user.<br>Note: This list will be empty if the value of EIDDetails is set to false or empty in the request. |
| `userClassificationBySystem` | `string \| null \| undefined` | Optional | User classification by system. |
| `userClassificationByShell` | `string \| null \| undefined` | Optional | User classification by Shell. |
| `payerCount` | `number \| null \| undefined` | Optional | Count of payers accessible to the user at the time when user was created or last updated.<br>Note:<br>Count may vary based on customer operations hence it may not be an up to date value. |
| `accountCount` | `number \| null \| undefined` | Optional | Count of accounts at the time when the user was created or last updated.<br>Note:<br>Count may vary based on customer operations hence it may not be an up to date value. |
| `cardCount` | `number \| null \| undefined` | Optional | Count of cards at the time when the user was created or last updated.<br>Note:<br>Count may vary based on customer operations hence it may not be an up to date value. |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | Request Id of the API call |

## Example (as JSON)

```json
{
  "UserName": "D09PZ29h2eaBWi5Da8gcHsTRO10w8Qh9",
  "DisplayName": "3rdParty test",
  "IdMSSOID": "D09PZ29h2eaBWi5Da8gcHsTRO10w8Qh9",
  "PreferredLanguage": "en-GB",
  "IsSuperAdmin": false,
  "DateFormat": "dd/MM/yy",
  "TimeFormat": "hh:mm tt",
  "WeekBegins": 1,
  "DisplayWeek": true,
  "CSVSeparator": ";",
  "DecimalSeparator": "1,234,567.00",
  "ReportFormat": "csv",
  "HasAPIAccess": true,
  "UserClassificationBySystem": "S",
  "UserClassificationByShell": "S",
  "PayerCount": 1,
  "AccountCount": 1,
  "CardCount": 15,
  "RequestId": "f20979a8-872f-4653-cf12-89b52f1dc7cb"
}
```

