# Customer

APIs for Retrieve and Update customer specific details

```ts
const customerController = new CustomerController(client);
```

## Class Name

`CustomerController`

## Methods

* [User-Loggedinuser](../../doc/controllers/customer.md#user-loggedinuser)
* [Customerpayers](../../doc/controllers/customer.md#customerpayers)
* [Customerdetail](../../doc/controllers/customer.md#customerdetail)
* [Post-Card-Accounts](../../doc/controllers/customer.md#post-card-accounts)
* [Customercardtypev](../../doc/controllers/customer.md#customercardtypev)
* [Cardgroups](../../doc/controllers/customer.md#cardgroups)
* [Audit Report](../../doc/controllers/customer.md#audit-report)
* [Customer Price List](../../doc/controllers/customer.md#customer-price-list)


# User-Loggedinuser

This operation allows querying the user data of the logged in user.
This operation should be called only after successful authentication of the end user in client application. This operation will return the user access details such as payers and/or accounts.
This operation will also validate that logged in user has access to the requested operation, on failure it will return HasAPIAccess flag as false in the response.

```ts
async userLoggedinuser(
  requestId: string,
  body: LoggedInUserReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoggedInUserRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`LoggedInUserReq`](../../doc/models/logged-in-user-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LoggedInUserRes`](../../doc/models/logged-in-user-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: LoggedInUserReq = {
};

try {
  const response = await customerController.userLoggedinuser(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof UserManagementV1Loggedinuser400Error) {
      console.log(error.result);
    } else if (error instanceof UserManagementV1Loggedinuser401Error) {
      console.log(error.result);
    } else if (error instanceof UserManagementV1Loggedinuser403Error) {
      console.log(error.result);
    } else if (error instanceof UserManagementV1Loggedinuser404Error) {
      console.log(error.result);
    } else if (error instanceof UserManagementV1Loggedinuser500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`UserManagementV1Loggedinuser400Error`](../../doc/models/user-management-v1-loggedinuser-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`UserManagementV1Loggedinuser401Error`](../../doc/models/user-management-v1-loggedinuser-401-error.md) |
| 403 | Forbidden | [`UserManagementV1Loggedinuser403Error`](../../doc/models/user-management-v1-loggedinuser-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`UserManagementV1Loggedinuser404Error`](../../doc/models/user-management-v1-loggedinuser-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`UserManagementV1Loggedinuser500Error`](../../doc/models/user-management-v1-loggedinuser-500-error.md) |


# Customerpayers

This API allows querying the payer accounts details from the Shell Cards
Platform. It provides flexible search criteria for searching payer
information and supports paging.

Paging is applicable only when all the
payers passed in the input are from the same ColCo.

However, paging will
be ignored and the API will return all the matching data by merging the
data queried from each ColCo when payers passed in the input are from
multiple ColCos.

```ts
async customerpayers(
  requestId: string,
  body: PayerReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayerRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`PayerReq`](../../doc/models/payer-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PayerRes`](../../doc/models/payer-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: PayerReq = {
  page: 1,
  pageSize: 100,
};

try {
  const response = await customerController.customerpayers(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Payers400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Payers401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Payers403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Payers404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Payers500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Payers400Error`](../../doc/models/customer-management-v1-payers-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Payers401Error`](../../doc/models/customer-management-v1-payers-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Payers403Error`](../../doc/models/customer-management-v1-payers-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Payers404Error`](../../doc/models/customer-management-v1-payers-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Payers500Error`](../../doc/models/customer-management-v1-payers-500-error.md) |


# Customerdetail

This API allows querying the card delivery addresses of a given account from the Shell Cards Platform. Only active delivery addresses will be returned.

```ts
async customerdetail(
  requestId: string,
  body: CustomerReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CustomerReq`](../../doc/models/customer-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CustomerRes`](../../doc/models/customer-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CustomerReq = {
};

try {
  const response = await customerController.customerdetail(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Customer400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Customer401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Customer403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Customer404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Customer500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Customer400Error`](../../doc/models/customer-management-v1-customer-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Customer401Error`](../../doc/models/customer-management-v1-customer-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Customer403Error`](../../doc/models/customer-management-v1-customer-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Customer404Error`](../../doc/models/customer-management-v1-customer-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Customer500Error`](../../doc/models/customer-management-v1-customer-500-error.md) |


# Post-Card-Accounts

This API allows querying the customer account details from the Shell Cards Platform. It provides a flexible search criterion and supports pagination.

```ts
async postCardAccounts(
  requestId: string,
  body: AccountReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`AccountReq`](../../doc/models/account-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountRes`](../../doc/models/account-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: AccountReq = {
  page: 1,
  pageSize: 100,
};

try {
  const response = await customerController.postCardAccounts(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Accounts400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Accounts401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Accounts403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Accounts404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Accounts500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Accounts400Error`](../../doc/models/customer-management-v1-accounts-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Accounts401Error`](../../doc/models/customer-management-v1-accounts-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Accounts403Error`](../../doc/models/customer-management-v1-accounts-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Accounts404Error`](../../doc/models/customer-management-v1-accounts-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Accounts500Error`](../../doc/models/customer-management-v1-accounts-500-error.md) |


# Customercardtypev

This API provides allows querying the active card types that are associated to the given account.

The API returns the card type configurations, purchase categories associated with the card type and the card type restriction limits.

```ts
async customercardtypev(
  requestId: string,
  body: CardTypeReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardTypeRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CardTypeReq`](../../doc/models/card-type-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardTypeRes`](../../doc/models/card-type-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CardTypeReq = {
};

try {
  const response = await customerController.customercardtypev(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV2Cardtype400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV2Cardtype401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV2Cardtype403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV2Cardtype404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV2Cardtype500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV2Cardtype400Error`](../../doc/models/customer-management-v2-cardtype-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV2Cardtype401Error`](../../doc/models/customer-management-v2-cardtype-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV2Cardtype403Error`](../../doc/models/customer-management-v2-cardtype-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV2Cardtype404Error`](../../doc/models/customer-management-v2-cardtype-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV2Cardtype500Error`](../../doc/models/customer-management-v2-cardtype-500-error.md) |


# Cardgroups

This API allows querying the card group details from the Shell Cards
Platform. It provides flexible search criteria and supports paging.

When the account is not passed in the input and card group type is configured as
â€˜Verticalâ€™ in the cards platform, this API will return all card groups from
the payer as well as from all the accounts under the payer.

When the account is not passed in the input and card group type is configured as
â€˜Horizontalâ€™ in cards platform, this API will return all card groups
configured directly under the payer.

```ts
async cardgroups(
  requestId: string,
  body: CardGroupReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardGroupRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CardGroupReq`](../../doc/models/card-group-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardGroupRes`](../../doc/models/card-group-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CardGroupReq = {
  page: 1,
  pageSize: 100,
};

try {
  const response = await customerController.cardgroups(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Cardgroups400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Cardgroups401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Cardgroups403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Cardgroups404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Cardgroups500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Cardgroups400Error`](../../doc/models/customer-management-v1-cardgroups-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Cardgroups401Error`](../../doc/models/customer-management-v1-cardgroups-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Cardgroups403Error`](../../doc/models/customer-management-v1-cardgroups-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Cardgroups404Error`](../../doc/models/customer-management-v1-cardgroups-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Cardgroups500Error`](../../doc/models/customer-management-v1-cardgroups-500-error.md) |


# Audit Report

This operation allows users to fetch audit data of account or card operations performed by users of a given customer
The audit data includes details of below API operations

* Order Card
* Create Card Group
* PIN reminder
* Move Cards
* Update Card Status
* Update Card Group
* Auto renew
* Bulk card order
* Bulk card block
* Bulk Card Order (Multi Account)
* BCOSummary
* BCOMultiAccountSummary
* BCBSummary
* Mobile Payment Registration
* Fund Transfer (Scheduled & Realtime)
* Delivery Address Update.

```ts
async auditReport(
  requestId: string,
  body?: AuditReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`AuditReq \| undefined`](../../doc/models/audit-req.md) | Body, Optional | request body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AuditResponse`](../../doc/models/audit-response.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: AuditReq = {
  page: 1,
  pageSize: 100,
};

try {
  const response = await customerController.auditReport(
    requestId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Auditreport400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Auditreport401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Auditreport403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Auditreport404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Auditreport500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Auditreport400Error`](../../doc/models/customer-management-v1-auditreport-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Auditreport401Error`](../../doc/models/customer-management-v1-auditreport-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Auditreport403Error`](../../doc/models/customer-management-v1-auditreport-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Auditreport404Error`](../../doc/models/customer-management-v1-auditreport-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Auditreport500Error`](../../doc/models/customer-management-v1-auditreport-500-error.md) |


# Customer Price List

- This operation fetches the International and National Price List and discount values set on pump prices & List Prices
- It allows searching price list and discount values set on pump prices that are applicable for a given customer

**Note**: Accounts with cancelled status will not be considered for this operation for the configured

- When the search is based on customer specific price list then the customer price list is returned based on the associated pricing customer.
- The discount values set on pump prices, which are returned by the operation are always customer specific values based on the customer associated price rules.

```ts
async customerPriceList(
  requestId: string,
  body?: CustomerPriceListReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerPriceListRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CustomerPriceListReq \| undefined`](../../doc/models/customer-price-list-req.md) | Body, Optional | Customerdetails request body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CustomerPriceListRes`](../../doc/models/customer-price-list-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

try {
  const response = await customerController.customerPriceList(requestId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomerManagementV1Pricelist400Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Pricelist401Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Pricelist403Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Pricelist404Error) {
      console.log(error.result);
    } else if (error instanceof CustomerManagementV1Pricelist500Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`CustomerManagementV1Pricelist400Error`](../../doc/models/customer-management-v1-pricelist-400-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`CustomerManagementV1Pricelist401Error`](../../doc/models/customer-management-v1-pricelist-401-error.md) |
| 403 | Forbidden | [`CustomerManagementV1Pricelist403Error`](../../doc/models/customer-management-v1-pricelist-403-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`CustomerManagementV1Pricelist404Error`](../../doc/models/customer-management-v1-pricelist-404-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`CustomerManagementV1Pricelist500Error`](../../doc/models/customer-management-v1-pricelist-500-error.md) |

