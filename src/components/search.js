angular.module('video-player')

.component('search', {
  bindings: {
    search: '<'
  },
  controller: function() {
    this.btnClick = () => {
      console.log(this);
      this.search(this.query);
  
    };
  },
  templateUrl: 'src/templates/search.html'
});
