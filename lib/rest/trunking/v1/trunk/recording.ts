/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type RecordingRecordingMode =
  | "do-not-record"
  | "record-from-ringing"
  | "record-from-answer"
  | "record-from-ringing-dual"
  | "record-from-answer-dual";

type RecordingRecordingTrim = "trim-silence" | "do-not-trim";

/**
 * Options to pass to update a RecordingInstance
 *
 * @property { RecordingRecordingMode } [mode]
 * @property { RecordingRecordingTrim } [trim]
 */
export interface RecordingContextUpdateOptions {
  mode?: RecordingRecordingMode;
  trim?: RecordingRecordingTrim;
}

export interface RecordingContext {
  /**
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  /**
   * Update a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  /**
   * Update a RecordingInstance
   *
   * @param { RecordingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  update(params?: any, callback?: any): Promise<RecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingContextSolution {
  trunkSid?: string;
}

export class RecordingContextImpl implements RecordingContext {
  protected _solution: RecordingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trunkSid: string) {
    if (!isValidPathParam(trunkSid)) {
      throw new Error("Parameter 'trunkSid' is not valid.");
    }

    this._solution = { trunkSid };
    this._uri = `/Trunks/${trunkSid}/Recording`;
  }

  fetch(callback?: any): Promise<RecordingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingInstance(
          operationVersion,
          payload,
          this._solution.trunkSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<RecordingInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["mode"] !== undefined) data["Mode"] = params["mode"];
    if (params["trim"] !== undefined) data["Trim"] = params["trim"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingInstance(
          operationVersion,
          payload,
          this._solution.trunkSid
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

interface RecordingPayload extends RecordingResource {}

interface RecordingResource {
  mode?: RecordingRecordingMode;
  trim?: RecordingRecordingTrim;
}

export class RecordingInstance {
  protected _solution: RecordingContextSolution;
  protected _context?: RecordingContext;

  constructor(
    protected _version: V1,
    payload: RecordingPayload,
    trunkSid: string
  ) {
    this.mode = payload.mode;
    this.trim = payload.trim;

    this._solution = { trunkSid };
  }

  mode?: RecordingRecordingMode;
  trim?: RecordingRecordingTrim;

  private get _proxy(): RecordingContext {
    this._context =
      this._context ||
      new RecordingContextImpl(this._version, this._solution.trunkSid);
    return this._context;
  }

  /**
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  /**
   * Update a RecordingInstance
   *
   * @param { RecordingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  update(params?: any, callback?: any): Promise<RecordingInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      mode: this.mode,
      trim: this.trim,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RecordingListInstance {
  (): RecordingContext;
  get(): RecordingContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingSolution {
  trunkSid?: string;
}

interface RecordingListInstanceImpl extends RecordingListInstance {}
class RecordingListInstanceImpl implements RecordingListInstance {
  _version?: V1;
  _solution?: RecordingSolution;
  _uri?: string;
}

export function RecordingListInstance(
  version: V1,
  trunkSid: string
): RecordingListInstance {
  if (!isValidPathParam(trunkSid)) {
    throw new Error("Parameter 'trunkSid' is not valid.");
  }

  const instance = (() => instance.get()) as RecordingListInstanceImpl;

  instance.get = function get(): RecordingContext {
    return new RecordingContextImpl(version, trunkSid);
  };

  instance._version = version;
  instance._solution = { trunkSid };
  instance._uri = ``;

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
