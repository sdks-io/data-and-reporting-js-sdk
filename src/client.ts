/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { createAuthProviderFromConfig } from './authProvider';
import { BearerTokenManager } from './bearerTokenManager';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
import { HttpClient } from './clientAdapter';

const USER_AGENT = 'APIMATIC 3.0';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  public bearerTokenManager?: BearerTokenManager;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._requestBuilderFactory = createRequestHandlerFactory(
      (server) => getBaseUri(server, this._config),
      createAuthProviderFromConfig(this._config, () => this.bearerTokenManager),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [withErrorHandlers, withUserAgent, withAuthenticationByDefault],
      this._retryConfig
    );
    if (this._config.bearerTokenCredentials) {
      this.bearerTokenManager = new BearerTokenManager(
        this._config.bearerTokenCredentials,
        this
      );
    }
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(
  server: Server = 'OAuth Server',
  config: Configuration
): string {
  if (config.environment === Environment.SIT) {
    if (server === 'OAuth Server') {
      return 'https://api-test.shell.com';
    }
    if (server === 'Shell') {
      return 'https://api-test.shell.com/test';
    }
  }
  if (config.environment === Environment.Production) {
    if (server === 'OAuth Server') {
      return 'https://api.shell.com';
    }
    if (server === 'Shell') {
      return 'https://api.shell.com';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach((c) => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(rb: SdkRequestBuilder) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate([{ basicAuth: true }, { bearerToken: true }]);
}
