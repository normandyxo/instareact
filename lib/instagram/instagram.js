var request = require('request'),
    _ = require('lodash');

var _clientID = '',
    _clientSecret = '',
    _callbackURL = '',
    _tags = [];

var SUBSCRIPTIONS_URL = 'https://api.instagram.com/v1/subscriptions/';

var Instagram = function (config) {

    _clientID = config.clientId || '';
    _clientSecret = config.clientSecret || '';
    _callbackURL = config.callbackUrl || '';
    _tags = config.tags  || [];

    return {
        subscribeToTag: function (tag) {

            return request.post({
                url: SUBSCRIPTIONS_URL,
                formData: {
                    'client_id': _clientID,
                    'client_secret': _clientSecret,
                    'object': 'tag',
                    'object_id': tag,
                    'callback_url': _callbackURL,
                    'aspect': 'media'
                }
            }, function (err, httpResponse, body) {
                if (err) {
                    throw err;
                }
            });
        },

        deleteSubscription: function (subscriptionId) {
            return request.delete({
                url: SUBSCRIPTIONS_URL,
                qs: {
                    'client_secret': _clientSecret,
                    'client_id': _clientID,
                    'id': subscriptionId
                }
            }, function (err, httpResponse, body) {
                if (err) {
                    throw err;
                }
            });
        },

        initializeSubscriptions: function () {
            var _self = this,
                subscriptions,
                newSubscriptions = [],
                subscriptionsToDelete = [];

            request.get({
                url: SUBSCRIPTIONS_URL,
                qs: {
                    'client_secret': _clientSecret,
                    'client_id': _clientID
                }
            }, function (err, httpResponse, body) {
                if (err) {

                    // TODO error handling
                    throw err;
                }
                else {

                    // get all the tags of the existing submissions.
                    subscriptions = _.pluck(JSON.parse(body).data, 'object_id');

                    newSubscriptions = _.difference(_tags, subscriptions);

                    // need to subscribe to these.
                    if (newSubscriptions.length > 0) {
                        newSubscriptions.forEach(_self.subscribeToTag);
                    }

                    subscriptionsToDelete = _.difference(subscriptions, _tags);

                    // delete these subscriptions.
                    // TODO add delete subscription support.
                }
            });
        }
    };
};


module.exports = Instagram;
