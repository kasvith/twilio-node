/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a CustomerProfilesChannelEndpointAssignmentInstance
 *
 * @property { string } channelEndpointType The type of channel endpoint. eg: phone-number
 * @property { string } channelEndpointSid The SID of an channel endpoint
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions {
  channelEndpointType: string;
  channelEndpointSid: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
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
export interface CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions {
  channelEndpointSid?: string;
  channelEndpointSids?: string;
  pageSize?: number;
  callback?: (
    item: CustomerProfilesChannelEndpointAssignmentInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstanceOptions {
  channelEndpointSid?: string;
  channelEndpointSids?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstancePageOptions {
  channelEndpointSid?: string;
  channelEndpointSids?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CustomerProfilesChannelEndpointAssignmentContext {
  /**
   * Remove a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesChannelEndpointAssignmentContextSolution {
  customerProfileSid?: string;
  sid?: string;
}

export class CustomerProfilesChannelEndpointAssignmentContextImpl
  implements CustomerProfilesChannelEndpointAssignmentContext
{
  protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerProfileSid: string, sid: string) {
    if (!isValidPathParam(customerProfileSid)) {
      throw new Error("Parameter 'customerProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { customerProfileSid, sid };
    this._uri = `/CustomerProfiles/${customerProfileSid}/ChannelEndpointAssignments/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface CustomerProfilesChannelEndpointAssignmentPayload
  extends CustomerProfilesChannelEndpointAssignmentResource,
    Page.TwilioResponsePayload {}

interface CustomerProfilesChannelEndpointAssignmentResource {
  sid?: string | null;
  customer_profile_sid?: string | null;
  account_sid?: string | null;
  channel_endpoint_type?: string | null;
  channel_endpoint_sid?: string | null;
  date_created?: Date | null;
  url?: string | null;
}

export class CustomerProfilesChannelEndpointAssignmentInstance {
  protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
  protected _context?: CustomerProfilesChannelEndpointAssignmentContext;

  constructor(
    protected _version: V1,
    payload: CustomerProfilesChannelEndpointAssignmentPayload,
    customerProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.accountSid = payload.account_sid;
    this.channelEndpointType = payload.channel_endpoint_type;
    this.channelEndpointSid = payload.channel_endpoint_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { customerProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies the CustomerProfile resource.
   */
  customerProfileSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The type of channel endpoint
   */
  channelEndpointType?: string | null;
  /**
   * The sid of an channel endpoint
   */
  channelEndpointSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Identity resource
   */
  url?: string | null;

  private get _proxy(): CustomerProfilesChannelEndpointAssignmentContext {
    this._context =
      this._context ||
      new CustomerProfilesChannelEndpointAssignmentContextImpl(
        this._version,
        this._solution.customerProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      customerProfileSid: this.customerProfileSid,
      accountSid: this.accountSid,
      channelEndpointType: this.channelEndpointType,
      channelEndpointSid: this.channelEndpointSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CustomerProfilesChannelEndpointAssignmentListInstance {
  (sid: string): CustomerProfilesChannelEndpointAssignmentContext;
  get(sid: string): CustomerProfilesChannelEndpointAssignmentContext;

  /**
   * Create a CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param { CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
   */
  create(
    params: CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesChannelEndpointAssignmentInstance
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;

  /**
   * Streams CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
    callback?: (
      item: CustomerProfilesChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
   * @param { CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions,
    callback?: (
      item: CustomerProfilesChannelEndpointAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  /**
   * Retrieve a single target page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  /**
   * Lists CustomerProfilesChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
  /**
   * Lists CustomerProfilesChannelEndpointAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CustomerProfilesChannelEndpointAssignmentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentInstance[]
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
  /**
   * Retrieve a single page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  /**
   * Retrieve a single page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CustomerProfilesChannelEndpointAssignmentListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesChannelEndpointAssignmentPage
    ) => any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
  page(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesChannelEndpointAssignmentSolution {
  customerProfileSid?: string;
}

interface CustomerProfilesChannelEndpointAssignmentListInstanceImpl
  extends CustomerProfilesChannelEndpointAssignmentListInstance {}
class CustomerProfilesChannelEndpointAssignmentListInstanceImpl
  implements CustomerProfilesChannelEndpointAssignmentListInstance
{
  _version?: V1;
  _solution?: CustomerProfilesChannelEndpointAssignmentSolution;
  _uri?: string;
}

export function CustomerProfilesChannelEndpointAssignmentListInstance(
  version: V1,
  customerProfileSid: string
): CustomerProfilesChannelEndpointAssignmentListInstance {
  if (!isValidPathParam(customerProfileSid)) {
    throw new Error("Parameter 'customerProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(
      sid
    )) as CustomerProfilesChannelEndpointAssignmentListInstanceImpl;

  instance.get = function get(
    sid
  ): CustomerProfilesChannelEndpointAssignmentContext {
    return new CustomerProfilesChannelEndpointAssignmentContextImpl(
      version,
      customerProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { customerProfileSid };
  instance._uri = `/CustomerProfiles/${customerProfileSid}/ChannelEndpointAssignments`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["channelEndpointType"] === null ||
      params["channelEndpointType"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['channelEndpointType']\" missing."
      );
    }

    if (
      params["channelEndpointSid"] === null ||
      params["channelEndpointSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['channelEndpointSid']\" missing."
      );
    }

    let data: any = {};

    data["ChannelEndpointType"] = params["channelEndpointType"];

    data["ChannelEndpointSid"] = params["channelEndpointSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesChannelEndpointAssignmentInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["channelEndpointSid"] !== undefined)
      data["ChannelEndpointSid"] = params["channelEndpointSid"];
    if (params["channelEndpointSids"] !== undefined)
      data["ChannelEndpointSids"] = params["channelEndpointSids"];
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
        new CustomerProfilesChannelEndpointAssignmentPage(
          operationVersion,
          payload,
          this._solution
        )
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
  ): Promise<CustomerProfilesChannelEndpointAssignmentPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesChannelEndpointAssignmentPage(
          this._version,
          payload,
          this._solution
        )
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

export class CustomerProfilesChannelEndpointAssignmentPage extends Page<
  V1,
  CustomerProfilesChannelEndpointAssignmentPayload,
  CustomerProfilesChannelEndpointAssignmentResource,
  CustomerProfilesChannelEndpointAssignmentInstance
> {
  /**
   * Initialize the CustomerProfilesChannelEndpointAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CustomerProfilesChannelEndpointAssignmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomerProfilesChannelEndpointAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: CustomerProfilesChannelEndpointAssignmentPayload
  ): CustomerProfilesChannelEndpointAssignmentInstance {
    return new CustomerProfilesChannelEndpointAssignmentInstance(
      this._version,
      payload,
      this._solution.customerProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
