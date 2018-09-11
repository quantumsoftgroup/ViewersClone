import { Router } from 'meteor/clinical:router';
import { Session } from 'meteor/session';

const LOGIN_PATH = '/gcloud-login';

Router.route(LOGIN_PATH, function() {
    this.layout('layout', { data: {} });
    this.render('gcloudLogin');
}, { name: 'gcloudLogin' });

Router.onBeforeAction(function() {
    const user = Meteor.user();
    const currentPath = this.router.current().route.path();
    if (currentPath === LOGIN_PATH && user)
        Router.go('studylist', {}, {replaceState: true});
    else if (currentPath !== LOGIN_PATH && !user)
        Router.go(LOGIN_PATH, {}, {replaceState: true});
    else
        this.next();
});
