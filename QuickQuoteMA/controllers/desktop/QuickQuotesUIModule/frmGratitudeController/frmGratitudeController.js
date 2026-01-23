define({
  //Type your controller code here
  postShow: function () {
    this.view.btnSecondary.onClick = this.navAnotherPage.bind(
      this,
      "QuickQuoteMA",
      "frmBasicPersonalData",
    );

    this.view.btnPrimary.onClick = () => {
      voltmx.application.openURL("https://glumutual.co.za");
    };
  },
  
  navAnotherPage: function (appName, friendlyName) {
    var applicationManager = require("ApplicationManager");
    var navManager = applicationManager
      .getApplicationManager()
      .getNavigationManager();
    navManager.navigateTo({
      appName: appName,
      friendlyName: friendlyName,
    });
  },
});
