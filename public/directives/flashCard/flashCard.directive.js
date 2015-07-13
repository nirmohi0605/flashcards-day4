app.directive('flashCard', function () {
	return {
		restrict: 'E',
		scope: {
			theCard: '=card'
		},
		templateUrl: '/directives/flashCard/flashCard.html'
	};
});