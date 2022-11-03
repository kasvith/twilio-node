/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
import { BrandVettingListInstance } from "./brandRegistration/brandVetting";



type BrandRegistrationsBrandFeedback = 'TAX_ID'|'STOCK_SYMBOL'|'NONPROFIT'|'GOVERNMENT_ENTITY'|'OTHERS';

type BrandRegistrationsIdentityStatus = 'SELF_DECLARED'|'UNVERIFIED'|'VERIFIED'|'VETTED_VERIFIED';

type BrandRegistrationsStatus = 'PENDING'|'APPROVED'|'FAILED'|'IN_REVIEW'|'DELETED';


/**
 * Options to pass to create a BrandRegistrationInstance
 *
 * @property { string } customerProfileBundleSid Customer Profile Bundle Sid.
 * @property { string } a2PProfileBundleSid A2P Messaging Profile Bundle Sid.
 * @property { string } [brandType] Type of brand being created. One of: \\\&quot;STANDARD\\\&quot;, \\\&quot;STARTER\\\&quot;. STARTER is for low volume, starter use cases. STANDARD is for all other use cases.
 * @property { boolean } [mock] A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
 * @property { boolean } [skipAutomaticSecVet] A flag to disable automatic secondary vetting for brands which it would otherwise be done.
 */
export interface BrandRegistrationListInstanceCreateOptions {
  "customerProfileBundleSid": string;
  "a2PProfileBundleSid": string;
  "brandType"?: string;
  "mock"?: boolean;
  "skipAutomaticSecVet"?: boolean;
}
/**
 * Options to pass to each
 *
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
export interface BrandRegistrationListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BrandRegistrationListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BrandRegistrationListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface BrandRegistrationContext {

  brandVettings: BrandVettingListInstance;

  /**
   * Fetch a BrandRegistrationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandRegistrationInstance
   */
  fetch(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>


  /**
   * Update a BrandRegistrationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandRegistrationInstance
   */
  update(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandRegistrationContextSolution {
  "sid"?: string;
}

export class BrandRegistrationContextImpl implements BrandRegistrationContext {
  protected _solution: BrandRegistrationContextSolution;
  protected _uri: string;

  protected _brandVettings?: BrandVettingListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/a2p/BrandRegistrations/${sid}`;
  }

  get brandVettings(): BrandVettingListInstance {
    this._brandVettings = this._brandVettings || BrandVettingListInstance(this._version, this._solution.sid);
    return this._brandVettings;
  }

  fetch(callback?: any): Promise<BrandRegistrationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new BrandRegistrationInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(callback?: any): Promise<BrandRegistrationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post" });
    
    operationPromise = operationPromise.then(payload => new BrandRegistrationInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface BrandRegistrationPayload extends BrandRegistrationResource, Page.TwilioResponsePayload {
}

interface BrandRegistrationResource {
  sid?: string | null;
  account_sid?: string | null;
  customer_profile_bundle_sid?: string | null;
  a2p_profile_bundle_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  brand_type?: string | null;
  status?: BrandRegistrationsStatus;
  tcr_id?: string | null;
  failure_reason?: string | null;
  url?: string | null;
  brand_score?: number | null;
  brand_feedback?: Array<BrandRegistrationsBrandFeedback> | null;
  identity_status?: BrandRegistrationsIdentityStatus;
  russell_3000?: boolean | null;
  government_entity?: boolean | null;
  tax_exempt_status?: string | null;
  skip_automatic_sec_vet?: boolean | null;
  mock?: boolean | null;
  links?: object | null;
}

export class BrandRegistrationInstance {
  protected _solution: BrandRegistrationContextSolution;
  protected _context?: BrandRegistrationContext;

  constructor(protected _version: V1, payload: BrandRegistrationPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.customerProfileBundleSid = payload.customer_profile_bundle_sid;
    this.a2pProfileBundleSid = payload.a2p_profile_bundle_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.brandType = payload.brand_type;
    this.status = payload.status;
    this.tcrId = payload.tcr_id;
    this.failureReason = payload.failure_reason;
    this.url = payload.url;
    this.brandScore = deserialize.integer(payload.brand_score);
    this.brandFeedback = payload.brand_feedback;
    this.identityStatus = payload.identity_status;
    this.russell3000 = payload.russell_3000;
    this.governmentEntity = payload.government_entity;
    this.taxExemptStatus = payload.tax_exempt_status;
    this.skipAutomaticSecVet = payload.skip_automatic_sec_vet;
    this.mock = payload.mock;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A2P BrandRegistration Sid
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * A2P Messaging Profile Bundle BundleSid
   */
  customerProfileBundleSid?: string | null;
  /**
   * A2P Messaging Profile Bundle BundleSid
   */
  a2pProfileBundleSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * Type of brand. One of: \"STANDARD\", \"STARTER\".
   */
  brandType?: string | null;
  status?: BrandRegistrationsStatus;
  /**
   * Campaign Registry (TCR) Brand ID
   */
  tcrId?: string | null;
  /**
   * A reason why brand registration has failed
   */
  failureReason?: string | null;
  /**
   * The absolute URL of the Brand Registration
   */
  url?: string | null;
  /**
   * Brand score
   */
  brandScore?: number | null;
  /**
   * Brand feedback
   */
  brandFeedback?: Array<BrandRegistrationsBrandFeedback> | null;
  identityStatus?: BrandRegistrationsIdentityStatus;
  /**
   * Russell 3000
   */
  russell3000?: boolean | null;
  /**
   * Government Entity
   */
  governmentEntity?: boolean | null;
  /**
   * Tax Exempt Status
   */
  taxExemptStatus?: string | null;
  /**
   * Skip Automatic Secondary Vetting
   */
  skipAutomaticSecVet?: boolean | null;
  /**
   * A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
   */
  mock?: boolean | null;
  links?: object | null;

  private get _proxy(): BrandRegistrationContext {
    this._context = this._context || new BrandRegistrationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a BrandRegistrationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandRegistrationInstance
   */
  fetch(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BrandRegistrationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandRegistrationInstance
   */
  update(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>
     {
    return this._proxy.update(callback);
  }

  /**
   * Access the brandVettings.
   */
  brandVettings(): BrandVettingListInstance {
    return this._proxy.brandVettings;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      customerProfileBundleSid: this.customerProfileBundleSid, 
      a2pProfileBundleSid: this.a2pProfileBundleSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      brandType: this.brandType, 
      status: this.status, 
      tcrId: this.tcrId, 
      failureReason: this.failureReason, 
      url: this.url, 
      brandScore: this.brandScore, 
      brandFeedback: this.brandFeedback, 
      identityStatus: this.identityStatus, 
      russell3000: this.russell3000, 
      governmentEntity: this.governmentEntity, 
      taxExemptStatus: this.taxExemptStatus, 
      skipAutomaticSecVet: this.skipAutomaticSecVet, 
      mock: this.mock, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface BrandRegistrationListInstance {
  (sid: string): BrandRegistrationContext;
  get(sid: string): BrandRegistrationContext;


  /**
   * Create a BrandRegistrationInstance
   *
   * @param { BrandRegistrationListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandRegistrationInstance
   */
  create(params: BrandRegistrationListInstanceCreateOptions, callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
  create(params: any, callback?: any): Promise<BrandRegistrationInstance>



  /**
   * Streams BrandRegistrationInstance records from the API.
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
  each(callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BrandRegistrationInstance records from the API.
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
   * @param { BrandRegistrationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: BrandRegistrationListInstanceEachOptions, callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
  /**
   * Retrieve a single target page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
  getPage(params?: any, callback?: any): Promise<BrandRegistrationPage>;
  /**
   * Lists BrandRegistrationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any): Promise<BrandRegistrationInstance[]>;
  /**
   * Lists BrandRegistrationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandRegistrationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: BrandRegistrationListInstanceOptions, callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any): Promise<BrandRegistrationInstance[]>;
  list(params?: any, callback?: any): Promise<BrandRegistrationInstance[]>;
  /**
   * Retrieve a single page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
  /**
   * Retrieve a single page of BrandRegistrationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandRegistrationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: BrandRegistrationListInstancePageOptions, callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
  page(params?: any, callback?: any): Promise<BrandRegistrationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandRegistrationSolution {
}

interface BrandRegistrationListInstanceImpl extends BrandRegistrationListInstance {}
class BrandRegistrationListInstanceImpl implements BrandRegistrationListInstance {
  _version?: V1;
  _solution?: BrandRegistrationSolution;
  _uri?: string;

}

export function BrandRegistrationListInstance(version: V1): BrandRegistrationListInstance {
  const instance = ((sid) => instance.get(sid)) as BrandRegistrationListInstanceImpl;

  instance.get = function get(sid): BrandRegistrationContext {
    return new BrandRegistrationContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/a2p/BrandRegistrations`;

  instance.create = function create(params: any, callback?: any): Promise<BrandRegistrationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["customerProfileBundleSid"] === null || params["customerProfileBundleSid"] === undefined) {
      throw new Error('Required parameter "params[\'customerProfileBundleSid\']" missing.');
    }

    if (params["a2PProfileBundleSid"] === null || params["a2PProfileBundleSid"] === undefined) {
      throw new Error('Required parameter "params[\'a2PProfileBundleSid\']" missing.');
    }

    const data: any = {};

    data["CustomerProfileBundleSid"] = params["customerProfileBundleSid"];
    data["A2PProfileBundleSid"] = params["a2PProfileBundleSid"];
    if (params["brandType"] !== undefined) data["BrandType"] = params["brandType"];
    if (params["mock"] !== undefined) data["Mock"] = serialize.bool(params["mock"]);
    if (params["skipAutomaticSecVet"] !== undefined) data["SkipAutomaticSecVet"] = serialize.bool(params["skipAutomaticSecVet"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandRegistrationInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<BrandRegistrationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandRegistrationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<BrandRegistrationPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new BrandRegistrationPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class BrandRegistrationPage extends Page<V1, BrandRegistrationPayload, BrandRegistrationResource, BrandRegistrationInstance> {
/**
* Initialize the BrandRegistrationPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: BrandRegistrationSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of BrandRegistrationInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: BrandRegistrationPayload): BrandRegistrationInstance {
    return new BrandRegistrationInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

