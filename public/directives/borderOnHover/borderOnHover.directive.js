app.directive('borderOnHover', function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			// attach event listener to element 'mousenter'
			// in handler, show border
			elem.on('mouseenter', function () {
				elem.addClass('bordered');
			});
			elem.on('mouseleave', function () {
				elem.removeClass('bordered');
			});
		}
	};
});