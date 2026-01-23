define({
  //Type your controller code here
  postShow: function () {
    this.view.btnSecondary.onClick = this.navAnotherPage.bind(
      this,
      "QuickQuoteMA",
      "frmBasicPerosalData",
    );

    this.view.btnPrimary.onClick = this.navAnotherPage.bind(
      this,
      "QuickQuoteMA",
      "frmFeedback",
    );
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
