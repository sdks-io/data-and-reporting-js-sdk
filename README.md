
# Getting Started with Shell Data & Reporting APIs

## Introduction

The Shell Card Transaction and Invoice API is part of the Data and Reporting product suite, designed to provide secure and flexible access to transaction and invoice data related to Shell Cards.

### Authentication

- OAuth 2.0 Authentication.

### Architecture

- RESTful API design.
- All endpoints use the `POST` HTTP method for all operations including retrieval, creation, update, and deletion of resources.
- Requests and responses are encoded in JSON format.
- Standard HTTP status codes are used for response handling.

### Platform

- All resources are managed within the **Shell Card Platform**, which integrates multiple internal Shell systems for resource management.

### Features

- Flexible search parameters supported in the request body for data retrieval.
- Designed for integration with enterprise systems requiring Shell Card transaction and invoice data.

### Use Cases

- Retrieve detailed transaction history for Shell Cards.
- Access invoice summaries and line-item details.
- Integrate Shell Card financial data into internal reporting tools.

Go to the Shell Developer Portal: [https://developer.shell.com](https://developer.shell.com)

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install data-and-reporting-sdk@3.0.0
```

For additional package details, see the [Npm page for the data-and-reporting-sdk@3.0.0 npm](https://www.npmjs.com/package/data-and-reporting-sdk/v/3.0.0).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/README.md#environments) | The API environment. <br> **Default: `Environment.SIT`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment } from 'data-and-reporting-sdk';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.SIT,
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'data-and-reporting-sdk';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'data-and-reporting-sdk';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| SIT | **Default** |
| Production | - |

## Authorization

This API uses the following authentication schemes.

* [`BearerToken (OAuth 2 Client Credentials Grant)`](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Customer](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/controllers/customer.md)
* [Transaction](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/controllers/transaction.md)
* [Invoice](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/controllers/invoice.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/retry-configuration.md)
* [ProxySettings](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/proxy-settings.md)
* [Configuration-Based Client Initialization](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/environment-based-client-initialization.md)

### HTTP

* [HttpRequest](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/data-and-reporting-js-sdk/tree/3.0.0/doc/api-error.md)

