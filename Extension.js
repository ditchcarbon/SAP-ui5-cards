sap.ui.define(["sap/ui/integration/Extension"], function (Extension) {
	"use strict";

	var CustomFormattersExtension = Extension.extend("card.explorer.extension.customFormatters.CustomFormattersExtension");

	CustomFormattersExtension.prototype.init = function () {
		Extension.prototype.init.apply(this, arguments);

		const mapper = {
			"very_low": 0,
			"low": 25,
			"medium": 50,
			"high": 75,
			"very_high": 100,
		}

		const colour_mapper = {
			"very_low": "Good",
			"low": "Good",
			"medium": "Critical",
			"high": "Error",
			"very_high": "Error",
		}
		
		this.setFormatters({
			getNumber: function (value) {
				console.log("test");
				return mapper[value];
			},
			getColour: function (value) {
				return colour_mapper[value];
			},
			getReportIcon: function (value) {
				return value ? "✓" : "✖";
			},
			appendSuffix: function (sDescription) {
				var oParameters = this.getCard().getCombinedParameters();
				return sDescription + ". Available since: " + oParameters.suffix;
			}.bind(this)
		});
	};

	return CustomFormattersExtension;
});
