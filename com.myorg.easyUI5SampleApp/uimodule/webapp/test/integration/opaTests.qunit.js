/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/myorg/easyUI5SampleApp/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
