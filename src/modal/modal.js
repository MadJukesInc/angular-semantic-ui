'use strict';

angular.module('angularify.semantic.modal', [])

  .directive('modal', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      require: 'ngModel',
      scope: {
        visibility: "=ngModel",
        onApprove: "=?",
        onDeny: "=?",
        settings: "=?"
      },
      template: '<div class="ui modal" ng-transclude></div>',
      link: function(scope, element, attrs, ngModel) {
        var settings = {};

        if (scope.settings) {
          settings = scope.settings;
        }

        settings.onHide = function() {
          ngModel.$setViewValue(false);
        };
        settings.onApprove = function() {
          if (scope.onApprove) return scope.onApprove();
        };
        settings.onDeny = function() {
          if (scope.onDeny) return scope.onDeny();
        };

        element.modal(settings);

        scope.$watch(function() {
          return ngModel.$modelValue;
        }, function(modelValue) {
          setTimeout(function() {
            element.modal(modelValue ? 'show' : 'hide');
          }, 0);
        });
      }
    }
  });