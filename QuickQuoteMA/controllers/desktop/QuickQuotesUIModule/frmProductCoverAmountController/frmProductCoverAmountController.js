define(["CoverRanges", "ApplicationManager"], function (CoverRanges, applicationManager) {
  return {
    //Type your controller code here
    postShow: function () {
      var sliderConfig = CoverRanges.sliderConfig();
      this.setupSegment(sliderConfig);
      this.view.btnContinue.onClick = this.btnContinueonClick.bind(this);
    },

    setupSegment: function (sliderConfig) {
      this.view.segCovers.widgetDataMap = {
        lblTitle: "product",
        sldCover: "sliderData",
        txtAmount: "displayAmount",
      };

      const segData = sliderConfig.map((item) => ({
        product: item.product,
        displayAmount: item.maxValue,
        sliderData: {
          minValue: item.minValue,
          maxValue: item.maxValue,
          selectedValue: 100
        },
      }));
      this.view.segCovers.setData(segData);
    },

    btnContinueonClick: function () {
      var currForm = kony.application.getCurrentForm();
      var segData = currForm.segCovers.data;
      var navManager = applicationManager.getApplicationManager().getNavigationManager();
      navManager.setCustomInfo("coverAmounts", segData);
      navManager.navigateTo(
        {
          appName: "QuickQuoteMA",
          friendlyName: "frmQuickQuotes",
        }
      );
    },
  };
});
