// // Server entry point, imports all server code

// import '/imports/startup/server';
// import '/imports/startup/both';

// var apiCall = function (apiUrl, callback) {
//   // #A try…catch allows you to handle errors
//   try {
//     var response = HTTP.get(apiUrl).data;
//     // A successful API call returns no error
//     // but the contents from the JSON response
//     callback(null, response);
//   } catch (error) {
//     // If the API responded with an error message and a payload
//     if (error.response) {
//       var errorCode = error.response.data.code;
//       var errorMessage = error.response.data.message;
//       // Otherwise use a generic error message
//     } else {
//       var errorCode = 500;
//       var errorMessage = 'Cannot access the API';
//     }
//     // Create an Error object and return it via callback
//     var myError = new Meteor.Error(errorCode, errorMessage);
//     callback(myError, null);
//   }
//  }

//  Meteor.methods({
//    'getPosts': function() {
//      //avoid block other method calls
//      this.unblock();
//      var apiUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';

//      var response = Meteor.wrapAsync(apiCall)(apiUrl);
//      return response;
//    }
//  });