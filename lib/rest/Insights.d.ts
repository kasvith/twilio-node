/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./insights/V1');
import { CallSummaryListInstance } from './insights/v1/summary';


declare class Insights extends Domain {
  /**
   * Initialize insights domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly summary: CallSummaryListInstance;
  readonly v1: V1;
}

export = Insights;
