
angular
  .module('dropdownApp', ['angularify.semantic.dropdown'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
    $scope.dropdown_model = 'item3';
    $scope.disableThing = function() {
      $scope.disabled = !$scope.disabled;
    }
    $scope.dropdown_repeat_model = {a: 'test'};
    //$scope.dropdown_items = [
    //  'item1',
    //  'item2',
    //  'item3',
    //  'item4'
    //];

  $scope.dropdown_items = [
    {a: 'test'},
    {a: 'testing'}
  ];

    $scope.dropdown_key_value_model = '';
    $scope.dropdown_key_value_items = {
      'item1': 'Cool item 1',
      'item2': 'Cool item 2',
      'item3': 'Cool item 3',
      'item4': 'Cool item 4'
    };


}

