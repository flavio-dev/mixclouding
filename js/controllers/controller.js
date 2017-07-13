/*global todomvc */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the trackStorage service
 * - exposes the model to the template and provides event handlers
 */

McslApp.controller('McslCtrl', function McslCtrl($scope, $http, $sce, trackStorage) {
	var tracks = $scope.tracks = trackStorage.get();
	var baseUrl = 'http://api.mixcloud.com/';
	//var tracks = $scope.tracks = [];

	$scope.newArtist = '';
	$scope.newTitle = '';
	$scope.mixcloudPlayer = '';
	$scope.coverUrl = 'images/no-mixcloud.jpg';
	$scope.search = '';
	$scope.searchClass = '';
	$scope.userClass = 'displaynone';
	$scope.exportClass = 'displaynone';

	if (tracks.length) {
		$scope.exportClass = '';
	}

	$scope.$watch('tracks', function () {
		trackStorage.put(tracks);
	}, true);

	$scope.addTrack = function () {
		var newArtist = $scope.newArtist.trim(),
			newTitle  = $scope.newTitle.trim();

		if (!newArtist.length || !newTitle.length) {
			return;
		}

		tracks.push({
			artist: newArtist,
			title: newTitle
		});

		$scope.newArtist = '';
		$scope.newTitle = '';
		$scope.exportClass = '';
	};

	$scope.removeTrack = function (track) {
		tracks.splice(tracks.indexOf(track),1);
		if (tracks.length == 0) {
			$scope.exportClass = 'displaynone';
		}
	};

	$scope.performSearch = function () {

		var search = $scope.search,
			search_param, index,
			url;

		$scope.searchClass = '';
		search = search.trimLeft();
		search = search.trimRight();

		if (!search.length) {
			return;
		}

		search = search.replace(/ +/g, ' ');
		search_param = search.replace(' ','-');

		url = baseUrl + 'tag/' + search_param + '/hot/?limit=50';

		$http({method: 'GET', url: url}).
			success(function(data, status) {
				if (typeof data.error == 'object') {
					// error, means the API call didn't return any result.
					// Let's process another search
					search_param = search.replace(' ','+');
					url = baseUrl + 'search/?q=' + search + '&type=cloudcast';

					$http({method: 'GET', url: url}).
						success(function(data, status) {
							// we have result
							if (data.data.length) {
								$scope.retrieveCloudcast(data);
							} else {
								// data is empty list so nothing to display
								$scope.searchClass = 'no_result';
							}
						}).
						error(function(data, status) {
						});
				} else {
					// we have result
					$scope.retrieveCloudcast(data);
				}
			}).
			error(function(data, status) {
			});
	};

	$scope.retrieveCloudcast = function (data) {
		searchModule.setData(data);
		searchModule.selectRandCloudcast();
		$scope.coverUrl = searchModule.getCloudcastCover();
		$scope.userName = searchModule.getUserName();
		$scope.userUrl = searchModule.getUserUrl();
		$scope.userClass = '';
		$http({method: 'GET', url: searchModule.getCloudCastUrl()}).
			success(function(data, status) {
				var htmlIframe = data.html;
				$scope.mixcloudPlayer = $sce.trustAsHtml(htmlIframe);
			}).
			error(function(data, status) {
				// fake data
				var htmlIframe = '<iframe width=\"100%\" height=\"120\" src=\"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fdj-ice%2Fprince-tribute-mix-2016%2F&amp;hide_cover=1&amp;light=1\" frameborder=\"0\"></iframe>';
				$scope.mixcloudPlayer = $sce.trustAsHtml(htmlIframe);
			});
	}

	$scope.exportListOfTracks = function () {
		var a = document.createElement('a'),
			text = '', track;

		for (var i = 0; i < tracks.length; i++) {
			track = tracks[i];
			text = text + track.artist + ' - ' + track.title;
		}

		a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
		a.setAttribute('download', 'filename.txt');
		document.body.appendChild(a);
		alert(a);
		a.click();
		document.body.removeChild(a);
	}
});

var searchModule = (function () {

	var prvData = {},
		prvCurCloudcast = {},
		objRet = {};

	objRet.setData = function (data) {
		prvData = data.data;
	}

	// Module Object API

	objRet.selectRandCloudcast = function () {
		var random = Math.floor(Math.random() * prvData.length);
		prvCurCloudcast = prvData[random];
		prvData.splice(random,1);
	}

	objRet.getCloudcastCover = function () {
		return prvCurCloudcast.pictures.large;
	}

	objRet.getUserName = function () {
		return prvCurCloudcast.user.name;
	}

	objRet.getUserUrl = function () {
		return prvCurCloudcast.user.url;
	}

// 	objRet.getCloudcastIFrame = function () {
// 		var url = prvCurCloudcast.url;
//
// 		url = url.replace('www.','api.');
// 		url = url + 'embed-json/';
// 		// jsonp and use of jQuery ajax call
// 		$.ajax({
// 			type: 'GET',
// 			dataType: 'jsonp',
// 			url: url,
// 			success: function(data){
// 				prvCurCloudcast.embbed_html = data.html;
// 				var indexEnd = prvCurCloudcast.embbed_html.indexOf('</iframe>');
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.substring(0,indexEnd+9);
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.replace('//www.mixcloud.com', 'http://www.mixcloud.com');
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.replace('width=\"300\"','width=\"628\"');
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.replace('height=\"300\"','height=\"180\"');
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.replace('hide_artwork=','hide_artwork=1');
// 				prvCurCloudcast.embbed_html = prvCurCloudcast.embbed_html.replace('hide_tracklist=','hide_tracklist=1');
// 				//alert("returning "+prvCurCloudcast.embbed_html);
// 				//return "bla";
// 				$('.mixcloud-player').html(prvCurCloudcast.embbed_html);
// 				//return prvCurCloudcast.embbed_html;
// 			}
// 		});
// 	}

	objRet.getCloudCastUrl = function () {
		var apiUrl = prvCurCloudcast.url;

		apiUrl = apiUrl.replace('www.','api.');
		apiUrl = apiUrl + 'embed-json';

		// prvCurCloudcast.api_url = url;

		return apiUrl;
	}

	return objRet;
})();
