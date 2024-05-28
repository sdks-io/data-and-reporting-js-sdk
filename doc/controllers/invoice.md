# Invoice

API's for Retrieve and download Invoice details

```ts
const invoiceController = new InvoiceController(client);
```

## Class Name

`InvoiceController`

## Methods

* [Invoice Search](../../doc/controllers/invoice.md#invoice-search)
* [Invoice Summary](../../doc/controllers/invoice.md#invoice-summary)
* [Statement of Account](../../doc/controllers/invoice.md#statement-of-account)
* [Dates](../../doc/controllers/invoice.md#dates)
* [Search Statement of Account](../../doc/controllers/invoice.md#search-statement-of-account)
* [Search Documents](../../doc/controllers/invoice.md#search-documents)
* [Eid Search](../../doc/controllers/invoice.md#eid-search)
* [Download](../../doc/controllers/invoice.md#download)
* [Eid Download](../../doc/controllers/invoice.md#eid-download)


# Invoice Search

This API allows to search invoice data in the Shell Card Platform. It provides flexible search criteria in the request body and supports paging.

This API will also query the relevant invoice documents list and return a reference number that can be used to download invoice documents (PDF and Proofing elements in a zip file).

#### Supported operations

* Search invoices by account
* Search invoices by invoice type or invoice status
* Search invoices by invoice id or number
* Search invoices by invoiced country
* Search invoices including einvoices
* Search invoices by summary document
* Search invoices by statement of account
* Search invoices by fixed and custom date periods

```ts
async invoiceSearch(
  requestId: string,
  body?: InvoiceSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`InvoiceSearchRequest \| undefined`](../../doc/models/invoice-search-request.md) | Body, Optional | Invoice Search RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvoiceSearchResponse`](../../doc/models/invoice-search-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: InvoiceSearchRequest = {
  filters: {
    colCoId: 14,
    payerId: 78,
    payerNumber: 'DE26688478',
    invoiceId: 4013059,
    invoiceNumber: '0123456789',
    fromDate: '20170830',
    toDate: '20171031',
    invoiceDate: '20171031',
    summaryDocumentId: 1616729,
    summaryDocumentNumber: '1283899/289261063/2019',
    statementOfAccountId: 'DE26702892',
    soAReferenceNumber: '1283899',
    period: 1,
    invoiceStatus: 'Due',
    invoicedOnBehalfOf: 'DE',
    includeEInvoiceDetails: false,
    type: 'Original',
  },
  pageSize: 50,
  page: 1,
};

try {
  const { result, ...httpResponse } = await invoiceController.invoiceSearch(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "18c955d1-b3ec-4dc0-95da-76e67afb891a",
  "Status": "SUCCESS",
  "Data": [
    {
      "AccountFullName": "powder ambition ERF  ",
      "AccountId": 179827,
      "AccountNumber": "DE26702892",
      "AccountShortName": "soft grocery Argyle  ",
      "ColCoId": 14,
      "ColCoOpCoId": "014",
      "CurrentBillingFrequency": "Last day of month",
      "CurrentBillingFrequencyId": 40,
      "CurrentDistributionMethod": "e-mail",
      "CurrentDistributionMethodId": 1,
      "CustomerCurrencyCode": "EUR",
      "CustomerCurrencySymbol": "€",
      "DelCoClientNumber": "014",
      "DelCoId": 14,
      "DelCoOpCoId": "014",
      "DocumentType": "Invoice",
      "DocumentTypeId": 1,
      "DueDate": "20190707",
      "GrossAmountCustomerCurrency": 22.85,
      "GrossAmountTransactionCurrency": 22.85,
      "InvoiceDate": "20190630",
      "InvoicedBy": "euroShell Deutschland GmbH & Co. KG",
      "InvoicedOnBehalfOf": "Germany",
      "InvoiceId": 4013059,
      "InvoiceNumber": "6402009004",
      "IsInternational": false,
      "IsNational": true,
      "NetAmountCustomerCurrency": 19.2,
      "NetAmountTransactionCurrency": 19.2,
      "PayerId": 164825,
      "PayerNumber": "DE26688478",
      "PaymentTerms": "7 days after invoice",
      "PaymentTermsId": 9,
      "ReplacementInvoiceId": null,
      "ReversalInvoiceId": null,
      "Status": "Paid",
      "SummaryDocumentBillingType": "Standard Invoice",
      "SummaryDocumentBillingTypeId": 0,
      "SummaryDocumentDate": "20190630",
      "SummaryDocumentDDAmount": 22.85,
      "SummaryDocumentDueDate": "20190707",
      "SummaryDocumentId": 1616729,
      "SummaryDocumentIsFullyPaid": true,
      "SummaryDocumentNumber": "1283899/289261063/2019",
      "SummaryDocumentPaidAmount": 22.85,
      "SummaryDocumentSoAReferenceNumber": "2000745709",
      "SummaryDocumentStatementOfAccountId": 2000745709,
      "TransactionCurrencyCode": "EUR",
      "TransactionCurrencySymbol": "€",
      "Type": "Original",
      "TypeId": 1,
      "VATAmountCustomerCurrency": 3.65,
      "VATAmountTransactionCurrency": 3.65,
      "VATCountry": "Germany",
      "VATCountryId": 9,
      "VATCountryISOCode": "DE",
      "VATCountryOpCoId": "014"
    }
  ],
  "Page": 1,
  "PageSize": 50,
  "TotalRecords": 1,
  "TotalPages": 1
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Invoice Summary

This API returns the high level summary of invoices that match the  given search criteria. The same search criteria as the endpoint `/v1/invoice/search` is supported with the exception of paging related parameters.

#### Supported operations

* Search invoices by account
* Search invoices by invoice type or invoice status
* Search invoices by invoice id or number
* Search invoices by invoiced country
* Search invoices including einvoices
* Search invoices by summary document
* Search invoices by statement of account
* Search invoices by fixed and custom date periods

```ts
async invoiceSummary(
  requestId: string,
  body?: InvoiceSummaryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceSummaryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`InvoiceSummaryRequest \| undefined`](../../doc/models/invoice-summary-request.md) | Body, Optional | Invoice Search RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvoiceSummaryResponse`](../../doc/models/invoice-summary-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: InvoiceSummaryRequest = {
  filters: {
    colCoId: 14,
    payerId: 78,
    payerNumber: 'DE26688478',
    invoiceId: 4013059,
    invoiceNumber: '0123456789',
    fromDate: '20170830',
    toDate: '20171031',
    invoiceDate: '20171031',
    summaryDocumentId: 1616729,
    summaryDocumentNumber: '1283899/289261063/2019',
    statementOfAccountId: 'DE26702892',
    soAReferenceNumber: '1283899',
    period: 1,
    invoiceStatus: 'Due',
    invoicedOnBehalfOf: 'DE',
    includeEInvoiceDetails: false,
    type: 'Original',
  },
};

try {
  const { result, ...httpResponse } = await invoiceController.invoiceSummary(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "a0a1596f-b242-4672-b513-66c5e5554195",
  "Status": "SUCCESS",
  "Data": [
    {
      "TotalInvoices": 1,
      "TotalGrossAmountCustomerCurrency": 22.85,
      "TotalNetAmountCustomerCurrency": 19.2,
      "TotalVATAmountCustomerCurrency": 3.65,
      "CustomerCurrencyCode": "EUR",
      "CustomerCurrencySymbol": "€"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Statement of Account

This API allows querying the details of the latest statement of account (SOA) generated for a given Payer.

The endpoint supports querying SOA documents by various input parameters specified in the request body.

#### Supported operations

* Search invoice SOA by payer and account
* Search invoice SOA including monthly trend (last 13 months invocie trend summary)
* Search invoice SOA including past SOAs
* Search invoice SOA including due/overdue documents
* Search invoice SOA including invoice summary

```ts
async statementOfAccount(
  requestId: string,
  body?: StatementOfAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementOfAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`StatementOfAccountRequest \| undefined`](../../doc/models/statement-of-account-request.md) | Body, Optional | StatementOfAccount RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementOfAccountResponse`](../../doc/models/statement-of-account-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: StatementOfAccountRequest = {
  filters: {
    colCoCode: 32,
    payerId: 308,
    payerNumber: 'CZ56891709',
    includeMonthlyInvoiceTrend: true,
    includePastStatementOfAccounts: true,
    dueOrOverDueSOADocumentsOnly: false,
    numberOfSOADocuments: 10,
    includeAccountInvoicesSummary: true,
  },
};

try {
  const { result, ...httpResponse } = await invoiceController.statementOfAccount(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "5acba53b-3ce7-4f4b-ab59-1db09399aa6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "LastStatementOfAccount": {
        "AmountDue": 123699.71,
        "AmountNotOverdue": 136604.83,
        "AmountOverdue": 926469.11,
        "CreditLimit": 7000000,
        "CreditLimitCurrencyCode": "CZK",
        "CreditLimitCurrencySymbol": "Kč",
        "CreditLimitInCustomerCurrency": 286826.469986,
        "CurrencyCode": "EUR",
        "CurrencySymbol": "€",
        "LastPaymentCurrencyCode": "EUR",
        "LastPaymentCurrencySymbol": "€",
        "LastPaymentDate": "20220209",
        "LastPaymentValue": 17918.98,
        "OutstandingBalance": 1186773.65,
        "PayerId": 308,
        "PayerNumber": "CZ56891709",
        "PaymentDueDate": "20230608",
        "PaymentMethod": "Incoming - Bank Transfer",
        "PaymentMethodId": 4,
        "PaymentTerms": "30 days after Invoice",
        "PaymentTermsId": 4,
        "SoAReferenceNumber": "2003923319",
        "StatementDate": "20230509",
        "StatementOfAccountId": 2003923319,
        "TotalBillingDocuments": 6,
        "TotalSummaryBillingDocuments": 1,
        "UnallocatedPayment": 0
      },
      "MonthlyInvoiceTrend": null,
      "PastStatementOfAccounts": [
        {
          "AmountDue": 136604.83,
          "AmountNotOverdue": 130344.09,
          "AmountOverdue": 796109.41,
          "AmountOverdueFromUnallocated": 0,
          "AmountPaid": 0,
          "BalanceOnThisStatement": 5866.1,
          "BillingCurrencyCode": "EUR",
          "BillingCurrencySymbol": "€",
          "CreditLimit": 7000000,
          "CreditLimitCurrencyCode": "CZK",
          "CreditLimitCurrencySymbol": "Kč",
          "CreditLimitInCustomerCurrency": 286826.4699857,
          "CurrencyCode": "EUR",
          "CurrencySymbol": "€",
          "FullyPaid": false,
          "LastPaymentCurrencyCode": "EUR",
          "LastPaymentCurrencySymbol": "€",
          "LastPaymentDate": "20220209",
          "LastPaymentValue": 17918.98,
          "OutstandingBalance": 1063058.33,
          "PayerId": 308,
          "PayerNumber": "CZ56891709",
          "PaymentDueDate": "20230511",
          "SoAReferenceNumber": "2003920583",
          "StatementDate": "20230411",
          "StatementOfAccountId": 2003920583,
          "TotalBillingDocuments": 3,
          "TotalNetAmountBillingCurrency": 4847.94,
          "TotalSummaryBillingDocuments": 1,
          "TotalVATAmountBillingCurrency": 1018.16,
          "UnallocatedPayment": 0,
          "LocalCurrencyCode": "EUR",
          "LocalCurrencySymbol": "€",
          "LocalCurrencyExchangeRate": 24.405
        }
      ],
      "PaymentsSinceLastSOA": null,
      "InvoicesSummaries": null
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Dates

- This API will return the list of Invoice Dates and Numbers for the given date range. If the dates are not provided then it will fetch the data for past 13 months.

```ts
async dates(
  requestId: string,
  body?: InvoiceDatesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceDatesResponseData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`InvoiceDatesRequest \| undefined`](../../doc/models/invoice-dates-request.md) | Body, Optional | StatementOfAccount RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvoiceDatesResponseData`](../../doc/models/invoice-dates-response-data.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: InvoiceDatesRequest = {
  filters: {
    colCoCode: 0,
    colCoId: 0,
    payerId: 0,
    payerNumber: 'string',
    accounts: [
      {
        accountId: 3453,
        accountNumber: 'GB000000124',
      }
    ],
  },
};

try {
  const { result, ...httpResponse } = await invoiceController.dates(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "a0a1596f-b242-4672-b513-66c5e5554195",
  "Status": "SUCCESS",
  "Data": [
    {
      "InvoiceNumbers": [
        "6402009004"
      ],
      "InvoiceDates": [
        "20170101"
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Search Statement of Account

- This API will allow querying of SOA from different systems

```ts
async searchStatementOfAccount(
  requestId: string,
  body?: SearchStatementOfAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchStatementOfAccountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`SearchStatementOfAccountRequest \| undefined`](../../doc/models/search-statement-of-account-request.md) | Body, Optional | searchstatementofaccount RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchStatementOfAccountResponse`](../../doc/models/search-statement-of-account-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: SearchStatementOfAccountRequest = {
  filters: {
    colCoCode: 18,
    payerNumber: 'NL99781417',
    invoiceNumber: '0123456789',
    fromDate: '2022/05/04',
    toDate: '2022/05/10',
    period: 1,
    invoiceDate: '20170830',
    invoiceStatus: [
      'Due'
    ],
    sortBy: [
      1
    ],
  },
  page: 1,
  pageSize: 10,
};

try {
  const { result, ...httpResponse } = await invoiceController.searchStatementOfAccount(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "a0a1596f-b242-4672-b513-66c5e5554195",
  "Status": "SUCCESS",
  "Data": [
    {
      "StatementOfAccountId": 2001581712,
      "SoAReferenceNumber": "2001581712",
      "DocumentReferenceNumber": null,
      "StatementDate": "20220505",
      "PayerId": 17150,
      "PayerNumber": "NL99781417",
      "AmountDue": 0,
      "AmountOverdue": 197046.47,
      "CurrencyCode": "EUR",
      "CurrencySymbol": "€",
      "DueDate": "20220604",
      "InvoicedOnBehalfOf": "Netherlands",
      "Status": "OverDue",
      "GrossAmountCustomerCurrency": 0
    }
  ],
  "Page": 1,
  "TotalRecords": 62,
  "TotalPages": 7,
  "PageSize": 10
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Search Documents

- This API allows querying the details of all invoices successfully uploaded to the Worldline invoice repository and file reference numbers for downloading.

```ts
async searchDocuments(
  requestId: string,
  body?: SearchDocumentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchDocumentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`SearchDocumentsRequest \| undefined`](../../doc/models/search-documents-request.md) | Body, Optional | SearchDocuments RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchDocumentsResponse`](../../doc/models/search-documents-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: SearchDocumentsRequest = {
  filters: {
    payerNumber: 'DE00000096',
    colCoCode: 14,
    accountNumber: 'DE00000096',
    accountNumberList: [
      'DE00000123',
      'DE00000225'
    ],
    invoiceNumber: '1234567',
    invoiceNumberList: [
      '6400013693',
      '9421000010'
    ],
    invoiceStatus: 'NEW',
    issuingDateFrom: '2023/05/01',
    issuingDateTo: '2023/06/30',
    dueDateFrom: '2023/05/04',
    dueDateTo: '2023/06/30',
    grossAmount: '1000',
    grossAmountOperator: 'LT',
    documentType: 'SOA',
    vATIssuerCountry: 'DE',
    sortyBy: [
      'InvoiceNumber ASC',
      'InvoiceDate DESC'
    ],
  },
  page: '1',
  pageSize: '50',
};

try {
  const { result, ...httpResponse } = await invoiceController.searchDocuments(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "a8b81c1d-f44a-4365-8113-8958061c0b7e",
  "Status": "SUCCESS",
  "Data": [
    {
      "DocumentReference": 311161,
      "InvoiceNumber": "6400013693",
      "PayerName": "DE00000096",
      "AccountNumber": "DE00000096",
      "AccountName": "DE00000096",
      "DocumentType": "NAT",
      "GrossAmount": -3141.93,
      "NetAmount": 0,
      "TaxAmount": 0,
      "CurrencyCode": "EUR",
      "InvoiceStatus": "NEW",
      "InvoiceDate": "2023/01/31",
      "DueDate": "2023/02/07",
      "VATCountryISOCode": "DE"
    }
  ],
  "TotalRecords": 2,
  "TotalRecordsOnPage": 2,
  "IsFirstPage": true,
  "IsLastPage": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Eid Search

- This API provides the functionality needed for the screen “EID FILES” in the web interface. It allows retrieving a list of EIDs based on search criteria.

```ts
async eidSearch(
  requestId: string,
  body?: EIDSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EIDDocumentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`EIDSearchRequest \| undefined`](../../doc/models/eid-search-request.md) | Body, Optional | EIDSearch RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EIDDocumentResponse`](../../doc/models/eid-document-response.md)

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: EIDSearchRequest = {
  filters: {
    colCoCode: 32,
    accountGroupCountry: 32,
    accountGroupId: [
      '122'
    ],
    fromDate: '2017/08/30',
    toDate: '2017/10/31',
    invoiceType: 'NAT',
    invoiceStatus: 'NEW',
    sortBy: [
      'DocumentDate ASC'
    ],
  },
  page: 1,
  pageSize: 10,
};

try {
  const { result, ...httpResponse } = await invoiceController.eidSearch(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "RequestId": "a0a1596f-b242-4672-b513-66c5e5554195",
  "Status": "SUCCESS",
  "Data": [
    {
      "DocumentId": 15029,
      "AccountGroupId": "122",
      "AccountGroupName": "EID-122",
      "DocumentType": "INT",
      "DocumentFormat": "FLAT",
      "DocumentDate": "2022/12/28",
      "NumberOfInvoices": 1,
      "FileSize": 1624,
      "DocumentStatus": "DOWNLOADED",
      "DocumentName": "032_122_INT_28122022.TXT"
    }
  ],
  "PageSize": 1,
  "Page": 1,
  "TotalPages": 12,
  "TotalRecords": 120,
  "IsFirstPage": true,
  "IsLastPage": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Download

- This API downloads Invoice Documents i.e., ZIP file with Invoice PDF file and Proofing Elements in XML format from invoice repository.

```ts
async download(
  requestId: string,
  body?: InvoiceDownloadRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`InvoiceDownloadRequest \| undefined`](../../doc/models/invoice-download-request.md) | Body, Optional | Invoice Download RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: InvoiceDownloadRequest = {
  filters: {
    colCoCode: 18,
    payerNumber: 'NL99781417',
    accountNumber: [
      'NL99781420'
    ],
    documentReference: [
      1234567890
    ],
    invoiceOrSOANumber: '2234556',
  },
};

try {
  const { result, ...httpResponse } = await invoiceController.download(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Eid Download

- This service allows downloading one or more EID documents and the corresponding signature material (where applicable) in one single request
- The number of EID that can be downloaded at once is limited to 100 documents.

```ts
async eidDownload(
  requestId: string,
  body?: EIDDownloadRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`EIDDownloadRequest \| undefined`](../../doc/models/eid-download-request.md) | Body, Optional | EIDInvoice Download RequestBody |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const requestId = '2b0cbe11-f109-4c43-9201-49af0370df1c';

const body: EIDDownloadRequest = {
  filters: {
    colCoCode: 18,
    eIDList: [
      '1710187',
      '1734566'
    ],
    accountGroupCountry: 18,
    accountGroupIdList: [
      '26685402'
    ],
  },
};

try {
  const { result, ...httpResponse } = await invoiceController.eidDownload(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |

