/**
 * Shell Data & Reporting APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { SiteLocation, siteLocationSchema } from './siteLocation';

export interface MultiPricedTransactionResponseTransactionsItems {
  /**
   * TransactionType is the type of transaction.
   * Example: SalesItem /FeeItem
   */
  type?: string | null;
  /**
   * Unique Card Id in GFN
   * Example: 275549
   */
  cardId?: number | null;
  /**
   * Card PAN
   * Mask PAN if enabled at Microservices configuration (Mask all digits except the Last 6 digits of the PAN)
   * Example: 7002051006629890645
   */
  cardPAN?: string | null;
  /**
   * Card Expiry Date
   * Format: yyyyMMdd
   */
  cardExpiry?: string | null;
  /**
   * Local Transaction Date of where the transaction took place
   * Format: yyyyMMdd
   * Note: For a fee item, this parameter will be populated with fee date.
   */
  transactionDate?: string | null;
  /**
   * Local Transaction Time of where the transaction took place
   * Format: HH:mm:ss (24 hours format)
   * Note: For a fee item, this parameter will be populated with fee date.
   */
  transactionTime?: string | null;
  /**
   * UTC Offset extracted from Sales Date time.
   * Note: This may not be accurate for all TPN transactions
   * Format: +/-HH:mm:ss (24 hours format)
   */
  uTCOffset?: string | null;
  /**
   * Fleet Id Input as entered by the drivers at the time of transaction
   * Example: XYZ1234
   * Note: - The value could be null/blank for fees item.
   */
  fleetIdInput?: string | null;
  /**
   * Odometer Input as entered by the drivers at the time of transaction
   * Example: 12345
   * Note: - The value could be null/blank for fees item.
   */
  odometerInput?: number | null;
  /**
   * Driver Name embossed on the card
   * Example:  ANDREW GILBERRY
   */
  driverName?: string | null;
  /** Vehicle Registration Number embossed on the card */
  vehicleRegistration?: string | null;
  /** ISO currency code */
  invoiceCurrencyCode?: string | null;
  /**
   * Currency symbol of the Invoice Currency Code
   * Example: £, $
   */
  invoiceCurrencySymbol?: string | null;
  /**
   * ISO currency code
   * Example: GBP
   */
  transactionCurrencyCode?: string | null;
  /**
   * Currency symbol of the Transaction Currency Code
   * Example: £, $
   */
  transactionCurrencySymbol?: string | null;
  /** Net Amount */
  transactionNetAmount?: number | null;
  /** Tax Amount */
  transactionTax?: number | null;
  /** Gross Amount */
  transactionGrossAmount?: number | null;
  /**
   * Invoiced Net Amount
   * Note: For a fee item, this parameter will be populated with fee InvoiceNetAmount.
   */
  invoiceNetAmount?: number | null;
  /** Invoiced Tax Amount */
  invoiceTax?: number | null;
  /**
   * Invoice Gross Amount
   * Note: For a fee item, this parameter will be populated with fee InvoiceGrossAmount.
   */
  invoiceGrossAmount?: number | null;
  /**
   * Country of Purchase
   * Example: France, Germany
   * Note: - The value could be null/blank for fees item.
   */
  purchasedInCountry?: string | null;
  /** Account Id */
  accountId?: number | null;
  /** Account Number */
  accountNumber?: string | null;
  /** Account Name */
  accountName?: string | null;
  /** Account Short Name */
  accountShortName?: string | null;
  /** Quantity/Volume */
  quantity?: number | null;
  /** True if the product on transaction is listed as a fuel product else return false */
  fuelProduct?: boolean | null;
  /**
   * Product Unit Price in transaction currency
   * Note: - The value could be null/blank for fees item
   */
  unitPriceInTransactionCurrency?: number | null;
  /**
   * Product Unit Price in invoice currency
   * Note: - The value could be null/blank for fees item
   */
  unitPriceInInvoiceCurrency?: number | null;
  /**
   * Unit Discount in transaction currency
   * Note: - The value could be null/blank for fees item
   */
  unitDiscountTransactionCurrency?: number | null;
  /**
   * Unit Discount in invoice currency
   * Note: - The value could be null/blank for fees item.
   */
  unitDiscountInvoiceCurrency?: number | null;
  /** True when the transaction is already invoice, else return False */
  isInvoiced?: boolean | null;
  /**
   * Invoice Number if invoiced
   * Example:
   * S04500493
   * S04478304
   * S04490319
   */
  invoiceNumber?: string | null;
  /**
   * Invoice Date
   * Format: yyyyMMdd HH:mm:ss
   */
  invoiceDate?: string | null;
  /**
   * Site Code
   * Example:
   * 050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755
   */
  siteCode?: string | null;
  /**
   * Site Name
   * Example:
   * 050001 -    CHARNOCK RICHARD NTHBOUND MWSA 0755
   */
  siteName?: string | null;
  /**
   * Site Country
   * Example: France, Germany
   */
  siteCountry?: string | null;
  location?: SiteLocation[];
  /** Card Group Name */
  cardGroupName?: string | null;
  /** ReceiptNumber */
  receiptNumber?: string | null;
  /**
   * Product Code
   * 10    TMF Charges
   * 11    Tunnel/Bridges
   * 12    Motorway toll
   */
  productCode?: string | null;
  /**
   * Product Name
   * Example:
   * Unleaded - High octane
   * Unleaded - Medium octane
   * Unleaded - Low octane
   * Unleaded Environmental
   */
  productName?: string | null;
  /**
   * Product Group Id
   * Example:
   * 1    Parent Product Group
   * 2    All Fuels
   * 3    Motor gasoline
   * 4    2 stroke
   * 5    Autogas
   */
  productGroupId?: number | null;
  /**
   * Product Group Name
   * Example:
   * 1    Parent Product Group
   * 2    All Fuels
   * 3    Motor gasoline
   * 4    2 stroke
   * 5    Autogas
   */
  productGroupName?: string | null;
  /**
   * DelCo Exchange Rate (Site exchange rate)
   * Note: - The value could be null/blank for fees item.
   */
  delCoExchangeRate?: number | null;
  /** ColCo Exchange Rate (Customer exchange rate) */
  colCoExchangeRate?: number | null;
  /**
   * True when transaction occurred at a Shell site else return False
   * Note: - The value could be null/blank for fees item.
   */
  isShellSite?: boolean | null;
  /**
   * Network  (Shell PH, ESSO, etc.,)
   * 100013    STEINDORFER
   * 100015    S.A. BELGIAN SHELL N.V.
   * 100016    ESSO BE
   * Note: - The value could be null/blank for fees item.
   */
  network?: string | null;
  /**
   * Site Group Id
   * Example: 202
   * Note: - The value could be null/blank for fees item.
   */
  siteGroupId?: number | null;
  /**
   * Site GroupName
   * Example: CZ 9100 ECONOMY NETWORK
   * Note: - The value could be null/blank for fees item.
   */
  siteGroupName?: string | null;
  /**
   * Transaction Posting Date
   * Format: yyyyMMdd HHmmss
   */
  postingDate?: string | null;
  /**
   * First digits of the Card PAN
   * 7002 = Fleet
   */
  issuerCode?: string | null;
  /**
   * ISO code of the country where the transaction took place
   * Example: “NL”
   * Note: - The value could be null/blank for fees item.
   */
  purchasedInCountryCode?: string | null;
  /**
   * ISO code of the Customer Country
   * Example: NL
   */
  customerCountryCode?: string | null;
  /**
   * Name of the Customer Country
   * Example: Netherlands
   */
  customerCountry?: string | null;
  /**
   * Release code, 7th Digit of the Card PAN
   * Example: 8 for 7021882
   */
  releaseCode?: string | null;
  /** Card group ID */
  cardGroupId?: string | null;
  /** 3 digits, Card sequence number and Check digit (Digit 16,17 and 18 on the card pan) */
  cardSequenceNumber?: string | null;
  /** Check digit, Last number of the card pan */
  checkDigit?: string | null;
  /** FleetId/CRN description in Card Platform configured at the account level */
  fleetIDDescription?: string | null;
  /**
   * VAT Percentage
   * 0.20 for 20%
   * Note: This parameter will be populated in the response for both SalesItem and FeeItem
   */
  vATRate?: number | null;
  /**
   * VAT Category Id-Description
   * 1-Zero Rated
   */
  vATCategory?: string | null;
  /**
   * VAT Country
   * Example: Netherlands
   */
  vATCountry?: string | null;
  /**
   * Effective Discount (excluding VAT, in transaction currency) 4 digits
   * Example: 0.0000
   */
  effectiveDiscountInTrxCurrency?: number | null;
  /**
   * Transaction Type
   * Example: Purchase when Card is Present else Blank
   * Note: - The value could be null/blank for fees item.
   */
  transactionType?: string | null;
  /**
   * Pin Indicator (Indicates whether PIN used or not used at the time of transaction)
   * Example: “PIN Used'” or “No PIN” or “Unknown”
   * Note: - The value could be null/blank for fees item
   */
  pINIndicator?: string | null;
  /**
   * Is VAT Applicable for this transaction
   * Example: “Y” or “N”
   */
  vATApplicable?: string | null;
  /**
   * Net Invoice Indicator, Will the customer receive an invoice without VAT?
   * Example: “Y” or “N”
   * Note: - The value could be null/blank for fees item.
   */
  netInvoiceIndicator?: string | null;
  /**
   * Customer currency code
   * Example: GBP
   */
  customerCurrencyCode?: string | null;
  /** Customer currency Symbol */
  customerCurrencySymbol?: string | null;
  /**
   * Effective Unit Discount (excluding VAT in Customer currency)
   * Note: - The value could be null/blank for fees item.
   */
  effectiveUnitDiscountInCustomerCurrency?: number | null;
  /**
   * Effective Discount (excluding VAT in Customer currency)
   * Note: - The value could be null/blank for fees item.
   */
  effectiveDiscountInCustomerCurrency?: number | null;
  /** VAT on Net Amount (in Customer currency) */
  vATonNetAmountInCustomerCurrency?: number | null;
  /**
   * Discount Type
   * Example: 1-None
   * 2-Pence per unit
   */
  discountType?: string | null;
  /**
   * Transaction status "U" or "I"
   * “U” stands for Uninvoiced
   * “I” stands for Invoiced
   */
  transactionStatus?: string | null;
  /**
   * Unique Sales Item Identifier
   * Example: 18315958002
   * Note: For a fee item, this parameter will be populated with SalesItemId.
   */
  salesItemId?: number | null;
  /** Payer Group applicable for the Large Customer NL+8 digit code */
  payerGroup?: string | null;
  /** Payer Group Name */
  payerGroupName?: string | null;
  /**
   * Refund Flag “N” for Not Refunded and “Y” for Refunded.
   * Note: - The value could be null/blank for fees item.
   */
  refundFlag?: string | null;
  /** Shows Sales Item Id of the original item that was refunded */
  originalSalesItemId?: string | null;
  /**
   * Delco Name
   * Example: SHELL NEDERLAND VERKOOPMAATSCHAPPIJ BV
   */
  delcoName?: string | null;
  /**
   * Delco Code
   * 014, 018, etc.,
   */
  delcoCode?: string | null;
  /**
   * Payer number (Country code+8 digits)
   * Example: NL10042616
   */
  payerNumber?: string | null;
  /**
   * Payer name
   * Example: V.M. LE COMTE
   */
  payerName?: string | null;
  /**
   * Year/Month of the Card Expiry captured on the transaction
   * Example: 1901
   */
  cardExpiryPeriod?: string | null;
  /**
   * Authorisation code of the transaction
   * Example: 011256
   * Note: - The value could be null/blank for fees item.
   */
  authorisationCode?: string | null;
  /**
   * Unique id of the transaction that may include one or more salesitems
   * Example: io9KVXk1UkW57XWKyeaHHg
   * Note: - The value could be null/blank for fees item.
   */
  transactionId?: string | null;
  /**
   * Transaction line item number
   * Example: 1
   * Note: - The value could be null/blank for fees item.
   */
  transactionLine?: string | null;
  /**
   * Is the Sales Item allowed for clearing? i.e. not written off
   * Example: “Y” or “N”
   * Note: - The value could be null/blank for fees item.
   */
  allowClearing?: string | null;
  /**
   * CRM Case number if the sales item is in dispute.
   * Note: - The value could be null/blank for fees item.
   */
  cRMNumber?: string | null;
  /**
   * Sales Item Dispute Status if disputed
   * 0    No Dispute
   * 1    In Dispute
   * 2    Re-Instated
   * 3    Adjusted
   * 4    Written Off by Colco
   * 5    Written Off by Delco
   * 6    Charged Back to Site
   */
  disputeStatus?: string | null;
  /**
   * Unit discount in customer currency.
   * Example: 28.279000
   */
  rebateRate?: number | null;
  /**
   * Exchange rate from transaction currency to customer currency.
   * Example: 1
   */
  delCoToColCoExchangeRate?: number | null;
  /**
   * Net euro amount.
   * Example: 37.93
   * Note: - The value could be null/blank for fees item.
   */
  netEuroAmount?: number | null;
  /**
   * Euro rebate amount.
   * Example: 0
   * Note: - The value could be null/blank for fees item.
   */
  euroRebateAmount?: number | null;
  /**
   * Euro VAT amount.
   * Example: 7.96
   * Note: - The value could be null/blank for fees item.
   */
  euroVATAmount?: number | null;
  /** Parent customer number */
  parentCustomerNumber?: string | null;
  /** Parent customer name. */
  parentCustomerName?: string | null;
  /** Parent customer id. */
  parentCustomerId?: number | null;
  /**
   * Incoming Site Number
   * Example: 100021
   * Note: - The value could be null/blank for fees item.
   */
  incomingSiteNumber?: string | null;
  /**
   * Incoming Site Description
   * Example: HN3 INTI_02-82.02
   * Note: - The value could be null/blank for fees item.
   */
  incomingSiteDescription?: string | null;
  /**
   * Incoming Currency Code
   * Example: GBP
   * Note: - The value could be null/blank for fees item.
   */
  incomingCurrencyCode?: string | null;
  /**
   * Incoming Product Code
   * Example: 30
   */
  incomingProductCode?: string | null;
  /**
   * Credit Debit Code
   * Example: “D” or “C”
   * The value could be null/blank for fees item.
   */
  creditDebitCode?: string | null;
  /**
   * Correction Flag
   * Example: “Y” or “N”
   * Note: - The value could be null/blank for fees item.
   */
  correctionFlag?: string | null;
  /** Additional details */
  additional1?: string | null;
  /** Additional details */
  additional2?: string | null;
  /** Additional details */
  additional3?: string | null;
  /** Additional details */
  additional4?: string | null;
  /**
   * Rebate on Net Amount in Customer Currency
   * Example: -0.735000000000
   * Note: - The value could be null/blank for fees item.
   */
  rebateonNetAmountInCustomerCurrency?: number | null;
  /**
   * Rebate on Net Amount in Transaction Currency
   * Example: -0.735000000000
   * Note: - The value could be null/blank for fees item.
   */
  rebateonNetAmountInTransactionCurrency?: number | null;
  /**
   * Network Code
   * Example: AVEE PTUAZONW CUBFAO COSFS
   * Note: - The value could be null/blank for fees item.
   */
  networkCode?: string | null;
  /** Transaction Identifier */
  trnIdentifier?: string | null;
  /** Card Type */
  cardType?: string | null;
  /**
   * Delco List Price Unit Net
   * Example: 30.500000
   * Note: - The value could be null/blank for fees item
   */
  delcoListPriceUnitNet?: number | null;
  /**
   * Retail Net Price (or pump net price) per Unit in transaction currency
   * Example: 1.921000
   * Note: - The value could be null/blank for fees item
   */
  delcoRetailPriceUnitNet?: number | null;
  /**
   * Retail gross price (or pump gross price) per unit in transaction currency
   * Note: - The value could be null/blank for fees item
   */
  delcoRetailPriceUnitGross?: number | null;
  /**
   * Retail net price (or net pump price) in transaction currency
   * Note: - The value could be null/blank for fees item
   */
  delcoRetailValueTotalNet?: number | null;
  /**
   * Retail gross price (or gross pump price) in transaction currency
   * Note: - The value could be null/blank for fees item
   */
  delcoRetailValueTotalGross?: number | null;
  /**
   * Retail gross price (or pump gross price) per unit in customer currency
   * Note: - The value could be null/blank for fees item
   */
  customerRetailPriceUnitGross?: number | null;
  /**
   * Retail gross price (or gross pump price) in customer currency
   * Note: - The value could be null/blank for fees item
   */
  customerRetailValueTotalGross?: number | null;
  /**
   * Retail net price (or net pump price) in customer currency
   * Note: - The value could be null/blank for fees item
   */
  customerRetailValueTotalNet?: number | null;
  /**
   * Transaction Type Description
   * Note: - The value could be null/blank for fees item
   */
  transactionTypeDescription?: string | null;
}

export const multiPricedTransactionResponseTransactionsItemsSchema: Schema<MultiPricedTransactionResponseTransactionsItems> = object(
  {
    type: ['Type', optional(nullable(string()))],
    cardId: ['CardId', optional(nullable(number()))],
    cardPAN: ['CardPAN', optional(nullable(string()))],
    cardExpiry: ['CardExpiry', optional(nullable(string()))],
    transactionDate: ['TransactionDate', optional(nullable(string()))],
    transactionTime: ['TransactionTime', optional(nullable(string()))],
    uTCOffset: ['UTCOffset', optional(nullable(string()))],
    fleetIdInput: ['FleetIdInput', optional(nullable(string()))],
    odometerInput: ['OdometerInput', optional(nullable(number()))],
    driverName: ['DriverName', optional(nullable(string()))],
    vehicleRegistration: ['VehicleRegistration', optional(nullable(string()))],
    invoiceCurrencyCode: ['InvoiceCurrencyCode', optional(nullable(string()))],
    invoiceCurrencySymbol: [
      'InvoiceCurrencySymbol',
      optional(nullable(string())),
    ],
    transactionCurrencyCode: [
      'TransactionCurrencyCode',
      optional(nullable(string())),
    ],
    transactionCurrencySymbol: [
      'TransactionCurrencySymbol',
      optional(nullable(string())),
    ],
    transactionNetAmount: [
      'TransactionNetAmount',
      optional(nullable(number())),
    ],
    transactionTax: ['TransactionTax', optional(nullable(number()))],
    transactionGrossAmount: [
      'TransactionGrossAmount',
      optional(nullable(number())),
    ],
    invoiceNetAmount: ['InvoiceNetAmount', optional(nullable(number()))],
    invoiceTax: ['InvoiceTax', optional(nullable(number()))],
    invoiceGrossAmount: ['InvoiceGrossAmount', optional(nullable(number()))],
    purchasedInCountry: ['PurchasedInCountry', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountName: ['AccountName', optional(nullable(string()))],
    accountShortName: ['AccountShortName', optional(nullable(string()))],
    quantity: ['Quantity', optional(nullable(number()))],
    fuelProduct: ['FuelProduct', optional(nullable(boolean()))],
    unitPriceInTransactionCurrency: [
      'UnitPriceInTransactionCurrency',
      optional(nullable(number())),
    ],
    unitPriceInInvoiceCurrency: [
      'UnitPriceInInvoiceCurrency',
      optional(nullable(number())),
    ],
    unitDiscountTransactionCurrency: [
      'UnitDiscountTransactionCurrency',
      optional(nullable(number())),
    ],
    unitDiscountInvoiceCurrency: [
      'UnitDiscountInvoiceCurrency',
      optional(nullable(number())),
    ],
    isInvoiced: ['IsInvoiced', optional(nullable(boolean()))],
    invoiceNumber: ['InvoiceNumber', optional(nullable(string()))],
    invoiceDate: ['InvoiceDate', optional(nullable(string()))],
    siteCode: ['SiteCode', optional(nullable(string()))],
    siteName: ['SiteName', optional(nullable(string()))],
    siteCountry: ['SiteCountry', optional(nullable(string()))],
    location: ['Location', optional(array(lazy(() => siteLocationSchema)))],
    cardGroupName: ['CardGroupName', optional(nullable(string()))],
    receiptNumber: ['ReceiptNumber', optional(nullable(string()))],
    productCode: ['ProductCode', optional(nullable(string()))],
    productName: ['ProductName', optional(nullable(string()))],
    productGroupId: ['ProductGroupId', optional(nullable(number()))],
    productGroupName: ['ProductGroupName', optional(nullable(string()))],
    delCoExchangeRate: ['DelCoExchangeRate', optional(nullable(number()))],
    colCoExchangeRate: ['ColCoExchangeRate', optional(nullable(number()))],
    isShellSite: ['IsShellSite', optional(nullable(boolean()))],
    network: ['Network', optional(nullable(string()))],
    siteGroupId: ['SiteGroupId', optional(nullable(number()))],
    siteGroupName: ['SiteGroupName', optional(nullable(string()))],
    postingDate: ['PostingDate', optional(nullable(string()))],
    issuerCode: ['IssuerCode', optional(nullable(string()))],
    purchasedInCountryCode: [
      'PurchasedInCountryCode',
      optional(nullable(string())),
    ],
    customerCountryCode: ['CustomerCountryCode', optional(nullable(string()))],
    customerCountry: ['CustomerCountry', optional(nullable(string()))],
    releaseCode: ['ReleaseCode', optional(nullable(string()))],
    cardGroupId: ['CardGroupId', optional(nullable(string()))],
    cardSequenceNumber: ['CardSequenceNumber', optional(nullable(string()))],
    checkDigit: ['CheckDigit', optional(nullable(string()))],
    fleetIDDescription: ['FleetIDDescription', optional(nullable(string()))],
    vATRate: ['VATRate', optional(nullable(number()))],
    vATCategory: ['VATCategory', optional(nullable(string()))],
    vATCountry: ['VATCountry', optional(nullable(string()))],
    effectiveDiscountInTrxCurrency: [
      'EffectiveDiscountInTrxCurrency',
      optional(nullable(number())),
    ],
    transactionType: ['TransactionType', optional(nullable(string()))],
    pINIndicator: ['PINIndicator', optional(nullable(string()))],
    vATApplicable: ['VATApplicable', optional(nullable(string()))],
    netInvoiceIndicator: ['NetInvoiceIndicator', optional(nullable(string()))],
    customerCurrencyCode: [
      'CustomerCurrencyCode',
      optional(nullable(string())),
    ],
    customerCurrencySymbol: [
      'CustomerCurrencySymbol',
      optional(nullable(string())),
    ],
    effectiveUnitDiscountInCustomerCurrency: [
      'EffectiveUnitDiscountInCustomerCurrency',
      optional(nullable(number())),
    ],
    effectiveDiscountInCustomerCurrency: [
      'EffectiveDiscountInCustomerCurrency',
      optional(nullable(number())),
    ],
    vATonNetAmountInCustomerCurrency: [
      'VATonNetAmountInCustomerCurrency',
      optional(nullable(number())),
    ],
    discountType: ['DiscountType', optional(nullable(string()))],
    transactionStatus: ['TransactionStatus', optional(nullable(string()))],
    salesItemId: ['SalesItemId', optional(nullable(number()))],
    payerGroup: ['PayerGroup', optional(nullable(string()))],
    payerGroupName: ['PayerGroupName', optional(nullable(string()))],
    refundFlag: ['RefundFlag', optional(nullable(string()))],
    originalSalesItemId: ['OriginalSalesItemId', optional(nullable(string()))],
    delcoName: ['DelcoName', optional(nullable(string()))],
    delcoCode: ['DelcoCode', optional(nullable(string()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
    payerName: ['PayerName', optional(nullable(string()))],
    cardExpiryPeriod: ['CardExpiryPeriod', optional(nullable(string()))],
    authorisationCode: ['AuthorisationCode', optional(nullable(string()))],
    transactionId: ['TransactionId', optional(nullable(string()))],
    transactionLine: ['TransactionLine', optional(nullable(string()))],
    allowClearing: ['AllowClearing', optional(nullable(string()))],
    cRMNumber: ['CRMNumber', optional(nullable(string()))],
    disputeStatus: ['DisputeStatus', optional(nullable(string()))],
    rebateRate: ['RebateRate', optional(nullable(number()))],
    delCoToColCoExchangeRate: [
      'DelCoToColCoExchangeRate',
      optional(nullable(number())),
    ],
    netEuroAmount: ['NetEuroAmount', optional(nullable(number()))],
    euroRebateAmount: ['EuroRebateAmount', optional(nullable(number()))],
    euroVATAmount: ['EuroVATAmount', optional(nullable(number()))],
    parentCustomerNumber: [
      'ParentCustomerNumber',
      optional(nullable(string())),
    ],
    parentCustomerName: ['ParentCustomerName', optional(nullable(string()))],
    parentCustomerId: ['ParentCustomerId', optional(nullable(number()))],
    incomingSiteNumber: ['IncomingSiteNumber', optional(nullable(string()))],
    incomingSiteDescription: [
      'IncomingSiteDescription',
      optional(nullable(string())),
    ],
    incomingCurrencyCode: [
      'IncomingCurrencyCode',
      optional(nullable(string())),
    ],
    incomingProductCode: ['IncomingProductCode', optional(nullable(string()))],
    creditDebitCode: ['CreditDebitCode', optional(nullable(string()))],
    correctionFlag: ['CorrectionFlag', optional(nullable(string()))],
    additional1: ['Additional1', optional(nullable(string()))],
    additional2: ['Additional2', optional(nullable(string()))],
    additional3: ['Additional3', optional(nullable(string()))],
    additional4: ['Additional4', optional(nullable(string()))],
    rebateonNetAmountInCustomerCurrency: [
      'RebateonNetAmountInCustomerCurrency',
      optional(nullable(number())),
    ],
    rebateonNetAmountInTransactionCurrency: [
      'RebateonNetAmountInTransactionCurrency',
      optional(nullable(number())),
    ],
    networkCode: ['NetworkCode', optional(nullable(string()))],
    trnIdentifier: ['TrnIdentifier', optional(nullable(string()))],
    cardType: ['CardType', optional(nullable(string()))],
    delcoListPriceUnitNet: [
      'DelcoListPriceUnitNet',
      optional(nullable(number())),
    ],
    delcoRetailPriceUnitNet: [
      'DelcoRetailPriceUnitNet',
      optional(nullable(number())),
    ],
    delcoRetailPriceUnitGross: [
      'DelcoRetailPriceUnitGross',
      optional(nullable(number())),
    ],
    delcoRetailValueTotalNet: [
      'DelcoRetailValueTotalNet',
      optional(nullable(number())),
    ],
    delcoRetailValueTotalGross: [
      'DelcoRetailValueTotalGross',
      optional(nullable(number())),
    ],
    customerRetailPriceUnitGross: [
      'CustomerRetailPriceUnitGross',
      optional(nullable(number())),
    ],
    customerRetailValueTotalGross: [
      'CustomerRetailValueTotalGross',
      optional(nullable(number())),
    ],
    customerRetailValueTotalNet: [
      'CustomerRetailValueTotalNet',
      optional(nullable(number())),
    ],
    transactionTypeDescription: [
      'TransactionTypeDescription',
      optional(nullable(string())),
    ],
  }
);
