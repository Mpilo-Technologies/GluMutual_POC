define(["ApplicationManager"], function (applicationManager) {
  //Type your controller code here
  return {
    onNavigate: function () {
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      this.segData = navManager.getCustomInfo("coverAmounts");
    },

    postShow: function () {
      this.setSelectedQuote();
    },

    setSelectedQuote: function () {
      this.view.segCoverList.widgetDataMap = {
        lblTitle: "product",
        lblAmount: "displayAmount",
      };

      this.view.segCoverList.setData(this.segData);
    },
  };
});
