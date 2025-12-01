define({

    onTestNavigation: function () {
        var homePageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
            "appName": "HomePageMA",
            "moduleName": "HomePageUIModule"
        });
        homePageModule.presentationController.goToNextPage("Hello, World");
    }

});