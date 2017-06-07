angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clicked: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoList.html'
  
});
