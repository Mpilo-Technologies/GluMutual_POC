define(['CoverRanges'], function (CoverRanges) {
    return {
        
        //Type your controller code here 
        postShow: function() {    
            var sliderConfig = CoverRanges.sliderConfig();
            this.setupSegment(sliderConfig);
            this.view.btnContinue.onClick = this.btnContinueonClick.bind(this);
        },

        setupSegment: function(sliderConfig) {
            // Define the mapping between JSON and Template Widget IDs
            this.view.segCovers.widgetDataMap = {
                lblTitle: "product",
                sldCover: "sliderData",
                txtAmount: "displayAmount"
            };
        
             const segData = sliderConfig.map(item => {
                return {
                    product: item.product,
                    displayAmount: item.min,
                    sliderData: {
                        minValue: item.min,
                        maxValue: item.max,
                        step: item.step,
                    selectedValue: item.min
                    }
                };
            });
            this.view.segCovers.setData(segData);
        },

        btnContinueonClick: function() {
            var currForm = kony.application.getCurrentForm();
            var segData = currForm.segCovers.data;
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo({
                "appName": "QuickQuoteMA",
                "friendlyName": "QuickQuotesUIModule/frmQuickQuotes"
            }, segData);
        }
    }
 });