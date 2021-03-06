import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import pages here
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/docks/docks.js';
import '../../ui/pages/apps/apps.js';
import '../../ui/pages/not-found/not-found.js';

// Import components here
import '../../ui/components/header/header.js';
import '../../ui/components/sidebar/sidebar.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/docks', {
  name: 'App.docks',
  action() {
    BlazeLayout.render('App_body', { main: 'docks'});
  }
})

FlowRouter.route('/apps', {
  name: 'App.apps',
  action() {
    BlazeLayout.render('App_body', { main: 'apps'});
  }
})