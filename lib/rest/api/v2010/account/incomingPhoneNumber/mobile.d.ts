/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { PhoneNumberCapabilities } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

type MobileAddressRequirement = 'none'|'any'|'local'|'foreign';

type MobileEmergencyStatus = 'Active'|'Inactive';

type MobileVoiceReceiveMode = 'voice'|'fax';

/**
 * Initialize the MobileList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function MobileList(version: V2010, accountSid: string): MobileListInstance;

interface MobileListInstance {
  /**
   * create a MobileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MobileListInstanceCreateOptions, callback?: (error: Error | null, item: MobileInstance) => any): Promise<MobileInstance>;
  /**
   * Streams MobileInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: MobileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MobileInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: MobileListInstanceEachOptions, callback?: (item: MobileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MobileInstance[]) => any): Promise<MobileInstance[]>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MobileListInstanceOptions, callback?: (error: Error | null, items: MobileInstance[]) => any): Promise<MobileInstance[]>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MobileListInstancePageOptions, callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property addressSid - The SID of the Address resource associated with the phone number
 * @property apiVersion - The API version to use for incoming calls made to the new phone number
 * @property bundleSid - The SID of the Bundle resource associated with number
 * @property emergencyAddressSid - The emergency address configuration to use for emergency calling
 * @property emergencyStatus - Displays if emergency calling is enabled for this number.
 * @property friendlyName - A string to describe the new phone number
 * @property identitySid - The SID of the Identity resource to associate with the new phone number
 * @property phoneNumber - The phone number to purchase in E.164 format
 * @property smsApplicationSid - The SID of the application to handle SMS messages
 * @property smsFallbackMethod - HTTP method used with sms_fallback_url
 * @property smsFallbackUrl - The URL we call when an error occurs while executing TwiML
 * @property smsMethod - The HTTP method to use with sms url
 * @property smsUrl - The URL we should call when the new phone number receives an incoming SMS message
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackMethod - The HTTP method we should use to call status_callback
 * @property trunkSid - SID of the trunk to handle calls to the new phone number
 * @property voiceApplicationSid - The SID of the application to handle the new phone number
 * @property voiceCallerIdLookup - Whether to lookup the caller's name
 * @property voiceFallbackMethod - The HTTP method used with voice_fallback_url
 * @property voiceFallbackUrl - The URL we will call when an error occurs in TwiML
 * @property voiceMethod - The HTTP method used with the voice_url
 * @property voiceReceiveMode - Incoming call type: fax or voice
 * @property voiceUrl - The URL we should call when the phone number receives a call
 */
interface MobileListInstanceCreateOptions {
  addressSid?: string;
  apiVersion?: string;
  bundleSid?: string;
  emergencyAddressSid?: string;
  emergencyStatus?: MobileEmergencyStatus;
  friendlyName?: string;
  identitySid?: string;
  phoneNumber: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trunkSid?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceReceiveMode?: MobileVoiceReceiveMode;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property beta - Whether to include new phone numbers
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - A string that identifies the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface MobileListInstanceEachOptions {
  beta?: boolean;
  callback?: (item: MobileInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to list
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface MobileListInstanceOptions {
  beta?: boolean;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to page
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the resources to read
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - The phone numbers of the resources to read
 */
interface MobileListInstancePageOptions {
  beta?: boolean;
  friendlyName?: string;
  origin?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
}

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileResource {
  account_sid: string;
  address_requirements: MobileAddressRequirement;
  address_sid: string;
  api_version: string;
  beta: boolean;
  bundle_sid: string;
  capabilities: PhoneNumberCapabilities;
  date_created: Date;
  date_updated: Date;
  emergency_address_sid: string;
  emergency_status: MobileEmergencyStatus;
  friendly_name: string;
  identity_sid: string;
  origin: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_receive_mode: MobileVoiceReceiveMode;
  voice_url: string;
}

interface MobileSolution {
  accountSid?: string;
}


declare class MobileInstance extends SerializableClass {
  /**
   * Initialize the MobileContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   */
  constructor(version: V2010, payload: MobilePayload, accountSid: string);

  accountSid: string;
  addressRequirements: MobileAddressRequirement;
  addressSid: string;
  apiVersion: string;
  beta: boolean;
  bundleSid: string;
  capabilities: PhoneNumberCapabilities;
  dateCreated: Date;
  dateUpdated: Date;
  emergencyAddressSid: string;
  emergencyStatus: MobileEmergencyStatus;
  friendlyName: string;
  identitySid: string;
  origin: string;
  phoneNumber: string;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  status: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trunkSid: string;
  uri: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceReceiveMode: MobileVoiceReceiveMode;
  voiceUrl: string;
}


declare class MobilePage extends Page<V2010, MobilePayload, MobileResource, MobileInstance> {
  /**
   * Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MobileSolution);

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobilePayload): MobileInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MobileAddressRequirement, MobileEmergencyStatus, MobileInstance, MobileList, MobileListInstance, MobileListInstanceCreateOptions, MobileListInstanceEachOptions, MobileListInstanceOptions, MobileListInstancePageOptions, MobilePage, MobilePayload, MobileResource, MobileSolution, MobileVoiceReceiveMode }
