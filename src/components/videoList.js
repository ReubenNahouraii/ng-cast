angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clicked: '<'
  },
  controller: function() {
    console.log('videoList', this);
  },
  templateUrl: 'src/templates/videoList.html'
  
});
