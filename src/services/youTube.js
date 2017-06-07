angular.module('video-player')
.service('youTube', function($http) {
  this.getVideos = function(options) {
    debugger;
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: options.key,
        q: options.q,
        part: 'snippet',
        maxResults: options.max
      }
    }).then(function successCallback(response) {
      console.log(response);
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
});
