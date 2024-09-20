
# Audit Response Audits Items

## Structure

`AuditResponseAuditsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account id of the customer.<br>It will be the source account id in case of “Fund Transfer |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number of the customer.<br>It will be the source account number in case of “Fund Transfer” |
| `additionalInformation1` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation2` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation3` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation4` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation5` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation6` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation7` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation8` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `additionalInformation9` | `string \| null \| undefined` | Optional | Additional information in the request. |
| `cardGroupId` | `number \| null \| undefined` | Optional | Additional information in the request. |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name in the request. |
| `cardId` | `number \| null \| undefined` | Optional | Card Id in the request |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting company code of the customer |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting company id of the customer. |
| `errorCode` | `string \| undefined` | Optional | Error code of the request |
| `errorString` | `string \| null \| undefined` | Optional | Error description of the request |
| `globalRequestID` | `string \| null \| undefined` | Optional | Global unique request reference provided by client application. |
| `pAN` | `string \| null \| undefined` | Optional | PAN in the request.<br>If Mask PAN is enabled at Microservices configuration then all digits of the PAN, except the last 6 digits, will be masked. |
| `payerId` | `number \| null \| undefined` | Optional | Payer id of the customer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer number of the customer. |
| `processedOn` | `string \| null \| undefined` | Optional | Request processed date.<br>Format: yyyyMMdd HH:mm: ss |
| `requestedBy` | `string \| null \| undefined` | Optional | vUUID of the user who submitted this request.<br>It will be the UUID of the Driver in the case of “MobilePaymentRegistration” |
| `requestedOperation` | `string \| null \| undefined` | Optional | User requested operation.<br>Possible values:<br>•    OrderCard<br>•    CreateCardGroup<br>•    PINReminder<br>•    MoveCard<br>•    UpdateCardStatus<br>•    UpdateCardGroup<br>•    AutoRenew<br>•    BulkCardOrder<br>•    BulkCardBlock<br>•    BulkCardOrderMultiAccount<br>•    MobilePaymentRegistration<br>•    UpdateCompanyInfo<br>•    BCOSummary<br>•    BCOMultiAccountSummary<br>•    BCBSummary<br>•    FundTransfer<br>•    DeliveryAddressUpdate |
| `requestReference` | `number \| null \| undefined` | Optional | Reference number for the requested operation. |
| `requestType` | `string \| null \| undefined` | Optional | Request type initiated under the requested operation.<br>Possible values:<br>•    OrderCard<br>•    CreateCardGroup<br>•    PINReminder<br>•    MoveCard<br>•    UpdateCardStatus<br>•    UpdateCardGroup<br>•    AutoRenew<br>•    BulkCardOrder<br>•    BulkCardBlock<br>•    BulkCardOrderMultiAccount<br>•    MobilePaymentRegistration<br>•    UpdateCompanyInfo<br>•    BCOSummary<br>•    BCOMultiAccountSummary<br>•    BCBSummary<br>•    FundTransfer<br>•    DeliveryAddressUpdate |
| `status` | `string \| null \| undefined` | Optional | Status of the request.<br>Possible values:<br>•    Success<br>•    Failed<br>•    InProgress<br>•    Submitted<br>•    Rejected<br>•    PendingApproval<br>•    MailedToCSC |
| `submittedOn` | `string \| null \| undefined` | Optional | Request submitted date.<br>Format: yyyyMMdd HH:mm: ss |
| `subRequestReference` | `number \| null \| undefined` | Optional | Reference number for the individual request type. |
| `userDisplayName` | `string \| null \| undefined` | Optional | Display name of the user who submitted this request.<br>It will be the Display Name of the Driver in the case of “MobilePaymentRegistration” in the below format: |

## Example (as JSON)

```json
{
  "AccountId": 123,
  "AccountNumber": "BE00000113",
  "AdditionalInformation1": "922",
  "AdditionalInformation2": "2016",
  "AdditionalInformation3": "MERCEDES GLE KLASSE SEGM. L",
  "AdditionalInformation4": "408135/3",
  "AdditionalInformation5": "API TEST CUSTOMER 113",
  "AdditionalInformation6": "408135/3",
  "AdditionalInformation7": "null",
  "AdditionalInformation8": "null",
  "AdditionalInformation9": "null",
  "CardGroupId": 123,
  "CardGroupName": "test",
  "CardId": 10594,
  "ColCoCode": 9,
  "ColCoId": 9,
  "ErrorCode": "0000",
  "ErrorString": "null",
  "GlobalRequestID": "6f1473ea-7f68-4ccb-acee-4b5b997aad5a",
  "PAN": "7002097550439850717",
  "PayerId": 123,
  "PayerNumber": "BE00000113",
  "ProcessedOn": "20240201 14:30:26",
  "RequestedBy": "EWyIv8LpjgW3LlKDDUo0VZMN6JKpqRc",
  "RequestedOperation": "OrderCard",
  "RequestReference": 519876,
  "RequestType": "OrderCard",
  "Status": "Success",
  "SubmittedOn": "20240201 14:29:16",
  "SubRequestReference": 720061,
  "UserDisplayName": "Supriya-ThridPartyAgent"
}
```

