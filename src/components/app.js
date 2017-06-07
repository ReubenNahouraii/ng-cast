angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube, $window) {
    this.currentVideo = $window.exampleVideoData[0];
    this.videos = $window.exampleVideoData;
    this.query = '';
    // this.search = function(this.query) {
      
    // };
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
