
# Role

## Structure

`Role`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string \| undefined` | Optional | Role Name of the user |
| `isCustomerAdmin` | `boolean \| undefined` | Optional | Whether the role is an administrator.<br><br>**Default**: `true` |
| `isCustomerUser` | `boolean \| undefined` | Optional | Whether the role is a customer user.<br><br>**Default**: `false` |
| `isShellAdmin` | `boolean \| undefined` | Optional | True if the role is Shell user, else false.<br><br>**Default**: `false` |
| `isServiceAccount` | `boolean \| undefined` | Optional | True/False.<br>True if the role is Service accounts, else false.<br><br>**Default**: `false` |
| `isUserAdmin` | `boolean \| undefined` | Optional | True/False.<br>True, if the role allows user administration, else false.<br><br>**Default**: `true` |

## Example (as JSON)

```json
{
  "RoleName": "FleetManager",
  "IsCustomerAdmin": true,
  "IsCustomerUser": false,
  "IsShellAdmin": false,
  "IsServiceAccount": false,
  "IsUserAdmin": true
}
```

