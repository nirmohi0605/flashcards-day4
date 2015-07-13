app.controller('MainCtrl', function ($scope, FlashCardFactory) {
    // make a query
    FlashCardFactory.getFlashCards()
    .then(function (cards) {
      $scope.flashCards = cards;
    })
    .catch(function (e) {
      console.log('e', e);
    })

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function (cat) {
      $scope.activeCat = cat;
      $scope.flashCards = null;
      FlashCardFactory.getFlashCards(cat)
      .then(function (cards) {
        $scope.flashCards = cards;
      });
    };
  })