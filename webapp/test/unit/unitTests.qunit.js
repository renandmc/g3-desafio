/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"g3/G3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});