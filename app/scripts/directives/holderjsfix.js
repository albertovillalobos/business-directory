'use strict';

angular.module('businessDirectoryApp')

.directive('bsHolder', function() {
  return {
    link: function (scope, element, attrs) {
      Holder.process_img(element.get(0));
    }
  };
})