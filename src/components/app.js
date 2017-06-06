angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.video = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.clicked = video => {
      this.video = video; 
      console.log('clicked from app! \n ', video);
    };
  } 
  
});
