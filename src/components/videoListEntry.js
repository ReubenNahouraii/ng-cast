angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    clicked: '<'
  },
  controller: function() {
    this.handleClick = function() {
      console.log('clicked!');
      
      this.clicked(this.video);
    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
