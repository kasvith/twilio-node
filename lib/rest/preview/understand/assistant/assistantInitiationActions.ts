/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");




/**
 * Options to pass to update a AssistantInitiationActionsInstance
 *
 * @property { any } [initiationActions] 
 */
export interface AssistantInitiationActionsContextUpdateOptions {
  "initiationActions"?: any;
}

export interface AssistantInitiationActionsContext {


  /**
   * Fetch a AssistantInitiationActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>


  /**
   * Update a AssistantInitiationActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  /**
   * Update a AssistantInitiationActionsInstance
   *
   * @param { AssistantInitiationActionsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  update(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantInitiationActionsContextSolution {
  "assistantSid"?: string;
}

export class AssistantInitiationActionsContextImpl implements AssistantInitiationActionsContext {
  protected _solution: AssistantInitiationActionsContextSolution;
  protected _uri: string;


  constructor(protected _version: Understand, assistantSid: string) {
    this._solution = { assistantSid };
    this._uri = `/Assistants/${assistantSid}/InitiationActions`;
  }

  fetch(callback?: any): Promise<AssistantInitiationActionsInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new AssistantInitiationActionsInstance(operationVersion, payload, this._solution.assistantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["initiationActions"] !== undefined)
    data["InitiationActions"] = serialize.object(params["initiationActions"]);


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantInitiationActionsInstance(operationVersion, payload, this._solution.assistantSid));
    

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

interface AssistantInitiationActionsPayload extends AssistantInitiationActionsResource{
}

interface AssistantInitiationActionsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class AssistantInitiationActionsInstance {
  protected _solution: AssistantInitiationActionsContextSolution;
  protected _context?: AssistantInitiationActionsContext;

  constructor(protected _version: Understand, payload: AssistantInitiationActionsPayload, assistantSid?: string) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid: assistantSid || this.assistantSid };
  }

  accountSid?: string | null;
  assistantSid?: string | null;
  url?: string | null;
  data?: any | null;

  private get _proxy(): AssistantInitiationActionsContext {
    this._context = this._context || new AssistantInitiationActionsContextImpl(this._version, this._solution.assistantSid);
    return this._context;
  }

  /**
   * Fetch a AssistantInitiationActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AssistantInitiationActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  /**
   * Update a AssistantInitiationActionsInstance
   *
   * @param { AssistantInitiationActionsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  update(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      assistantSid: this.assistantSid, 
      url: this.url, 
      data: this.data
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AssistantInitiationActionsListInstance {
  (): AssistantInitiationActionsContext;
  get(): AssistantInitiationActionsContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantInitiationActionsSolution {
  assistantSid?: string;
}

interface AssistantInitiationActionsListInstanceImpl extends AssistantInitiationActionsListInstance {}
class AssistantInitiationActionsListInstanceImpl implements AssistantInitiationActionsListInstance {
  _version?: Understand;
  _solution?: AssistantInitiationActionsSolution;
  _uri?: string;

}

export function AssistantInitiationActionsListInstance(version: Understand, assistantSid: string): AssistantInitiationActionsListInstance {
  const instance = (() => instance.get()) as AssistantInitiationActionsListInstanceImpl;

  instance.get = function get(): AssistantInitiationActionsContext {
    return new AssistantInitiationActionsContextImpl(version, assistantSid);
  }

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



