angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: function() {
    console.log('videoListEntry', this);
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
