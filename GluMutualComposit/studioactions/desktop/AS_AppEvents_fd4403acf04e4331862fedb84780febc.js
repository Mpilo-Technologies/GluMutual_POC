function AS_AppEvents_fd4403acf04e4331862fedb84780febc(eventobject) {
    var self = this;
    var self = this;
    kony.print("Testing JS Load");
    _kony.mvc.initCompositeApp(true);
    var isIOS13 = (/(iPad|iPhone);.*CPU.*OS 13_\d/i).test(navigator.userAgent);
    if (isIOS13) {
        kony.application.setApplicationBehaviors({
            disableForceRepaint: true
        });
    }
    kony.application.setApplicationBehaviors({
        'rtlMirroringInWidgetPropertySetter': true,
        'fullWidgetHierarchy': true
    });
    var moduleName = 'ApplicationManager';
    require([moduleName, ], function (ApplicationManager) {
        applicationManager = ApplicationManager.getApplicationManager();
        document.body.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            alert(kony.i18n.getLocalizedString("i18n.general.rightclickdisabled"));
        });
    });
}