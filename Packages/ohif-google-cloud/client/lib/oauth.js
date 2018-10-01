import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/clinical:router';
import { OHIF } from 'meteor/ohif:core';


OHIF.gcloud.login = params => {
    return new Promise((resolve, reject) => {
        const server = OHIF.servers.getCurrentServer();
        console.log(server);
        debugger
        if (server.type !== 'gcloud')
            return reject(new Meteor.Error('Server type is not "gcloud"'));
        Meteor.loginWithGoogle({loginStyle: "redirect"}, err => {
            if (err) {
                return reject(err);
            }
        });
    });
};
