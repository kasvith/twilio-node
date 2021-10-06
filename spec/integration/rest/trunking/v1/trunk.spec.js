'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Trunk', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'POST',
          'disaster_recovery_url': 'http://disaster-recovery.com',
          'friendly_name': 'friendly_name',
          'secure': false,
          'cnam_lookup_enabled': false,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'transfer_mode': 'disable-all',
          'transfer_caller_id': 'from-transferor',
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://trunking.twilio.com/v1/Trunks';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'POST',
          'disaster_recovery_url': 'http://disaster-recovery.com',
          'friendly_name': 'friendly_name',
          'secure': false,
          'cnam_lookup_enabled': false,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'transfer_mode': 'disable-all',
          'transfer_caller_id': 'from-transferee',
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.trunking.v1.trunks.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'previous_page_url': null
          },
          'trunks': [
              {
                  'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'domain_name': 'test.pstn.twilio.com',
                  'disaster_recovery_method': 'POST',
                  'disaster_recovery_url': 'http://disaster-recovery.com',
                  'friendly_name': 'friendly_name',
                  'secure': false,
                  'cnam_lookup_enabled': false,
                  'recording': {
                      'mode': 'do-not-record',
                      'trim': 'do-not-trim'
                  },
                  'transfer_mode': 'disable-all',
                  'transfer_caller_id': 'from-transferee',
                  'auth_type': '',
                  'auth_type_set': [],
                  'date_created': '2015-01-02T11:23:45Z',
                  'date_updated': '2015-01-02T11:23:45Z',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
                      'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
                      'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
                      'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'previous_page_url': null
          },
          'trunks': [
              {
                  'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'domain_name': 'test.pstn.twilio.com',
                  'disaster_recovery_method': 'POST',
                  'disaster_recovery_url': 'http://disaster-recovery.com',
                  'friendly_name': 'friendly_name',
                  'secure': false,
                  'cnam_lookup_enabled': false,
                  'recording': {
                      'mode': 'do-not-record',
                      'trim': 'do-not-trim'
                  },
                  'transfer_mode': 'disable-all',
                  'transfer_caller_id': 'from-transferee',
                  'auth_type': '',
                  'auth_type_set': [],
                  'date_created': '2015-01-02T11:23:45Z',
                  'date_updated': '2015-01-02T11:23:45Z',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
                      'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
                      'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
                      'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trunking.twilio.com/v1/Trunks',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'previous_page_url': null
          },
          'trunks': [
              {
                  'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'domain_name': 'test.pstn.twilio.com',
                  'disaster_recovery_method': 'POST',
                  'disaster_recovery_url': 'http://disaster-recovery.com',
                  'friendly_name': 'friendly_name',
                  'secure': false,
                  'cnam_lookup_enabled': false,
                  'recording': {
                      'mode': 'do-not-record',
                      'trim': 'do-not-trim'
                  },
                  'transfer_mode': 'disable-all',
                  'transfer_caller_id': 'from-transferee',
                  'auth_type': '',
                  'auth_type_set': [],
                  'date_created': '2015-01-02T11:23:45Z',
                  'date_updated': '2015-01-02T11:23:45Z',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
                      'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
                      'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
                      'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://trunking.twilio.com/v1/Trunks';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'previous_page_url': null
          },
          'trunks': [
              {
                  'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'domain_name': 'test.pstn.twilio.com',
                  'disaster_recovery_method': 'POST',
                  'disaster_recovery_url': 'http://disaster-recovery.com',
                  'friendly_name': 'friendly_name',
                  'secure': false,
                  'cnam_lookup_enabled': false,
                  'recording': {
                      'mode': 'do-not-record',
                      'trim': 'do-not-trim'
                  },
                  'transfer_mode': 'disable-all',
                  'transfer_caller_id': 'from-transferee',
                  'auth_type': '',
                  'auth_type_set': [],
                  'date_created': '2015-01-02T11:23:45Z',
                  'date_updated': '2015-01-02T11:23:45Z',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
                      'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
                      'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
                      'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'previous_page_url': null
          },
          'trunks': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'GET',
          'disaster_recovery_url': 'http://updated-recovery.com',
          'friendly_name': 'updated_name',
          'secure': true,
          'cnam_lookup_enabled': true,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'transfer_mode': 'disable-all',
          'transfer_caller_id': 'from-transferor',
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
