angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube, $window) {
    this.currentVideo = $window.exampleVideoData[0];
    this.videos = $window.exampleVideoData; 
    this.search = function(query) {
// debugger;
      this.options.q = query;
      this.options.key = $window.YOUTUBE_API_KEY;
      youTube.getVideos(this.options);
    }.bind(this);
    this.options = {
      key: $window.YOUTUBE_API_KEY,
      q: undefined, 
      max: 5
    };

    this.selectVideo = video => {
      this.currentVideo = video; 
    };
  } 
  
});
