define(["ApplicationManager"], function (applicationManager) {
  //Type your controller code here
  return {
    onNavigate: function () {
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      this.segData = navManager.getCustomInfo("selectedCovers");
    },

    postShow: function () {
      this.setSelectedQuote();
      this.view.btnCallback.onClick = this.navigation.bind(this,
        "QuickQuoteMA",
        "frmRequestCallback"
      );
      this.view.btnModify.onClick = this.navigation.bind(this,
        "QuickQuoteMA",
        "frmProductCoverAmount"
      );
      this.view.btnBack.onClick = this.navigation.bind(this,
        "HomePageMA",
        "frmDashboard");
    },

    setSelectedQuote: function () {
      this.view.segCoverList.widgetDataMap = {
        lblTitle: "product",
        lblAmount: "displayAmount",
      };

      this.view.segCoverList.setData(this.segData);
    },

    navigation: function (appName, friendlyName) {
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      navManager.navigateTo({
        appName: appName,
        friendlyName: friendlyName,
      });
    },
  };
});
