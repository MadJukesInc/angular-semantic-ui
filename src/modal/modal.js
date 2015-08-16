'use strict';

angular.module('angularify.semantic.modal', [])

    .directive('modal', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            require: 'ngModel',
            scope: {
                visibility : "=ngModel",
                onApprove : "=?",
                onDeny : "=?"
            },
            template: '<div class="ui modal" ng-transclude></div>',
            link: function (scope, element, attrs, ngModel) {
                element.modal({
                    onHide: function () {
                        ngModel.$setViewValue(false);
                    },
                    onApprove: function() {
                        if(scope.onApprove) return scope.onApprove();
                    },
                    onDeny: function() {
                        if(scope.onDeny) return scope.onDeny();
                    }
                });
                scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function (modelValue){
                    element.modal(modelValue ? 'show' : 'hide');
                });
            }
        }
    });