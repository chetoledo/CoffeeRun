(function (window) {
	'use strict';

	var App = window.App || {};

	function DataStore() {
		console.log('running the DataStore function');
		this.data = {};
	}

	DataStore.prototype.add = function (key, val) {
		this.data[key] = val;
	};

	DataStore.prototype.get = function (key) {
		return this.data[key];
	};

	DataStore.prototype.getAll  = function (key) {
		return this.data;
	};

	DataStore.prototype.remove  = function (key) {
		delete this.data[key];
	};


//	function DataStore {
//		constructor() {
//			// console.log('running the Datastore function');
//			this.data = {};
//		}
//		add(key, val) { this.data[key] = val; }
//		get(key)      { return this.data[key]; }
//		getAll()      { return this.data; }
//		remove(key)   { delete this.data[key]; }
//	}


	App.DataStore = DataStore;
	window.App = App;

})(window);
