var mod = angular.module('nw-filebrowser', [])
 , fs = require('fs');
 
mod.directive('fileBrowser', function () {
  return {
    templateUrl: "./templates/file-browser.html",
    controller: function ($scope) {
      var path = process.cwd();
      
      $scope.openfile = function (file) {
        file = file || '';
        
        console.log('path + file', path + file)
        fs.readdir([path, file].join('/'), function (err, files) {
          $scope.$apply(function () {
            if (err) {
              $scope.file = fs.readFileSync([path, file].join('/'),'utf-8');
            } else {
              path = [path, file].join('/');
              $scope.files = files;
            }
          });
        });
      }
      
      $scope.openfile();
    }
  }
});
