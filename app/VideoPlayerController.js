Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    if(this.length>1){
      for(var i = this.length - 2; i >= 0; i--) {
          if(this[i] && this[i].parentElement) {
              this[i].parentElement.removeChild(this[i]);
          }
      }
    }
}

angular.module('videogularApp')
    .controller('VideoPlayerController', function($scope, $sce) {
        $scope.videos=['/assets/1.mp4','/assets/2.mp4']
        $scope.index=0;
        $scope.init=function(index){
          $scope.videogularConfig =$scope.createSource(index);
        };

        $scope.createSource = function(index){
          return {
              preload:'auto',
              sources: [
                  { src: $scope.videos[index], type: 'video/mp4' }
              ],
              theme: '/bower_components/videogular-themes-default/videogular.min.css'
          };
        };

        $scope.playVideo = function(index) {
            console.log(document.getElementsByTagName('video'));
            var vidURL=$scope.videos[index];
            var myVideo = document.getElementsByTagName('video')[0];
            myVideo.src = vidURL;
            myVideo.load();
            myVideo.play();
            console.log(document.getElementsByTagName('video'));
        }
        $scope.changeVideo1=function(index){
          //$scope.playVideo(0);
          $scope.init(0);
        }
        $scope.changeVideo2=function(index){
          //$scope.playVideo(1);
          $scope.init(1);
        }
        $scope.init(0);
    });
