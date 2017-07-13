/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
McslApp.factory('trackStorage', function () {
		var STORAGE_ID = 'tracks-angularjs';

		return {
				get: function () {
					return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
				},

				put: function (tracks) {
					localStorage.setItem(STORAGE_ID, JSON.stringify(tracks));
				}
		};
});