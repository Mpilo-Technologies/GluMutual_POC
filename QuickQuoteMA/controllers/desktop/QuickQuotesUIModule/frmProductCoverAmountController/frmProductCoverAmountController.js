define(["CoverRanges", "ApplicationManager"], function (
  CoverRanges,
  applicationManager,
) {
  return {
    //Type your controller code here
    postShow: function () {
      var sliderConfig = CoverRanges.sliderConfig();
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      var selectedCovers = navManager.getCustomInfo("selectedCovers");
      var segData = [];
      
      selectedCovers.forEach((selectedCover) => {
        const match = sliderConfig.find((coverId) => coverId.id === selectedCover.id);
        if (match) {
          match.currentValue = selectedCover.displayAmount || 0;
          segData.push(match);
        }
      });
      this.setupSegment(segData);
      this.view.btnContinue.onClick = this.btnContinueonClick.bind(this);
    },

    setupSegment: function (sliderConfig) {
      this.view.segCovers.widgetDataMap = {
        id: "id",
        lblTitle: "product",
        sldCover: "sliderData",
        txtAmount: "displayAmount",
      };
      const segData = sliderConfig.map((item) => ({
        id: item.id,
        product: item.product,
        displayAmount: item.currentValue,
        sliderData: {
          minValue: item.minValue,
          maxValue: item.maxValue,
          selectedValue: (item.currentValue/item.maxValue)*100,
        },
      }));
      this.view.segCovers.setData(segData);
    },

    btnContinueonClick: function () {
      var currForm = kony.application.getCurrentForm();
      var segData = currForm.segCovers.data;
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      navManager.setCustomInfo("selectedCovers", segData);
      navManager.navigateTo({
        appName: "QuickQuoteMA",
        friendlyName: "frmQuickQuotes",
      });
    },
  };
});
