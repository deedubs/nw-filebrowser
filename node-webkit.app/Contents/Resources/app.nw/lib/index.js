var mod = angular.module('nw-filebrowser', [])
 , fs = require('fs');
 
mod.directive('fileBrowser', function () {
  return {
    templateUrl: "./templates/file-browser.html",
    controller: function ($scope) {
      $scope.path = process.cwd();
      
      $scope.openfile = function (file) {
        file = file || '';
        
        console.log('path + file', $scope.path + file)
        fs.readdir([$scope.path, file].join('/'), function (err, files) {
          $scope.$apply(function () {
            if (err) {
              $scope.file = fs.readFileSync([$scope.path, file].join('/'),'utf-8');
            } else {
              $scope.path = [$scope.path, file].join('/');
              $scope.files = files;
            }
          });
        });
      }
      
      $scope.openfile();
    }
  }
});
