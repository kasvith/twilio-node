/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type AccountUsageRecordGranularity = "hourly" | "daily" | "all";

/**
 * Options to pass to each
 *
 * @property { Date } [end] Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { Date } [start] Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { AccountUsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UsageRecordListInstanceEachOptions {
  end?: Date;
  start?: Date;
  granularity?: AccountUsageRecordGranularity;
  pageSize?: number;
  callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [end] Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { Date } [start] Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { AccountUsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UsageRecordListInstanceOptions {
  end?: Date;
  start?: Date;
  granularity?: AccountUsageRecordGranularity;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [end] Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { Date } [start] Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
 * @property { AccountUsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UsageRecordListInstancePageOptions {
  end?: Date;
  start?: Date;
  granularity?: AccountUsageRecordGranularity;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface UsageRecordListInstance {
  /**
   * Streams UsageRecordInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams UsageRecordInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: UsageRecordListInstanceEachOptions,
    callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;
  getPage(params?: any, callback?: any): Promise<UsageRecordPage>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: UsageRecordInstance[]) => any
  ): Promise<UsageRecordInstance[]>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: UsageRecordListInstanceOptions,
    callback?: (error: Error | null, items: UsageRecordInstance[]) => any
  ): Promise<UsageRecordInstance[]>;
  list(params?: any, callback?: any): Promise<UsageRecordInstance[]>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: UsageRecordListInstancePageOptions,
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;
  page(params?: any, callback?: any): Promise<UsageRecordPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UsageRecordSolution {}

interface UsageRecordListInstanceImpl extends UsageRecordListInstance {}
class UsageRecordListInstanceImpl implements UsageRecordListInstance {
  _version?: V1;
  _solution?: UsageRecordSolution;
  _uri?: string;
}

export function UsageRecordListInstance(version: V1): UsageRecordListInstance {
  const instance = {} as UsageRecordListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/UsageRecords`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<UsageRecordPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["end"] !== undefined)
      data["End"] = serialize.iso8601DateTime(params["end"]);
    if (params["start"] !== undefined)
      data["Start"] = serialize.iso8601DateTime(params["start"]);
    if (params["granularity"] !== undefined)
      data["Granularity"] = params["granularity"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UsageRecordPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<UsageRecordPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new UsageRecordPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

interface UsageRecordPayload
  extends UsageRecordResource,
    Page.TwilioResponsePayload {}

interface UsageRecordResource {
  account_sid?: string | null;
  period?: any | null;
  commands?: any | null;
  data?: any | null;
}

export class UsageRecordInstance {
  constructor(protected _version: V1, payload: UsageRecordPayload) {
    this.accountSid = payload.account_sid;
    this.period = payload.period;
    this.commands = payload.commands;
    this.data = payload.data;
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The time period for which usage is reported
   */
  period?: any | null;
  /**
   * An object that describes the aggregated Commands usage for all SIMs during the specified period
   */
  commands?: any | null;
  /**
   * An object that describes the aggregated Data usage for all SIMs over the period
   */
  data?: any | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      period: this.period,
      commands: this.commands,
      data: this.data,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class UsageRecordPage extends Page<
  V1,
  UsageRecordPayload,
  UsageRecordResource,
  UsageRecordInstance
> {
  /**
   * Initialize the UsageRecordPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: UsageRecordSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UsageRecordInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UsageRecordPayload): UsageRecordInstance {
    return new UsageRecordInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
