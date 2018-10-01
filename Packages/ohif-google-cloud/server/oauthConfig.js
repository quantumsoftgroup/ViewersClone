import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { OHIF } from 'meteor/ohif:core';

ServiceConfiguration.configurations.remove({service: 'google'})
ServiceConfiguration.configurations.insert(
    {
        service: 'google',
        clientId: Meteor.settings.private.gcloudOauth2.clientId,
        secret: Meteor.settings.private.gcloudOauth2.secret,
        // FIXME: if we have multiple google cloud apps, then clientId and secret should be server-specific.
        // however, we can't put oauth credentials in the server config, because it's visible for the frontend
        // to not complicate everything, I just use a single config for now
    }
);
