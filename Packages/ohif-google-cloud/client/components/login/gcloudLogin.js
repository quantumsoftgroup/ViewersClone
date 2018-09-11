import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/clinical:router';

Template.gcloudLogin.onCreated(() => {
    const instance = Template.instance();

    instance.api = {
        login() {
            return OHIF.gcloud.login();
        }
    };
});

Template.gcloudLogin.events({
    "click #gcloud-login-btn": function (event, instance) {
      event.preventDefault();
      instance.api.login();
    },
});