import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';

// Template.App_home.helpers({
//   Meteor.call('getPosts', function (err, res) {
//     // The method call sets the Session variable to the callback value
//     if (err) {
//       Session.set('location', {error: err});
//     } else {
//       Session.set('location', res);
//     return res;
//     }
//   });
//  });

Template.App_home.helpers({
  location: function () {
  //
    return Session.get('location');
  }
 });

Meteor.call('getPosts', function(err, res) {
  if (err) {
    Session.set('location', {error: err});
  } else {
    Session.set('location', res);
  }
})