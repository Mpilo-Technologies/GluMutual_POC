define(["CoverRanges", "ApplicationManager"], function (CoverRanges, applicationManager) {
  return {
    //Type your controller code here
    postShow: function () {
      var sliderConfig = CoverRanges.sliderConfig();
      var navManager = applicationManager.getApplicationManager().getNavigationManager();
      var customInfo = navManager.getCustomInfo("selectedCovers");
      var segData = [];

      for(var i=0; i<customInfo.length; i++){
        if(sliderConfig[i].id === customInfo[i].id){
            segData.push(sliderConfig[i]);
        }
      }

      this.setupSegment(segData);
      this.view.btnContinue.onClick = this.btnContinueonClick.bind(this);
    },
        setupSegment: function(sliderConfig) {
            this.view.segCovers.widgetDataMap = {
                lblTitle: "product",
                sldCover: "sliderData",
                txtAmount: "displayAmount"
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
